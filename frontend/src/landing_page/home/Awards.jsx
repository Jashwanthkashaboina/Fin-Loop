import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6 p-5">
                    <img src='media/images/largestBroker.svg' alt='largestBroker Image'/>
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest Broker in India</h1>
                    <p className='mb-5'>
                        2M+ Zerodha clients contribute to over 15% of all retail order vloume in india daily by 
                        trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li> <p>Future and options</p> </li>
                                <li> <p>commodity derivatives</p> </li>
                                <li> <p>Currency derivatives</p> </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li> <p>Stocks and IPOs</p> </li>
                                <li> <p>Direct mutual funds</p> </li>
                                <li> <p>Bonds & Government Securities</p> </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width: "90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;