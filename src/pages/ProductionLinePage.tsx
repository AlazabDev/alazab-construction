import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { productionLines } from "@/data/productionLines";

const ProductionLinePage = () => {
  const { slug } = useParams();
  const line = productionLines.find((item) => item.slug === slug);

  if (!line) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen bg-construction-dark" dir="rtl">
      <PageSEO title={`${line.englishTitle} | العزب`} description={line.description} path={`/production/${line.slug}`} />
      <Header />
      <main className="container py-14">
        <h1 className="mb-2 text-3xl font-bold text-white">{line.title}</h1>
        <p className="mb-8 text-construction-light" dir="ltr">{line.englishTitle}</p>
        <p className="mb-8 max-w-4xl text-construction-light">{line.description}</p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-construction-muted bg-[#181818] text-white">
            <CardHeader><CardTitle>What we deliver</CardTitle></CardHeader>
            <CardContent><ul className="list-inside list-disc space-y-2 text-sm text-construction-light">{line.deliverables.map((i) => <li key={i}>{i}</li>)}</ul></CardContent>
          </Card>
          <Card className="border-construction-muted bg-[#181818] text-white">
            <CardHeader><CardTitle>Typical scope</CardTitle></CardHeader>
            <CardContent><ul className="list-inside list-disc space-y-2 text-sm text-construction-light">{line.scope.map((i) => <li key={i}>{i}</li>)}</ul></CardContent>
          </Card>
          <Card className="border-construction-muted bg-[#181818] text-white">
            <CardHeader><CardTitle>Process</CardTitle></CardHeader>
            <CardContent><ol className="list-inside list-decimal space-y-2 text-sm text-construction-light">{line.process.map((i) => <li key={i}>{i}</li>)}</ol></CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="bg-construction-accent text-black hover:bg-construction-accent/90">
            <Link to="/contact">اطلب معاينة/عرض سعر</Link>
          </Button>
          {line.extraCta && (
            <Button asChild variant="outline" className="border-construction-accent text-construction-accent hover:bg-construction-accent hover:text-black">
              <a href={line.extraCta} target="_blank" rel="noreferrer">الدخول إلى بوابة UberFix</a>
            </Button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductionLinePage;
