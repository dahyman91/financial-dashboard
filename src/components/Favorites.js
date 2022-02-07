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
import PortfolioTable from "./PortfolioTable";
import PieChart from "./PieChart";

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
  const [tableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-cliffs-39592.herokuapp.com/tableData")
      .then((res) => res.json())
      .then((data) => {
        setTableInfo(data);
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

      <div style={{ margin: "2vh 3vw" }}>
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
        <h3
          style={{
            width: "40%",
            margin: "4% auto",
            textAlign: "center",
          }}
        >
          Followed Stocks
        </h3>
        <Grid relaxed columns={4}>
          <CardContainer
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            setSelectedTicker={setSelectedTicker}
            setSearchedTickers={setSearchedTickers}
            curPage={curPage}
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
          />
        </Grid>

        {tableInfo[0] ? (
          <>
            <h3
              style={{
                width: "20%",
                margin: "3% auto 2% auto",
                textAlign: "center",
              }}
            >
              Portfolio Summary
            </h3>
            <Grid relaxed columns={2}>
              <Grid.Column width={8}>
                <PortfolioTable
                  tableInfo={tableInfo}
                  setTableInfo={setTableInfo}
                />
              </Grid.Column>
              <Grid.Column width={7} style={{}}>
                <PieChart tableInfo={tableInfo} />
              </Grid.Column>
            </Grid>
          </>
        ) : (
          <h3
            style={{
              border: "1px solid #EDD193",
              filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
              background: "white",
              padding: "10px",
              width: "40%",
              margin: "3% auto 0 auto",
              textAlign: "center",
            }}
          >
            Use Green Buttons to Add Stocks to Portfolio
          </h3>
        )}

        <Grid stackable columns={3} style={{ margin: "1.5% 1%" }}>
          <Grid.Column width={6}>
            <GeneralNews />
          </Grid.Column>

          <Grid.Column
            width={4}
            style={{ marginLeft: "4vw", marginRight: "6vw" }}
          >
            <h3 style={{ textAlign: "center" }}>Alternative Markets</h3>
            <Cryptos
              style={{ textAlign: "center", border: "1px solid gold" }}
            />

            <Metals />
          </Grid.Column>
          <Grid.Column width={3}>
            <h3 style={{ textAlign: "center", color: "#faf9f6" }}>HIRE US</h3>
            <MarketOverviewWidget />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default Favorites;
