import React, { useState, useEffect } from "react";
import { Table, Modal, Input, Form } from "semantic-ui-react";

function PortfolioModal({
  openPortfolioModal,
  setOpenPortfolioModal,
  price,
  name,
  logo,
  id,
  tableInfo,
  setTableInfo,
  setModalExists
}) {
  const [shares, setShares] = useState('');
  const [exists, setExists] = useState(false)
  
  useEffect(()=>{
    tableInfo && tableInfo.map(obj =>{
      if (obj.symbol === id){
        console.log( obj.shares ,' shares owned of ', obj.symbol)
              setExists(true)
              setShares(obj.shares)
      }
    })

  }, [tableInfo])
console.log(exists)

  function handleSubmit(e) {
    if (shares >0){
        let body = exists ? {shares: shares} : {
        symbol: id,
        shares: shares,
        id: id,
        price: price,
      }
    let method = exists ? 'PATCH' : 'POST'

    e.preventDefault();
    fetch(`https://shrouded-cliffs-39592.herokuapp.com/tableData${exists ? ('/' + id):''}`, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json()).then(
      data => {
        if (exists){
          setTableInfo(tableInfo => tableInfo.filter(element => element.symbol !== id))
        }
        setTableInfo(tableInfo => [...tableInfo, data])
      }
    );
    }
    else{
      fetch(`https://shrouded-cliffs-39592.herokuapp.com/tableData${exists ? ('/' + id):''}`, {
      method: 'DELETE',
    }
    )
    setTableInfo(tableInfo => tableInfo.filter(element => element.symbol !== id))
    }
   
    setOpenPortfolioModal(false);
  }

  return (
    <Modal
      basic
      onClose={() => {
        setModalExists(false)
        setOpenPortfolioModal(false)}}
      onOpen={() => {
        setOpenPortfolioModal(true)}}
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
                <Input onClick={handleSubmit} value= {exists ? 'Update Shares' : 'Add Shares'}type="submit"></Input>
              </Form>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Modal>
  );
}

export default PortfolioModal;
