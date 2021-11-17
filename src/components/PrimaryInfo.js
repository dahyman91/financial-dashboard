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
  console.log(percentChange);

  return (
    <>
      <div class="ui cards">
        <div class="card" style={{ width: "20vw" }}>
          <div class="content">
            <img class="right floated mini ui image" src={image} alt={name} />
            <div class="header">{name}</div>
            <div class="meta">{exchange}</div>
            <div class="description">
              Price -- {price} USD ({percentChange}
            </div>
            <div class="description">Industry -- {industry}</div>
            <div class="description">Currency -- {currency}</div>
            <div class="description">
              Shares Outstanding (M) -- {shareOutstanding}
            </div>
            <div class="description">IPO Date -- {ipo}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryInfo;
