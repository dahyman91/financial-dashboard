import React, {useEffect, useState} from 'react'
import API_KEY from '../API'

function GeneralNews() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`)
        .then(res => res.json())
        .then(data => setNews(data))

    }, [])
    return (
        // add summary when it suits us
        <div>
            <h3>News:</h3>
            <table>
                <tr>
                    <td>
                        {news[0] ? <img src={news[0].image} style={{"max-width" : "80px", "border-radius": "3px"}}/> : null}
                    </td>
                    <td>
                        <h4>{news[0] ? <a href={news[0].url} target='_blank'> {news[0].headline} </a> :  null}</h4>
                    </td>
                    <td>
                        <h6>{news[0] ? news[0].source : null}</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        {news[1] ? <img src={news[1].image} style={{"max-width" : "80px", "border-radius": "3px"}}/> : null}
                    </td>
                    <td>
                        <h4>{news[1] ? <a href={news[1].url} target='_blank'> {news[1].headline} </a> : null}</h4>
                    </td>
                    <td>
                        <h6>{news[1] ? news[1].source : null}</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        {news[2] ? <img src={news[2].image} style={{"max-width" : "80px", "border-radius": "3px"}}/> : null}
                    </td>
                    <td>
                        <h4>{news[2] ? <a href={news[2].url} target='_blank'> {news[2].headline} </a> : null}</h4>
                    </td>
                    <td>
                        <h6>{news[2] ? news[2].source : null}</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        {news[3] ? <img src={news[3].image} style={{"max-width" : "80px", "border-radius": "3px"}}/> : null}
                    </td>
                    <td>
                        <h4>{news[3] ? <a href={news[3].url} target='_blank'> {news[3].headline} </a> : null}</h4>
                    </td>
                    <td>
                        <h6>{news[3] ? news[3].source : null}</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        {news[4] ? <img src={news[4].image} style={{"max-width" : "80px", "border-radius": "3px"}}/> : null}
                    </td>
                    <td>
                        <h4>{news[4] ? <a href={news[4].url} target='_blank'> {news[4].headline} </a> : null}</h4>
                    </td>
                    <td>
                        <h6>{news[5] ? news[5].source : null}</h6>
                    </td>
                </tr>
                
            </table>
        </div>
    )
}

export default GeneralNews
