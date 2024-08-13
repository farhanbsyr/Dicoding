import React from "react";

const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button
      className="note-item__delete-button"
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </button>
  );
};

export default ButtonDelete;
