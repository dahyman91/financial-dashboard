import React, { useState, useEffect } from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import GeneralNews from "./GeneralNews";
import Nav from "./Nav";
import Ticker from "./Ticker";
import Cryptos from "./Cryptos";
import Metals from "./Metals";
import MarketOverviewWidget from "./MarketOverviewWidget";
import { Grid, Segment } from "semantic-ui-react";
import PieChart from "./PieChart";
import PortfolioTable from "./PortfolioTable";

function Favorites({
  setSearchedTickers,
  searchedTickers,
  companyDetails,
  setSelectedTicker,
  setCompanyDetails,
  curPage,
  setCurPage,
  selectedTicker,
}) {
  const [ticker, setTicker] = useState(false);
  const [tableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-cliffs-39592.herokuapp.com/tableData")
      .then((res) => res.json())
      .then((data) => {
        setTableInfo(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Nav
        curPage={curPage}
        setCurPage={setCurPage}
        selectedTicker={selectedTicker}
        searchedTickers={searchedTickers}
      />
      <div style={{ height: "46px" }}>
        <Ticker style={{ marginTop: "0" }} />
      </div>

      <div style={{ margin: "0 2vw" }}>
        <Grid columns={1}>
          <Grid.Column>
            <Search
              setSearchedTickers={setSearchedTickers}
              searchedTickers={searchedTickers}
              companyDetails={companyDetails}
              setCompanyDetails={setCompanyDetails}
              setSelectedTicker={setSelectedTicker}
            />
          </Grid.Column>
        </Grid>
        <Grid relaxed columns={6}>
          <CardContainer
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            setSelectedTicker={setSelectedTicker}
            setSearchedTickers={setSearchedTickers}
            curPage={curPage}
          />
        </Grid>
        <Grid stackable columns={3} style={{ margin: "0 1%" }}>
          <Grid.Column width={6}>
            <GeneralNews />
          </Grid.Column>
          <Grid.Column
            width={4}
            style={{ marginLeft: "3vw", marginRight: "3vw" }}
          >
            <Segment
              style={{
                backgroundColor: "ECB33E",
              }}
            >
              <Cryptos style={{ textAlign: "center" }} />
            </Segment>
            <Segment style={{ backgroundColor: "gold" }}>
              <Metals />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <MarketOverviewWidget />
          </Grid.Column>
        </Grid>
        <PieChart tableInfo={tableInfo}/>
        <PortfolioTable tableInfo={tableInfo}/>
      </div>
    </>
  );
}

export default Favorites;
