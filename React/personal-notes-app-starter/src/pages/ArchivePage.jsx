import React from "react";
import Navigation from "../component/Navigation";
import NotesList from "../component/NotesList";
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import SearchApp from "../component/SearchApp";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: "",
    };

    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
  }

  onActiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
    console.log(this.state.notes);
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
        ? notes.filter((note) => {
            return note.title.toLowerCase().includes(keyword);
          })
        : notes;

    return (
      <>
        <h2>Catatan Aktif</h2>
        <SearchApp
          keyword={this.state.keyword}
          keywordChange={this.onSearchHandler}
        />
        {(filteredNotes.length === 0 && keyword.trim() !== "") ||
        filteredNotes.length === 0 ? (
          <div className="notes-list-empty">
            <p className="">tidak ada catatan</p>
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
      </>
    );
  }
}

export default ArchivePage;
