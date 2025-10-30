# BPL Dream 25

This project is a web application for creating and managing a "BPL Dream 25" team. Users can select players from a list of available players and see their selected team.

## Live Demo

You can view the deployed application here: [loquacious-sunshine-0ef607.netlify.app](https://loquacious-sunshine-0ef607.netlify.app)

## Features

*   View a list of available players.
*   Select players to add to your dream team.
*   View your selected team.
*   Responsive design for use on different devices.

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite
    *   Tailwind CSS
    *   daisyUI
*   **Linting:**
    *   ESLint

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your-username/bpl-dream-25.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```

### Usage

To run the application in development mode, use the following command:

```sh
npm run dev
```

This will start the development server, and you can view the application at `http://localhost:5173` (or another port if 5173 is in use).

To build the application for production, use the following command:

```sh
npm run build
```

This will create a `dist` folder with the production-ready files.

## Project Structure

The project is structured as follows:

```
.
├── public
│   └── data.json       # JSON file with player data
├── src
│   ├── assets          # Images and other static assets
│   ├── components      # React components
│   │   ├── Available   # Components for available players
│   │   ├── Footer      # Footer component
│   │   ├── Navbar      # Navbar component
│   │   └── Selected    # Components for selected players
│   ├── App.css         # Main CSS file for the application
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global CSS file
│   └── main.jsx        # Entry point of the application
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```