import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import Navigation from "./component/Navigation";
import AddPage from "./pages/AddPage";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main className="note-app__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/addNotes" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
