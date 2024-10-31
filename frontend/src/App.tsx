import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
