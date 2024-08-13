import React from "react";
import Action from "../component/Action";

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitEventHander = this.onSubmitEventHander.bind(this);
  }
  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML, // Ingat! innerHTML, bukan value.
      };
    });
  }

  onTitleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onSubmitEventHander(event) {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState(() => {
      return {
        name: "",
        tag: "",
      };
    });
    console.log(this.state.body);
  }

  render() {
    return (
      <>
        <form
          action=""
          onSubmit={this.onSubmitEventHander}
          className="add-new-page__input"
        >
          <input
            onChange={this.onTitleHandler}
            value={this.state.title}
            placeholder="Catatan rahasia"
            className="add-new-page__input__title"
            type="text"
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Sebenarnya saya adalah ...."
            contentEditable
            onInput={this.onInputHandler}
          />
        </form>
        <div className="homepage__action">
          <Action />
        </div>
      </>
    );
  }
}

export default AddPage;
