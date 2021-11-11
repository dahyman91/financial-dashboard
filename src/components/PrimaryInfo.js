import React, { useState, useEffect } from 'react'
import API_KEY from '../API'

function PrimaryInfo( { selectedTicker }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [percentChange, setPercentChange] = useState("")
    const [exchange, setExchange] = useState("")

    useEffect(()=>{fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${selectedTicker}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data)=> {
          setName(data.name)
          setImage(data.logo)
          setExchange(data.exchange)
      })

      fetch(`https://finnhub.io/api/v1/quote?symbol=${selectedTicker}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
          setPrice(data.c)
          setPercentChange(data.dp)
      })


    }, [selectedTicker])

    
    return (
        <div>
           <h2>{name}</h2>
           <p>{price} USD ({percentChange}%) {exchange}</p> 
           <img src={image} />

        </div>
    )
}

export default PrimaryInfo
