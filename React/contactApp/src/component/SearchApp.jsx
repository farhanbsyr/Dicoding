import React from "react";
import PropTypes from "prop-types";
function SearchApp({ keyword, keywordChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(event) => {
        keywordChange(event.target.value);
      }}
    />
  );
}

SearchApp.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchApp;
