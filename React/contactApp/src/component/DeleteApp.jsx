import React from "react";
import { FiDelete } from "react-icons/fi";

const DeleteApp = ({ id, onDelete }) => {
  return (
    <button
      className="contact-item__delete"
      onClick={() => {
        onDelete(id);
      }}
    >
      <FiDelete />
    </button>
  );
};

export default DeleteApp;
