import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productionLines } from "@/data/productionLines";

const PremiumServices = () => {
  return (
    <section className="bg-construction-dark py-16">
      <div className="container">
        <h2 className="mb-3 text-center text-3xl font-bold text-white">Lines of Production</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-construction-light">أربع خطوط إنتاج تشغيلية تغطي التنفيذ، التجهيز، الصيانة التعاقدية، والتوريد.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {productionLines.map((line) => {
            const Icon = line.icon;
            return (
              <Card key={line.slug} className="border-construction-muted bg-[#181818] text-white">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-construction-accent text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{line.title}</CardTitle>
                  <p className="text-sm text-construction-light" dir="ltr">{line.englishTitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-construction-light">{line.description}</p>
                  <Button asChild className="bg-construction-accent text-black hover:bg-construction-accent/90">
                    <Link to={`/production/${line.slug}`}>عرض تفاصيل الخط</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
