import React from "react";
import NotesItemButton from "./NotesItemButton";
import NotesItemContent from "./NoteItemContent";

const NotesItem = ({
  onActive,
  onDelete,
  onArchive,
  createdAt,
  archived,
  title,
  body,
  id,
}) => {
  return (
    <div className=" note-item">
      <NotesItemContent createdAt={createdAt} title={title} body={body} />
      <NotesItemButton
        archived={archived}
        onArchive={onArchive}
        id={id}
        onDelete={onDelete}
        onActive={onActive}
      />
    </div>
  );
};

export default NotesItem;
