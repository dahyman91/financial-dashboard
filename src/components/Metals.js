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
    <table>
      <tr>
        <th>Price of Gold per Ounce</th>
      </tr>
      <tr>
        <td>{goldPrice ? `$${goldPrice}` : null}</td>
      </tr>
    </table>
  );
}

export default Metals;
