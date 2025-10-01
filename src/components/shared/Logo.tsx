import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo-alazab-animated.gif';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  linkTo?: string;
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  linkTo = '/', 
  className = '',
  showText = true 
}) => {
  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <div className="relative">
        <img 
          src={logoImage} 
          alt="شركة العزب للمقاولات المتكاملة" 
          className={`
            ${variant === 'icon' ? 'h-13 w-auto' : ''}
            ${variant === 'compact' ? 'h-16 w-auto' : ''}
            ${variant === 'full' ? 'h-18 w-auto' : ''}
            object-contain transition-transform duration-300 hover:scale-105
          `}
        />
      </div>

      {/* Text - Only show if showText is true and not icon variant */}
      {showText && variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-construction-primary to-construction-accent bg-clip-text text-transparent leading-tight mb-1">
            شركة العزب
          </h1>
          <p className="text-xs md:text-sm font-medium text-construction-dark/70 leading-tight tracking-wide">
            للمقاولات المتكاملة
          </p>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link 
        to={linkTo}
        className="focus:outline-none focus:ring-2 focus:ring-construction-accent rounded-lg p-2 transition-all duration-300 hover:bg-construction-light/10"
        aria-label="العودة للصفحة الرئيسية - شركة العزب للمقاولات المتكاملة"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
