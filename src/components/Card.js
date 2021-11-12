import React, { useEffect, useState } from "react";
import API_KEY from "../API";
import { Link } from "react-router-dom";

function Card({
  logo,
  name,
  id,
  companyDetails,
  setCompanyDetails,
  ipo,
  setSelectedTicker,
  count,
  setCount,
  searchedTickers,
  setSearchedTickers,
}) {
  const [price, setPrice] = useState(0);
  const [background, setBackground] = useState(false);
  const [prevPrice, setPrevPrice] = useState(0)
  function backgroundAnimation() {
    setBackground(true);
    setTimeout(() => setBackground(false), 2000);
  }
  let isGreen
  if (price> prevPrice){
    isGreen = 'up'
  }
  else if (price < prevPrice){
    isGreen = 'down'
  }
  else{
    isGreen = 'none'
  }
  useEffect(() => {
    fetch(`https://finnhub.io/api/v1/quote?symbol=${id}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setPrice(price => {
        setPrevPrice(price)
        return data.c
      }));
    backgroundAnimation();
  }, [count]);

  function handleDelete() {
    fetch(`http://localhost:3000/symbols/${id}`, {
      method: "DELETE",
    }).then(() => {
      setSearchedTickers((searchedTickers) =>
        searchedTickers.filter((ticker) => {
          return ticker !== id;
        })
      );
      setCompanyDetails((companyDetails) => {
        return companyDetails.filter((company) => {
          return company.ticker !== id;
        });
      });
    });
  }

  function handleClick() {
    setSelectedTicker(id);
  }

  let className
   if (background){
    if (isGreen === 'up'){
      className = 'green-animate price'
    }
    else if (isGreen === 'down'){
      className = 'red-animate price'
    }
    else{
      className = 'price'
    }
   } 
 else{
   className = 'price'
 }

  return (
    <>
      <div class="column">
        <div
          className="ui fluid card"
          style={{
            filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
          }}
        >
          <div className="ui slide masked reveal image">
            <div className="visible content first-card">
              <div className="first-card-info">
                <h2 className={className}>{`${price} USD`}</h2>
                <h3 className="ticker">{id}</h3>
              </div>
            </div>
            <div className="hidden content image-container">
              <img className="logo" alt="logo" src={logo} />
            </div>

            <div
              className="content"
              style={{ background: "white", textAlign: "center" }}
            >
              <Link
                to={`/dashboard/${id}`}
                onClick={handleClick}
                className="header"
              >
                {name}
              </Link>
              <div className="meta">
                <span className="date">IPO: {ipo}</span>
              </div>
              <div className="extra content">
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
