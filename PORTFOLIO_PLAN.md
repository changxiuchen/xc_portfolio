# XC Portfolio - Design & Content Plan

## Design Philosophy

**Brand**: Steadfast, Reliable, User-Focused  
**Aesthetic**: Dark, modern, minimal, clean  
**Vibe**: Friendly and approachable  
**Inspiration**: walhamedali.me, natede.dev

## Design Direction

### Color Palette
- **Primary**: Deep charcoal/near-black background (#0f0f0f or similar dark)
- **Text**: Off-white/light gray for primary text (#f5f5f5)
- **Accents**: Subtle warm accent (gold, amber, or muted teal) for highlights and CTAs
- **Borders**: Subtle gray dividers
- **Hover States**: Slight color shifts, smooth transitions

### Typography
- **Display Font**: Bold, modern sans-serif (e.g., Poppins, DM Sans, or Outfit) for headings
- **Body Font**: Clean, readable sans-serif (e.g., Inter, Geist, or Roboto) for body text
- **Hierarchy**: 
  - Hero headline: 48-56px, bold
  - Section titles: 32-40px, bold
  - Subsections: 20-24px, semibold
  - Body: 16px, regular
  - Small text: 14px, regular

### Layout & Spacing
- Generous whitespace and breathing room
- Asymmetric layouts where possible (avoid centered everything)
- Max-width container: 1200px
- Consistent padding: 2rem (desktop), 1.5rem (tablet), 1rem (mobile)

### Visual Elements
- Subtle shadows for depth (not heavy)
- Smooth transitions (200-300ms)
- Minimal use of borders (prefer shadows)
- Clean, professional imagery
- Icons from lucide-react for consistency

## Page Structure

### 1. Hero Section
- **Logo**: "XC" in top-left
- **Navigation**: Home, About, Projects, Contact (minimal, top-right)
- **Hero Content**: 
  - Bold headline: "Building reliable solutions, one line at a time"
  - Subheading: Brief intro about your approach
  - CTA Button: "View My Work"
- **Visual**: Subtle background gradient or pattern (not too busy)

### 2. About Section
- **Headline**: "Who I Am"
- **Content**: 
  - Short bio (3-4 sentences) about your problem-solving approach
  - Three key qualities: Steadfast, Reliable, User-Focused
  - Brief mention of your journey (wheelchair assistance, Intertech, learning)
- **Visual**: Professional photo or avatar (circular, with subtle frame)

### 3. Experience Section
- **Headline**: "Experience & Education"
- **Timeline Layout**:
  - Current role at Intertech Hardware (Part-time)
  - Previous roles and education
  - Key achievements for each role
- **Format**: Vertical timeline or card-based layout

### 4. Projects Section
- **Headline**: "Featured Projects"
- **Project Cards** (4 total):

#### Project 1: Movie Reservation System (Golden Scene Cinema)
- **Title**: Movie Reservation System
- **Description**: Built a dynamic movie ticketing system using pure PHP and jQuery, designing a custom MVC architecture to manage seat availability and user authentication without relying on frameworks.
- **Technologies**: PHP, HTML5, CSS3, JavaScript, MySQL
- **Key Features**: Movie listing, date/time selection, interactive seat booking, reservation management
- **Visual**: 3 screenshots showing the user journey
- **Status**: Completed

#### Project 2: Facility Management System
- **Title**: Facility Management System
- **Description**: Designed a responsive booking platform using ASP.NET Core MVC to help teams manage facility reservations efficiently, with advanced search filtering and relational database design.
- **Technologies**: ASP.NET Core MVC, C#, SQL Server
- **Key Features**: Facility CRUD operations, advanced search filtering, responsive design
- **Visual**: Mockup/placeholder (to be replaced with real screenshots)
- **Status**: In Progress

#### Project 3: UI/UX Design Work
- **Title**: Design Portfolio
- **Description**: Created a series of designs for social media and marketing campaigns using Canva and Photoshop, focusing on visual hierarchy and user engagement. Includes portfolio webpage design and promotional posters.
- **Tools**: Illustrator, Photoshop, Canva
- **Pieces**: 3-5 design mockups showcasing different design styles
- **Visual**: Grid of design pieces
- **Status**: Completed

#### Project 4: WorkHub Mobile App
- **Title**: WorkHub - Task Management App (Proposal)
- **Description**: Designed a comprehensive mobile task management app proposal with detailed use cases, UI/UX flows, and feature roadmap, demonstrating systematic problem-solving and design methodology. Features 8 mandatory features, 4 bonus features, and 1 challenging feature.
- **Technologies**: Flutter, Shared Preferences
- **Key Features**: Project management, task assignment, team collaboration, data persistence
- **Visual**: Use case diagram, UI flow mockups
- **Status**: Proposal Phase

### 5. Contact Section
- **Headline**: "Let's Connect"
- **Content**: 
  - Brief message: "I'm always interested in new opportunities and collaborations."
  - Contact methods:
    - **Phone**: +65 88669245
    - **Email**: xiuchen.w@outlook.com
    - **GitHub**: https://github.com/changxiuchen
- **CTA Button**: "Send me an email" or "Get in touch"

### 6. Footer
- **Content**: 
  - Quick links: Home, About, Projects, Contact
  - Social links: GitHub, LinkedIn (if available)
  - Copyright: © 2025 Chang Xiu Chen. All rights reserved.
  - Tagline: "Steadfast. Reliable. User-Focused."

## Component Structure

```
App.tsx
├── Navigation (Header)
├── Hero Section
├── About Section
├── Experience Section
├── Projects Section
│   ├── ProjectCard (×4)
│   ├── MovieReservationProject
│   ├── FacilityManagementProject
│   ├── UIUXProject
│   └── WorkHubProject
├── Contact Section
└── Footer
```

## Visual Assets

### Images Needed
1. **Hero Background**: Subtle gradient or pattern
2. **About Section**: Professional photo/avatar
3. **Movie Reservation**: 3 screenshots
4. **UI/UX Designs**: 3-5 design pieces
5. **WorkHub**: Use case diagram, UI flow mockups

### Icons
- Use lucide-react for all icons (consistent, professional)
- Examples: Code, Palette, Briefcase, Mail, Github, ExternalLink

## Responsive Design

- **Mobile** (< 640px): Single column, larger touch targets, simplified navigation
- **Tablet** (640px - 1024px): Two-column layouts where appropriate
- **Desktop** (> 1024px): Full multi-column layouts, hover effects

## Interactions & Animations

- **Smooth Scroll**: Page scrolls smoothly to sections
- **Hover Effects**: Subtle color changes, slight scale on cards
- **Transitions**: 200-300ms ease-out for all animations
- **Loading States**: Skeleton loaders for project cards
- **Micro-interactions**: Button feedback, link underlines on hover

## Brand Voice

- Professional yet approachable
- Clear and concise explanations
- Emphasis on problem-solving and reliability
- Friendly tone without being overly casual

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Focus indicators on interactive elements

## Performance

- Lazy load images
- Optimize asset sizes
- Smooth animations (60fps)
- Fast page load (< 3s)

---

## Implementation Checklist

- [ ] Set up color palette in Tailwind/CSS variables
- [ ] Import and configure fonts (Google Fonts)
- [ ] Build Navigation component
- [ ] Build Hero section
- [ ] Build About section
- [ ] Build Experience section
- [ ] Build Projects section with 4 project cards
- [ ] Build Contact section
- [ ] Build Footer
- [ ] Add responsive design
- [ ] Add animations and transitions
- [ ] Optimize images and assets
- [ ] Test across devices
- [ ] Deploy to Vercel
