# Weather Dashboard

A modern, responsive weather dashboard application that provides real-time weather information and forecasts for cities worldwide.

## Features

- **Current Weather**: Get detailed weather information including temperature, humidity, wind speed, visibility, and UV index
- **5-Day Forecast**: View upcoming weather conditions for better planning
- **City Search**: Search for weather information in any city globally
- **Location-Based Weather**: Get weather for your current location
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## How to edit this code

There are several ways to modify this application:

**Use your preferred IDE**

Clone this repository and work locally with your favorite development environment.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript development
- **React** - Modern UI library for building user interfaces
- **shadcn/ui** - Beautiful and accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:5173`

## Deployment

This application can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory.
