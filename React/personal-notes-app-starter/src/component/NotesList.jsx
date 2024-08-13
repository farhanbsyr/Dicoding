import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({
  onActive,
  notes,
  onDelete,
  onArchive,
  onSearch,
  keyword,
}) => {
  // Filter notes based on archived status

  // Check if archivedNotes is empty

  return (
    <div className="notes-list ">
      {notes.map((note) => {
        return (
          <NotesItem
            key={note.id}
            onActive={onActive}
            onArchive={onArchive}
            id={note.id}
            archived={note.archived}
            onDelete={onDelete}
            {...note}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
