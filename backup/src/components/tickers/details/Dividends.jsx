import axios from 'axios'
import { useEffect } from 'react'
import env from 'react-dotenv'

const Dividends = ({ticker,dividends,setDividends}) => {
    useEffect(()=> {
        axios.get(`https://api.polygon.io/v3/reference/dividends?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res => setDividends(res.data.results))
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h2>Dividends</h2>
            {dividends.length > 0 ? 
                <table className='table table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Cash Amount</th>
                            <th>Declaration Date</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dividends &&
                            dividends.map((d,i) => {
                                return(
                                    <tr key={i}>
                                        <td>${d.cash_amount.toFixed(2)}</td>
                                        <td>{d.declaration_date}</td>
                                        <td>{d.pay_date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                : <h3>No Dividend Data Available....</h3> 
            }
        </div>
    )
}

export default Dividends