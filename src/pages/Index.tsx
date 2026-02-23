import Header from "@/components/Header";
import PremiumServices from "@/components/PremiumServices";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import PageSEO from "@/components/seo/PageSEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-construction-dark" dir="rtl">
      <PageSEO
        title="العزب | الموقع الرئيسي وخطوط الإنتاج"
        description="الموقع الرئيسي لشركة العزب ويعرض خطوط الإنتاج الأربعة: Luxury Finishing، Brand Identity، UberFix، وLaban Al-Asfur."
        path="/"
      />
      <Header />
      <main>
        <section className="border-b border-construction-muted bg-[#111] py-24">
          <div className="container text-center">
            <p className="mb-3 text-sm text-construction-accent">AL-AZAB MAIN WEBSITE</p>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">المقاولات التشغيلية عبر 4 خطوط إنتاج</h1>
            <p className="mx-auto max-w-3xl text-construction-light">منصة تسويقية + Routing Hub للوصول السريع إلى الأنظمة الداخلية وروابط التشغيل.</p>
          </div>
        </section>
        <PremiumServices />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
