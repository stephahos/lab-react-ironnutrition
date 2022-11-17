import React from 'react';
import { useState } from 'react';

function Search(props) {
  const [Newsearch, setNewSearch] = useState('All');

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
  };

  return (
    <div className="FilterFoods">
      <form value={''} onChange={handleSelect}>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </form>
    </div>
  );
}

export default Search;
