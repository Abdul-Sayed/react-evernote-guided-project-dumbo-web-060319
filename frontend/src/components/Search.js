import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        autoComplete="off"
        placeholder="Search Notes"
        name="search"
        value={props.search}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Search;
