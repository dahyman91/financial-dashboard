import React, { useEffect, useState } from "react";
import API_KEY from "../API";

function CompanyNews({ selectedTicker }) {
  const [newsStories, setNewsStories] = useState([]);

  let date = new Date();

  const endDate =
    date.toLocaleDateString("en-US", { year: "numeric" }) +
    "-" +
    date.toLocaleDateString("en-US", { month: "numeric" }) +
    "-" +
    date.toLocaleDateString("en-US", { day: "numeric" });

  const startDate =
    date.toLocaleDateString("en-US", { year: "numeric" }) -
    1 +
    "-" +
    date.toLocaleDateString("en-US", { month: "numeric" }) +
    "-" +
    date.toLocaleDateString("en-US", { day: "numeric" });

  useEffect(() => {
    fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${selectedTicker}&from=${startDate}&to=${endDate}&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setNewsStories(data));
  }, [selectedTicker, startDate, endDate]);

  return (
    <div>
      <h3>News:</h3>
      <table>
        <tr>
          <td>
            {newsStories[0] ? (
              <img
                alt="img"
                src={newsStories[0].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[0] ? (
                <a href={newsStories[0].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[0].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[0] ? newsStories[0].source : null}</h6>
          </td>
        </tr>
        <tr>
          <td>
            {newsStories[1] ? (
              <img
                alt="img"
                src={newsStories[1].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[1] ? (
                <a href={newsStories[1].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[1].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[1] ? newsStories[1].source : null}</h6>
          </td>
        </tr>
        <tr>
          <td>
            {newsStories[2] ? (
              <img
                alt="img"
                src={newsStories[2].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[2] ? (
                <a href={newsStories[2].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[2].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[2] ? newsStories[2].source : null}</h6>
          </td>
        </tr>
        <tr>
          <td>
            {newsStories[3] ? (
              <img
                alt="img"
                src={newsStories[3].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[3] ? (
                <a href={newsStories[3].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[3].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[3] ? newsStories[3].source : null}</h6>
          </td>
        </tr>
        <tr>
          <td>
            {newsStories[4] ? (
              <img
                alt="img"
                src={newsStories[4].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[4] ? (
                <a href={newsStories[4].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[4].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[5] ? newsStories[5].source : null}</h6>
          </td>
        </tr>
        <tr>
          <td>
            {newsStories[5] ? (
              <img
                alt="img"
                src={newsStories[5].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[6] ? (
                <a href={newsStories[6].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[6].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[7] ? newsStories[7].source : null}</h6>
          </td>
        </tr>
        <tr>
          <td>
            {newsStories[7] ? (
              <img
                alt="img"
                src={newsStories[7].image}
                style={{ maxWidth: "80px", borderRadius: "3px" }}
              />
            ) : null}
          </td>
          <td>
            <h4>
              {newsStories[8] ? (
                <a href={newsStories[8].url} rel="noreferrer" target="_blank">
                  {" "}
                  {newsStories[8].headline}{" "}
                </a>
              ) : null}
            </h4>
          </td>
          <td>
            <h6>{newsStories[5] ? newsStories[5].source : null}</h6>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CompanyNews;
