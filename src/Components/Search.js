import React from 'react';
import { useState } from 'react';

function Search({ query, SetQuery }) {
  const [query, SetQuery] = useState('');

  const handleSearch = (event) => {
    SetQuery(event.target.value);
  };

  return (
    <>
      <Divider> Search</Divider>
      <label> Search </label>

      <Input value={query} onChange={handleSearch} />
    </>
  );
}

export default Search;
