# NewGrad.com Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from LinkedIn's professional credibility, Linear's clean typography, and Stripe's trust-building elements. The design balances youthful energy with professional polish to inspire confidence in new graduates entering the job market.

## Core Design Principles
- **Approachable Professionalism**: Modern and clean without feeling corporate or intimidating
- **Clarity First**: Job information and application flows must be immediately understandable
- **Trust Building**: Visual hierarchy that emphasizes legitimacy and opportunity

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400-500 weight
- Accents: 500 weight

**Type Scale**:
- Hero Heading: text-5xl to text-6xl (font-semibold)
- Section Headings: text-3xl to text-4xl (font-semibold)
- Job Titles: text-xl to text-2xl (font-semibold)
- Body Text: text-base to text-lg (font-normal)
- Labels/Meta: text-sm (font-medium)
- Captions: text-xs to text-sm (font-normal)

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, and 12
- Component padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-20
- Element gaps: gap-4, gap-6, gap-8
- Margins: mt-2, mb-4, mx-6, etc.

**Container Widths**:
- Full-width sections: w-full with max-w-7xl centered
- Content sections: max-w-6xl
- Form containers: max-w-2xl
- Job cards: max-w-md within grid

**Grid Systems**:
- Job Listings: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature Benefits: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Mobile: Always single column

## Component Library

### Navigation
- Fixed header with semi-transparent backdrop blur
- Logo left-aligned
- Primary CTA buttons: "Post a Job" and "Sign In" right-aligned
- Mobile: Hamburger menu with slide-out drawer

### Hero Section (Full Viewport Impact)
- Height: min-h-[85vh] on desktop, min-h-[70vh] on mobile
- Large heading with supporting subheading
- Dual CTA buttons: "Browse Jobs" (primary) and "For Employers" (secondary)
- Background: Gradient overlay on hero image with blurred button backgrounds
- Search bar positioned prominently: includes job title and location inputs with search button

### Job Cards
- Elevated cards with subtle shadow: shadow-sm hover:shadow-md transition
- Padding: p-6
- Rounded corners: rounded-lg
- Structure:
  - Company logo (48px × 48px, rounded)
  - Job title (text-xl font-semibold)
  - Company name (text-base)
  - Location and job type badges (rounded-full px-4 py-1 text-sm)
  - Salary range (text-base font-medium)
  - Key requirements (bulleted list, text-sm)
  - "Apply Now" button (full-width)

### Application Form
- Two-column layout on desktop (form left, context right)
- Single column on mobile
- Input fields with consistent spacing (space-y-4)
- Labels: text-sm font-medium mb-2
- Inputs: rounded-md border p-3 text-base
- File upload: Drag-and-drop zone with click-to-browse fallback
- Submit button: Full-width on mobile, fixed-width on desktop

### Feature Sections
- Grid layout showcasing benefits for job seekers
- Icons with descriptive text
- Each feature: Icon (48px), Title (text-xl), Description (text-base)
- Spacing between features: gap-8

### Trust Indicators
- Company logo carousel showing hiring partners
- Statistics section: 3-column grid (Jobs Posted, Companies Hiring, Graduates Placed)
- Each stat: Large number (text-4xl font-bold) with label (text-sm)

### Footer
- Three-column layout: Company Info, Quick Links, Contact
- Newsletter signup with email input and subscribe button
- Social media icons (24px, spaced with gap-4)
- Copyright and legal links (text-xs)

## Page Structure

**Homepage Flow**:
1. Hero with search (85vh)
2. Featured jobs grid (py-16)
3. How it works section - 3 steps (py-16)
4. Statistics/trust section (py-12)
5. Company partners carousel (py-12)
6. CTA section - "Start your career journey" (py-16)
7. Footer

**Job Listing Page**:
1. Search/filter sidebar (sticky on desktop, collapsible on mobile)
2. Job cards grid with pagination
3. Filters: Location, Job Type, Experience Level, Salary Range

**Job Detail Page**:
1. Job header with apply button
2. Two-column: Job description left (max-w-3xl), application quick-apply right (sticky)
3. Related jobs section at bottom

## Images

**Hero Image**: 
- Full-width background image showing diverse group of young professionals in modern office or collaborative workspace
- Image should convey energy, diversity, and professional aspiration
- Apply gradient overlay (dark to transparent, bottom to top) for text legibility

**Company Logos**:
- Displayed in "Trusted by" section
- Grayscale treatment with color on hover
- Size: 120px × 60px contained

**Placeholder Images for Development**:
- Use Unsplash for professional workplace imagery
- Search terms: "young professionals," "office collaboration," "diverse team"

## Interaction Patterns

**Card Interactions**:
- Hover: Slight elevation increase (transform: translateY(-2px))
- Transition duration: 200ms ease-in-out

**Button States**:
- Primary: Solid fill with subtle shadow
- Secondary: Outlined with transparent background
- Hover: Slight scale (scale-105) with shadow increase
- Active: Scale down (scale-95)

**Form Validation**:
- Real-time validation on blur
- Error states: Red border with error message below (text-sm)
- Success states: Green checkmark icon right-aligned

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (base, single column)
- Tablet: 768px - 1024px (md:, 2 columns)
- Desktop: > 1024px (lg:, 3+ columns)

**Key Adjustments**:
- Navigation: Full menu on desktop, hamburger on mobile
- Job cards: 1 column mobile, 2 tablet, 3 desktop
- Typography: Scale down by 1-2 sizes on mobile
- Padding: Reduce by 50% on mobile (py-16 becomes py-8)
- Hero height: 70vh mobile, 85vh desktop

This design creates a trustworthy, modern job platform that appeals to new graduates while maintaining professional credibility for employers.