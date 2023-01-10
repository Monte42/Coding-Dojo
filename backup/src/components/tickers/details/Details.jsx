import axios from 'axios'
import { useEffect } from 'react'
import env from 'react-dotenv'

const Details = ({ticker,details,setDetails}) => {

    useEffect(()=> {
        axios.get(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${env.MARKET_API}`)
            .then(res => setDetails(res.data.results))
            .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <h2>Details</h2>
            {details ? 
                <div className='row'>
                    <div className='col-8 col-sm-7 col-md-8 col-lg-9'>
                        <h3>{details.name}</h3>
                        <h4>{details.sic_description}</h4>
                        <p>{details.description}</p>
                    </div>
                    <div className='col-8 col-sm-5 col-md-4 col-lg-3'>
                        {details.address &&
                            <>
                                <p>{details.homepage_url}</p>
                                <p>{details.address.address1}</p>
                                <p>{details.address.city} {details.address.state}, {details.address.postal_code}</p>
                                <p>{details.phone_number}</p>
                                <p>{details.homepage_url}</p>
                            </>
                        }
                    </div>
                </div>

                : <h3>No Detail Data Available...</h3>

            }
        </div>
    )
}

export default Details