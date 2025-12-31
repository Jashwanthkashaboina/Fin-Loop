// so here it is a static data coming from data.jsx file
// import { holdings } from "../data/data.jsx";
// Instead of reading data from file. We'll fetch data from api that we created in 
// backend "/allholdings". For that we use react "hooks" and useState all these !

import axios from 'axios';
import { useState, useEffect } from "react";
// Here useState is to --- store the data
// And useEffect is to --- connect to the api


function Holdings() {
    // Now, fetch the data
    const [allHoldings, setallHoldings] = useState([]);
    // axios is the package will help use to connect to the package
    useEffect(() =>{
        axios.get("http://localhost:8000/allholdings")
            .then((res) =>{
                console.log("Working !");
                setallHoldings(res.data);
            })
    }, []);
    return ( 
        <>
            <h3 className="title">Holdings ({ allHoldings.length })</h3>
            <div className="order-table">
                <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
                { allHoldings.map((stock, index) =>{
                    const currValue = stock.price * stock.qty;
                    const isProfit = (currValue - stock.avg * stock.qty) >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stock.isLoss ? "loss" : "profit";  
                    
                    return (
                        <tr key={index}>
                            <td> { stock.name } </td>
                            <td> { stock.qty } </td>
                            <td> { stock.avg.toFixed(2) } </td>
                            <td> { stock.price.toFixed(2) } </td>
                            <td> { currValue.toFixed(2) } </td>
                            <td className='profClass'> 
                                { (currValue - stock.avg * stock.qty).toFixed(2) } 
                            </td>
                            <td className={ profClass }> { stock.net } </td>
                            <td className={ dayClass }> { stock.day }</td>
                        </tr>
                    );
                })}
                </table>
            </div>

            <div className="row">
                <div className="col">
                <h5>29,875.<span>55</span>{" "} </h5>
                <p>Total investment</p>
                </div>
                <div className="col">
                <h5>31,428.<span>95</span>{" "} </h5>
                <p>Current value</p>
                </div>
                <div className="col">
                <h5>1,553.40 (+5.20%)</h5>
                <p>P&L</p>
                </div>
            </div>
        </>
     );
}

export default Holdings;