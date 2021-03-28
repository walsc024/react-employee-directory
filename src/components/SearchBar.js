import React from "react";
import "../styles/SearchBar.css";

// search bar function
function SearchBar({ handleSearch }) {
  return (
    <div className="searchbar">
      <form className="form">
        <input
          type="search"
          placeholder="Type to filter employees by name"
          onChange={(e) => handleSearch(e)}
        />
      </form>
    </div>
  );
}

export default SearchBar;