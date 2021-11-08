import React, { useState } from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import Nav from "./Nav";
import ComponentPlayground from "./ComponentPlayground";

function App() {
  const [searchedTickers, setSearchedTickers] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);

  return (
    <>
      <Nav />
      <div className="ui active centered inline loader">Header</div>
      <Search
        setSearchedTickers={setSearchedTickers}
        searchedTickers={searchedTickers}
      />
      <CardContainer
        searchedTickers={searchedTickers}
        companyDetails={companyDetails}
        setCompanyDetails={setCompanyDetails}
      />
      <ComponentPlayground />
    </>
  );
}

export default App;
