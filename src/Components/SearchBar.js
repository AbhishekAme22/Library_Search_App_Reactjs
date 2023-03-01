import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    if (event) {
        event.preventDefault();
        onSearch(query);
        
      }
  };

  

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
