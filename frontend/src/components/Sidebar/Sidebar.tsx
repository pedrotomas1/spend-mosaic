import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="border-r border-secondary w-64 p-4">
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
