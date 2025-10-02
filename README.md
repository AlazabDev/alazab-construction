# Al-Azab Construction Management System

نظام إدارة شامل لشركة العزب للمقاولات المتكاملة

## نظرة عامة

تطبيق Frappe متكامل لإدارة:
- المشاريع الإنشائية
- طلبات الصيانة
- الفواتير والمدفوعات
- إدارة العملاء والموظفين
- تتبع المواعيد والمهام

## بنية المشروع (البنية الثلاثية لـ Frappe)

```
alazab-construction/                    # المستوى الأول: المجلد الرئيسي
├── alazab_construction/                # المستوى الثاني: مجلد التطبيق (Python Package)
│   ├── __init__.py                     # معلومات الإصدار
│   ├── hooks.py                        # إعدادات وخطافات Frappe
│   ├── modules.txt                     # قائمة الموديولات
│   ├── config/                         # المستوى الثالث: إعدادات إضافية
│   │   └── docs.py
│   ├── public/                         # المستوى الثالث: الملفات الثابتة
│   │   ├── css/
│   │   │   └── azab_theme.css
│   │   └── js/
│   │       ├── azab_about.js
│   │       ├── azab_contact.js
│   │       ├── azab_projects.js
│   │       └── azab_services.js
│   ├── templates/                      # المستوى الثالث: قوالب HTML
│   │   ├── includes/
│   │   │   └── azab_sidebar.html
│   │   └── pages/
│   │       ├── azab_about.html
│   │       ├── azab_contact.html
│   │       ├── azab_projects.html
│   │       └── azab_services.html
│   └── www/                            # المستوى الثالث: صفحات الويب العامة
│       └── __init__.py
├── setup.py                            # ملف تثبيت Python
├── requirements.txt                    # متطلبات Python
├── MANIFEST.in                         # ملفات التضمين
└── README.md                           # هذا الملف
```

### شرح البنية الثلاثية:

1. **المستوى الأول** (`alazab-construction/`):
   - المجلد الرئيسي للمشروع
   - يحتوي على ملفات الإعداد والتثبيت
   - استخدام hyphen (-) في الاسم

2. **المستوى الثاني** (`alazab_construction/`):
   - مجلد التطبيق Python Package
   - يحتوي على كود التطبيق الرئيسي
   - استخدام underscore (_) في الاسم

3. **المستوى الثالث** (الموديولات والمكونات):
   - `config/`: إعدادات إضافية
   - `public/`: ملفات CSS وJS والأصول الثابتة
   - `templates/`: قوالب Jinja2
   - `www/`: صفحات الويب العامة

## المتطلبات

- Frappe Framework >= 14.0.0
- Python >= 3.10
- Node.js >= 18
- MariaDB/PostgreSQL

## خطوات التثبيت على Frappe Bench

### 1. إنشاء Bench جديد (إذا لم يكن موجودًا)

```bash
bench init frappe-bench --frappe-branch version-14
cd frappe-bench
```

### 2. الحصول على التطبيق

```bash
# من GitHub
bench get-app https://github.com/YOUR_USERNAME/alazab-construction.git

# أو من مجلد محلي
bench get-app /path/to/alazab-construction
```

### 3. إنشاء موقع جديد

```bash
bench new-site alazab.local
bench --site alazab.local use
```

### 4. تثبيت التطبيق على الموقع

```bash
bench --site alazab.local install-app alazab_construction
```

### 5. بناء الـ Assets

```bash
bench build --app alazab_construction
```

### 6. بدء التشغيل

```bash
bench start
```

### 7. الوصول للنظام

افتح المتصفح على: `http://alazab.local:8000`

**بيانات الدخول:**
- Username: `Administrator`
- Password: [كلمة المرور المُدخلة عند إنشاء الموقع]

## الأوامر المفيدة

### تحديث التطبيق

```bash
cd apps/alazab_construction
git pull
cd ../..
bench --site alazab.local migrate
bench build --app alazab_construction
bench restart
```

### مسح الـ Cache

```bash
bench --site alazab.local clear-cache
bench --site alazab.local clear-website-cache
```

### تفعيل وضع التطوير

```bash
bench --site alazab.local set-config developer_mode 1
```

### إلغاء تثبيت التطبيق

```bash
bench --site alazab.local uninstall-app alazab_construction
```

### إعادة بناء الـ Assets

```bash
bench build --app alazab_construction --force
```

## إعداد الإنتاج (Production)

```bash
# إعداد Nginx و Supervisor
sudo bench setup production [your-frappe-user]

# تفعيل SSL
sudo bench setup lets-encrypt alazab.local
```

## المسارات والروابط

- **Assets**: `/assets/alazab_construction/`
- **CSS**: `/assets/alazab_construction/css/azab_theme.css`
- **JS**: `/assets/alazab_construction/js/*.js`
- **Templates**: يتم الوصول إليها عبر Jinja في Frappe
- **Web Pages**: `/alazab_construction/www/`

## هيكل الملفات والوظائف

### ملفات الإعداد
- `setup.py`: إعدادات تثبيت Python
- `requirements.txt`: متطلبات Python
- `MANIFEST.in`: تحديد الملفات المُضمنة في التوزيع

### ملفات التطبيق
- `__init__.py`: رقم الإصدار
- `hooks.py`: إعدادات Frappe والخطافات
- `modules.txt`: قائمة الموديولات المتاحة

### المجلدات الرئيسية
- `config/`: إعدادات إضافية للتطبيق
- `public/`: ملفات CSS وJS والأصول الثابتة
- `templates/`: قوالب Jinja2 للصفحات
- `www/`: صفحات ويب عامة يمكن الوصول إليها مباشرة

## ملاحظات مهمة

1. **أسماء المجلدات**:
   - المجلد الرئيسي: `alazab-construction` (بـ hyphen)
   - مجلد التطبيق: `alazab_construction` (بـ underscore)

2. **اسم التطبيق في الأوامر**:
   - استخدم `alazab_construction` (بـ underscore)

3. **البنية الثلاثية**:
   - المستوى الأول: مجلد المشروع
   - المستوى الثاني: مجلد التطبيق Python
   - المستوى الثالث: الموديولات والمكونات

4. **الملفات الثابتة**:
   - يتم بناؤها في مجلد `assets/`
   - متاحة على `/assets/alazab_construction/`

## التطوير

### إضافة صفحة ويب جديدة

```bash
bench --site alazab.local add-web-page "Page Name" --module "Module Name"
```

### إضافة DocType جديد

```bash
bench --site alazab.local add-doctype "DocType Name" --module "Module Name"
```

### تشغيل الاختبارات

```bash
bench --site alazab.local run-tests --app alazab_construction
```

## الترخيص

MIT License

## معلومات الاتصال

**شركة العزب للمقاولات المتكاملة**
- الموقع: https://al-azab.co
- البريد الإلكتروني: info@al-azab.co

## الدعم الفني

للمساعدة والاستفسارات:
- Email: info@al-azab.co
- [Frappe Forum](https://discuss.frappe.io/)
- [Frappe Documentation](https://frappeframework.com/docs)

---

تم التطوير باستخدام ❤️ من قبل فريق العزب للمقاولات
