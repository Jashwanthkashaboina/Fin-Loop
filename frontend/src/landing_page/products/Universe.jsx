import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 text-center">
            <div className="row">
                <h3 className='fw-semibold'>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img 
                        src='media/images/zerodhaFundhouse.png' 
                        alt='Zerodha Fund House' 
                        style={{ width: "60%" }}
                        className='mb-4  text-small text-muted'
                    />
                    <p>Asset Management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img 
                        src='media/images/sensibullLogo.svg' 
                        alt='Zerodha Fund House' 
                        style={{ width: "60%" }}
                        className='mb-4 text-small text-muted'
                    />
                    <p>options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5 px-5">
                    <img 
                        src='media/images/streakLogo.png' 
                        alt='Streak Logo' 
                        style={{ width: "50%" }}
                        className='mb-4 text-small text-muted'
                    />
                    <p>Algo & strategy Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img 
                        src='media/images/smallcaseLogo.png' 
                        alt='Streak Logo' 
                        style={{ width: "60%" }}
                        className='mb-4'
                    />
                    <p>Thematic Investment Platform</p>
                </div>
                <div className="col-4 p-3 mt-5" >
                    <img 
                        src='media/images/dittoLogo.png' 
                        alt='Zerodha Fund House' 
                        style={{ width: "30%" }}
                        className='mb-4'
                    />
                    <p>Insurance</p>
                </div>
                <div className="col-4 p-3 mt-5 px-5 my-5">
                    <img 
                        src='media/images/goldenpiLogo.png' 
                        alt='Streak Logo' 
                        style={{ width: "60%" }}
                        className='mb-4'
                    />
                    <p>Bonds Trading Platform</p>
                </div>
            </div>
            <button className= 'p-2 btn btn-primary fs-5 mb-5'style={{width: "20%", margin: "0 auto"}} >Signup Now</button>
        </div>
     );
}

export default Universe;