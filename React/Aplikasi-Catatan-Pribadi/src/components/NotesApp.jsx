import React from "react";
import Header from "./Header";
import NotesInput from "./NotesInput";
import { getInitialData, showFormattedDate } from "../utils";
import NotesList from "./NotesList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      filteredNotes: [],
      search: "",
    };
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onAddSearchHandler = this.onAddSearchHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const filteredNotes = this.state.filteredNotes.filter(
      (note) => note.id !== id
    );

    this.setState({ notes, filteredNotes });
    console.log(filteredNotes);
  }

  onActiveHandler(id) {
    this.setState(() => {
      const updatedNotes = this.state.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: false };
        }
        return note;
      });
      const updateFilter = this.state.filteredNotes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: false };
        }
        return note;
      });
      console.log(updateFilter);
      console.log(updatedNotes);
      return { notes: updatedNotes, filteredNotes: updateFilter };
    });
  }

  onArchivedHandler(id) {
    this.setState(() => {
      const updatedNotes = this.state.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: true };
        }
        return note;
      });
      const updateFilter = this.state.filteredNotes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: true };
        }
        return note;
      });
      return { notes: updatedNotes, filteredNotes: updateFilter };
    });
  }
  // coba pake if untuk ngebalikin penggunaan notes sebagai dtbase
  onAddSearchHandler({ search }) {
    if (search.trim() === "") {
      this.setState({ filteredNotes: [] });
    }
    const filteredNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.title.toLowerCase().includes(!search.toLowerCase())
    );
    this.setState({ filteredNotes, search });
    console.log(filteredNotes);
  }
  onAddNotesHandler({ title, body }) {
    const formattedDate = showFormattedDate(new Date());
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: formattedDate,
            archived: false,
          },
        ],
        filteredNotes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: formattedDate,
            archived: false,
          },
        ],
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Header addSearch={this.onAddSearchHandler} />
        <NotesInput addNotes={this.onAddNotesHandler} />
        <NotesList
          notes={
            this.state.filteredNotes.length > 0 || this.state.search !== ""
              ? this.state.filteredNotes
              : this.state.notes
          }
          onArchive={this.onArchivedHandler}
          onDelete={this.onDeleteHandler}
          onActive={this.onActiveHandler}
        />
      </>
    );
  }
}

export default NotesApp;
