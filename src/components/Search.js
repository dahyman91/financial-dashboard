import React, { useState } from "react";
import API_KEY from "../API";
import { Input, Form, Button, Message } from "semantic-ui-react";

function Search({
  setSearchedTickers,
  searchedTickers,
  companyDetails,
  setCompanyDetails,
  setSelectedTicker,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [err, setErr] = useState("");
  const [header, setHeader] = useState("No Stock Added");
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    if (!e.target.value.includes(" ")) {
      setSearchTerm(e.target.value);
    }
  }

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    fetch(`https://finnhub.io/api/v1/search?q=${searchTerm}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (searchedTickers.includes(data.result[0].symbol)) {
          setLoading(false);
          setHeader("No Stock Added");

          setErr("Read your buttons, it in der cuh");
        } else {
          setSearchedTickers([...searchedTickers, data.result[0].symbol]);
          fetch(
            `https://finnhub.io/api/v1/stock/profile2?symbol=${data.result[0].symbol}&token=${API_KEY}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (!searchedTickers[0]) {
                setSelectedTicker(data.ticker);
              }
              if (data.ticker && !data.ticker.includes(".")) {
                setCompanyDetails((companyDetails) => [
                  ...companyDetails,
                  data,
                ]);
                // alert(`Added ${data.name} to your favorite stocks`);
                setLoading(false);
                setHeader("Stock Added");
                setErr(`Added ${data.name} to your favorite stocks`);

                fetch("https://shrouded-cliffs-39592.herokuapp.com/symbols", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    symbol: data.ticker,
                    id: data.ticker,
                  }),
                });
              } else {
                setLoading(false);
                setHeader("No Stock Added");

                setErr("no go its got the .");
              }
            });
        }
      });
    setSearchTerm("");
  }

  return (
    <div className="search-container">
      <Form
        style={{
          paddingTop: "20px",
        }}
        className="search-form"
        onSubmit={handleSubmit}
      >
        <h3 className="search-text"></h3>
        <Input
          loading={loading}
          size="big"
          onChange={handleInputChange}
          value={searchTerm}
          placeholder="Add Stocks"
          action={{ icon: "search" }}
          style={{ border: "1px solid #EDD193", borderRadius: "8%" }}
        />
        <Message error={!err} header={header} content={err} />
        {/* <Form.Field
        // id="form-input-control-error-email"
        // control={Input}
        // label="Email"
        // placeholder="joe@schmoe.com"
        // error={{
        //   content: "Please enter a valid email address",
        //   pointing: "below",
        // }}
        /> */}
        {/* <Input action={{ icon: "search" }} placeholder="Search..." /> */}
        {/* <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Confirm"
        /> */}
      </Form>
    </div>
  );
}

export default Search;
