import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { DashboardPage } from "./pages/DashboardPage";
import { ExpensesPage } from "./pages/ExpensesPage";
import { IncomePage } from "./pages/IncomePage";
import { ReportsPage } from "./pages/ReportsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { Pages } from "./pages/Root";

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
        path: Pages.EXPENSES,
        element: <ExpensesPage />,
      },
      {
        path: Pages.INCOME,
        element: <IncomePage />,
      },
      {
        path: Pages.REPORTS,
        element: <ReportsPage />,
      },
      {
        path: Pages.SETTINGS,
        element: <SettingsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
