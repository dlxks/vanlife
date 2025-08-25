# VanLife - Van Rental Platform

A modern, responsive van rental platform built with React, TypeScript, and Vite. VanLife connects adventure seekers with van owners, making it easy to find the perfect van for your next road trip.

## 🚀 Features

- **Browse Vans**: Explore a wide selection of vans available for rent
- **Smart Filtering**: Filter vans by type (Simple, Rugged, Luxury)
- **Detailed Listings**: View comprehensive van details including pricing, images, and descriptions
- **Host Dashboard**: Van owners can manage their listings, track income, and handle reviews
- **Authentication**: Secure login system with protected routes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Icons**: Custom SVG assets
- **Development**: ESLint + TypeScript compiler

## 📦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vanlife
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚗 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
vanlife/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Card/      # Card components for van listings
│   │   ├── Header/    # Navigation header
│   │   ├── Badge/     # Type badges for vans
│   │   └── Loader/    # Loading components
│   ├── pages/         # Page components
│   │   ├── Home/      # Landing page
│   │   ├── Vans/      # Van browsing and details
│   │   ├── Host/      # Host management dashboard
│   │   └── Login/     # Authentication
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── assets/        # Static assets and images
├── public/            # Public assets
└── package.json       # Dependencies and scripts
```

## 🎨 Van Types

- **Simple**: Affordable and practical vans for basic adventures
- **Rugged**: Durable vans built for off-road adventures
- **Luxury**: Premium vans with all the comforts of home

## 🔐 Authentication

The platform includes a secure authentication system that:
- Protects host dashboard routes
- Manages user sessions
- Provides appropriate access controls

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS, ensuring optimal experience across all device sizes.

## 🚦 Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**VanLife** - Your adventure starts here! 🚐✨
