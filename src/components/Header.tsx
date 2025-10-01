
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { AdvancedSidebar } from './layout/AdvancedSidebar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navigationItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'مشاريعنا', href: '/projects' },
    { name: 'من نحن', href: '/about' },
    { name: 'الشات بوت', href: '/chatbot' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 border-b border-gray-100" role="banner">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Right Side */}
          <div className="flex-shrink-0">
            <Logo variant="full" showText={true} />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" role="navigation" aria-label="التنقل الرئيسي">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-semibold transition-all duration-300 hover:text-construction-accent focus:outline-none focus:ring-2 focus:ring-construction-accent rounded-md px-3 py-2 whitespace-nowrap ${
                  isActive(item.href) 
                    ? 'text-construction-accent' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name === 'الشات بوت' && <MessageSquare className="w-4 h-4 inline ml-1" aria-hidden="true" />}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Login Button - Desktop */}
            <div className="hidden lg:flex">
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  className="border-construction-primary text-construction-primary hover:bg-construction-primary hover:text-white transition-all duration-300 font-semibold px-5"
                >
                  تسجيل الدخول
                </Button>
              </Link>
            </div>

            {/* ERP Link - Desktop */}
            <a
              href="https://erp.alazab.com/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-construction-accent hover:bg-construction-accent/90 text-white rounded-lg transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              نظام ERP
            </a>

            {/* Menu Toggle - Mobile/Tablet */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="lg:hidden border-construction-primary text-construction-primary hover:bg-construction-primary hover:text-white"
                  aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Logo variant="full" showText={true} />
                  </div>
                  
                  <nav className="flex flex-col gap-2 flex-1" role="navigation" aria-label="التنقل المتنقل">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-base font-semibold transition-colors hover:text-construction-accent focus:outline-none focus:ring-2 focus:ring-construction-accent rounded-lg px-4 py-3 ${
                          isActive(item.href) 
                            ? 'text-construction-accent bg-construction-accent/5' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        {item.name === 'الشات بوت' && <MessageSquare className="w-4 h-4 inline ml-1" aria-hidden="true" />}
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="border-t pt-4 space-y-3 mt-auto">
                    <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-construction-primary text-construction-primary hover:bg-construction-primary hover:text-white font-semibold">
                        تسجيل الدخول
                      </Button>
                    </Link>
                    <a
                      href="https://erp.alazab.com/apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-construction-accent hover:bg-construction-accent/90 text-white rounded-lg transition-all duration-300 font-semibold w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                      نظام ERP
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
