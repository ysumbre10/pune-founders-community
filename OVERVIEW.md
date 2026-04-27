# FoundersX - Product Overview

**Live:** https://ysumbre10.github.io/FoundersX/

## What it is

FoundersX is a community directory for startup founders building across India. It lets founders list themselves publicly so others can discover co-founders, mentors, investors, and collaborators - all in one searchable page.

---

## Current Features

| Feature | What it does |
|---|---|
| **Founder Directory** | Card grid listing every founder with name, startup, stage, industry, and what they need/offer |
| **Live Search** | Real-time text search across names, startups, skills, and needs |
| **Filters** | Multi-select chips for Industry, Stage, Needs Help With, and Can Offer |
| **Sort** | Dropdown to sort directory results |
| **Active Filter Tags** | Visible pill tags showing applied filters, each individually dismissible |
| **Add Profile Modal** | Form to self-submit: name, startup, role, industry, stage, bio, needs, offers, links |
| **Edit Profile** | Re-open and update a submitted profile |
| **Founder Detail Modal** | Full-screen card view when clicking a founder |
| **Celebration Modal** | Post-submission confirmation screen |
| **Live Stats** | Hero section shows real-time founder and startup count |
| **Mobile Nav** | Hamburger menu with iOS-safe scroll lock |

## How it's wired up

- **Stack:** Vanilla HTML + CSS + JavaScript - no framework, no build step
- **Data layer:** Google Sheet + Google Apps Script as a REST API
  - `GET` to Apps Script → returns all founders as JSON → renders cards
  - `POST` to Apps Script → appends or updates a row in the sheet
  - Duplicate check by WhatsApp number (client-side before submit)
  - 2-second wait after submit, then re-fetches the sheet to refresh the UI
- **Hosting:** GitHub Pages, deployed from `main` branch
- **Fonts:** Google Fonts (Inter + Space Grotesk)
- **No auth** - anyone with the link can add or edit a profile via their WhatsApp-based ID

---

## What could be added

### Data & Backend
- [ ] Supabase or Firebase for persistent, shared data (currently each user only sees their own submissions)
- [ ] Admin moderation panel to approve/reject profiles
- [ ] Profile verification (LinkedIn OAuth, email confirmation)

### Discovery
- [ ] Co-founder matching algorithm (match by complementary skills/needs)
- [ ] Map view - plot founders by location within Pune
- [ ] "Open to Coffee Chat" availability badge
- [ ] Browse by tag: Investor / Mentor / Hiring / Fundraising

### Community & Engagement
- [ ] Direct messaging or contact request system
- [ ] Events calendar - meetups, demo days, AMAs
- [ ] Job board / freelance gig listings
- [ ] Weekly digest email with new founders
- [ ] Upvoting / endorsements between founders

### Profile Enrichment
- [ ] LinkedIn import to auto-fill profile
- [ ] Startup logo upload
- [ ] Social links (Twitter, GitHub, Product Hunt)
- [ ] "Currently building" status updates

### Growth & Analytics
- [ ] Public analytics dashboard (how many founders, industries breakdown)
- [ ] Shareable founder profile URL (e.g. `/founders/yadnesh`)
- [ ] SEO-friendly static profile pages
- [ ] OG image generation for social sharing

### Platform
- [ ] Auth (Google / LinkedIn sign-in)
- [ ] Mobile app (PWA or React Native)
- [ ] Slack / WhatsApp community integration
- [ ] Newsletter via Resend or Mailchimp
