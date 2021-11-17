import React, { useState } from "react";
import API_KEY from "../API";
import Option from "./Option";
import { Input, Form, Button, Message } from "semantic-ui-react";
import AddFavoriteModal from "./AddFavoriteModal";
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
  const [elements, setElements] = useState([]);
  const [open, setOpen] = useState(false);
  function handleInputChange(e) {
    if (!e.target.value.includes(" ")) {
      setSearchTerm(e.target.value);
    }
  }
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    setElements([]);
    setErr("");
    fetch(`https://finnhub.io/api/v1/search?q=${searchTerm}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          data.result[i] &&
            fetch(
              `https://finnhub.io/api/v1/stock/profile2?symbol=${data.result[i].symbol}&token=${API_KEY}`
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.ticker && !data.ticker.includes(".")) {
                  setElements((elements) => [
                    ...elements,
                    { name: data.name, symbol: data.ticker, logo: data.logo },
                  ]);
                  // setResults(true)
                }
                setLoading(false);
                setOpen(true);
                // if(!results && !loading){
                //   setElements([])
                //   setHeader('No Stocks Found')
                //   setErr('Please try again with a different query')
                // }
              });
        }
        // setElements('')
        //   for (let i=0; i<5; i++){
        //     if (data.result[i] && !data.result[i].symbol.includes('.')){
        //       setElements(elements=> [...elements, {name: data.result[i].description, symbol: data.result[i].symbol}])
        //     }
        //   }
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
          {/* <table style={{ backgroundColor: "white" }}>
            {elements &&
              elements.map((element) => {
                return (
                  <Option
                    element={element}
                    setLoading={setLoading}
                    setErr={setErr}
                    setHeader={setHeader}
                    setSelectedTicker={setSelectedTicker}
                    setCompanyDetails={setCompanyDetails}
                    searchedTickers={searchedTickers}
                    setSearchedTickers={setSearchedTickers}
                    setElements={setElements}
                  />
                );
              })}
          </table> */}
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
    </>
  );
}
export default Search;
