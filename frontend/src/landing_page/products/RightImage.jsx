import React from 'react';


function RightImage({ imageURL, productName, productDescription, linkText }) {
    return ( 
        <div className="container my-5">
            <div className="row align-items-center">
                
                {/* Text */}
                <div className="col-md-6 px-5">
                    <h1 className="fs-1">{productName}</h1>
                    <p className="text-muted">{productDescription}</p>
                    <a href="#">{ linkText } →</a>
                </div>

                {/* Image */}
                <div className="col-md-6 text-center">
                    <img 
                        src={imageURL} 
                        alt={productName} 
                        className="img-fluid"
                    />
                </div>

            </div>
        </div>
    );
}



export default RightImage;