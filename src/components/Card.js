import React, { useEffect, useState } from "react";
import API_KEY from "../API";
import { Link } from "react-router-dom";
import SmallChart from "./SmallChart";
import { Button } from "semantic-ui-react";
import PortfolioModal from "./PortfolioModal";

function Card({
  logo,
  name,
  id,
  companyDetails,
  setCompanyDetails,
  ipo,
  setSelectedTicker,
  count,
  setSearchedTickers,
  exchange,
  industry,
}) {
  const [price, setPrice] = useState(0);
  const [background, setBackground] = useState(false);
  const [prevPrice, setPrevPrice] = useState(0);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);
  function backgroundAnimation() {
    setBackground(true);
    setTimeout(() => setBackground(false), 2000);
  }
  let isGreen;
  if (prevPrice !== 0 && price > prevPrice) {
    isGreen = "up";
  } else if (price < prevPrice) {
    isGreen = "down";
  } else {
    isGreen = "none";
  }
  useEffect(
    (timeout) => {
      fetch(`https://finnhub.io/api/v1/quote?symbol=${id}&token=${API_KEY}`)
        .then((res) => res.json())
        .then((data) =>
          setPrice((price) => {
            setPrevPrice(price);
            return data.c;
          })
        );
      backgroundAnimation();
    },
    [count]
  );

  function handleDelete() {
    fetch(`https://shrouded-cliffs-39592.herokuapp.com/symbols/${id}`, {
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


  function handlePortfolioOpen() {
    setOpenPortfolioModal(true);
  }


  let className;
  if (background) {
    if (isGreen === "up") {
      className = "green-animate price";
    } else if (isGreen === "down") {
      className = "red-animate price";
    } else {
      className = "price";
    }
  } else {
    className = "price";
  }

  return (
    <>
      <PortfolioModal
        openPortfolioModal={openPortfolioModal}
        setOpenPortfolioModal={setOpenPortfolioModal}
        price={price}
        name={name}
        logo={logo}
        id={id}
      />
      <div class="column">
        <div
          className="ui fluid card"
          style={{
            filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
            border: "1px solid #EDD193",
          }}
        >
          <div className="ui slide masked reveal image">
            <div className="visible content first-card">
              <div className="first-card-info">
                <img
                  src={logo}
                  alt="No Logo in DB"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    maxWidth: "50px",
                    borderRadius: "10%",
                  }}
                />
                <h2 className={className}>{`${price} USD`}</h2>
                <h3 className="ticker">{id}</h3>
                <p>{exchange}</p>
                <p>{industry}</p>
              </div>
            </div>
            <div
              style={{ height: "250px" }}
              className="hidden content image-container"
            >
              <SmallChart
                symbol={id}
                style={{ position: "fixed", bottom: "0" }}
              ></SmallChart>
              <input placeholder="IM NICE" />
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
                <div className="meta">
                  <span className="date">IPO: {ipo}</span>
                </div>
              </Link>

              <div className="extra content">
                <div style={{ margin: "10%" }}>
                  <Button
                    style={{ marginRight: "20px" }}
                    circular
                    color="red"
                    icon="delete"
                    onClick={handleDelete}
                  />
                  <Button
                    onClick={handlePortfolioOpen}
                    circular
                    color="green"
                    icon="chart pie"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
