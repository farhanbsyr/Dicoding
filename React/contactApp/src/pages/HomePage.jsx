import React from "react";
import { deleteContact, getContacts } from "../data/data";
import ContactList from "../component/ContactList";
import SearchApp from "../component/SearchApp";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function updateSearchParams(keyword) {
    setSearchParams({ nama: keyword });
  }

  return <HomePage dafaultKeyword={keyword} onSearch={updateSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteHandler(id) {
    deleteContact(id);

    this.setState(() => {
      return {
        contacts: getContacts(),
      };
    });
  }
  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.onSearch(keyword);
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <SearchApp
          keyword={this.state.keyword}
          keywordChange={this.onSearchHandler}
        />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePageWrapper;
