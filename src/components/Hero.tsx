
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2370&auto=format&fit=crop')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            نبني <span className="text-construction-accent">مستقبلك</span> بأمان
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            شركة العزب للمقاولات العامة، خبرة أكثر من 20 عامًا في المجال، نقدم خدمات متكاملة في البناء والتشييد بأعلى معايير الجودة
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-construction-accent hover:bg-construction-accent/90 text-white text-base px-6 py-3" asChild>
              <a href="/contact">تواصل معنا</a>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-base px-6 py-3" asChild>
              <a href="/projects">عرض المشاريع</a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-construction-primary/20 border-construction-accent text-construction-accent hover:bg-construction-accent hover:text-white text-base px-6 py-3"
              asChild
            >
              <a href="https://erp.alazab.com/apps" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                نظام ERP الإداري
              </a>
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-construction-accent">+300</div>
              <div className="text-sm md:text-base text-white">مشروع منجز</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-construction-accent">20+</div>
              <div className="text-sm md:text-base text-white">سنوات خبرة</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-construction-accent">150+</div>
              <div className="text-sm md:text-base text-white">عميل سعيد</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-construction-accent">50+</div>
              <div className="text-sm md:text-base text-white">عامل محترف</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Down Arrow */}
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
