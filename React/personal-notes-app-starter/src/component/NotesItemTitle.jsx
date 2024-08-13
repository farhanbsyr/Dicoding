import React from "react";
import { Link } from "react-router-dom";

const NotesItemTitle = ({ title, createdAt }) => {
  return (
    <>
      <Link className="note-item__title">{title}</Link>
      <p className="note-item__createdAt">{createdAt}</p>
    </>
  );
};

export default NotesItemTitle;
