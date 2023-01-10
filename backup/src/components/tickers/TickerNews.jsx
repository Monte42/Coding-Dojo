import axios from 'axios'
import { useState,useEffect } from 'react'
import env from 'react-dotenv'

const TickerNews = () => {
    const [ticker,setTicker] = useState('AAPL')
    const [articles,setArticles] = useState([])

    useEffect(()=>{
        axios.get(`https://api.polygon.io/v2/reference/news?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res=> setArticles(res.data.results))
            .catch(err => console.log(err))
    },[])

    const submitHandler = e => {
        e.preventDefault()
        axios.get(`https://api.polygon.io/v2/reference/news?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res=> setArticles(res.data.results))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h4>{ticker} News</h4>
            <form onSubmit={submitHandler}>
                <div className="input-group input-group-lg msg-form">
                    <button onClick={submitHandler} className="input-group-text" id="inputGroup-sizing-lg">Search</button>
                    <input type="text" className="form-control" aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-lg" value={ticker} 
                    onChange={e => setTicker(e.target.value)}
                    />
                    <br />
                </div>
            </form>
            <table className='overflow-auto height-50 border rounded table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Publiser</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {articles &&
                        articles.map((a,i) =>{
                            return(
                                <tr key={i}>
                                    <td>
                                        <img src={a.publisher.logo_url} alt="Publisher Log"/>
                                    </td>
                                    <td>
                                        <a href={a.article_url} target="_blank">{a.title}</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TickerNews