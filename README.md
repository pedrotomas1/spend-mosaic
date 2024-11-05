# Spend Mosaic - Personal Finance App

## Overview

The Personal Finance App is a web application designed to help you manage and track your expenses and income. It provides an intuitive interface to add, view, and analyze your financial transactions, along with features for generating reports and tracking balances.

## Technologies Used

- **Frontend**:

  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript.
  - [Redux Toolkit](https://redux-toolkit.js.org/): A library for managing global state.
  - [React Router](https://reactrouter.com/): For client-side routing.
  - [Vercel](https://vercel.com/): For deploying the frontend.

- **Backend**:
  - [Node.js](https://nodejs.org/): JavaScript runtime for building the server.
  - [Express](https://expressjs.com/): Web application framework for Node.js.
  - [TypeScript](https://www.typescriptlang.org/): For type safety in the backend.
  - [Prisma](https://www.prisma.io/): ORM for interacting with the database.
  - [PostgreSQL](https://www.postgresql.org/): Relational database for storing financial data.
  - [Heroku](https://www.heroku.com/): For deploying the backend.

## Features

- **Dashboard**:

  - Overview of total income, total expenses, and current balance.
  - Basic breakdown of financial data.

- **Expenses Management**:

  - Add, view, and categorize expenses.
  - List of past expenses with sorting and filtering options.

- **Income Management**:

  - Add, view, and categorize income.
  - List of past income transactions.

- **Reports** (Upcoming):
  - Generate simple reports showing income vs. expenses.
  - Visualize data with charts and graphs.

## Milestones

### Phase 1: Core Features (MVP)

- [x] Setup project repository and initial configuration.
- [x] Develop frontend layout with static header, footer, and sidebar.
- [x] Implement basic pages with React router: Dashboard, Expenses, Income.
- [ ] Set up Redux for state management.
- [x] Create API endpoints for adding and retrieving expenses and income.
- [ ] Connect frontend to backend API.
- [ ] Deploy frontend and backend.

### Phase 2: Enhancements

- [ ] Implement form validation and error handling.
- [ ] Add advanced filtering and sorting options.
- [ ] Develop dynamic reports and integrate charts.
- [ ] Add user authentication (JWT-based).

### Phase 3: Advanced Features

- [ ] Support for recurring transactions.
- [ ] Manage multiple financial accounts.
- [ ] Data export functionality (CSV/Excel).
- [ ] Integration with external bank services (optional).

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- PostgreSQL database set up (locally or remotely).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/spend-mosaic.git
   ```

2. **Install frontend dependencies**:

   ```bash
   cd spend-mosaic/frontend
   npm install
   ```

3. **Install backend dependencies**:

   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**:

   - Create a `.env` file in both `/frontend` and `/backend` directories and add necessary environment variables (e.g., API URLs, database credentials).

5. **Run the development server**:

   - For frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```
   - For backend:
     ```bash
     cd ../backend
     npm run dev
     ```

6. **Access the app**:
   - Open your browser and navigate to `http://localhost:5173` for the frontend.
   - Ensure the backend is running at `http://localhost:5000` or your configured port.

## Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com/).
- **Backend**: Deployed on [Heroku](https://www.heroku.com/).

## Contributing

As this is a personal project, contributions are not currently accepted. However, feedback and suggestions are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, you can reach me at [1pedrotomas1@gmail.com](mailto:1pedrotomas1@gmail.com).
