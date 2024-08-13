import React from "react";
import { archiveNote } from "../utils/local-data";

const ButtonArchive = ({ id, onArchive }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => {
        onArchive(id);
      }}
    >
      Archive
    </button>
  );
};

export default ButtonArchive;
