import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="bg-black py-16">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">نطاق الخدمة المتكامل</h2>
        <p className="mx-auto mb-8 max-w-3xl text-construction-light">
          نربط بين خطوط الإنتاج الأربعة لتقديم تجربة تنفيذ كاملة من التأسيس والتشطيب حتى الصيانة والتوريد.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="border-construction-accent text-construction-accent hover:bg-construction-accent hover:text-black">
            <Link to="/services">استعراض الخطوط</Link>
          </Button>
          <Button asChild className="bg-construction-accent text-black hover:bg-construction-accent/90">
            <Link to="/systems">الدخول إلى Hub الأنظمة</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
