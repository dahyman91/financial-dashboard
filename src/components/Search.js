import React, { useState } from "react";
import API_KEY from "../API";
import "./Search.css";

function Search({ setSearchedTickers, searchedTickers }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://finnhub.io/api/v1/search?q=${searchTerm}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (searchedTickers.includes(data.result[0].symbol)) {
          alert("Read your buttons, it in der cuh");
        } else {
          setSearchedTickers([...searchedTickers, data.result[0].symbol]);
          alert(`Added ${data.result[0].description} to your favorite stocks`);
        }
      })
      .catch(() => alert("company not in DB"));
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <h3 className="search-text">Add Your Favorite Stocks</h3>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <input className="searchBtn" type="submit" />
      </form>
    </div>
  );
}

export default Search;
