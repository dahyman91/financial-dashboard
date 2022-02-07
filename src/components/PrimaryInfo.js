import React, { useState, useEffect } from "react";
import API_KEY from "../API";

function PrimaryInfo({ selectedTicker }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [percentChange, setPercentChange] = useState("");
  const [exchange, setExchange] = useState("");
  const [industry, setIndustry] = useState("");
  const [currency, setCurrency] = useState("");
  const [country, setCountry] = useState("");
  const [ipo, setIpo] = useState("");
  const [shareOutstanding, setSharesOutstanding] = useState("");

  useEffect(() => {
    fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${selectedTicker}&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setImage(data.logo);
        setExchange(data.exchange);
        setIndustry(data.finnhubIndustry);
        setCurrency(data.currency);
        setCountry(data.country);
        setIpo(data.ipo);
        setSharesOutstanding(data.shareOutstanding);
      });

    fetch(
      `https://finnhub.io/api/v1/quote?symbol=${selectedTicker}&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPrice(data.c);
        setPercentChange(data.dp);
      });
  }, [selectedTicker]);

  const directionEmoji = percentChange >= 0 ? "⬆️" : "⬇️";

  return (
    <>
      <div className="ui cards">
        <div
          className="card"
          style={{
            width: "100%",
            filter: "drop-shadow(1px 1px rgba(0,0,0,0.3))",
            border: "1px solid #EDD193",
          }}
        >
          <div className="content">
            <img
              className="right floated mini ui image"
              src={image}
              alt={name}
            />
            <div className="header">
              {name} ({percentChange}%) {directionEmoji}
            </div>
            <div className="meta">{exchange}</div>
            <div className="description">Price -- {price} USD</div>
            <div className="description">Industry -- {industry}</div>
            <div className="description">Currency -- {currency}</div>
            <div className="description">
              Shares Outstanding (M) -- {shareOutstanding}
            </div>
            <div className="description">Country -- {country}</div>
            <div className="description">IPO Date -- {ipo}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryInfo;
