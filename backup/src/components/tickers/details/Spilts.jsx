import axios from 'axios'
import { useEffect } from 'react'
import env from 'react-dotenv'

const Spilts = ({ticker,splits,setSplits}) => {
    useEffect(()=>{
        axios.get(`https://api.polygon.io/v3/reference/splits?ticker=${ticker}&apiKey=${env.MARKET_API}`)
            .then(res => {setSplits(res.data.results)})
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h2>Splits</h2>
            {splits.length > 0 ?
                <table className='table table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Execution Date</th>
                            <th>Split From</th>
                            <th>Split To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {splits &&
                            splits.map((s,i) => {
                                return(
                                    <tr key={i}>
                                        <td>{s.execution_date}</td>
                                        <td>{s.split_from}</td>
                                        <td>{s.split_to}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> 

                : <h3>No Split Data Available...</h3>
            }
        </div>
    )
}

export default Spilts