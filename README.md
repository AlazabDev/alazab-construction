# Al-Azab Main Website + Routing Hub

المشروع عبارة عن موقع React/Vite يمثل الواجهة التسويقية الرئيسية لشركة العزب، مع Hub للتوجيه إلى الأنظمة الداخلية عبر روابط خارجية فقط.

## Lines of Production

1. **Luxury Finishing (تشطيبات سكني فاخر)**
2. **Brand Identity (تأسيس وتجهيز وحدات تجارية/مؤسسية)**
3. **UberFix (أعمال الصيانة المعمارية + SLA)**
4. **Laban Al-Asfur / laban aleasfur (توريدات خامات البناء)**

## المسارات الأساسية

- `/` الصفحة الرئيسية
- `/services` عرض خطوط الإنتاج
- `/production/luxury-finishing`
- `/production/brand-identity`
- `/production/uberfix`
- `/production/laban-aleasfur`
- `/systems` أو `/hub` بوابة الأنظمة الداخلية
- مسارات تحويل مباشرة: `/erp` `/crm` `/mail` `/n8n`

## Local Development (pnpm)

```bash
pnpm install
pnpm dev
pnpm build
```

## Routing Approach

- الموقع الرئيسي **لا يستضيف** الأنظمة الداخلية.
- يتم الوصول إلى ERP/CRM/HR/Mail/Helpdesk/n8n عبر روابط خارجية مركزية داخل `src/config/links.ts`.
- مسارات التحويل (`/erp` ... إلخ) تستخدم `window.location.replace`.

## Environment Variables

انسخ ملف المثال واملأ القيم:

```bash
cp .env.example .env
```

- `VITE_SITE_CANONICAL` (default: `https://al-azab.co`)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

> لا تضع أي أسرار داخل الكود.

## Brand Tokens

- Background: `#111111`
- Accent: `#f5bf23`
- Font: `Cairo`
- Logo on dark background: `https://al-azab.co/w.png`

