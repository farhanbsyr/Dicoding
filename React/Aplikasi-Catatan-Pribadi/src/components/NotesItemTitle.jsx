import React from "react";

const NotesItemTitle = ({ title, createdAt }) => {
  return (
    <>
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{createdAt}</p>
    </>
  );
};

export default NotesItemTitle;
