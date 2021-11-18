import React, { useState } from "react";
import { Table, Modal, Input, Form } from "semantic-ui-react";

function PortfolioModal({
  openPortfolioModal,
  setOpenPortfolioModal,
  price,
  name,
  logo,
  id,
}) {
  const [shares, setShares] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://shrouded-cliffs-39592.herokuapp.com/tableData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol: id,
        shares: shares,
        id: id,
        price: price,
      }),
    }).then((res) => console.log(res));
    setOpenPortfolioModal(false);
  }

  return (
    <Modal
      basic
      onClose={() => setOpenPortfolioModal(false)}
      onOpen={() => setOpenPortfolioModal(true)}
      open={openPortfolioModal}
      size="small"
      dimmer="blurring"
    >
      <Table
        collapsing
        celled
        style={{
          borderRadius: "2%",
          border: "3px solid #EDD193",
        }}
      >
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <img src={logo} style={{ maxWidth: "50px" }} alt={name} />
            </Table.Cell>
            <Table.Cell singleLine>{name}</Table.Cell>
            <Table.Cell style={{ textAlign: "center" }}>
              <p>Current Price</p>
              <h4>${price}/Share</h4>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={handleSubmit}>
                <Input
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  placeholder="Shares Owned"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <Input onClick={handleSubmit} type="submit"></Input>
              </Form>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Modal>
  );
}

export default PortfolioModal;
