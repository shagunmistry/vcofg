# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for the Vedic Center of Greenville, a spiritual center promoting Hindu culture, traditions, and values. The site is built with modern React patterns using TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Commands

- `npm install` or `pnpm install` - Install dependencies
- `npm run dev` or `pnpm dev` - Start development server
- `npm run build` or `pnpm build` - Build for production
- `npm start` or `pnpm start` - Start production server
- `npm run lint` or `pnpm lint` - Run ESLint (currently configured to ignore during builds)

Note: The project supports both `npm` and `pnpm`. Dependencies have been updated for React 19 compatibility.

## Architecture & Structure

### Framework & Tooling
- **Next.js 15.2.4** with App Router (not Pages Router)
- **React 19** with TypeScript
- **Tailwind CSS** for styling with custom orange color scheme
- **shadcn/ui** component library (configured in `components.json`)
- **Lucide React** for icons
- **next-themes** for theme management (light theme default)

### Project Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with Header/Footer
├── page.tsx           # Homepage with hero section and events
├── globals.css        # Global styles and CSS variables
└── [route]/page.tsx   # Individual page routes

components/            # Reusable components
├── ui/               # shadcn/ui components
├── header.tsx        # Main navigation with mobile menu
├── footer.tsx        # Site footer with contact info
└── theme-provider.tsx # Theme context wrapper

lib/
└── utils.ts          # Utility functions (cn helper)

hooks/                # Custom React hooks
```

### Key Components & Patterns

1. **Layout Structure**: Uses a flex layout pattern with Header, main content area, and Footer
2. **Navigation**: Static navigation array in `components/header.tsx` with mobile-responsive menu
3. **Color Scheme**: Orange-based color palette (orange-50 to orange-900) defined in Tailwind config
4. **Typography**: Inter font from Google Fonts
5. **UI Components**: All UI components follow shadcn/ui patterns and conventions

### Configuration Notes
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **Next.js Config**: ESLint and TypeScript errors ignored during builds (likely for deployment flexibility)
- **Images**: Unoptimized images enabled in Next.js config
- **Styling**: CSS variables for theme colors, uses HSL color format

### Content & Pages
The site includes these main sections:
- Homepage with hero section and upcoming events
- E-Samachar (newsletter signup)
- Events listing
- Services information  
- Idols/Deities information
- Membership signup
- About page
- Donations page

### Development Considerations
- All components use proper TypeScript typing
- Mobile-first responsive design patterns
- Uses React Server Components where appropriate
- Client components marked with "use client" directive
- Form handling uses react-hook-form with zod validation (based on dependencies)
- Toast notifications available via sonner
- Charts available via recharts library

### Styling Approach
- Utility-first CSS with Tailwind
- Custom CSS variables for theming in `app/globals.css`
- Component variants handled via `class-variance-authority`
- Consistent orange color scheme throughout
- Dark mode support available but defaults to light theme