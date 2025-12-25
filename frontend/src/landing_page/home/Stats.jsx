import React from 'react';

function Stats() {
    return ( 
        // Note :- we can't exceed 5 in padding i.e p-10 px-7
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    {/* fs == fontsize */}
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                        <h3 className='fs-4'>Customer-first always</h3>
                        <p className='text-muted'> 
                            That's why 1.3+ crore customers trust zerodha 
                            with &#8377;3.5+ lakh crores worth of equity investments
                        </p>
                        <h3 className='fs-4'>No spam or gimmicks</h3>
                        <p className='text-muted'>
                            No gimmicks, spam, "gamification", or annoying push
                            notifications. High quality at your pace,the way you like
                        </p>
                        <h3 className='fs-4'>The Zerodha Universe</h3>
                        <p className='text-muted'>
                            Not just a app, but whole ecosystem.Our investments in 30+
                            fintech startups offer you tailored services specific to your needs.
                        </p>
                        <h3 className='fs-4'>Do better with money</h3>
                        <p className='text-muted'>
                            With initiatives like nudge and Kill Switch, we don't
                            just facilitate transactions, but actively help you do better
                            with your money
                        </p>
                </div>
                <div className="col-6 p-5">
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{ width: "90%" }}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration: "None"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration: "None"}}>Try Kite <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;