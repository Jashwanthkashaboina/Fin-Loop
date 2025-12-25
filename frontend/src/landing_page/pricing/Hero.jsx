import React from 'react';


function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5 fs-6 border-bottom text-center">
                <h1>Charges</h1>
                <h3 className='text-muted fs-4 mt-3 mb-5'>
                    Free Equity investments and flat &#8377;20 Intraday and F&O Trades
                </h3>
            </div>
            <div className="row mt-5 fs-6 text-center">
                <div className="col p-5">
                    <img src='media/images/pricing0.svg' alt='0 Price' style={{ width: "60%" }}/>
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), <br/>
                        are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-5">
                    <img src='media/images/intradayTrades.svg' alt='Intraday' style={{ width: "60%" }}/>
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per  executed order on 
                        intraday trades across equity, currency, and commodity trades. 
                        Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col p-5">
                    <img src='media/images/pricing0.svg' alt='0 Price' style={{ width: "60%" }}/>
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted'>
                        All direct mutual fund investments are <br/>absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;