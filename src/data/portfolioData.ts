// Portfolio Gallery Data - All project images organized by categories

export interface PortfolioImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description?: string;
  tags?: string[];
}

export interface PortfolioCategory {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  icon: string;
  count: number;
}

// Helper function to generate image entries from file patterns
const generateImagesFromFolder = (
  folder: string,
  prefix: string,
  category: string,
  titleAr: string,
  files: string[]
): PortfolioImage[] => {
  return files.map((file, index) => ({
    id: `${prefix}-${index + 1}`,
    src: `${folder}/${file}`,
    title: `${titleAr} ${index + 1}`,
    category,
    description: titleAr,
  }));
};

// Projects folder images
const projectsImages: PortfolioImage[] = [
  // Abuauf Project Series
  ...Array.from({ length: 49 }, (_, i) => {
    const num = i + 1;
    const filename = num === 5 ? null : `abuauf_${num}.jpg`;
    return filename ? {
      id: `abuauf-${num}`,
      src: `/src/assets/projects/${filename}`,
      title: `مشروع أبو عوف ${num}`,
      category: 'commercial',
      description: 'مشروع تجاري متميز',
      tags: ['تجاري', 'تصميم داخلي']
    } : null;
  }).filter(Boolean) as PortfolioImage[],
  
  // Mansourah Project Series
  ...Array.from({ length: 36 }, (_, i) => ({
    id: `mansourah-${i + 1}`,
    src: `/src/assets/projects/mansourh-4-${String(i + 1).padStart(3, '0')}.jpeg`,
    title: `مشروع المنصورة ${i + 1}`,
    category: 'residential',
    description: 'مشروع سكني فاخر',
    tags: ['سكني', 'تشطيبات']
  })),
  
  // Maintenance Projects
  ...Array.from({ length: 14 }, (_, i) => ({
    id: `maintenance-${i + 33}`,
    src: `/src/assets/projects/maintenance${i + 33}.jpg`,
    title: `أعمال صيانة ${i + 1}`,
    category: 'maintenance',
    description: 'أعمال صيانة وترميم',
    tags: ['صيانة', 'ترميم']
  })),
  
  // Gallery Images
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `gallery-${i + 1}`,
    src: `/src/assets/projects/gallery-${i + 1}.jpg`,
    title: `معرض الأعمال ${i + 1}`,
    category: 'interior',
    description: 'تصميم داخلي',
    tags: ['تصميم داخلي']
  })),
  
  // Slides
  { id: 'slide-1', src: '/src/assets/projects/slide-1.jpg', title: 'عرض المشروع 1', category: 'featured', description: 'مشروع مميز', tags: ['مميز'] },
  { id: 'slide-2', src: '/src/assets/projects/slide-2.jpg', title: 'عرض المشروع 2', category: 'featured', description: 'مشروع مميز', tags: ['مميز'] },
  { id: 'slide-3', src: '/src/assets/projects/slide-3.jpg', title: 'عرض المشروع 3', category: 'featured', description: 'مشروع مميز', tags: ['مميز'] },
  
  // Construction
  { id: 'construction-1', src: '/src/assets/projects/construction-1.jpg', title: 'بناء 1', category: 'construction', description: 'أعمال بناء', tags: ['بناء'] },
  { id: 'construction-2', src: '/src/assets/projects/construction-2.jpg', title: 'بناء 2', category: 'construction', description: 'أعمال بناء', tags: ['بناء'] },
  { id: 'construction-3', src: '/src/assets/projects/construction-3.jpg', title: 'بناء 3', category: 'construction', description: 'أعمال بناء', tags: ['بناء'] },
  
  // Design
  { id: 'design-1', src: '/src/assets/projects/design-1.jpg', title: 'تصميم 1', category: 'interior', description: 'تصميم داخلي', tags: ['تصميم'] },
  { id: 'design-2', src: '/src/assets/projects/design-2.jpg', title: 'تصميم 2', category: 'interior', description: 'تصميم داخلي', tags: ['تصميم'] },
  { id: 'design-3', src: '/src/assets/projects/design-3.jpg', title: 'تصميم 3', category: 'interior', description: 'تصميم داخلي', tags: ['تصميم'] },
  
  // Remodeling
  { id: 'remodeling-1', src: '/src/assets/projects/remodeling-1.jpg', title: 'تجديد 1', category: 'renovation', description: 'أعمال تجديد', tags: ['تجديد'] },
  { id: 'remodeling-2', src: '/src/assets/projects/remodeling-2.jpg', title: 'تجديد 2', category: 'renovation', description: 'أعمال تجديد', tags: ['تجديد'] },
  { id: 'remodeling-3', src: '/src/assets/projects/remodeling-3.jpg', title: 'تجديد 3', category: 'renovation', description: 'أعمال تجديد', tags: ['تجديد'] },
  
  // Repairs
  { id: 'repairs-1', src: '/src/assets/projects/repairs-1.jpg', title: 'إصلاحات 1', category: 'maintenance', description: 'أعمال إصلاح', tags: ['إصلاح'] },
  { id: 'repairs-2', src: '/src/assets/projects/repairs-2.jpg', title: 'إصلاحات 2', category: 'maintenance', description: 'أعمال إصلاح', tags: ['إصلاح'] },
  { id: 'repairs-3', src: '/src/assets/projects/repairs-3.jpg', title: 'إصلاحات 3', category: 'maintenance', description: 'أعمال إصلاح', tags: ['إصلاح'] },
  
  // Special Projects
  { id: 'cover-1', src: '/src/assets/projects/COVER1.jpg', title: 'غلاف المشروع', category: 'featured', description: 'مشروع مميز', tags: ['مميز'] },
  { id: 'mumbai', src: '/src/assets/projects/Cover_Mumbai-1.jpg', title: 'مشروع مومباي', category: 'international', description: 'مشروع دولي', tags: ['دولي'] },
  { id: 'gros', src: '/src/assets/projects/Gros-800x1000.jpg', title: 'مشروع جروس', category: 'commercial', description: 'مشروع تجاري', tags: ['تجاري'] },
  { id: 'architecture', src: '/src/assets/projects/Architecture.jpg', title: 'تصميم معماري', category: 'architecture', description: 'أعمال معمارية', tags: ['معماري'] },
  { id: 'engineering', src: '/src/assets/projects/Engineering.jpg', title: 'هندسة', category: 'engineering', description: 'أعمال هندسية', tags: ['هندسة'] },
  { id: 'interior-design', src: '/src/assets/projects/Interior-Design.jpg', title: 'تصميم داخلي', category: 'interior', description: 'تصميم داخلي فاخر', tags: ['تصميم داخلي'] },
  { id: 'scaled-1', src: '/src/assets/projects/1-scaled.jpg', title: 'مشروع متميز 1', category: 'featured', description: 'مشروع مميز', tags: ['مميز'] },
  { id: 'scaled-999', src: '/src/assets/projects/999-scaled.jpg', title: 'مشروع متميز 2', category: 'featured', description: 'مشروع مميز', tags: ['مميز'] },
  { id: 'about-18', src: '/src/assets/projects/about-18.webp', title: 'من أعمالنا', category: 'interior', description: 'تصميم داخلي', tags: ['تصميم داخلي'] },
  { id: 'project-222', src: '/src/assets/projects/222.jpg', title: 'مشروع 222', category: 'residential', description: 'مشروع سكني', tags: ['سكني'] },
];

// Interior Design images from img folder
const interiorDesignImages: PortfolioImage[] = Array.from({ length: 44 }, (_, i) => {
  const num = i + 42;
  return {
    id: `interior-design-${num}`,
    src: `/src/assets/img/Interior-design0${num}.jpg`,
    title: `تصميم داخلي ${i + 1}`,
    category: 'interior',
    description: 'تصميم داخلي فاخر',
    tags: ['تصميم داخلي', 'فاخر']
  };
});

// Metal/Industrial images
const metalImages: PortfolioImage[] = [
  { id: 'metal-1057', src: '/src/assets/img/metal_aluminum_01057.jpg', title: 'أعمال معدنية 1', category: 'industrial', description: 'أعمال ألمنيوم', tags: ['معدني', 'ألمنيوم'] },
  { id: 'metal-1058', src: '/src/assets/img/metal_01058.jpg', title: 'أعمال معدنية 2', category: 'industrial', description: 'أعمال معدنية', tags: ['معدني'] },
  { id: 'metal-1059', src: '/src/assets/img/metal_01059.jpg', title: 'أعمال معدنية 3', category: 'industrial', description: 'أعمال معدنية', tags: ['معدني'] },
  { id: 'metal-1060', src: '/src/assets/img/metal_01060.jpg', title: 'أعمال معدنية 4', category: 'industrial', description: 'أعمال معدنية', tags: ['معدني'] },
  { id: 'metal-1061', src: '/src/assets/img/metal_01061.jpg', title: 'أعمال معدنية 5', category: 'industrial', description: 'أعمال معدنية', tags: ['معدني'] },
  { id: 'metal-1062', src: '/src/assets/img/metal_01062.jpg', title: 'أعمال معدنية 6', category: 'industrial', description: 'أعمال معدنية', tags: ['معدني'] },
];

// ML Series images
const mlImages: PortfolioImage[] = [
  { id: 'ml-3335', src: '/src/assets/img/ml-01_03335.jpg', title: 'تصميم عصري 1', category: 'modern', description: 'تصميم عصري', tags: ['عصري'] },
  { id: 'ml-3336', src: '/src/assets/img/ml-01_white_03336.jpg', title: 'تصميم أبيض', category: 'modern', description: 'تصميم عصري أبيض', tags: ['عصري', 'أبيض'] },
  { id: 'ml-3337', src: '/src/assets/img/ml-01_gray_03337.jpg', title: 'تصميم رمادي', category: 'modern', description: 'تصميم عصري رمادي', tags: ['عصري', 'رمادي'] },
  { id: 'ml-3339', src: '/src/assets/img/ml-01_03339.jpg', title: 'تصميم عصري 2', category: 'modern', description: 'تصميم عصري', tags: ['عصري'] },
  { id: 'ml-3340', src: '/src/assets/img/ml-01_03340.jpg', title: 'تصميم عصري 3', category: 'modern', description: 'تصميم عصري', tags: ['عصري'] },
  { id: 'ml-3341', src: '/src/assets/img/ml-01_03341.jpg', title: 'تصميم عصري 4', category: 'modern', description: 'تصميم عصري', tags: ['عصري'] },
  { id: 'ml-3342', src: '/src/assets/img/ml-01_03342.jpg', title: 'تصميم عصري 5', category: 'modern', description: 'تصميم عصري', tags: ['عصري'] },
  { id: 'ml-3343', src: '/src/assets/img/ml-01_03343.jpg', title: 'تصميم عصري 6', category: 'modern', description: 'تصميم عصري', tags: ['عصري'] },
];

// Fireplaces from coll-hote folder (selected high-quality images)
const fireplaceImages: PortfolioImage[] = [
  { id: 'fp-pillar', src: '/src/assets/coll-hote/Pillar_2-1-scaled-160x0-c-default.jpg', title: 'مدفأة عمودية', category: 'fireplace', description: 'مدفأة فاخرة', tags: ['مدفأة', 'فاخر'] },
  { id: 'fp-cloudy', src: '/src/assets/coll-hote/Planika_Cloudy_1-scaled-160x0-c-default.jpg', title: 'مدفأة سحابية', category: 'fireplace', description: 'تصميم سحابي', tags: ['مدفأة'] },
  { id: 'fp-square', src: '/src/assets/coll-hote/Planika_Square_High-scaled-160x0-c-default.jpg', title: 'مدفأة مربعة', category: 'fireplace', description: 'تصميم مربع', tags: ['مدفأة'] },
  { id: 'fp-retro', src: '/src/assets/coll-hote/Retro_1000-web-e1725873272655-160x0-c-default.jpg', title: 'مدفأة ريترو', category: 'fireplace', description: 'تصميم كلاسيكي', tags: ['مدفأة', 'كلاسيك'] },
  { id: 'fp-ufo', src: '/src/assets/coll-hote/UFO_FLA4_Freestanding-scaled-160x0-c-default.jpg', title: 'مدفأة UFO', category: 'fireplace', description: 'تصميم مستقبلي', tags: ['مدفأة', 'عصري'] },
  { id: 'fp-vertical', src: '/src/assets/coll-hote/Vertical_Cool_Flame_500-1-scaled-160x0-c-default.jpg', title: 'مدفأة عمودية', category: 'fireplace', description: 'لهب بارد', tags: ['مدفأة'] },
  { id: 'fp-zoia-daze', src: '/src/assets/coll-hote/Zoia_Daze-1-160x0-c-default.jpg', title: 'Zoia Daze', category: 'fireplace', description: 'تصميم Zoia', tags: ['مدفأة'] },
  { id: 'fp-zoia-kreta', src: '/src/assets/coll-hote/Zoia_Kreta-160x0-c-default.jpg', title: 'Zoia Kreta', category: 'fireplace', description: 'تصميم Zoia', tags: ['مدفأة'] },
];

// Categories
export const portfolioCategories: PortfolioCategory[] = [
  { id: 'all', name: 'All', nameAr: 'الكل', description: 'جميع الأعمال', icon: '🏗️', count: 0 },
  { id: 'featured', name: 'Featured', nameAr: 'مميز', description: 'المشاريع المميزة', icon: '⭐', count: 0 },
  { id: 'commercial', name: 'Commercial', nameAr: 'تجاري', description: 'المشاريع التجارية', icon: '🏢', count: 0 },
  { id: 'residential', name: 'Residential', nameAr: 'سكني', description: 'المشاريع السكنية', icon: '🏠', count: 0 },
  { id: 'interior', name: 'Interior Design', nameAr: 'تصميم داخلي', description: 'التصميم الداخلي', icon: '🎨', count: 0 },
  { id: 'construction', name: 'Construction', nameAr: 'بناء', description: 'أعمال البناء', icon: '🔨', count: 0 },
  { id: 'renovation', name: 'Renovation', nameAr: 'تجديد', description: 'أعمال التجديد', icon: '🔧', count: 0 },
  { id: 'maintenance', name: 'Maintenance', nameAr: 'صيانة', description: 'أعمال الصيانة', icon: '🛠️', count: 0 },
  { id: 'architecture', name: 'Architecture', nameAr: 'معماري', description: 'التصميم المعماري', icon: '📐', count: 0 },
  { id: 'engineering', name: 'Engineering', nameAr: 'هندسة', description: 'الأعمال الهندسية', icon: '⚙️', count: 0 },
  { id: 'modern', name: 'Modern', nameAr: 'عصري', description: 'التصاميم العصرية', icon: '✨', count: 0 },
  { id: 'industrial', name: 'Industrial', nameAr: 'صناعي', description: 'الأعمال الصناعية', icon: '🏭', count: 0 },
  { id: 'fireplace', name: 'Fireplaces', nameAr: 'مدافئ', description: 'تصاميم المدافئ', icon: '🔥', count: 0 },
  { id: 'international', name: 'International', nameAr: 'دولي', description: 'المشاريع الدولية', icon: '🌍', count: 0 },
];

// All portfolio images combined
export const allPortfolioImages: PortfolioImage[] = [
  ...projectsImages,
  ...interiorDesignImages,
  ...metalImages,
  ...mlImages,
  ...fireplaceImages,
];

// Update category counts
portfolioCategories.forEach(cat => {
  if (cat.id === 'all') {
    cat.count = allPortfolioImages.length;
  } else {
    cat.count = allPortfolioImages.filter(img => img.category === cat.id).length;
  }
});

// Export helper functions
export const getAllPortfolioImages = (): PortfolioImage[] => allPortfolioImages;

export const getImagesByCategory = (categoryId: string): PortfolioImage[] => {
  if (categoryId === 'all') return allPortfolioImages;
  return allPortfolioImages.filter(img => img.category === categoryId);
};

export const searchImages = (query: string): PortfolioImage[] => {
  const lowerQuery = query.toLowerCase();
  return allPortfolioImages.filter(img => 
    img.title.toLowerCase().includes(lowerQuery) ||
    img.description?.toLowerCase().includes(lowerQuery) ||
    img.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getCategoriesWithImages = (): PortfolioCategory[] => {
  return portfolioCategories.filter(cat => cat.count > 0 || cat.id === 'all');
};
