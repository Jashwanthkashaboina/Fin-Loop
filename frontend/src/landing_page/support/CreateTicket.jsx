import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row">
                <h2 className='mb-4'>To create a ticket, select relevant topic</h2>
            </div>
            <div className="row">
                <div className="col-4 p-3">
                    <h5 className='mb-3'><i class="fa-solid fa-circle-plus fa-0.3x"></i> Account Opening</h5>
                    <a href='' style={{ lineHeight: "2" }}>Resident individual</a>
                    <br/>
                    <a href='' style={{ lineHeight: "2" }}>Minor</a>
                    <br/>
                    <a href='' style={{ lineHeight: "2" }}>Non Resident India (NRI)</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Company, partnership, HUF and LLP</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Glossary</a>
                </div>
                <div className="col-4 p-3">
                    <h5 className='mb-3'><i class="fa-solid fa-user fa-0.3x"></i>  Your Zerodha Account</h5>
                    <a href='' style={{ lineHeight: "2" }}>Your Profile</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Account Modification</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Nomination</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Transfer and conversion of securities</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Client Master Report (CMR) <br/>Depository Participant (DP)</a>
                </div>
                <div className="col-4 p-3">
                    <h5 className='mb-3'><i class="fa-solid fa-paper-plane"></i>  Kite</h5>
                    <a href='' style={{ lineHeight: "2" }}>import</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Trading FAQs</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Charts and Orders</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Alerts and Nudges</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>General</a>
                </div>
            </div>
            <div className="row">
                <div className="col-4 p-3">
                    <h5 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> Funds</h5>
                    <a href='' style={{ lineHeight: "2" }}>Add Money</a>
                    <br/>
                    <a href='' style={{ lineHeight: "2" }}>With Draw Money</a>
                    <br/>
                    <a href='' style={{ lineHeight: "2" }}>Add Bank Accounts</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>eMandates</a><br/>
                </div>
                <div className="col-4 p-3">
                    <h5 className='mb-3'><i class="fa-solid fa-circle-notch"></i>  Console</h5>
                    <a href='' style={{ lineHeight: "2" }}>Portfolio</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Corporate Actions</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Reports</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Profile</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Segments</a>
                </div>
                <div className="col-4 p-3">
                    <h5 className='mb-3'><i class="fa-solid fa-coins"></i>  Coin</h5>
                    <a href='' style={{ lineHeight: "2" }}>Mutual Funds</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>National Pension Scheme</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Features on Coin</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>Payments and Orders</a><br/>
                    <a href='' style={{ lineHeight: "2" }}>General</a>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;