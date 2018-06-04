import React from 'react';
const Search = (props) => (
  <div>
    <div>
      Search: <input type="text" onChange={props.handleSearch}></input>
    </div>
  </div>
)

export default Search;