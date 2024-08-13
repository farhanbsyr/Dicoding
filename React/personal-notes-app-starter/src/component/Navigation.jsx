import React from "react";
import { Link } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";
import HomePage from "../pages/HomePage";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link id="tai" to="/" element={<HomePage />}>
            <h3>Aplikasi Catatan</h3>
          </Link>
        </li>
        <li>
          <Link id="tai" to="/Archive">
            Arsip
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
