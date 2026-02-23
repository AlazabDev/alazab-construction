import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumServices from "@/components/PremiumServices";
import PageSEO from "@/components/seo/PageSEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-construction-dark" dir="rtl">
      <PageSEO
        title="خطوط الإنتاج | العزب"
        description="تعرف على خطوط الإنتاج الأربعة في العزب: Luxury Finishing، Brand Identity، UberFix، وLaban Al-Asfur."
        path="/services"
      />
      <Header />
      <main className="py-12">
        <div className="container mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">خطوط الإنتاج</h1>
          <p className="text-construction-light">خدمات تشغيلية مصممة للشركات والمطورين والعملاء السكنيين.</p>
        </div>
        <PremiumServices />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
