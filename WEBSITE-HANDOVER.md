# ZINOIT B2B WEBSITE — COMPLETE HANDOVER DOCUMENT

**Prepared:** September 2026  
**Project:** Zinoit B2B Demand Generation Website  
**Version:** 1.0 (Production)

---

## TABLE OF CONTENTS

1. [Website Overview](#1-website-overview)
2. [Complete Architecture](#2-complete-architecture)
3. [GitHub Details](#3-github-details)
4. [Vercel Configuration](#4-vercel-configuration)
5. [Domain & DNS](#5-domain--dns)
6. [Environment Variables](#6-environment-variables)
7. [Website Structure](#7-website-structure)
8. [Project File Structure](#8-project-file-structure)
9. [Content Management](#9-content-management)
10. [Forms & Email](#10-forms--email)
11. [Third-Party Services & Integrations](#11-third-party-services--integrations)
12. [SEO Configuration](#12-seo-configuration)
13. [Images & Assets](#13-images--assets)
14. [Website Administration](#14-website-administration)
15. [Local Development](#15-local-development)
16. [Dependencies](#16-dependencies)
17. [Security](#17-security)
18. [Backup & Disaster Recovery](#18-backup--disaster-recovery)
19. [Accounts You Must Keep Access To](#19-accounts-you-must-keep-access-to)
20. [Costs & Subscriptions](#20-costs--subscriptions)
21. [Pending Items](#21-pending-items)
22. [Final Health Check](#22-final-health-check)
23. [Quick Reference](#23-quick-reference)

---

## 1. WEBSITE OVERVIEW

| Field | Value |
|---|---|
| **Company** | Zinoit LLC |
| **Production URL** | https://zinoit.com |
| **Vercel Preview URL** | https://zinoit-b2b.vercel.app |
| **Purpose** | B2B demand generation and marketing agency website |
| **Framework** | Next.js 14.2.5 (App Router) |
| **Language** | TypeScript / TSX |
| **Styling** | Tailwind CSS 3.4.1 |
| **CMS** | None — all content is hard-coded in source files |
| **Hosting** | Vercel (Free/Hobby tier) |
| **Domain Provider** | GoDaddy |
| **DNS** | GoDaddy (pointing to Vercel) |
| **Source Code** | GitHub — github.com/abhisingh100631/zinoit-b2b |
| **Form Service** | Web3Forms |

### Main Functionality

- Marketing website for Zinoit LLC's B2B demand generation services
- Services showcased: Lead Generation, Appointment Setting, Demand Generation, ABM, SDR as a Service, Data Solutions
- Industries served: SaaS & Technology, Financial Services, Healthcare & Life Sciences, Professional Services, Cybersecurity, Manufacturing & Industrial
- 8 representative campaign case study pages
- Contact form and Book a Strategy Call form — both submit to info@zinoit.com via Web3Forms
- Privacy Policy and Terms of Use legal pages
- Auto-generated sitemap.xml and robots.txt

### Important: Separate Website

This website (zinoit.com) is **completely separate** from the IT staffing website (zinoit-tech.com). They are different businesses, different codebases, different hosting. Do NOT mix content between them.

---

## 2. COMPLETE ARCHITECTURE

### How Everything Connects

```
You (developer)
     │
     │  git push
     ▼
GitHub Repository
(abhisingh100631/zinoit-b2b)
     │
     │  Auto-deploy webhook (on every push to main)
     ▼
Vercel
(builds Next.js app, serves globally via CDN)
     │
     │  DNS A record → 76.76.21.21
     │  DNS CNAME www → cname.vercel-dns.com
     ▼
GoDaddy DNS
(zinoit.com nameservers)
     │
     ▼
User visits https://zinoit.com
     │
     │  Contact/Book-Call form submit
     ▼
Web3Forms API (web3forms.com)
     │
     ▼
info@zinoit.com (your Gmail)
```

### Role of Each Service

| Service | Role |
|---|---|
| **GitHub** | Stores all source code. Every push to `main` triggers automatic Vercel deployment. |
| **Vercel** | Builds and hosts the Next.js application. Provides SSL, CDN, and preview deployments. |
| **GoDaddy** | Registered and manages the zinoit.com domain. DNS records point the domain to Vercel. |
| **Web3Forms** | Receives contact form submissions and forwards them to info@zinoit.com. No backend server required. |
| **Google Fonts** | Loads "Plus Jakarta Sans" (display headings) and "Inter" (body text) at runtime. |

---

## 3. GITHUB DETAILS

| Field | Value |
|---|---|
| **GitHub Account** | abhisingh100631 |
| **Repository Name** | zinoit-b2b |
| **Repository URL** | https://github.com/abhisingh100631/zinoit-b2b |
| **Default Branch** | `main` |
| **Visibility** | Private |

### Main Folders

```
zinoit-b2b/
├── app/                  # All pages and routes (Next.js App Router)
├── components/           # Reusable UI components (Header, Footer, etc.)
├── public/               # Static files served as-is (favicon, images)
└── .env.local            # Local environment variables (NOT committed to GitHub)
```

### Important Configuration Files

| File | Purpose |
|---|---|
| `next.config.js` | Next.js configuration (reactStrictMode: true) |
| `tailwind.config.ts` | All brand colors, fonts, animations, shadows |
| `tsconfig.json` | TypeScript configuration |
| `package.json` | Dependencies and npm scripts |
| `.env.local` | Local secrets (never committed to GitHub) |
| `app/layout.tsx` | Root HTML layout — Header, Footer, global metadata |
| `app/sitemap.ts` | Auto-generates /sitemap.xml |
| `app/robots.ts` | Auto-generates /robots.txt |

### How GitHub Connects to Vercel

Vercel is installed as a GitHub App on the `abhisingh100631` account. Every push to the `main` branch automatically triggers a new production deployment on Vercel. No manual action is needed.

### How to Clone the Repository (on a new computer)

```bash
git clone https://github.com/abhisingh100631/zinoit-b2b.git
cd zinoit-b2b
npm install
```

### How to Make and Push Changes

```bash
# 1. Make your changes to files
# 2. Stage and commit
git add .
git commit -m "Brief description of what you changed"
# 3. Push to GitHub (triggers auto-deploy on Vercel)
git push
```

### How to Roll Back to an Earlier Version

```bash
# See recent commits
git log --oneline

# Roll back to a specific commit (replace COMMIT_HASH with the hash from git log)
git revert COMMIT_HASH
git push
```

Or use Vercel's dashboard to instantly roll back (see Section 4).

---

## 4. VERCEL CONFIGURATION

| Field | Value |
|---|---|
| **Vercel Account** | abhisingh100631 (personal account) |
| **Project Name** | zinoit-b2b |
| **Vercel Dashboard** | https://vercel.com/abhisingh100631s-projects/zinoit-b2b |
| **Production URL** | https://zinoit-b2b.vercel.app |
| **Custom Domain** | https://zinoit.com |
| **Connected Repository** | abhisingh100631/zinoit-b2b |
| **Production Branch** | `main` |
| **Framework Preset** | Next.js (auto-detected) |
| **Build Command** | `npm run build` (default) |
| **Install Command** | `npm install` (default) |
| **Output Directory** | `.next` (default, managed by Next.js) |
| **Root Directory** | `.` (repository root) |

### Automatic Deployment

- Every push to `main` → automatic production deployment
- Pull requests on other branches → automatic preview deployment (unique URL per PR)
- Build takes approximately 45–60 seconds

### How to Manually Redeploy

1. Go to https://vercel.com/abhisingh100631s-projects/zinoit-b2b
2. Click **Deployments** tab
3. Click the three dots `⋯` next to the latest deployment
4. Click **Redeploy** → confirm

### How to Roll Back to a Previous Deployment

1. Go to **Deployments** tab in Vercel
2. Find the deployment you want to restore
3. Click `⋯` → **Promote to Production**
4. The old version is instantly live — no rebuild required

---

## 5. DOMAIN & DNS

| Field | Value |
|---|---|
| **Primary Domain** | zinoit.com |
| **Domain Registrar** | GoDaddy |
| **DNS Management** | GoDaddy |
| **www Behavior** | www.zinoit.com redirects to zinoit.com (managed by Vercel) |
| **SSL/HTTPS** | Automatic — provided by Vercel (Let's Encrypt), renews automatically |

### Required DNS Records

These are the exact records that must exist in GoDaddy DNS for the website to work:

| Type | Name | Value | Purpose |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | Points zinoit.com root to Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com` | Points www.zinoit.com to Vercel |

### ⚠️ DO NOT CHANGE OR DELETE

- Do **not** delete or change the `A` record pointing `@` to `76.76.21.21` — this will take the website offline
- Do **not** delete or change the `CNAME` record for `www` — this will break www access
- Do **not** change nameservers away from GoDaddy without updating DNS records at the new provider first

### SSL Certificate

SSL is 100% automatic via Vercel. No renewals needed, no certificates to manage. If SSL ever shows as expired or broken, go to Vercel → Settings → Domains and click **Refresh**.

---

## 6. ENVIRONMENT VARIABLES

| Variable Name | Purpose | Where Configured | Environments | Secret? |
|---|---|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms API key — allows contact and book-call forms to submit to info@zinoit.com | Vercel Dashboard → Settings → Environment Variables | Production, Preview, Development | Yes — treat as secret even though it is technically public-facing |
| `RESEND_API_KEY` | Resend email service API key — **currently unused in the codebase** | `.env.local` (local only, not on Vercel) | Development only | Yes |
| `ADMIN_PASSWORD` | Password for the admin panel — **admin has been removed from the site** | `.env.local` (local only) | Development only | Yes |

### How to Update Environment Variables Safely

1. Go to https://vercel.com/abhisingh100631s-projects/zinoit-b2b
2. Click **Settings** → **Environment Variables**
3. Find the variable and click **Edit**
4. Enter the new value and click **Save**
5. **Redeploy** is required — go to Deployments → Redeploy the latest deployment

### How to Regenerate the Web3Forms Key

If the Web3Forms key is lost or compromised:
1. Go to https://web3forms.com
2. Enter `info@zinoit.com` (or the current recipient email)
3. Click **Create Access Key**
4. Check your Gmail for the new key
5. Update `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel environment variables
6. Redeploy

### Local Development Only

The `.env.local` file exists on your Mac at `/Users/abhisheksingh/zinoit-b2b/.env.local`. It is **not** committed to GitHub (listed in `.gitignore`). You must recreate this file manually on any new computer.

---

## 7. WEBSITE STRUCTURE

### All Routes

| Route | Purpose | Source File | Content Type |
|---|---|---|---|
| `/` | Homepage — hero, services overview, industries, how it works, CTA | `app/page.tsx` | Hard-coded |
| `/services` | Full services detail — 6 B2B services with descriptions | `app/services/page.tsx` | Hard-coded |
| `/industries` | 6 industries served with persona descriptions | `app/industries/page.tsx` | Hard-coded |
| `/case-studies` | Listing of 8 representative campaign scenarios | `app/case-studies/page.tsx` | Data-driven (`data.ts`) |
| `/case-studies/cybersecurity-enterprise-abm` | Case study: Enterprise Cybersecurity ABM | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/cloud-data-transformation` | Case study: Cloud & Data Transformation | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/b2b-saas-abm` | Case study: B2B SaaS ABM | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/ai-data-appointment-setting` | Case study: AI & Data Appointment Setting | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/multi-region-global` | Case study: Multi-Region Global Expansion | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/intent-data-activation` | Case study: Intent Data Activation | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/prospect-reengagement` | Case study: Prospect Re-engagement | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/case-studies/fintech-buying-committee` | Case study: FinTech Buying Committee | `app/case-studies/[slug]/page.tsx` | From `data.ts` |
| `/contact` | Contact form page | `app/contact/page.tsx` | Hard-coded |
| `/book-call` | Book a Strategy Call conversion page | `app/book-call/page.tsx` | Hard-coded |
| `/privacy` | Privacy Policy | `app/privacy/page.tsx` | Hard-coded |
| `/terms` | Terms of Use | `app/terms/page.tsx` | Hard-coded |
| `/sitemap.xml` | Auto-generated sitemap for search engines | `app/sitemap.ts` | Auto-generated |
| `/robots.txt` | Search engine crawl rules | `app/robots.ts` | Auto-generated |

---

## 8. PROJECT FILE STRUCTURE

```
zinoit-b2b/
│
├── app/                          # Next.js App Router — all pages live here
│   ├── layout.tsx                # Root layout: <html>, Header, Footer, global metadata
│   ├── page.tsx                  # Homepage (/)
│   ├── globals.css               # Global CSS, Tailwind base imports
│   ├── sitemap.ts                # Generates /sitemap.xml automatically
│   ├── robots.ts                 # Generates /robots.txt automatically
│   │
│   ├── book-call/
│   │   ├── layout.tsx            # Metadata for /book-call page
│   │   └── page.tsx              # Book a Strategy Call page + form
│   │
│   ├── case-studies/
│   │   ├── data.ts               # ALL case study content — edit this to change case studies
│   │   ├── page.tsx              # Case studies listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual case study template (dynamic route)
│   │
│   ├── contact/
│   │   ├── layout.tsx            # Metadata for /contact page
│   │   └── page.tsx              # Contact form page
│   │
│   ├── industries/
│   │   └── page.tsx              # Industries page
│   │
│   ├── privacy/
│   │   └── page.tsx              # Privacy Policy
│   │
│   ├── services/
│   │   └── page.tsx              # Services detail page
│   │
│   └── terms/
│       └── page.tsx              # Terms of Use
│
├── components/                   # Reusable UI components
│   ├── Header.tsx                # Navigation bar with mobile hamburger menu
│   ├── Footer.tsx                # Site footer with links and contact info
│   ├── AnimateIn.tsx             # Scroll-triggered fade-up animation wrapper
│   ├── HeroVisual.tsx            # Animated hero graphic on the homepage
│   └── ServicesNav.tsx           # Sticky navigation for the services page
│
├── public/                       # Static files (served directly, no processing)
│   ├── favicon.ico               # Multi-size favicon (16, 32, 48, 64, 128, 256px)
│   ├── favicon.svg               # SVG favicon for modern browsers
│   ├── font-preview.html         # Internal font preview tool (not linked on site)
│   └── brand/                    # Brand assets folder
│
├── next.config.js                # Next.js config (reactStrictMode: true)
├── tailwind.config.ts            # All brand colors, fonts, animations
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies and scripts
├── .env.local                    # Local secrets — NOT committed to GitHub
├── .gitignore                    # Files excluded from GitHub
└── WEBSITE-HANDOVER.md           # This document
```

---

## 9. CONTENT MANAGEMENT

**This website has no CMS.** All content is stored directly in the source code files. To change any content, you must edit the relevant file, commit it to GitHub, and Vercel will automatically redeploy.

### Where to Find Content

| Content | File to Edit |
|---|---|
| Homepage hero headline, body text, stats | `app/page.tsx` |
| Services descriptions | `app/services/page.tsx` |
| Industries and persona lists | `app/industries/page.tsx` |
| Case study content (all 8) | `app/case-studies/data.ts` |
| Contact page text and address | `app/contact/page.tsx` |
| Book a call page text | `app/book-call/page.tsx` |
| Privacy Policy text | `app/privacy/page.tsx` |
| Terms of Use text | `app/terms/page.tsx` |
| Navigation links | `components/Header.tsx` |
| Footer links, address, email | `components/Footer.tsx` |
| Brand colors and fonts | `tailwind.config.ts` |

### How to Add a New Case Study

1. Open `app/case-studies/data.ts`
2. Copy one of the existing case study objects in the `caseStudies` array
3. Change all the fields: `slug`, `title`, `industry`, `summary`, etc.
4. The new case study page at `/case-studies/your-new-slug` is automatically created
5. It also automatically appears in the listing and sitemap

### How to Add a New Page

1. Create a new folder under `app/` — e.g., `app/about/`
2. Create `app/about/page.tsx` inside it
3. Export a default React component from that file
4. The page is automatically available at `/about`
5. Add a link to it in `components/Header.tsx` and `components/Footer.tsx`

### How to Change the Company Address or Email

- **Footer:** Edit `components/Footer.tsx` — search for the address or email text
- **Contact page:** Edit `app/contact/page.tsx` — search for the address or email text
- **Privacy Policy:** Edit `app/privacy/page.tsx`

---

## 10. FORMS & EMAIL

### Form 1 — Contact Form

| Field | Value |
|---|---|
| **Page** | `/contact` |
| **Purpose** | General B2B inquiry — collect prospect details |
| **Source File** | `app/contact/page.tsx` |
| **Form Provider** | Web3Forms (web3forms.com) |
| **Environment Variable** | `NEXT_PUBLIC_WEB3FORMS_KEY` |
| **Recipient Email** | info@zinoit.com |
| **Subject Line** | "New Contact Submission — Zinoit" |
| **Spam Protection** | Web3Forms built-in spam filtering |
| **Success Message** | Full-page thank-you confirmation displayed inline |
| **Error Handling** | Error message shown with fallback: "Please email us directly at info@zinoit.com" |

### Form 2 — Book a Strategy Call

| Field | Value |
|---|---|
| **Page** | `/book-call` |
| **Purpose** | High-intent conversion — schedule a strategy call |
| **Source File** | `app/book-call/page.tsx` |
| **Form Provider** | Web3Forms (web3forms.com) |
| **Environment Variable** | `NEXT_PUBLIC_WEB3FORMS_KEY` |
| **Recipient Email** | info@zinoit.com |
| **Subject Line** | "New Strategy Call Request — Zinoit" |
| **Spam Protection** | Web3Forms built-in spam filtering |
| **Success Message** | Full-page confirmation displayed inline |
| **Error Handling** | Error message shown with fallback: "Please email us directly at info@zinoit.com" |

### How to Change the Recipient Email in the Future

The recipient email is tied to the Web3Forms access key, not the code itself.

1. Go to https://web3forms.com
2. Enter the **new** email address and click **Create Access Key**
3. Verify your new email in Gmail
4. Update `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel with the new key
5. Redeploy

Also update the fallback email displayed in the error messages in both:
- `app/contact/page.tsx` — search for `info@zinoit.com`
- `app/book-call/page.tsx` — search for `info@zinoit.com`

---

## 11. THIRD-PARTY SERVICES & INTEGRATIONS

### All External Services

| Service | Purpose | Account | What Breaks if Disconnected |
|---|---|---|---|
| **GitHub** (github.com/abhisingh100631) | Source code storage, version history, triggers Vercel deploys | abhisingh100631 | Vercel auto-deploy stops; code is no longer version-controlled |
| **Vercel** (vercel.com) | Hosts and builds the Next.js website | abhisingh100631 | Entire website goes offline |
| **GoDaddy** | Registered zinoit.com domain; manages DNS | Zinoit LLC account | Domain no longer resolves; website unreachable at zinoit.com |
| **Web3Forms** (web3forms.com) | Processes contact form submissions; forwards to info@zinoit.com | Configured via API key tied to info@zinoit.com | Forms stop working; submissions are lost silently |
| **Google Fonts** (fonts.googleapis.com) | Loads "Plus Jakarta Sans" and "Inter" at runtime | None (public CDN) | Site falls back to system fonts; visual appearance changes slightly but site remains functional |

### NOT Integrated (but available to add)

- Google Analytics — not installed
- Google Search Console — not configured
- Live chat (Tawk.to, Intercom, etc.) — not installed
- Calendly — not integrated (book-call page uses a custom form instead)
- CAPTCHA — not implemented (Web3Forms has basic spam protection)

---

## 12. SEO CONFIGURATION

### Page Titles (actual values)

| Page | Title |
|---|---|
| `/` | Zinoit — B2B Lead Generation, Demand Gen & Appointment Setting |
| `/services` | Services — Zinoit |
| `/industries` | Industries We Serve — Zinoit |
| `/case-studies` | Demand Generation Success Scenarios — Zinoit |
| `/case-studies/[slug]` | [Case study title] — Zinoit |
| `/contact` | Contact Us — Zinoit |
| `/book-call` | Book a Strategy Call — Zinoit |
| `/privacy` | Privacy Policy — Zinoit |
| `/terms` | Terms of Use — Zinoit |

Title template `%s — Zinoit` is set in `app/layout.tsx` so all pages automatically append "— Zinoit".

### Meta Descriptions

Defined per-page in each `page.tsx` or `layout.tsx` file's `metadata` export.

### Open Graph & Social Sharing

Configured in `app/layout.tsx`:
- `og:type` = website
- `og:site_name` = Zinoit
- `og:url` = https://zinoit.com
- `twitter:card` = summary
- `metadataBase` = https://zinoit.com

**Note:** No OG image (`og:image`) is configured. When sharing links on LinkedIn/Twitter, no preview image will appear. Adding one is recommended (see Section 21 — Pending Items).

### robots.txt

Auto-generated at `/robots.txt` via `app/robots.ts`:
- Allows all crawlers on all public pages
- Blocks `/admin/` routes (though admin has been removed)
- Points to `https://zinoit.com/sitemap.xml`

### sitemap.xml

Auto-generated at `/sitemap.xml` via `app/sitemap.ts`:
- Includes 16 URLs total: 8 static pages + 8 case study pages
- Updates automatically when case studies are added/removed
- Priority: homepage (1.0), book-call (0.9), services (0.9), others lower

### Favicon

- `public/favicon.ico` — multi-size ICO (16×16 through 256×256)
- `public/favicon.svg` — vector SVG favicon for modern browsers
- Both configured in `app/layout.tsx`

### Pending SEO Work

- Google Search Console not yet configured (submit sitemap after domain is verified)
- Google Analytics not yet installed
- No OG image for social sharing
- No structured data / JSON-LD schema markup

---

## 13. IMAGES & ASSETS

### How Images Are Handled

This website uses **no external image files** for the UI. All visual elements (hero graphics, case study illustrations, service icons, decorative elements) are **inline SVG code** written directly in the TSX files. This means:

- No broken image links are possible
- No image upload/hosting service is needed
- Images are crisp at any screen size

### Logo Files

Logo files are stored locally on your Mac at:
- `~/Desktop/zinoit/zinoit-logo/` — production copies
- `~/Downloads/zinoit-logo/` — original exported copies

Files:
- `zinoit-logo-icon.png` — icon mark only (1024×1024)
- `zinoit-logo-dark.png` — full logo on dark background (1800×440)
- `zinoit-logo-light.png` — full logo on white background (1800×440)
- `zinoit-logo-icon.pdf` — icon mark PDF
- `zinoit-logo-dark.pdf` — full logo dark PDF
- `zinoit-logo-light.pdf` — full logo light PDF

**These are NOT in the GitHub repository.** Keep them backed up separately.

### Favicon Files (in the repository)

- `public/favicon.ico` — in GitHub, deployed to Vercel
- `public/favicon.svg` — in GitHub, deployed to Vercel

### Fonts

Loaded at runtime from Google Fonts CDN — no local font files:
- **Plus Jakarta Sans Bold** — display headings, logo wordmark
- **Inter** — body text fallback

Defined in `tailwind.config.ts` under `fontFamily`.

### How to Replace/Add an Image

Since images are inline SVG, replacing them requires editing the SVG code in the relevant `.tsx` file. If you want to use a real image file instead:
1. Add the file to `public/` (e.g., `public/images/team-photo.jpg`)
2. Reference it in code as `<img src="/images/team-photo.jpg" />` or use Next.js `<Image>` component
3. Commit and push

---

## 14. WEBSITE ADMINISTRATION

*These instructions are written for non-developers.*

### 1. How to Change Text on the Website

1. Go to https://github.com/abhisingh100631/zinoit-b2b on GitHub
2. Find the file you want to edit (refer to Section 9 for which file contains which content)
3. Click the file, then click the **pencil icon** (Edit) in the top right
4. Make your change in the text editor
5. Scroll down, write a short description of what you changed
6. Click **Commit changes**
7. Vercel automatically deploys the change in ~1 minute

### 2. How to Replace an Image

Since all images are inline SVG, hire a developer to update the SVG code in the relevant file. Alternatively, add a real image file to `public/images/` and update the code to reference it.

### 3. How to Add a New Case Study

Edit `app/case-studies/data.ts` — add a new object to the `caseStudies` array following the existing pattern. The new page is created automatically.

### 4. How to Add a New Service

Edit `app/services/page.tsx` and add a new service section following the existing pattern. Also update `components/ServicesNav.tsx` to add it to the sticky navigation.

### 5. How to Change Contact Information

- **Email:** Update `info@zinoit.com` in `components/Footer.tsx` and `app/contact/page.tsx`
- **Address:** Update in `components/Footer.tsx` and `app/contact/page.tsx`
- **LinkedIn URL:** Update in `components/Footer.tsx`

### 6. How to Update a Form

Edit `app/contact/page.tsx` or `app/book-call/page.tsx`. To change where form submissions are sent, see Section 10.

### 7. How to Deploy an Update

Simply push code to GitHub — Vercel deploys automatically. No manual deployment step needed.

If you want to force a manual redeploy:
1. Go to https://vercel.com/abhisingh100631s-projects/zinoit-b2b
2. Click **Deployments** → `⋯` → **Redeploy**

### 8. How to Check Whether Deployment Succeeded

1. Go to https://vercel.com/abhisingh100631s-projects/zinoit-b2b
2. Click **Deployments**
3. The latest deployment shows **Ready** (green) = success, **Error** (red) = failed
4. Click any deployment to see build logs

### 9. How to Restore an Older Version

1. Go to Vercel → **Deployments**
2. Find the deployment from before the bad change
3. Click `⋯` → **Promote to Production**
4. The old version is instantly live — instant, no rebuild

### 10. How to Check Website Errors

- **Vercel build errors:** Vercel → Deployments → click a deployment → **Build Logs**
- **Runtime errors:** Vercel → your project → **Functions** tab (for server errors)
- **Browser errors:** Open the website, right-click → Inspect → Console tab

---

## 15. LOCAL DEVELOPMENT

### Required Software

- **Node.js** v18 or higher (project was built on v24)
- **npm** (comes with Node.js)
- **Git**

### Step-by-Step Setup on a New Computer

```bash
# 1. Clone the repository
git clone https://github.com/abhisingh100631/zinoit-b2b.git
cd zinoit-b2b

# 2. Install dependencies
npm install

# 3. Create the local environment file
# Create a file named .env.local in the project root with:
# NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
# (Get the key from web3forms.com using info@zinoit.com)

# 4. Start the development server
npm run dev -- --port 3001

# 5. Open in browser
# http://localhost:3001
```

### Production Build (verify before deploying)

```bash
npm run build
```

A successful build shows all routes listed with no errors. The build output will look similar to:

```
Route (app)                    Size     First Load JS
┌ ○ /                          2.43 kB  96.3 kB
├ ○ /services                  ...
...
✓ Generating static pages (21/21)
```

### Local URL

http://localhost:3001 (using port 3001 to avoid conflicts with other projects)

---

## 16. DEPENDENCIES

### Core Dependencies (`dependencies` in package.json)

| Package | Version | Purpose | Can Remove? |
|---|---|---|---|
| `next` | 14.2.5 | The Next.js framework — the entire website depends on this | No |
| `react` | ^18 | React library — required by Next.js | No |
| `react-dom` | ^18 | React DOM rendering — required by Next.js | No |
| `@vercel/kv` | ^3.0.0 | Vercel KV (Redis) database — **currently unused** | Yes — safe to remove |
| `nodemailer` | ^8.0.5 | Email sending library — **currently unused** | Yes — safe to remove |
| `@types/nodemailer` | ^8.0.0 | TypeScript types for nodemailer — **currently unused** | Yes — safe to remove |
| `resend` | ^6.12.0 | Resend email API client — **currently unused** | Yes — safe to remove |

### Dev Dependencies

| Package | Purpose |
|---|---|
| `tailwindcss` | CSS framework — required for all styling |
| `typescript` | TypeScript compiler — required for all `.tsx` files |
| `@types/react` | TypeScript types for React |
| `@types/node` | TypeScript types for Node.js |
| `eslint` | Code linting |
| `eslint-config-next` | Next.js ESLint rules |
| `autoprefixer` | CSS vendor prefixes for Tailwind |
| `postcss` | CSS processing for Tailwind |

### Cleanup Recommended

The following packages are installed but not used in the codebase. They add bundle weight and unnecessary dependencies. A developer can safely remove them:
- `@vercel/kv`
- `nodemailer`
- `@types/nodemailer`
- `resend`

To remove: `npm uninstall @vercel/kv nodemailer @types/nodemailer resend` then commit.

---

## 17. SECURITY

### Current Security Status

| Item | Status | Notes |
|---|---|---|
| API keys in GitHub | ✅ Safe | `.env.local` is in `.gitignore` — secrets not committed |
| Web3Forms key in browser | ⚠️ Acceptable | `NEXT_PUBLIC_` prefix means it's visible in browser source. This is expected and safe for Web3Forms — the key only controls which email receives submissions. |
| Hard-coded credentials | ✅ None found | No passwords or secrets in source code |
| Admin panel | ✅ Removed | Admin routes deleted entirely |
| Form spam protection | ⚠️ Basic only | Web3Forms has built-in spam filtering but no CAPTCHA. Consider adding hCaptcha if spam becomes an issue (Web3Forms supports it). |
| HTTPS | ✅ Automatic | Vercel provides SSL — enforced on all requests |
| Dependency vulnerabilities | ⚠️ Run `npm audit` | Has unused packages that may have known vulnerabilities |

### Action Recommended

Run `npm audit` periodically and remove the unused packages listed in Section 16 to reduce attack surface.

### Nothing to Fix Immediately

No exposed secrets, no SQL injection risk (no database), no XSS vulnerabilities in form handling (Web3Forms handles processing server-side).

---

## 18. BACKUP & DISASTER RECOVERY

### What to Back Up

| Item | How to Back Up | Frequency |
|---|---|---|
| **Source code** | GitHub is the backup — push regularly | Every change |
| **Environment variables** | Keep a secure note of `NEXT_PUBLIC_WEB3FORMS_KEY` value (password manager recommended) | When changed |
| **DNS configuration** | Screenshot or note: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com` | When changed |
| **Logo files** | Copy from `~/Desktop/zinoit/zinoit-logo/` to cloud storage (iCloud, Google Drive) | Now and when updated |
| **This document** | Committed to GitHub as `WEBSITE-HANDOVER.md` | Keep updated |

### Rebuilding If Vercel Project Is Accidentally Deleted

1. Log in to https://vercel.com
2. Click **Add New** → **Project**
3. Import from GitHub: `abhisingh100631/zinoit-b2b`
4. Add environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY` with the saved value
5. Click **Deploy**
6. Go to **Settings** → **Domains** → add `zinoit.com` and `www.zinoit.com`
7. GoDaddy DNS records remain unchanged — site is back online in minutes

### If a Bad Code Update Breaks Production

**Option A (Fastest) — Roll back in Vercel:**
1. Vercel → Deployments → find last working deployment → `⋯` → **Promote to Production**
2. Instant — no rebuild needed

**Option B — Revert code in GitHub:**
```bash
git log --oneline          # find the last good commit hash
git revert BAD_COMMIT_HASH
git push                   # triggers new deploy with the revert
```

### If GitHub Becomes Disconnected from Vercel

1. Vercel → zinoit-b2b project → Settings → Git
2. Click **Connect Git Repository** → GitHub → select `zinoit-b2b`
3. Auto-deploys resume immediately

### If Domain Stops Working

Check in this order:
1. **GoDaddy DNS** — confirm A record `@` = `76.76.21.21` and CNAME `www` = `cname.vercel-dns.com` still exist
2. **Vercel Domains** — Settings → Domains — confirm `zinoit.com` shows a green checkmark
3. **Domain expiry** — check in GoDaddy that `zinoit.com` has not expired
4. If all correct, wait up to 48 hours for DNS propagation

### If Vercel Deployment Fails

1. Check build logs in Vercel → Deployments → click the failed deployment
2. Common causes: syntax error in code, missing environment variable, broken import
3. Fix the code, push again — new deployment starts automatically

---

## 19. ACCOUNTS YOU MUST KEEP ACCESS TO

- [ ] **GitHub** — https://github.com/abhisingh100631 — Source code, version history, auto-deploy trigger
- [ ] **Vercel** — https://vercel.com — Website hosting, deployments, environment variables
- [ ] **GoDaddy** — https://godaddy.com — Domain registration and DNS management for zinoit.com
- [ ] **Web3Forms** — https://web3forms.com — Form processing (key tied to info@zinoit.com)
- [ ] **Gmail / info@zinoit.com** — Receives all contact form submissions and Web3Forms verification emails

**Note:** The GitHub Personal Access Token used for `git push` has no expiration (the "zinoit" token). If you ever lose access or the token stops working, regenerate it at GitHub → Settings → Developer Settings → Personal Access Tokens (Classic).

---

## 20. COSTS & SUBSCRIPTIONS

| Service | Plan | Cost | Notes |
|---|---|---|---|
| **Vercel** | Hobby (Free) | $0/month | Sufficient for current traffic. Limit: 100GB bandwidth/month, 6,000 build minutes/month. Upgrade to Pro ($20/month) if limits are reached. |
| **GoDaddy — zinoit.com domain** | Annual renewal | ~$15–20/year | Needs verification of exact renewal date and cost in GoDaddy dashboard. **Do not let this expire.** |
| **GoDaddy — Web Hosting** | Shared hosting plan | Needs verification | An existing hosting plan is connected to zinoit.com in GoDaddy, but the website now runs on Vercel. The GoDaddy hosting may no longer be needed. Verify before cancelling. |
| **Web3Forms** | Free | $0/month | Free plan allows 250 submissions/month. Upgrade to paid plan if form volume exceeds this. |
| **GitHub** | Free | $0/month | Private repositories are free on the personal plan. |
| **Google Fonts** | Free | $0 | Public CDN, always free. |

---

## 21. PENDING ITEMS

### Outstanding — Not Yet Completed

- [ ] **OG Image for social sharing** — No `og:image` is set. When the site is shared on LinkedIn or Twitter, no preview image appears. Create a 1200×630px image and add it to `public/og-image.png`, then reference it in `app/layout.tsx` metadata.
- [ ] **Google Search Console** — Not configured. Submit https://zinoit.com and upload the sitemap at https://zinoit.com/sitemap.xml to Google Search Console after the domain is fully active.
- [ ] **Google Analytics** — Not installed. Add GA4 tracking if you want to see visitor data.
- [ ] **Domain DNS propagation** — DNS records were updated in GoDaddy. Full propagation can take up to 48 hours. Verify https://zinoit.com loads the correct B2B website (not the old site) after 24–48 hours.
- [ ] **GoDaddy hosting plan review** — An existing shared hosting plan is in GoDaddy connected to zinoit.com. Now that Vercel hosts the site, this hosting plan may no longer be needed. Verify whether it is still needed before cancelling.
- [ ] **Unused npm packages** — `@vercel/kv`, `nodemailer`, `@types/nodemailer`, `resend` are installed but unused. Remove them to keep the project clean.
- [ ] **CAPTCHA on forms** — No CAPTCHA currently. If spam becomes an issue, enable hCaptcha via Web3Forms (free, no code changes needed — configure in Web3Forms dashboard).
- [ ] **Privacy Policy / Terms review by a lawyer** — The legal pages are based on the original zinoit.com policies with formatting improvements and address corrections. They have not been reviewed by legal counsel. Recommend a review before significant business activity.
- [ ] **www.zinoit.com redirect** — Verify that www.zinoit.com correctly redirects to zinoit.com (Vercel handles this but should be confirmed after DNS propagation).

### Completed ✅

- [x] Production build passes with 0 errors
- [x] All 8 case study pages built and deployed
- [x] Contact form wired to Web3Forms → info@zinoit.com
- [x] Book a Strategy Call form wired to Web3Forms → info@zinoit.com
- [x] robots.txt and sitemap.xml auto-generated
- [x] All page metadata (title + description) configured
- [x] Open Graph and Twitter card metadata configured
- [x] favicon.ico and favicon.svg deployed
- [x] Privacy Policy page live at /privacy
- [x] Terms of Use page live at /terms
- [x] All staffing/recruitment content removed
- [x] Admin panel removed entirely
- [x] GoDaddy DNS updated (A record + CNAME)
- [x] Vercel project connected to GitHub

---

## 22. FINAL HEALTH CHECK

| Check | Status | Notes |
|---|---|---|
| Production build | ✅ Verified | `npm run build` completes with 0 errors, 21 pages generated |
| GitHub repository | ✅ Verified | Code at github.com/abhisingh100631/zinoit-b2b, branch `main` |
| Vercel deployment | ✅ Verified | Status: Ready, latest build ~47 seconds |
| Homepage loads | ✅ Verified | Correct B2B content confirmed in browser |
| Navigation links | ✅ Verified | All nav links point to existing pages |
| All routes exist | ✅ Verified | All 16 routes confirmed in build output |
| Contact form | ✅ Verified | Web3Forms integration confirmed in code |
| Book-call form | ✅ Verified | Web3Forms integration confirmed in code |
| Form email recipient | ✅ Verified | info@zinoit.com in both forms |
| Mobile responsive | ✅ Verified | Tested at 375px — content stacks correctly |
| Staffing content removed | ✅ Verified | grep scan found zero staffing/recruitment references |
| robots.txt | ✅ Verified | Route appears in build output at /robots.txt |
| sitemap.xml | ✅ Verified | Route appears in build output at /sitemap.xml, 16 URLs |
| Metadata — all pages | ✅ Verified | All 16 pages have title + description |
| Open Graph tags | ✅ Verified | Configured in app/layout.tsx |
| favicon | ✅ Verified | favicon.ico (multi-size) + favicon.svg in public/ |
| SSL/HTTPS | ✅ Verified | Automatic via Vercel |
| No broken image refs | ✅ Verified | All visuals are inline SVG — no external image files |
| Production URL (zinoit.com) | ⚠️ Not verified | DNS was just updated — confirm after 24–48 hours |
| www.zinoit.com redirect | ⚠️ Not verified | Confirm after DNS propagation |
| Form submissions received | ⚠️ Not verified | Send a test submission and confirm receipt at info@zinoit.com |
| Google Search Console | ❌ Not configured | Needs to be set up |
| Google Analytics | ❌ Not configured | Needs to be set up |
| OG image for social sharing | ❌ Not configured | No og:image defined |

---

## 23. QUICK REFERENCE

```
════════════════════════════════════════════════════════════
  ZINOIT B2B WEBSITE — OWNER QUICK REFERENCE
════════════════════════════════════════════════════════════

Website Name:         Zinoit — B2B Demand Generation
Production URL:       https://zinoit.com
Vercel Preview URL:   https://zinoit-b2b.vercel.app

GitHub Repository:    https://github.com/abhisingh100631/zinoit-b2b
GitHub Account:       abhisingh100631
Default Branch:       main

Vercel Project:       zinoit-b2b
Vercel Dashboard:     https://vercel.com/abhisingh100631s-projects/zinoit-b2b
Deployment Method:    Automatic on every git push to main

Domain Provider:      GoDaddy (zinoit.com)
DNS:                  GoDaddy
DNS Records:          A @ → 76.76.21.21
                      CNAME www → cname.vercel-dns.com

CMS:                  None (content is in source code)
Form Provider:        Web3Forms (web3forms.com)
Form Submissions:     Delivered to info@zinoit.com
Analytics:            Not configured

Environment Variables (configured in Vercel):
  NEXT_PUBLIC_WEB3FORMS_KEY — Web3Forms API key for form submissions

Admin URLs:
  GitHub:   https://github.com/abhisingh100631/zinoit-b2b
  Vercel:   https://vercel.com/abhisingh100631s-projects/zinoit-b2b
  GoDaddy:  https://dcc.godaddy.com/control/portfolio/zinoit.com/settings
  Emails:   info@zinoit.com (form recipient)
            DPO@zinoit.com (privacy/GDPR requests)

════════════════════════════════════════════════════════════
  5 MOST IMPORTANT THINGS TO REMEMBER
════════════════════════════════════════════════════════════

1. NEVER delete the GoDaddy DNS A record (@→76.76.21.21)
   or CNAME (www→cname.vercel-dns.com) — this takes the
   website offline immediately.

2. To update the website: edit files → git commit → git push.
   Vercel deploys automatically. No other steps needed.

3. If something breaks: go to Vercel → Deployments →
   find the last working version → Promote to Production.
   Instant rollback, no rebuild needed.

4. Keep access to: GitHub (abhisingh100631), Vercel,
   GoDaddy, and info@zinoit.com Gmail. Losing any of
   these disrupts the website or form submissions.

5. The Web3Forms key (NEXT_PUBLIC_WEB3FORMS_KEY) is the
   only secret needed for forms to work. It is stored in
   Vercel environment variables. If forms stop working,
   check this key first.

════════════════════════════════════════════════════════════
```

---

*Document version: 1.0 — September 2026*  
*Prepared during initial build and deployment of zinoit.com B2B website.*  
*Update this document whenever infrastructure, services, or major content changes are made.*
