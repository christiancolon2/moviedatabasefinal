import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
