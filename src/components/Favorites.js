import React from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import GeneralNews from "./GeneralNews";
import Nav from "./Nav";
import Ticker from "./Ticker";
import { Grid, Image, Segment } from "semantic-ui-react";

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

      <div style={{ margin: "0 5vw" }}>
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
          />
        </Grid>
        <Grid relaxed columns={3}>
          <Grid.Column width={8}>
            <GeneralNews />
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>1</Segment>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>1</Segment>
            <Segment>1</Segment>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default Favorites;
