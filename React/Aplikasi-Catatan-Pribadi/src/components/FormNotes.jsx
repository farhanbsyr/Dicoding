import React from "react";

class FormNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    (this.onJudulChangeHandler = this.onJudulChangeHandler.bind(this)),
      (this.onMessageChangeHandler = this.onMessageChangeHandler.bind(this)),
      (this.onSubmitHandler = this.onSubmitHandler.bind(this));
  }

  onJudulChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onMessageChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <>
        <p className="note-input__title__char-limit">
          Sisa karakter: {50 - this.state.title.length}
        </p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className="note-input__title"
            type="text"
            maxLength={50}
            placeholder="Ini adalah judul ..."
            value={this.state.judul}
            onChange={this.onJudulChangeHandler}
          />
          <textarea
            className="note-input__body"
            name="message"
            id="message"
            placeholder="Tuliskan catatan mu di sini ..."
            value={this.state.body}
            onChange={this.onMessageChangeHandler}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FormNotes;
