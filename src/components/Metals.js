import React, { useState, useEffect } from "react";

function Metals() {
  const [goldPrice, setGoldPrice] = useState([]);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-1gttkvxzpz7s-io");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
      .then((response) => response.json())
      .then((data) => setGoldPrice(data.open_price))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Price of Gold per Ounce</h3>

      <h4 style={{ marginTop: "0", textAlign: "center" }}>
        {goldPrice ? `$${goldPrice}` : null}
      </h4>
    </>
  );
}

export default Metals;
