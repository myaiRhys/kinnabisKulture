# 🌿 CannaShop - Cannabis E-Commerce Platform

A modern, full-featured e-commerce platform for cannabis products built with Next.js 14, TypeScript, and TailwindCSS.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Integration Points](#integration-points)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

CannaShop is a comprehensive e-commerce platform designed specifically for the cannabis industry. It includes features for product browsing, cart management, secure checkout, age verification, and user account management.

**Current Status:** Foundation Build Complete ✅
- ✅ Core UI Components
- ✅ Product Catalog (50 mock products)
- ✅ Shopping Cart with Zustand
- ✅ User Authentication Flow
- ✅ Age Verification Components
- ✅ Responsive Design
- ⏳ Backend API (Integration Ready)
- ⏳ Payment Processing (Integration Ready)
- ⏳ Cloudinary Images (Integration Ready)
- ⏳ Onfido Verification (Integration Ready)

## ✨ Features

### Implemented

- **Product Catalog**
  - 50+ mock products across 5 categories (Flower, Edibles, Paraphernalia, Concentrates, Vapes)
  - Product filtering and search
  - Detailed product pages with THC/CBD information
  - Responsive product grid

- **Shopping Experience**
  - Add to cart functionality
  - Real-time cart updates
  - Cart persistence with localStorage
  - Dynamic cart badge on header
  - Cart summary with delivery calculations

- **User Authentication**
  - Login/Register pages
  - Age verification modal
  - ID document upload interface
  - Protected routes

- **UI/UX**
  - Smooth animations with Framer Motion
  - Custom cannabis-themed color palette
  - Responsive mobile-first design
  - Accessible form components
  - Loading states and error handling

### Coming Soon

- Backend API integration
- Real payment processing
- Order management system
- Admin dashboard
- Product search with Algolia
- Email notifications
- Real-time order tracking

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

### Planned Integrations
- **Database:** PostgreSQL + Prisma ORM
- **Images:** Cloudinary
- **Age Verification:** Onfido API
- **Payments:** TBD (Cannabis-friendly processor)
- **Backend:** Express.js + JWT Auth

## 📁 Project Structure

```
cannabis-shop/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── auth/               # Authentication pages
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── verify-age/
│   │   ├── products/           # Product pages
│   │   │   ├── [id]/           # Dynamic product detail
│   │   │   └── page.tsx        # Product listing
│   │   ├── cart/               # Shopping cart
│   │   ├── checkout/           # Checkout flow
│   │   ├── account/            # User account
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Badge.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── products/           # Product components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ProductDetail.tsx
│   │   ├── cart/               # Cart components
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── CartDrawer.tsx
│   │   └── auth/               # Auth components
│   │       ├── AgeGate.tsx
│   │       └── AgeVerificationUpload.tsx
│   └── lib/
│       ├── store/              # Zustand stores
│       │   ├── cartStore.ts    # Shopping cart state
│       │   └── authStore.ts    # Auth state
│       ├── api/
│       │   └── client.ts       # API client (placeholder)
│       ├── types/
│       │   └── index.ts        # TypeScript types
│       ├── mockData.ts         # Mock product data
│       └── utils.ts            # Utility functions
├── public/
│   └── images/                 # Static images
├── .env.example                # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/myaiRhys/kinnabisKulture.git
   cd kinnabisKulture
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration (optional for now).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Files to Customize

- **`src/lib/mockData.ts`** - Add/edit products
- **`tailwind.config.ts`** - Customize colors and theme
- **`src/app/globals.css`** - Global styles
- **`src/components/layout/Header.tsx`** - Site navigation

### Adding New Products

Edit `src/lib/mockData.ts`:

```typescript
{
  id: '51',
  sku: 'NEW-001',
  name: 'Your Product Name',
  category: 'flower', // or 'edibles', 'paraphernalia', etc.
  description: 'Product description',
  thcPercentage: 20,
  price: 199,
  stockQuantity: 50,
  imageUrl: '/images/placeholder-product.png',
  imageUrls: ['/images/placeholder-product.png'],
  strainType: 'hybrid', // optional: 'indica', 'sativa', 'hybrid'
  isActive: true,
  createdAt: new Date().toISOString(),
}
```

## 🔌 Integration Points

### TODO Comments in Code

Search for `// TODO:` to find integration points:

```bash
grep -r "TODO:" src/
```

### Phase 2: Backend Integration

1. **Database Setup**
   ```bash
   npm install @prisma/client
   npx prisma init
   ```
   - Copy schema from business plan
   - Run migrations: `npx prisma migrate dev`

2. **API Endpoints**
   - Replace `src/lib/api/client.ts` stubs with real endpoints
   - Implement JWT authentication
   - Connect to PostgreSQL

3. **Cloudinary Integration**
   ```bash
   npm install cloudinary next-cloudinary
   ```
   - Update `ProductCard` to use Cloudinary images
   - Create upload component for admin

4. **Onfido Age Verification**
   ```bash
   npm install @onfido/api
   ```
   - Implement webhook in backend
   - Update `AgeVerificationUpload.tsx`

5. **Payment Processing**
   - Research cannabis-friendly processor
   - Install SDK
   - Build checkout flow

### Environment Variables Needed

See `.env.example` for required variables:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Cloudinary config
- `ONFIDO_API_TOKEN` - Onfido verification
- `DATABASE_URL` - PostgreSQL connection
- `JWT_SECRET` - Authentication secret
- `PAYMENT_API_KEY` - Payment processor key

## 🌐 Deployment

### Vercel (Recommended for Frontend)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t cannashop .
docker run -p 3000:3000 cannashop
```

## 🎨 Design System

### Colors

- **Cannabis Green:** `#22c55e` (cannabis-500)
- **Sky Blue:** `#0ea5e9` (sky-500)
- **Gradients:** `gradient-hero`, `gradient-card`

### Components

All UI components support consistent props:
- `Button`: variants (primary, secondary, outline), sizes (sm, md, lg)
- `Input`: label, error, all native input props
- `Badge`: variants (primary, secondary, success, warning)
- `Modal`: isOpen, onClose, title, maxWidth

## 🤝 Contributing

This is a private project, but contributions from team members are welcome!

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Wait for code review

## 📄 License

Proprietary - All rights reserved

## 🔒 Legal Compliance

⚠️ **Important:** This platform is designed for legal cannabis sales in jurisdictions where cannabis is legal. Ensure compliance with:
- Age verification requirements (18+ in South Africa)
- POPIA (Protection of Personal Information Act)
- Local cannabis regulations
- Delivery restrictions

## 📞 Support

For questions or issues:
- Create an issue in GitHub
- Contact the development team

---

**Built with ❤️ for the cannabis community**
