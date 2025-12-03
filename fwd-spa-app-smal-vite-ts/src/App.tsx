import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import logo from "./assets/logo.png";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="app-logo" />
          <span className="app-title">FwDays Test SPA (Vite + React + TS)</span>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contacts" className="nav-link">
            Contacts
          </Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} FwDays Test SPA — Demo content
      </footer>
    </div>
  );
};

export default App;
