import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const styles =
    "w-auto text-center text-sky-500 p-4 border-b border-secondary text-xl cursor-pointer hover:bg-secondary hover:text-white uppercase";

  const handleClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <aside className="border-r border-secondary w-64 ">
      <nav>
        <ul className="">
          <li className={styles} onClick={() => handleClick('/')}>
            <h1>Dasboard</h1>
          </li>
          <li className={styles} onClick={() => handleClick('/expenses')}>
            <h1>Expenses</h1>
          </li>
          <li className={styles} onClick={() => handleClick('/income')}>
            <h1>Income</h1>
          </li>
          <li className={styles} onClick={() => handleClick('/reports')}>
            <h1>Reports</h1>
          </li>
          <li className={styles} onClick={() => handleClick('/settings')}>
            <h1>Settings</h1>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
