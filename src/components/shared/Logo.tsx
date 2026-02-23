import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "icon" | "compact";
  linkTo?: string;
  className?: string;
  showText?: boolean;
}

const Logo = ({ variant = "full", linkTo = "/", className = "", showText = false }: LogoProps) => {
  const sizeClass = variant === "icon" ? "h-10" : variant === "compact" ? "h-8" : "h-12";

  const content = (
    <div className="flex items-center gap-2">
      <img src="https://al-azab.co/w.png" alt="Al-Azab" className={`${sizeClass} w-auto object-contain ${className}`} loading="lazy" />
      {showText && <span className="text-sm font-semibold text-white">AL-AZAB</span>}
    </div>
  );

  if (!linkTo) return content;
  return <Link to={linkTo} aria-label="العودة للرئيسية">{content}</Link>;
};

export default Logo;
