import React from 'react';

function Team() {
    return ( 
        <div className="container mt-5">
            <div className="row border-top">
                <h1 className='fs-1 text-center mt-5 p-3'>People</h1>
            </div>
            <div className="row mt-5 fs-6 text-muted" style={{ lineHeight: "1.8",fontSize: "1.2em" }}>
                <div className="col-6 p-3 text-center">
                    <img src='media/images/nithinKamath.jpg' alt='Founder/CEO' style={{borderRadius: "50%", width: "60%"}}/>
                    <div className="row mt-4">
                        <h4>Nithin Kamath</h4>
                        <h6>Founder, CEO</h6>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the 
                        hurdles he faced during his decade long stint as a trader. Today, 
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and 
                        the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <pre>
                        Connect on <a href=''>Homepage</a> /
                        <a href=''> TradingQ&A</a> /
                        <a href=''> Twitter</a>
                    </pre>
                </div>
            </div>
        </div>
     );
}

export default Team;