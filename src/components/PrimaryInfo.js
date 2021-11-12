import React, { useState, useEffect } from "react";
import API_KEY from "../API";

function PrimaryInfo({ selectedTicker }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [percentChange, setPercentChange] = useState("");
  const [exchange, setExchange] = useState("");

  useEffect(() => {
    fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${selectedTicker}&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setImage(data.logo);
        setExchange(data.exchange);
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
    <div
      style={{
        border: "1px solid red",
        borderRadius: "2%",
        padding: "5%",
        // marginTop: "40%",
      }}
    >
      <h2>
        {name}{" "}
        <img
          alt={name}
          style={{
            float: "right",
            width: "15%",
            height: "auto",
          }}
          src={image}
        />
      </h2>

      <p
        style={{
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        {" "}
        {price} USD ({percentChange}%)
      </p>
      <p
        style={{
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        {" "}
        {exchange}
      </p>
    </div>
  );
}

export default PrimaryInfo;
