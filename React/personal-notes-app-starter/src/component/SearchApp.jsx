import React from "react";

function SearchApp({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <input
        className=""
        type="text"
        keyword={keyword}
        onChange={(event) => {
          keywordChange(event.target.value);
        }}
        placeholder="Cari berdasarkan judul ...."
      />
    </div>
  );
}

export default SearchApp;
