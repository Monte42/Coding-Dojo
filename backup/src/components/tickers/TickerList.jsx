import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import env from 'react-dotenv'

const TickerList = () => {
    const [tickers,setTickers] = useState([])
    const [marketType,setMarketType] = useState("stocks")

    useEffect(()=>{
        axios.get(`https://api.polygon.io/v3/reference/tickers?market=${marketType}&active=true&apiKey=${env.MARKET_API}`)
            .then(res=> setTickers(res.data.results))
            .catch(err=>console.log(err))
    },[marketType])

    return (
        <div className='px-4 py-4'>
            <h4>Ticker Window</h4>
            <form>
            <select onChange={e=>setMarketType(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="stocks">Market Type</option>
                <option value="stocks">Stocks</option>
                <option value="crypto">Crypto</option>
                <option value="fx">FX</option>
                <option value="otc">OTC</option>
            </select>
            </form>
            <table className='overflow-auto height-40 border rounded table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {tickers &&
                        tickers.map((t,i) =>{
                            return(
                                <tr key={i}>
                                    <td><Link to={`/details/${t.ticker}`}>{t.ticker}</Link></td>
                                    <td>{t.name}</td>
                                    <td>{t.market}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TickerList