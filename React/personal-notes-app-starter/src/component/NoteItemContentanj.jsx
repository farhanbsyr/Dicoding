import React from "react";
import NotesItemTitle from "./NotesItemTitle";
import NotesItemBody from "./NotesItemBody";

const NotesItemContent = ({ createdAt, title, body }) => {
  return (
    <div className="note-item__content">
      <NotesItemTitle createdAt={createdAt} title={title} />
      <NotesItemBody body={body} />
    </div>
  );
};

export default NotesItemContent;
