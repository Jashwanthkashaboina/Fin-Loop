import React from 'react';

function Brokerage() {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5 fs-6 border-top">
                <div className="col-8 p-5">
                    <a href='#'><h3 className='fs-5 text-start mx-3'>Brokerage Calculator</h3></a>
                    <ul
                        style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted"
                    >
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className="col-4 p-5">
                    <a href='#'><h3 className='fs-5 mb-3'>List of Charges</h3></a>
                    <p>Free: 0 | Pro: 249/2399</p>
                    <p>Buy & Invest More: 100 | SIP: 10</p>
                    <p>Connect: 500 | Personal: Free</p>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;