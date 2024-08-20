import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("/");

  const styles = {
    base: "w-auto text-center text-sky-500 p-4 border-b border-secondary text-xl cursor-pointer hover:bg-secondary hover:text-white uppercase",
    selected:
      "w-auto text-center text-white p-4 border-b border-secondary text-xl cursor-pointer bg-secondary uppercase",
  };

  ("w-auto text-center text-white p-4 border-b border-secondary text-xl cursor-pointer bg-secondary uppercase");

  const handleClick = (path: string) => {
    setSelected(path);
    navigate(path);
  };

  return (
    <aside className="border-r border-secondary w-64 ">
      <nav>
        <ul className="">
          <li
            className={selected === "/" ? styles.selected : styles.base}
            onClick={() => handleClick("/")}
          >
            <h1>Dashboard</h1>
          </li>
          <li
            className={selected === "/expenses" ? styles.selected : styles.base}
            onClick={() => handleClick("/expenses")}
          >
            <h1>Expenses</h1>
          </li>
          <li
            className={selected === "/income" ? styles.selected : styles.base}
            onClick={() => handleClick("/income")}
          >
            <h1>Income</h1>
          </li>
          <li
            className={selected === "/reports" ? styles.selected : styles.base}
            onClick={() => handleClick("/reports")}
          >
            <h1>Reports</h1>
          </li>
          <li
            className={selected === "/settings" ? styles.selected : styles.base}
            onClick={() => handleClick("/settings")}
          >
            <h1>Settings</h1>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
