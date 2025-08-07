import React, { useState, useEffect } from "react";

function Search({ search, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState(search);
  
  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  function handleSearchChange(event) {
    const newSearch = event.target.value;
    setSearchTerm(newSearch);
    onSearchChange(newSearch);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
