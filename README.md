# Saravana Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [https://haripriya2-2k5.github.io/SARAVANA-PORTFOLIO/](https://haripriya2-2k5.github.io/SARAVANA-PORTFOLIO/)

## 🛠️ Technologies Used

- **Vite** - Fast build tool and development server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Vitest** - Unit testing framework

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Haripriya2-2k5/SARAVANA-PORTFOLIO.git
cd SARAVANA-PORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment:

1. GitHub Actions builds the project
2. The build artifacts are uploaded
3. The site is deployed to GitHub Pages

### Manual Deployment

You can also trigger a manual deployment from the Actions tab in GitHub.

### GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. The workflow will handle the rest automatically

## 📁 Project Structure

```
SARAVANA-PORTFOLIO/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── assets/                # Images and media
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   └── ...               # Custom components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── pages/                # Page components
│   ├── test/                 # Test files
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Haripriya**

- GitHub: [@Haripriya2-2k5](https://github.com/Haripriya2-2k5)

## ⭐ Show your support

Give a ⭐️ if you like this project!
