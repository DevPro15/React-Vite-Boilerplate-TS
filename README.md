# React-Vite + TS + Tailwind Boilerplate

This project is a Vite + TypeScript boilerplate designed to help you build scalable, modular, and high-performance web applications. It follows a clean folder structure, includes essential features like Protected Routes, reusable layouts, and custom hooks, and integrates tools like SVGR and Husky to ensure efficient development and code quality..

![React-Vite-Boilerplate-TS](https://github.com/user-attachments/assets/296dc727-ffbd-4cf5-9cb2-33d400480a18)

## Features

- **Vite + TypeScript**: Lightning-fast build tool with TypeScript support for better development experience and type safety.
- **Protected Routes**: Ensures only authenticated users can access certain pages, enhancing security and user experience by redirecting unauthorized users to login.
- **Layout Management**: Organizes page structure to ensure consistent design, with shared elements like headers and footers across views.
- **Custom Hooks**: Encapsulates reusable logic for modular and maintainable code.
- **SVGR**: Enables easy manipulation and integration of SVG files as React components.
- **Husky Integration**: Automates Git hooks (like pre-commit and pre-push) to enforce code quality through linting, testing, and other tasks before commits.

## Folder Structure

The project is organized with a clean folder structure:

```bash
├── src/
│   ├── assets/            # Static files and media (images, fonts, etc.)
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom hooks for encapsulating logic
│   ├── pages/             # Page components for routing
│   ├── routes/            # routing handling
│   ├── store/             # The store directory contain files relating to global data stores
│   ├── utils/             # Utility functions
│   ├── styles/            # Global Css
│   ├── App.tsx            # Main application entry point
│   ├── main.tsx           # Main render file
│   ├── svg.d.tsx          # Allows TypeScript to recognize SVG files as React components
│   └── vite-env.d.ts      # Provides type definitions for Vite's environment

```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DevPro15/React-Vite-Boilerplate-TS.git

2. Navigate to the project folder:

   ```bash
   cd React-Vite-Boilerplate-TS

3. Install dependencies:

   ```bash
   npm install


### Building for Production

1. To create a production build, run:

   ```bash
   npm run build

### Linting and Husky

This project uses ESLint and Husky for linting and Git hooks. Husky is configured to run lint checks before committing any code.

1. To manually lint your code:

   ```bash
   npm run lint

### License

This project is licensed under the MIT License.

---

This README provides an overview of your project’s features, folder structure, and setup instructions. Let me know if you'd like to customize it further!


