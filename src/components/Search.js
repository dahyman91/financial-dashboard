import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import API_KEY from "../API";
import { Input, Form, Message, Icon } from "semantic-ui-react";
import AddFavoriteModal from "./AddFavoriteModal";
function Search({
  setSearchedTickers,
  searchedTickers,
  companyDetails,
  setCompanyDetails,
  setSelectedTicker,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [exchange, setExchange] = useState("NASDAQ");
  const [err, setErr] = useState("");
  const [header, setHeader] = useState("No Stock Added");
  const [loading, setLoading] = useState(false);
  const [elements, setElements] = useState([]);
  const [open, setOpen] = useState(false);
  function handleInputChange(e) {
    if (!e.target.value.includes(" ")) {
      setSearchTerm(e.target.value);
    }
  }

  const exchanges = [
    {
      key: "NASDAQ",
      text: "NASDAQ",
      value: "NASDAQ",
    },
    {
      key: "NYSE",
      text: "NYSE",
      value: "NYSE",
    },
    {
      key: "AMEX",
      text: "AMEX",
      value: "AMEX",
    },
    {
      key: "EURONEXT",
      text: "EURONEXT",
      value: "EURONEXT",
    },
    {
      key: "MUTUAL_FUND",
      text: "MUTUAL_FUND",
      value: "MUTUAL_FUND",
    },
  ];

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    setElements([]);
    setErr("");
    fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${searchTerm}&limit=10&exchange=${exchange}&apikey=0570f7a36795da940b00fb234568a56d`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.length) {
          setLoading(false);
          setOpen(true);
        }
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].symbol);
          fetch(
            `https://finnhub.io/api/v1/stock/profile2?symbol=${data[i].symbol}&token=${API_KEY}`
          )
            .then((res) => res.json())
            .then((data) => {
              // let testArr = elements.map(e => e)
              if (data.ticker && !data.ticker.includes(".")) {
                console.log("hi", data);
                setElements((elements) => [
                  ...elements,
                  { name: data.name, symbol: data.ticker, logo: data.logo },
                ]);
                setLoading(false);
                setOpen(true);
              }
            });
        }
      });

    setSearchTerm("");
  }
  return (
    <>
      <AddFavoriteModal
        open={open}
        setOpen={setOpen}
        elements={elements}
        setLoading={setLoading}
        setErr={setErr}
        setHeader={setHeader}
        setSelectedTicker={setSelectedTicker}
        setCompanyDetails={setCompanyDetails}
        searchedTickers={searchedTickers}
        setSearchedTickers={setSearchedTickers}
        setElements={setElements}
      />
      <div className="search-container">
        <Form
          style={{
            paddingTop: "20px",
            textAlign: "center",
          }}
          className="search-form"
          onSubmit={handleSubmit}
        >
          <Form.Field>
            <label>Select Exchange</label>
            <Dropdown
              placeholder="Select Friend"
              style={{ text: "auto" }}
              value={exchange}
              onChange={(e) => setExchange(e.target.innerText)}
              selection
              options={exchanges}
            />
          </Form.Field>

          <Input
            loading={loading}
            size="big"
            onChange={handleInputChange}
            value={searchTerm}
            placeholder="Search Stocks"
            icon={<Icon name="search" circular link onClick={handleSubmit} />}
            style={{ border: "1px solid #EDD193", borderRadius: "8%" }}
          />

          <Message
            style={{ textAlign: "center" }}
            error={!err}
            header={header}
            content={err}
          />
        </Form>
      </div>
    </>
  );
}
export default Search;
