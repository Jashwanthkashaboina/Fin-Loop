import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src='media/images/education.svg' alt='Varsity' style={{width: "90%"}}/>
                </div>
                <div className="col-6 mt-5">
                    <h1 className='fs-2 mb-3'>Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market book in the world
                        covering everything from basics to advanced trading.
                    </p>
                    <a href='' style={{ textDecoration: "None" }}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-3'>
                        Trading Q&A the most active trading and community investment in India 
                        for all your market related queries.
                    </p>
                    <a href='' style={{ textDecoration: "None" }}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;