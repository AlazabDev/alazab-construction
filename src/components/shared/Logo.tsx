import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo-alazab.png';

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
            ${variant === 'icon' ? 'h-10 w-auto' : ''}
            ${variant === 'compact' ? 'h-12 w-auto' : ''}
            ${variant === 'full' ? 'h-14 w-auto' : ''}
            object-contain transition-transform duration-300 hover:scale-105
          `}
        />
      </div>

      {/* Text - Only show if showText is true and not icon variant */}
      {showText && variant !== 'icon' && (
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-construction-primary leading-tight">
            شركة العزب
          </h1>
          <p className="text-sm text-gray-600 leading-tight">
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
