# NewGrad.com Job Board Platform

## Overview

NewGrad.com is a modern job board platform designed specifically for new graduates and entry-level positions. The application provides a RESTful API for managing job listings and applications, with a clean, professional interface that balances youthful energy with credibility. The platform is built with a focus on clarity, approachability, and trust-building for both job seekers and employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing

**UI Component System**
- Shadcn UI component library (New York style variant) for consistent, accessible components
- Radix UI primitives for unstyled, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Less CSS preprocessor for advanced styling features (variables, mixins, nesting)
- CVA (Class Variance Authority) for managing component variants

**Less CSS Integration**
- **Variables** (`client/src/styles/variables.less`) - Project-wide design tokens including colors, spacing, typography, shadows, and transitions
- **Mixins** (`client/src/styles/mixins.less`) - Reusable style patterns for buttons, cards, flexbox helpers, text truncation, and responsive breakpoints
- **Components** (`client/src/styles/components.less`) - Component-specific styles using BEM naming convention with Less features (nesting, color functions)
- **Features**: Variables, mixins, nested selectors, BEM methodology, color manipulation functions (darken, lighten, fade), parent selectors (&), and imports
- **Usage**: Less files are automatically compiled by Vite with zero configuration required
- **Demo**: Visit `/less-demo` route to see interactive examples of all Less features

**Design System**
- Typography: Inter font family from Google Fonts
- Color system: HSL-based custom properties for flexible theming
- Spacing: Tailwind's standardized scale (2, 4, 6, 8, 12 units)
- Responsive breakpoints: Mobile-first with md (768px) and lg breakpoints
- Component styling: Professional, clean aesthetic inspired by LinkedIn, Linear, and Stripe

**State Management**
- TanStack Query (React Query) for server state management and API data caching
- React Hook Form with Zod resolvers for form state and validation
- React Context for global UI state (toasts, tooltips)

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript for type safety across the stack
- ESM (ES Modules) for modern JavaScript module handling

**API Design**
- RESTful API architecture with conventional HTTP methods (GET, POST, PUT, DELETE)
- JSON request/response format
- CORS enabled for cross-origin requests
- Request logging middleware for debugging and monitoring

**Data Layer**
- Drizzle ORM for type-safe database operations
- PostgreSQL as the production database (via Neon serverless driver)
- In-memory storage implementation for development/testing
- Schema-first design with Drizzle Kit for migrations

**Session Management**
- Express session middleware with PostgreSQL session store (connect-pg-simple)
- Cookie-based session handling for authentication persistence

### Database Schema

**Jobs Table**
- Primary entity for job listings
- Fields: id (UUID), title, company, location, type (Full-time/Part-time/Contract/Internship), description, requirements (array), salary, experienceLevel
- Auto-generated UUIDs via PostgreSQL `gen_random_uuid()`

**Applications Table**
- Stores job applications with applicant information
- Fields: id (UUID), jobId (foreign reference), fullName, email, phone, resumeUrl, coverLetter, status
- Status workflow: pending → reviewing → accepted/rejected

**Users Table**
- Authentication/authorization foundation (currently minimal implementation)
- Fields: id (UUID), username (unique), password
- Prepared for future auth integration

### Validation & Type Safety

**Schema Validation**
- Drizzle-Zod integration for runtime validation from database schemas
- Zod schemas for API request validation
- Shared schema definitions between client and server (`@shared/schema`)
- TypeScript inference for type-safe data access

### Development Environment

**Path Aliases**
- `@/` → client source directory
- `@shared/` → shared code between client/server
- `@assets/` → static assets directory

**Development Tools**
- TSX for running TypeScript server code in development
- Hot module replacement via Vite for instant feedback
- Replit-specific plugins for enhanced development experience (cartographer, dev banner, error overlay)

**Build Process**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Single production command runs bundled server serving static client

## External Dependencies

### Core Dependencies

**Database & ORM**
- `@neondatabase/serverless` - Serverless PostgreSQL driver for Neon database
- `drizzle-orm` - Lightweight TypeScript ORM
- `drizzle-kit` - CLI tool for schema migrations and database management
- `connect-pg-simple` - PostgreSQL session store for Express sessions

**UI Component Libraries**
- `@radix-ui/*` - Collection of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, toast, etc.)
- `cmdk` - Command palette component
- `embla-carousel-react` - Carousel/slider functionality
- `lucide-react` - Icon library

**Forms & Validation**
- `react-hook-form` - Performant form state management
- `@hookform/resolvers` - Validation resolver adapters
- `zod` - TypeScript-first schema validation
- `drizzle-zod` - Zod schema generation from Drizzle tables

**Styling**
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Component variant management
- `clsx` & `tailwind-merge` - Conditional className utilities
- `autoprefixer` - CSS vendor prefix automation

**Data Fetching**
- `@tanstack/react-query` - Async state management and caching

**Utilities**
- `date-fns` - Date manipulation and formatting
- `nanoid` - Unique ID generation

### Development Dependencies

The application is configured for deployment on Replit with specialized tooling for that environment, though it can run in any Node.js environment with PostgreSQL access.