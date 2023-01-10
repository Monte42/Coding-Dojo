import axios from 'axios'
import { useEffect } from 'react'
import { Chart } from "react-google-charts"
import { parseData } from '../../../utils/getChartData'
import env from 'react-dotenv'

const History = ({ticker,history,setHistory,interval,startDate,today}) => {
    useEffect(()=>{ 
        axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/${interval}/${startDate}/${today}?adjusted=true&sort=asc&apiKey=${env.MARKET_API}`)
            .then(res=> setHistory(parseData(res.data.results)))
            .catch(err=> console.log(err))
    },[])
    return (
        <>
            {history ?
                <Chart
                    chartType="CandlestickChart"
                    width="120vw"
                    height="50vw"
                    data={history}
                    options = {{
                        legend: "none",
                        chartArea: { left: 50},
                        title: ticker
                    }}
                />
                
                : <h3>No Chart Data Available...</h3>
            }
        </>
    )
}

export default History