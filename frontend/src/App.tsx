import React, { Children } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { DashboardPage } from "./pages/DashboardPage";
import { ExpensesPage } from "./pages/ExpensesPage";
import { IncomePage } from "./pages/IncomePage";
import { ReportsPage } from "./pages/ReportsPage";
import { SettingsPage } from "./pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
      },
      {
        path: "income",
        element: <IncomePage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
