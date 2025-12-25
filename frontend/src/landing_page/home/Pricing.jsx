import React from 'react';


function Pricing() {
    return ( 
        <div className="container px-5 mb-5">
            <div className="row px-5">
                <div className="col-4 px-5">
                    <h1 className='fs-2 mb-3'>Unbeatable Pricing</h1>
                    <p>
                        we pioneered the concept of booking and price transparency in india.
                        Flat fees no hidden charges.
                    </p>
                    <a href='' style={{ textDecoration: "None" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 px-5 mb-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;