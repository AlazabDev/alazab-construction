import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Grid, 
  LayoutGrid, 
  Search, 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  Download,
  Share2,
  Heart
} from 'lucide-react';
import { 
  allPortfolioImages, 
  portfolioCategories, 
  getImagesByCategory,
  searchImages,
  PortfolioImage 
} from '@/data/portfolioData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Filter images based on category and search
  const filteredImages = useMemo(() => {
    let images = selectedCategory === 'all' 
      ? allPortfolioImages 
      : getImagesByCategory(selectedCategory);
    
    if (searchQuery) {
      const searchResults = searchImages(searchQuery);
      images = images.filter(img => searchResults.some(r => r.id === img.id));
    }
    
    return images;
  }, [selectedCategory, searchQuery]);

  // Pagination for performance
  const [visibleCount, setVisibleCount] = useState(24);
  const visibleImages = useMemo(() => 
    filteredImages.slice(0, visibleCount), 
    [filteredImages, visibleCount]
  );

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + 24, filteredImages.length));
  }, [filteredImages.length]);

  // Lightbox navigation
  const currentImageIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id) 
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImageIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Toggle favorite
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Handle image load
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') navigateImage('next');
      if (e.key === 'ArrowRight') navigateImage('prev');
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Get active categories (with images)
  const activeCategories = portfolioCategories.filter(cat => cat.count > 0 || cat.id === 'all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-construction-primary via-construction-dark to-black text-white text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-construction-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-construction-accent/20 text-construction-accent border-construction-accent/30">
              +{allPortfolioImages.length} مشروع
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-construction-accent to-white bg-clip-text text-transparent">
              معرض الأعمال
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              استكشف مجموعتنا الواسعة من المشاريع المتميزة في البناء والتصميم الداخلي والصيانة
            </p>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { label: 'إجمالي الصور', value: allPortfolioImages.length },
              { label: 'مشاريع تجارية', value: portfolioCategories.find(c => c.id === 'commercial')?.count || 0 },
              { label: 'تصميم داخلي', value: portfolioCategories.find(c => c.id === 'interior')?.count || 0 },
              { label: 'فئات متنوعة', value: activeCategories.length - 1 },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-construction-accent mb-1">
                  {stat.value}+
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {/* Top Row: Search & View Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="بحث في المعرض..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12 pl-10 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-construction-accent transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">
                  {filteredImages.length} صورة
                </span>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                  <Button
                    variant={viewMode === 'masonry' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('masonry')}
                    className="rounded-md"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-md"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className={showFilters ? 'bg-construction-accent text-white border-construction-accent' : ''}
                >
                  <Filter className="w-4 h-4 ml-2" />
                  فلترة
                </Button>
              </div>
            </div>

            {/* Category Filter - Collapsible */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ScrollArea className="w-full">
                    <div className="flex gap-2 pb-2">
                      {activeCategories.map((cat) => (
                        <Button
                          key={cat.id}
                          variant={selectedCategory === cat.id ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setVisibleCount(24);
                          }}
                          className={`whitespace-nowrap rounded-full transition-all ${
                            selectedCategory === cat.id 
                              ? 'bg-construction-accent hover:bg-construction-accent/90 shadow-lg' 
                              : 'hover:border-construction-accent hover:text-construction-accent'
                          }`}
                        >
                          <span className="ml-2">{cat.icon}</span>
                          {cat.nameAr}
                          <Badge variant="secondary" className="mr-2 text-xs">
                            {cat.count}
                          </Badge>
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredImages.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-xl mb-4">لا توجد نتائج مطابقة للبحث</p>
            <Button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              variant="outline"
            >
              إعادة تعيين الفلاتر
            </Button>
          </motion.div>
        ) : (
          <>
            <motion.div 
              className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
                  : 'columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4'
              }
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {visibleImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  className={`
                    group relative overflow-hidden rounded-xl bg-gray-100 
                    cursor-pointer transform transition-all duration-300
                    hover:shadow-2xl hover:z-10
                    ${viewMode === 'masonry' ? 'mb-4 break-inside-avoid' : ''}
                  `}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={viewMode === 'grid' ? 'aspect-square' : ''}>
                    {/* Skeleton Loader */}
                    {!loadedImages.has(image.id) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                    )}
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(image.id)}
                      className={`
                        w-full object-cover transition-all duration-500 
                        group-hover:scale-110 group-hover:brightness-90
                        ${viewMode === 'grid' ? 'h-full' : 'h-auto'}
                        ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}
                      `}
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-sm line-clamp-1">{image.title}</h3>
                    {image.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {image.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <button
                        onClick={(e) => toggleFavorite(image.id, e)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          favorites.has(image.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(image.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleCount < filteredImages.length && (
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Button
                  size="lg"
                  onClick={loadMore}
                  className="bg-construction-accent hover:bg-construction-accent/90 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  تحميل المزيد ({filteredImages.length - visibleCount} متبقي)
                </Button>
              </motion.div>
            )}
          </>
        )}
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[98vw] h-[95vh] p-0 bg-black/98 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm hover:scale-110"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              {selectedImage && (
                <motion.div 
                  key={selectedImage.id}
                  className="relative max-w-full max-h-full p-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* Caption */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-2xl text-right">{selectedImage.title}</h3>
                        {selectedImage.description && (
                          <p className="text-white/70 text-right mt-1">{selectedImage.description}</p>
                        )}
                        {selectedImage.tags && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {selectedImage.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="bg-white/20 text-white border-none">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={(e) => toggleFavorite(selectedImage.id, e)}
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            favorites.has(selectedImage.id) 
                              ? 'bg-red-500 text-white' 
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart className={`w-6 h-6 ${favorites.has(selectedImage.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm text-right mt-3">
                      {currentImageIndex + 1} / {filteredImages.length}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-construction-primary via-construction-dark to-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">هل أعجبك ما رأيت؟</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وتصميم مخصص يناسب احتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-construction-accent hover:bg-construction-accent/90 text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  تواصل معنا
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl">
                  خدماتنا
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
