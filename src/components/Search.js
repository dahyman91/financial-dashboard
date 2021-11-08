import React, { useState } from "react";
import API_KEY from "../API";
import "./Search.css";

function Search({
  setSearchedTickers,
  searchedTickers,
  companyDetails,
  setCompanyDetails,
  loading,
}) {
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
          fetch("http://localhost:3000/symbols", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              symbol: data.result[0].symbol,
              id: data.result[0].symbol,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              fetch(
                `https://finnhub.io/api/v1/stock/profile2?symbol=${data.symbol}&token=${API_KEY}`
              )
                .then((res) => res.json())
                .then((data) =>
                  setCompanyDetails((companyDetails) => [
                    ...companyDetails,
                    data,
                  ])
                );
            });
        }
      })
      .catch((error) => alert(error));
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
