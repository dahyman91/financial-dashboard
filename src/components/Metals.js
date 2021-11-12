import React, { useState, useEffect } from "react";

function Metals() {
  const [metals, setMetals] = useState([]);

  useEffect(() => {
    fetch("https://gold-price-live.p.rapidapi.com/get_metal_prices", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "gold-price-live.p.rapidapi.com",
        "x-rapidapi-key": "4ca839f900msh641f54a9b7d60b3p18b2eejsnf3cf7176439f",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMetals(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(metals);

  return (
    <table>
      <tr>
        <th>Precious Metal</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Gold</td>
        <td>{metals ? `$${metals.gold}` : null}</td>
      </tr>
      <tr>
        <td>Silver</td>
        <td>{metals ? `$${metals.silver}` : null}</td>
      </tr>
    </table>
  );
}

export default Metals;
