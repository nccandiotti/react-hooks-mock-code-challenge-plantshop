import React from "react"

function Search({ searchQuery, handleSearchQuery }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        placeholder="Type a name to search..."
        onChange={handleSearchQuery}
      />
    </div>
  )
}

export default Search
