import React from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import GeneralNews from "./GeneralNews";
import Nav from "./Nav";
import Ticker from "./Ticker";
import Cryptos from "./Cryptos";
import Metals from "./Metals";
import MarketOverviewWidget from "./MarketOverviewWidget";
import { Grid, Segment } from "semantic-ui-react";

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
  return (
    <>
      <Nav
        curPage={curPage}
        setCurPage={setCurPage}
        selectedTicker={selectedTicker}
        searchedTickers={searchedTickers}
      />
      <Ticker style={{ marginTop: "0" }} />
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
      </div>
    </>
  );
}

export default Favorites;
