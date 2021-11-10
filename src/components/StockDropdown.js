import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const StockDropdown = ({ searchedTickers, setSelectedTicker }) => {
  const history = useHistory();

  // Set stock options
  const stockOptions = [];
  searchedTickers.map((searchedTicker) => {
    const stock = {
      text: searchedTicker,
      value: searchedTicker,
    };
    stockOptions.push(stock);
  });

  function handleChange(e, data) {
    history.push(`${data.value}`);
    setSelectedTicker(data.value);

    // console.log(data.value);
  }
  return (
    <>
      <div className="ui container">
        <Dropdown
          onChange={handleChange}
          placeholder="Select Country"
          fluid
          search
          selection
          options={stockOptions}
        />
      </div>
    </>
  );
};

export default StockDropdown;

//{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
