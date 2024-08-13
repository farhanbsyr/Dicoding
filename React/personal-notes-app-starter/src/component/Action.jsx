import React from "react";
import { Link } from "react-router-dom";

function Action() {
  return (
    <Link to="/addNotes">
      <button className="action">+</button>
    </Link>
  );
}

export default Action;
