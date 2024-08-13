import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ onActive, notes, onDelete, onArchive }) => {
  // Filter notes based on archived status
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  // Check if archivedNotes is empty
  const isArchivedEmpty = archivedNotes.length === 0;

  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>

      {activeNotes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list ">
          {activeNotes.map((note) => (
            <NotesItem
              key={note.id}
              onArchive={onArchive}
              id={note.id}
              archived={note.archived}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      )}

      <h2>Arsip</h2>

      {isArchivedEmpty ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {archivedNotes.map((note) => (
            <NotesItem
              key={note.id}
              onActive={onActive}
              id={note.id}
              archived={note.archived}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
