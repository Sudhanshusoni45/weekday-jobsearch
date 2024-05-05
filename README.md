## Installation
To get started with this project, clone the repository and install the dependencies:

git clone https://github.com/sudhanshusoni45/weekday-jobsearch.git
cd weekday-jobsearch
npm install

To run the app locally, use the following command:

npm run dev

## Project Directory Structure

Here is a high-level overview of the project's directory structure:
project-name/
│
├── src/                     # Source files
│   ├── containers/          # Container components
│   │   └── JobListingPage/  # Job listing page container
│   │       ├── JobListingPage.module.css  # Styles for the JobListingPage
│   │       └── JobListingPage.jsx         # Job listing page component
│   ├── components/          # Reusable components
│   ├── utils/               # Utility functions
│   └── app.js               # Application entry point
│
├── public/                  # Static files
│   ├── index.html           # HTML entry point
│   └── favicon.ico          # Favicon
│
├── .gitignore               # Specifies intentionally untracked files to ignore
├── package.json             # NPM package manager file
├── README.md                # The top-level README for developers using this project
└── LICENSE                  # License file

### Key Technologies Used

- **React 18**: for building user interfaces.
- **Vite**: for fast development and build tooling.
- **Redux Toolkit**: for state management.
- **Material UI**: for styled components and icons.
- **ESLint and Prettier**: for code linting and formatting.
