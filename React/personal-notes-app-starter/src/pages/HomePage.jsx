import React from "react";
import Navigation from "../component/Navigation";
import NotesList from "../component/NotesList";
import { deleteContact, getContacts } from "../../../contactApp/src/data/data";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  unarchiveNote,
} from "../utils/local-data";
import SearchApp from "../component/SearchApp";
import Action from "../component/Action";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: "",
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);

    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
    console.log(this.state.notes);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState({
      notes: getActiveNotes(), // Assuming this fetches updated active notes
    });
  }

  onActiveHandler(id) {
    unarchiveNote(id);
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }
  render() {
    const { notes, keyword } = this.state;

    const filteredNotes =
      keyword.trim() !== ""
        ? notes.filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
          )
        : notes;
    return (
      <>
        <h2>Catatan Aktif</h2>
        <SearchApp
          keyword={this.state.keyword}
          keywordChange={this.onSearchHandler}
        />
        {(keyword.trim() !== "" && filteredNotes.length === 0) ||
        filteredNotes.length === 0 ? (
          <div className="notes-list-empty">
            <p className="">Tidak ada catatan</p>
          </div>
        ) : (
          <NotesList
            keyword={this.state.keyword}
            notes={filteredNotes}
            onActive={this.onActiveHandler}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        )}
        <div className="homepage__action">
          <Action />
        </div>
      </>
    );
  }
}

export default HomePage;
