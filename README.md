# Portfolio Website

This is a personal portfolio website built with modern web technologies.

## Features

*   **Responsive Design**: Looks great on all devices.
*   **Component-Based**: Built with React and shadcn-ui components.
*   **Type-Safe**: Written in TypeScript.
*   **Fast**: Uses Vite for a fast development experience.

## Technologies Used

*   **Vite**: Next-generation frontend tooling.
*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **shadcn-ui**: Re-usable components built using Radix UI and Tailwind CSS.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **React Router**: For routing and navigation.

## Getting Started

### Prerequisites

*   [Node.js](httpss://nodejs.org/) (v18 or higher recommended)
*   [pnpm](httpss://pnpm.io/installation)

### Installation and Running

1.  **Clone the repository:**

    ```bash
    git clone <YOUR_GIT_URL>
    cd portofoliotuti
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm run dev
    ```

    This will start the development server at `http://localhost:5173`.

## Project Structure

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # shadcn-ui components
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Main App component with routing
│   ├── main.tsx          # Entry point
│   └── ...
├── package.json          # Project metadata and dependencies
├── vite.config.ts        # Vite configuration
└── ...
```