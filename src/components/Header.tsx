import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

  const navigationItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'مشاريعنا', href: '/projects' },
    { name: 'معرض الأعمال', href: '/portfolio' },
    { name: 'من نحن', href: '/about' },
    { name: 'الشات بوت', href: '/chatbot' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-construction-muted bg-construction-dark/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm transition ${
                location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to))
                  ? "text-construction-accent"
                  : "text-construction-light hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="bg-construction-accent text-black hover:bg-construction-accent/90">
          <Link to="/contact">اطلب معاينة/عرض سعر</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
