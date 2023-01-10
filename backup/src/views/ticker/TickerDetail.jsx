import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { JournalContext } from '../../App'
import { parseData } from '../../utils/getChartData'
import env from 'react-dotenv'
import TraderNav from '../../components/general/TraderNav'
import History from '../../components/tickers/details/History'
import Details from '../../components/tickers/details/Details'
import Financials from '../../components/tickers/details/Financials'
import Dividends from '../../components/tickers/details/Dividends'
import Spilts from '../../components/tickers/details/Spilts'

const TickerDetail = () => {
    const {tkr} = useParams()
    const [,,time] = useContext(JournalContext)
    const today = `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
    const start = new Date(time-(86400000*30))
    const [ticker,setTicker] = useState(tkr)
    const [startDate,setStartDate] = useState(`${start.getFullYear()}-${start.getMonth()+1}-${start.getDate()}`)
    const [interval,setInterval] = useState('day')
    const [history,setHistory] = useState([])
    const [details,setDetails] = useState({})
    const [financials,setFinancials] = useState({})
    const [dividends,setDividends] = useState([])
    const [splits,setSplits] = useState([])
    const [loaded, setLoaded] = useState(true)


    const fetchData = () => {
        const historyAPI = axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/${interval}/${startDate}/${today}?adjusted=true&sort=asc&apiKey=${env.MARKET_API}`)
        const detailsAPI = axios.get(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${env.MARKET_API}`)
        const financialsAPI = axios.get(`https://api.polygon.io/vX/reference/financials?ticker=${ticker}&apiKey=${env.MARKET_API}`)
        const dividendsAPI = axios.get(`https://api.polygon.io/v3/reference/dividends?ticker=${ticker}&apiKey=${env.MARKET_API}`)
        const splitsAPI = axios.get(`https://api.polygon.io/v3/reference/splits?ticker=${ticker}&apiKey=${env.MARKET_API}`)

        axios.all([financialsAPI,historyAPI,detailsAPI,dividendsAPI,splitsAPI])
            .then(axios.spread((...resData) =>{
                console.log(resData[0].data.results[0].financials);
                setFinancials(resData[0].data.results[0].financials)
                setHistory(parseData(resData[1].data.results))
                setDetails(resData[2].data.results)
                setDividends(resData[3].data.results)
                setSplits(resData[4].data.results)
            }))
            .then(res => {
                console.log(history);
                console.log(details);
                console.log(dividends);
                console.log(splits);
                console.log(financials);
            })
            .then(() => setLoaded(true))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const getTickerHistory = () =>{
        axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/${interval}/${startDate}/${today}?adjusted=true&sort=asc&apiKey=${env.MARKET_API}`)
            .then(res=> setHistory(parseData(res.data.results)))
            .catch(err=> console.log(err))
    }

    const getDetails = () => {
        axios.get(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${env.MARKET_API}`)
            .then(res => setDetails(res.data.results))
            .catch(err=>console.log(err))
    }
    const getFinancials = () => {
        axios.get(`https://api.polygon.io/vX/reference/financials?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res => {
                console.log(res.data.results);
                setFinancials(res.data.results[0].financials)
            })
            .catch(err=>console.log(err))
    }
    const getDividends = () => {
        axios.get(`https://api.polygon.io/v3/reference/dividends?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res => setDividends(res.data.results))
            .catch(err=>console.log(err))
    }
    const getSplits = () => {
        axios.get(`https://api.polygon.io/v3/reference/splits?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res => {setSplits(res.data.results)})
            .catch(err=>console.log(err))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        fetchData()
    } 


// HISTORY https://api.polygon.io/v2/aggs/ticker/${icker}/range/1/${interval}/${startDate}/${today}?adjusted=true&sort=asc&apiKey=${env.MARKET_API}
// DETAILS https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${env.MARKET_API}
// FINANCE https://api.polygon.io/vX/reference/financials?ticker=${ticker}&apiKey=${env.MARKET_API}
// DIVIDS  https://api.polygon.io/v3/reference/dividends?ticker=${ticker}&apiKey=${env.MARKET_API}
// SPLITS  https://api.polygon.io/v3/reference/splits?ticker=${ticker}&apiKey=*${env.MARKET_API}

    return (
        <div>

            <TraderNav message={ticker}/>
            
            <form onSubmit={submitHandler} className="p-4 row">
                <label className='form-label col-10 col-sm-4'>Ticker
                    <input className='form-control' type="text" value={ticker} onChange={e=>setTicker(e.target.value)} />
                </label>
                <label className='form-label col-10 col-sm-4'>Start Date
                    <input className='form-control' type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} />
                </label>
                <label className='form-label col-10 col-sm-4'>Interval
                    <select className='form-control' value={interval} onChange={e=>setInterval(e.target.value)}>
                        <option value="minute">Minute</option>
                        <option value="hour">Hour</option>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </label>
                <button className='btn btn-secondary' style={{maxWidth:"100px", marginLeft:"1.5vw"}}>Send</button>
            </form>

            {loaded ? 
                <>
                    <History ticker={ticker} history={history} setHistory={setHistory} interval={interval} startDate={startDate} today={today} />
                    <Details ticker={ticker} details={details} setDetails={setDetails} />
                    <Financials financials={financials} />
                    <Dividends ticker={ticker} dividends={dividends} setDividends={setDividends} />
                    <Spilts ticker={ticker} splits={splits} setSplits={setSplits} />
                </>
                : 
                <div className='text-center'>
                    <div className="spinner-border" style={{width:"3rem", height:"3rem"}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow" style={{width:"3rem", height:"3rem", color:"#1fa4re"}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default TickerDetail