import React from "react";
import FormNotes from "./FormNotes";

const NotesInput = ({ addNotes }) => {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <FormNotes addNotes={addNotes} />
    </div>
  );
};

export default NotesInput;
