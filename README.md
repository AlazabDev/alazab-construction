
# Alazab Site – Frappe Theme & Maintenance Web Portal 🚧🏗️

**Alazab Site** هو مشروع واجهة احترافية مصممة خصيصًا لنظام [ERPNext/Frappe](https://frappe.io)، لتكون البوابة الرئيسية لشركة العزب للخدمات المعمارية والتشغيلية.

---

## 🎯 الهدف

إنشاء واجهة مرنة وعصرية تدير:

- 🏢 موقع الشركة الرسمي
- 📑 صفحة الخدمات والمشاريع
- 🛠️ بوابة العملاء لطلبات الصيانة
- 🧰 لوحة تحكم المهندسين والفنيين

---

## ⚙️ الهيكل العام


alazab_site/
├── setup.py ← إعداد التطبيق
├── requirements.txt ← الاعتمادات الإضافية
├── alazab_site/
│ ├── hooks.py ← تكامل Frappe
│ ├── public/ ← ملفات CSS / JS
│ ├── templates/ ← صفحات وثيمات الموقع
│ └── modules.txt


---

## 🧱 أهم الصفحات

- `azab_about.html`     ← من نحن
- `azab_services.html`  ← خدماتنا
- `azab_projects.html`  ← مشاريعنا
- `azab_contact.html`   ← تواصل معنا
- `azab_sidebar.html`   ← القائمة الجانبية الموحدة

---

## 🚀 التثبيت داخل Frappe

```bash
# داخل مجلد bench
bench get-app alazab_site [المسار أو GitHub]
bench --site yoursite.com install-app alazab_site
bench build --force
bench restart
