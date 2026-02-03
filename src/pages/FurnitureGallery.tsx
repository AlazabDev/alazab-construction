import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Grid, LayoutGrid, Search, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories, getAllImages, GalleryImage } from '@/data/galleryData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LazyImage } from '@/components/ui/lazy-image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FurnitureGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const filteredImages = useMemo(() => {
    let images = selectedCategory === 'all' 
      ? getAllImages() 
      : galleryCategories.find(c => c.id === selectedCategory)?.images || [];
    
    if (searchQuery) {
      images = images.filter(img => 
        img.title.includes(searchQuery) || 
        img.description?.includes(searchQuery)
      );
    }
    
    return images;
  }, [selectedCategory, searchQuery]);

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

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-construction-primary to-construction-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">معرض الأثاث الفاخر</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            اكتشف مجموعتنا الحصرية من الأثاث العصري والتصاميم الداخلية الفاخرة
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="sticky top-0 z-40 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="بحث في المعرض..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 text-right"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className="whitespace-nowrap"
              >
                الكل ({getAllImages().length})
              </Button>
              {galleryCategories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="whitespace-nowrap"
                >
                  {cat.nameAr} ({cat.images.length})
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'masonry' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('masonry')}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">لا توجد نتائج مطابقة للبحث</p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
              : 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6'
          }>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`
                  group relative overflow-hidden rounded-xl bg-white shadow-md 
                  hover:shadow-xl transition-all duration-300 cursor-pointer
                  ${viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}
                `}
                onClick={() => setSelectedImage(image)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className={viewMode === 'grid' ? 'aspect-square' : ''}>
                  <LazyImage
                    src={image.src}
                    alt={image.title}
                    className={`
                      w-full object-cover transition-transform duration-500 
                      group-hover:scale-110
                      ${viewMode === 'grid' ? 'h-full' : 'h-auto'}
                    `}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  {image.description && (
                    <p className="text-white/80 text-sm mt-1">{image.description}</p>
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            {selectedImage && (
              <div className="relative max-w-full max-h-full p-8">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <h3 className="text-white font-bold text-xl text-right">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-white/80 text-right mt-1">{selectedImage.description}</p>
                  )}
                  <p className="text-white/60 text-sm text-right mt-2">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Categories Preview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--azab-primary)' }}>
            تصفح حسب الفئة
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                {cat.images[0] && (
                  <img
                    src={cat.images[0].src}
                    alt={cat.nameAr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col items-center justify-center">
                  <h3 className="text-white font-bold text-xl">{cat.nameAr}</h3>
                  <p className="text-white/60 text-sm mt-1">{cat.images.length} صورة</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 text-white text-center"
        style={{ background: 'linear-gradient(135deg, var(--azab-primary) 0%, var(--azab-secondary) 100%)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">هل أعجبك ما رأيت؟</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية وتصميم مخصص يناسب ذوقك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-construction-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              تواصل معنا
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              خدماتنا
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FurnitureGallery;
