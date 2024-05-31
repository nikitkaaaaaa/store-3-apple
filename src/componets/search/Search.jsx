import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [value, setvalue] = useState("");
  const searchOnInput = (event) => {
    setvalue(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Поиск..."
        onChange={searchOnInput}
        style={{
          padding: "5px 10px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default Search;
