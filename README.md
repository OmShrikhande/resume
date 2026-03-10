# Devashish Portfolio

A modern, interactive portfolio website showcasing innovative projects in AI, web development, and software engineering. Built with cutting-edge technologies to deliver a seamless user experience.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Interactive Projects**: Detailed project showcases with live demos and GitHub links
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Type-Safe**: Full TypeScript implementation for reliability
- **Accessible**: WCAG compliant design and navigation

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Testing
- **Playwright** - End-to-end testing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrDevashish-777/devashish-portfolio.git
   cd devashish-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
devashish-portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   │   ├── CustomCursor.tsx
│   │   ├── Terminal.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   └── lib/               # Utility functions
├── tests/                 # Playwright tests
├── playwright.config.ts   # Playwright configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## 🧪 Testing

Run the test suite using Playwright:

```bash
# Run all tests
npm run test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in specific browser
npx playwright test --project=chromium
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Your portfolio will be live at `your-project.vercel.app`

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Devashish**
- GitHub: [@MrDevashish-777](https://github.com/MrDevashish-777)
- LinkedIn: [Your LinkedIn Profile]
- Email: [your.email@example.com]

---

⭐ **Star this repo** if you found it helpful!