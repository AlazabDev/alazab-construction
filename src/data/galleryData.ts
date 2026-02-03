// Gallery data organized by categories

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  images: GalleryImage[];
}

// Living Room Furniture
const livingRoomImages: GalleryImage[] = [
  { id: 'lr-1', src: '/src/assets/img/beige-sofa-for-modern-living-room-or-air-sofa-or-lago.webp', title: 'أريكة عصرية', category: 'living', description: 'أريكة بيج أنيقة لغرفة المعيشة' },
  { id: 'lr-2', src: '/src/assets/img/beige-fabric-armchair-or-air-armchair-or-lago.webp', title: 'كرسي أنيق', category: 'living', description: 'كرسي قماش بيج مريح' },
  { id: 'lr-3', src: '/src/assets/img/light-wood-coffee-table-for-living-room-or-air-coffee-table-or-lago.webp', title: 'طاولة قهوة', category: 'living', description: 'طاولة خشبية فاتحة' },
  { id: 'lr-4', src: '/src/assets/img/glass-coffee-table-or-pleasure-coffee-table-or-lago.webp', title: 'طاولة زجاجية', category: 'living', description: 'طاولة قهوة زجاجية أنيقة' },
  { id: 'lr-5', src: '/src/assets/img/linear-orange-sofa-with-pouf-or-not-only-white-sofa-or-lago.webp', title: 'أريكة برتقالية', category: 'living', description: 'أريكة خطية مع بوف' },
  { id: 'lr-6', src: '/src/assets/img/living-room-with-modern-rugs-or-pulse-rug-or-lago.webp', title: 'سجاد عصري', category: 'living', description: 'غرفة معيشة بسجاد حديث' },
  { id: 'lr-7', src: '/src/assets/img/living-room-with-designer-tv-units-or-materia-tv-unit-or-lago.webp', title: 'وحدة تلفاز', category: 'living', description: 'وحدة تلفاز مصممة' },
  { id: 'lr-8', src: '/src/assets/img/living-room-with-tv-stand-or-tv-unit-36e8-or-lago.webp', title: 'حامل تلفاز', category: 'living', description: 'حامل تلفاز أنيق' },
  { id: 'lr-9', src: '/src/assets/img/beige-short-pile-rug-or-ammos-rug-or-lago.webp', title: 'سجادة بيج', category: 'living', description: 'سجادة قصيرة الوبر' },
  { id: 'lr-10', src: '/src/assets/img/grey-designer-rugs-or-dive-rug-or-lago.webp', title: 'سجادة رمادية', category: 'living', description: 'سجادة مصممة' },
];

// Storage & Shelving
const storageImages: GalleryImage[] = [
  { id: 'st-1', src: '/src/assets/img/blu-double-sided-bookcase-or-air-bookshelf-or-lago.webp', title: 'مكتبة مزدوجة', category: 'storage', description: 'مكتبة ذات وجهين' },
  { id: 'st-2', src: '/src/assets/img/design-wall-bookshelf-or-lagolinea-bookshelf-or-lago.webp', title: 'رف حائط', category: 'storage', description: 'رف كتب جداري' },
  { id: 'st-3', src: '/src/assets/img/glass-panel-units-or-n.o.w.-sideboard-or-lago.webp', title: 'وحدة زجاجية', category: 'storage', description: 'خزانة جانبية زجاجية' },
  { id: 'st-4', src: '/src/assets/img/glass-suspended-living-room-wall-unit-or-n.o.w.-wall-unit-or-lago.webp', title: 'وحدة معلقة', category: 'storage', description: 'وحدة حائط معلقة' },
  { id: 'st-5', src: '/src/assets/img/modern-equipped-wall-illuminated-display-cases-or-36e8-wall-unit-or-lago.webp', title: 'خزانة عرض', category: 'storage', description: 'خزانة عرض مضيئة' },
  { id: 'st-6', src: '/src/assets/img/equipped-tv-wall-with-illuminated-shelves-or-materia-wall-unit-or-lago.webp', title: 'جدار مجهز', category: 'storage', description: 'جدار تلفاز مع أرفف مضيئة' },
  { id: 'st-7', src: '/src/assets/img/modern-dining-room-furniture-or-36e8-sideboard-or-lago.webp', title: 'بوفيه عصري', category: 'storage', description: 'بوفيه غرفة طعام' },
];

// Bedroom
const bedroomImages: GalleryImage[] = [
  { id: 'br-1', src: '/src/assets/img/round-bed-with-fabric-headboard-or-roundy-fluttua-bed-or-lago.webp', title: 'سرير دائري', category: 'bedroom', description: 'سرير مع رأسية قماش' },
  { id: 'br-2', src: '/src/assets/img/designer-bedroom-wardrobe-or-smart-wardrobe-or-lago.webp', title: 'دولاب ذكي', category: 'bedroom', description: 'خزانة ملابس مصممة' },
  { id: 'br-3', src: '/src/assets/img/grey-bedroom-wardrobe-or-n.o.w.-quick-wardrobe-or-lago.webp', title: 'دولاب رمادي', category: 'bedroom', description: 'خزانة ملابس رمادية' },
  { id: 'br-4', src: '/src/assets/img/black-glass-and-wood-bedroom-dresser-or-air-dresser-or-lago.webp', title: 'تسريحة سوداء', category: 'bedroom', description: 'تسريحة زجاج وخشب' },
  { id: 'br-5', src: '/src/assets/img/black-polished-glass-dresser-or-36e8-glass-chest-of-drawers-or-lago.webp', title: 'كومودينو', category: 'bedroom', description: 'خزانة أدراج زجاجية' },
  { id: 'br-6', src: '/src/assets/img/modern-bedroom-design-or-36e8-dresser-or-lago.webp', title: 'تصميم غرفة نوم', category: 'bedroom', description: 'غرفة نوم عصرية' },
  { id: 'br-7', src: '/src/assets/img/modern-glass-bedside-table-grey-or-36e8-bedside-table-or-lago.webp', title: 'طاولة جانبية', category: 'bedroom', description: 'كومودينو زجاجي رمادي' },
];

// Wardrobes
const wardrobeImages: GalleryImage[] = [
  { id: 'wr-1', src: '/src/assets/img/full-wall-walk-in-wardrobe-or-outfit-walk-in-closet-or-lago.webp', title: 'غرفة ملابس', category: 'wardrobe', description: 'خزانة ملابس بالحائط الكامل' },
  { id: 'wr-2', src: '/src/assets/img/gold-walk-in-wardrobe-with-drawers-or-vista-walk-in-closet-or-lago.webp', title: 'غرفة ملابس ذهبية', category: 'wardrobe', description: 'خزانة مع أدراج' },
  { id: 'wr-3', src: '/src/assets/img/open-walk-in-wardrobe-in-the-middle-of-the-room-or-air-walk-in-closet-or-lago.webp', title: 'خزانة مفتوحة', category: 'wardrobe', description: 'خزانة ملابس وسط الغرفة' },
];

// Home Office
const officeImages: GalleryImage[] = [
  { id: 'of-1', src: '/src/assets/img/bookcase-with-hidden-desk-or-home-office-or-lago.webp', title: 'مكتبة مع مكتب', category: 'office', description: 'مكتبة مع مكتب مخفي' },
  { id: 'of-2', src: '/src/assets/img/floating-bookcase-with-corner-desk-or-home-office-or-lago.webp', title: 'مكتبة معلقة', category: 'office', description: 'مكتبة مع مكتب زاوية' },
  { id: 'of-3', src: '/src/assets/img/home-studio-furniture-or-home-office-or-lago.webp', title: 'استوديو منزلي', category: 'office', description: 'أثاث مكتب منزلي' },
  { id: 'of-4', src: '/src/assets/img/modern-glass-desk-or-livre-desk-or-lago.webp', title: 'مكتب زجاجي', category: 'office', description: 'مكتب زجاجي عصري' },
];

// Dining
const diningImages: GalleryImage[] = [
  { id: 'dn-1', src: '/src/assets/img/1wood-and-glass-round-dining-table-or-air-slim-round-table-or-lago.webp', title: 'طاولة مستديرة', category: 'dining', description: 'طاولة طعام خشب وزجاج' },
  { id: 'dn-2', src: '/src/assets/img/round-table-with-designer-wooden-chairs-or-chapeau-table-or-lago.webp', title: 'طاولة مع كراسي', category: 'dining', description: 'طاولة مستديرة مع كراسي مصممة' },
  { id: 'dn-3', src: '/src/assets/img/design-chair-with-wooden-legs-or-mezz\'aria-chairor-lago.webp', title: 'كرسي خشبي', category: 'dining', description: 'كرسي بأرجل خشبية' },
  { id: 'dn-4', src: '/src/assets/img/leather-upholstered-chair-or-dangla-chair-or-lago.webp', title: 'كرسي جلد', category: 'dining', description: 'كرسي منجد بالجلد' },
  { id: 'dn-5', src: '/src/assets/img/kitchen-island-stool-or-colombina-stool-or-lago.webp', title: 'مقعد مطبخ', category: 'dining', description: 'مقعد جزيرة المطبخ' },
  { id: 'dn-6', src: '/src/assets/img/kitchen-island-stools-or-beat-stool-or-lago.webp', title: 'مقاعد بار', category: 'dining', description: 'مقاعد جزيرة المطبخ' },
  { id: 'dn-7', src: '/src/assets/img/modern-dining-room-lamps-or-chic-lamp-or-lago.webp', title: 'إضاءة طعام', category: 'dining', description: 'مصابيح غرفة الطعام' },
];

// Kitchen
const kitchenImages: GalleryImage[] = [
  { id: 'kt-1', src: '/src/assets/img/large-kitchen-cupboard-or-36e8-kitchen-or-lago.webp', title: 'خزانة مطبخ', category: 'kitchen', description: 'خزانة مطبخ كبيرة' },
  { id: 'kt-2', src: '/src/assets/img/marble-kitchen-with-wooden-peninsula-or-36e8-marble-xglass-kitchen-or-lago.webp', title: 'مطبخ رخام', category: 'kitchen', description: 'مطبخ رخام مع شبه جزيرة' },
  { id: 'kt-3', src: '/src/assets/img/glass-pantry-for-kitchen-or-36e8-kitchen-or-lago.webp', title: 'مخزن زجاجي', category: 'kitchen', description: 'مخزن مطبخ زجاجي' },
];

// Bathroom
const bathroomImages: GalleryImage[] = [
  { id: 'bt-1', src: '/src/assets/img/angular-wooden-basin-or-depth-basin-or-lago.webp', title: 'حوض خشبي', category: 'bathroom', description: 'حوض زاوي خشبي' },
  { id: 'bt-2', src: '/src/assets/img/bathroom-cabinet-with-two-basins-or-elyssa-basin-or-lago.webp', title: 'خزانة حمام', category: 'bathroom', description: 'خزانة مع حوضين' },
];

// Consoles & Mirrors
const consoleImages: GalleryImage[] = [
  { id: 'cn-1', src: '/src/assets/img/console-table-with-mirror-in-wood-and-glass-or-console-36e8-or-lago.webp', title: 'كونسول مع مرآة', category: 'console', description: 'طاولة كونسول خشب وزجاج' },
  { id: 'cn-2', src: '/src/assets/img/designer-entrance-console-table-or-materia-console-or-lago.webp', title: 'كونسول مدخل', category: 'console', description: 'طاولة مدخل مصممة' },
  { id: 'cn-3', src: '/src/assets/img/modern-glass-console-table-framed-mirror-or-fine-console-era-mirror-or-lago.webp', title: 'كونسول زجاجي', category: 'console', description: 'كونسول مع مرآة مؤطرة' },
  { id: 'cn-4', src: '/src/assets/img/modern-mirror-with-console-unit-or-36e8-glass-console-or-lago.webp', title: 'مرآة عصرية', category: 'console', description: 'مرآة مع وحدة كونسول' },
];

// Kids Room
const kidsImages: GalleryImage[] = [
  { id: 'kd-1', src: '/src/assets/img/children\'s-bed-with-overhead-units-or-kidsandyoug-or-lago.webp', title: 'سرير أطفال', category: 'kids', description: 'سرير مع وحدات علوية' },
  { id: 'kd-2', src: '/src/assets/img/children\'s-bedroom-wardrobe-or-kidsandyoug-or-lago.webp', title: 'دولاب أطفال', category: 'kids', description: 'خزانة غرفة أطفال' },
  { id: 'kd-3', src: '/src/assets/img/designer-children\'s-room-units-or-kidsandyoug-or-lago.webp', title: 'وحدات أطفال', category: 'kids', description: 'وحدات غرفة أطفال مصممة' },
  { id: 'kd-4', src: '/src/assets/img/desk-with-bookcase-for-children\'s-bedroom-or-kidsandyoug-or-lago.webp', title: 'مكتب أطفال', category: 'kids', description: 'مكتب مع مكتبة' },
  { id: 'kd-5', src: '/src/assets/img/fun-children\'s-bedroom-bookcase-or-kidsandyoug-or-lago.webp', title: 'مكتبة أطفال', category: 'kids', description: 'مكتبة غرفة أطفال ممتعة' },
];

// Lighting & Decor
const decorImages: GalleryImage[] = [
  { id: 'dc-1', src: '/src/assets/img/design-lamp-marble-xglass-clear-or-glee-lamp-or-lago.webp', title: 'مصباح رخام', category: 'decor', description: 'مصباح تصميم رخام وزجاج' },
  { id: 'dc-2', src: '/src/assets/img/brown-upholstered-armchair-or-mezz\'aria-armchair-or-lago.webp', title: 'كرسي بني', category: 'decor', description: 'كرسي منجد بني' },
];

// TV Units
const tvUnitImages: GalleryImage[] = [
  { id: 'tv-1', src: '/src/assets/img/modern-black-glass-tv-unit-or-36e8-glass-tv-unit-or-lago.webp', title: 'وحدة تلفاز سوداء', category: 'tv', description: 'وحدة تلفاز زجاج أسود' },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'living',
    name: 'Living Room',
    nameAr: 'غرفة المعيشة',
    description: 'أثاث وديكورات غرف المعيشة العصرية',
    images: livingRoomImages
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    nameAr: 'غرفة النوم',
    description: 'تصاميم أنيقة لغرف النوم',
    images: bedroomImages
  },
  {
    id: 'wardrobe',
    name: 'Walk-in Closets',
    nameAr: 'غرف الملابس',
    description: 'خزائن ملابس فاخرة',
    images: wardrobeImages
  },
  {
    id: 'dining',
    name: 'Dining',
    nameAr: 'غرفة الطعام',
    description: 'طاولات وكراسي الطعام',
    images: diningImages
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    nameAr: 'المطبخ',
    description: 'تصاميم مطابخ حديثة',
    images: kitchenImages
  },
  {
    id: 'office',
    name: 'Home Office',
    nameAr: 'المكتب المنزلي',
    description: 'أثاث المكتب المنزلي',
    images: officeImages
  },
  {
    id: 'storage',
    name: 'Storage & Shelving',
    nameAr: 'التخزين والأرفف',
    description: 'حلول تخزين ذكية',
    images: storageImages
  },
  {
    id: 'kids',
    name: 'Kids Room',
    nameAr: 'غرفة الأطفال',
    description: 'أثاث غرف الأطفال',
    images: kidsImages
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    nameAr: 'الحمام',
    description: 'أثاث الحمامات',
    images: bathroomImages
  },
  {
    id: 'console',
    name: 'Consoles & Mirrors',
    nameAr: 'الكونسول والمرايا',
    description: 'طاولات المدخل والمرايا',
    images: consoleImages
  },
  {
    id: 'tv',
    name: 'TV Units',
    nameAr: 'وحدات التلفاز',
    description: 'وحدات شاشات التلفاز',
    images: tvUnitImages
  },
  {
    id: 'decor',
    name: 'Decor & Lighting',
    nameAr: 'الديكور والإضاءة',
    description: 'قطع ديكور وإضاءة',
    images: decorImages
  }
];

export const getAllImages = (): GalleryImage[] => {
  return galleryCategories.flatMap(cat => cat.images);
};

export const getImagesByCategory = (categoryId: string): GalleryImage[] => {
  const category = galleryCategories.find(cat => cat.id === categoryId);
  return category ? category.images : [];
};
