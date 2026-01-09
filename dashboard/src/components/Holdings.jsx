// so here it is a static data coming from data.jsx file
// import { holdings } from "../data/data.jsx";
// Instead of reading data from file. We'll fetch data from api that we created in 
// backend "/allholdings". For that we use react "hooks" and useState all these !

import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { VerticalGraph } from './VerticalGraph';
import GeneralContext from './GeneralContext';
// Here useState is to --- store the data
// And useEffect is to --- connect to the api



function Holdings() {
    const { dataChanged } = useContext(GeneralContext);
    // Now, fetch the data
    const [allHoldings, setallHoldings] = useState([]);
    // axios is the package will help use to connect to the package
    useEffect(() =>{
        axios.get("http://localhost:8000/holdings")
            .then((res) =>{
                // console.log("Working !");
                setallHoldings(res.data);
            })
    }, [dataChanged]); // whenever dataChanged changes, this useEffect will re-run


const labels = allHoldings.map((stock) => stock.name);
const data = {
    labels,
    datasets: [
        {
        label: 'Holdings',
        data: allHoldings.map((stock) => stock.qty),
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
        },
    ],
};
    
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
                {allHoldings.map((stock, index) => {
                    // ?? means “use this value unless it is null or undefined”
                    const avgPrice = stock.avgPrice ?? stock.avg ?? 0;
                    const ltp = avgPrice * (1 + (Math.random() - 0.5) / 10);
                    const currValue = ltp * stock.qty;
                    const pnl = currValue - avgPrice * stock.qty;
                    const netChg = ((ltp - avgPrice) / avgPrice) * 100;
                    const dayChg = netChg * 0.4;
                    const profClass = pnl >= 0 ? "profit" : "loss";

                    return (
                        <tr key={index}>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{avgPrice.toFixed(2)}</td>
                        <td>{ltp.toFixed(2)}</td>
                        <td>{currValue.toFixed(2)}</td>
                        <td className={profClass}>{pnl.toFixed(2)}</td>
                        <td className={profClass}>{netChg.toFixed(2)}%</td>
                        <td className={profClass}>{dayChg.toFixed(2)}%</td>
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
            <VerticalGraph data={data}/>
        </>
     );
}

export default Holdings;