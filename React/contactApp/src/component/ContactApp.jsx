import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AdddPage";
import HomePageWrapper from "../pages/HomePage";

function ContactApp() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContactApp;
