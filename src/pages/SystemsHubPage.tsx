import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/seo/PageSEO";
import { LINKS } from "@/config/links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const systems = [
  { key: "ERP", label: "ERP" },
  { key: "CRM", label: "CRM" },
  { key: "HR", label: "HR" },
  { key: "MAIL", label: "Mail" },
  { key: "HELPDESK", label: "Helpdesk" },
  { key: "N8N", label: "n8n" },
] as const;

const SystemsHubPage = () => {
  return (
    <div className="min-h-screen bg-construction-dark" dir="rtl">
      <PageSEO title="Hub الأنظمة الداخلية | العزب" description="روابط وصول مباشرة للأنظمة الداخلية عبر التوجيه الخارجي فقط." path="/systems" />
      <Header />
      <main className="container py-16">
        <h1 className="mb-3 text-3xl font-bold text-white">Internal Systems Hub</h1>
        <p className="mb-8 text-construction-light">الوصول إلى الأنظمة الداخلية يتم عبر روابط خارجية آمنة دون استضافة داخل الموقع الرئيسي.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <Card key={system.key} className="border-construction-muted bg-[#181818] text-white">
              <CardHeader><CardTitle>{system.label}</CardTitle></CardHeader>
              <CardContent>
                <a href={LINKS[system.key]} target="_blank" rel="noreferrer" dir="ltr" className="text-sm text-construction-accent underline">
                  {LINKS[system.key]}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SystemsHubPage;
