import { Link } from "react-router-dom";
import Logo from "@/components/shared/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-construction-muted bg-black py-10">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-construction-light">الموقع الرئيسي لشركة العزب: تسويق خطوط الإنتاج + بوابة توجيه للأنظمة الداخلية.</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">روابط سريعة</h3>
          <ul className="space-y-2 text-sm text-construction-light">
            <li><Link to="/services">خطوط الإنتاج</Link></li>
            <li><Link to="/systems">الأنظمة الداخلية</Link></li>
            <li><Link to="/projects">المشاريع</Link></li>
          </ul>
        </div>
        <div className="text-sm text-construction-light">
          <p>البريد: <a href="mailto:support@al-azab.co" className="text-white" dir="ltr">support@al-azab.co</a></p>
          <p>الهاتف: <a href="tel:+201004006620" className="text-white" dir="ltr">+20 100 400 6620</a></p>
          <p>الموقع: <a href="https://al-azab.co" className="text-white" dir="ltr">https://al-azab.co</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
