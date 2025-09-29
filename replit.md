# Urban Threads - Premium Streetwear E-commerce Platform

## Overview

Urban Threads is a modern e-commerce platform for premium streetwear and urban fashion. Built as a React-based single-page application, it focuses on showcasing trendy t-shirts, hoodies, and street fashion with an emphasis on visual appeal and user experience. The platform features product browsing, shopping cart functionality, and comprehensive customer service pages including size guides, shipping information, and return policies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system variables and shadcn/ui component library
- **Routing**: React Router DOM for client-side navigation with dedicated pages for products, about, contact, and customer service
- **State Management**: React hooks for local component state, with React Query (@tanstack/react-query) for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives for accessibility

### Design System
- **Color Scheme**: HSL-based color system with CSS custom properties for theming
- **Typography**: Inter font family for modern, readable text
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animations**: Custom CSS transitions and Tailwind animation utilities

### Component Structure
- **Layout Components**: Header with navigation, Footer with links and social media
- **Product Components**: ProductCard for product display, FeaturedProducts grid layout
- **Interactive Components**: Shopping cart, newsletter signup, contact forms
- **Content Components**: Hero section, About section with company story
- **Utility Components**: Toast notifications, loading states, error boundaries

### Form Handling
- **Validation**: React Hook Form with resolver support for form validation
- **User Feedback**: Toast notifications using sonner for form submissions and user actions
- **Input Components**: Custom Input, Textarea, and Select components with consistent styling

### Asset Management
- **Images**: Static image imports for product photos and hero content
- **Icons**: Lucide React for consistent iconography throughout the application
- **Fonts**: Google Fonts (Inter) loaded via HTML link tags

## External Dependencies

### UI and Styling Libraries
- **shadcn/ui**: Complete UI component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Headless, accessible UI primitives for complex components
- **Class Variance Authority**: For creating consistent component variants
- **Lucide React**: Modern icon library with React components

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type checking and enhanced developer experience
- **ESLint**: Code linting with React-specific rules
- **PostCSS**: CSS processing with Tailwind CSS integration

### State Management and Data Fetching
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **React Router**: Client-side routing and navigation

### Additional Features
- **Embla Carousel**: Carousel/slider functionality for product displays
- **Date-fns**: Date manipulation utilities
- **Next Themes**: Theme switching capabilities (though currently using light theme)
- **Input OTP**: One-time password input components for potential authentication features

### Development Dependencies
- **Lovable Tagger**: Development-only component tagging for the Lovable platform
- **React Developer Tools**: Implicit support through React DevTools extension compatibility

The application is designed to be deployed as a static site, with all content and functionality handled client-side. Future backend integration points are prepared through the React Query setup and form handling architecture.