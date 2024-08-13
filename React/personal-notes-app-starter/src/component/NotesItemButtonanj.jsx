import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";
import ButtonActive from "./ButtonActive";

const NotesItemButton = ({ onDelete, id, onArchive, onActive, archived }) => {
  return (
    <div className="note-item__action">
      <ButtonDelete onDelete={onDelete} id={id} />
      {archived ? (
        <ButtonActive onActive={onActive} id={id} />
      ) : (
        <ButtonArchive onArchive={onArchive} id={id} onActive={onActive} />
      )}
    </div>
  );
};

export default NotesItemButton;
