import React, { useState } from "react";
import API_KEY from "../API";

function Search({
  setSearchedTickers,
  searchedTickers,
  companyDetails,
  setCompanyDetails,
  loading,
  setSelectedTicker
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(e) {
    if(! e.target.value.includes(' ')){setSearchTerm(e.target.value);}
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://finnhub.io/api/v1/search?q=${searchTerm}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        // // console.log("searchedTickers", searchedTickers);

        // data.map((datum) => console.log(datum));

        if (searchedTickers.includes(data.result[0].symbol)) {
          alert("Read your buttons, it in der cuh");
        } else {
          setSearchedTickers([...searchedTickers, data.result[0].symbol]);
          fetch(
                `https://finnhub.io/api/v1/stock/profile2?symbol=${data.result[0].symbol}&token=${API_KEY}`
              ).then( res => res.json()).then(data => {
                if(!searchedTickers[0]){
                  setSelectedTicker(data.ticker)
                }
                if (!data.ticker.includes('.')){setCompanyDetails((companyDetails) => [
                ...companyDetails,
                data])
                alert(`Added ${data.name} to your favorite stocks`);
                fetch('http://localhost:3000/symbols', {
                  method: 'POST',
                  headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                  body: JSON.stringify({
                        symbol: data.ticker,
                        id: data.ticker,
                      })
                })}
                else{
                  alert('no go its got the .')
                }


              }
                )
              
              
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
