import React from 'react';


function LeftImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <img src={imageURL} />
                </div>
                <div className="col p-5 mt-5">
                    <h1 className='fs-1'>{ productName }</h1>
                    <p>{ productDescription }</p>
                    <div className='mb-3'>
                        <a href={ tryDemo } className='px-4'>Try Demo →</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href={ learnMore }>Learn More →</a>
                    </div>
                    <div>
                        <a href={ googlePlay } className='px-4'><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={ appStore }><img src='media/images/appstoreBadge.svg' /></a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftImage;