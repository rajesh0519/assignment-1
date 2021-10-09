import React from 'react';

function Gallery()
{
    return(
        <>
            <div className="container gallery  h1_text">
                <div >
                    <h1>GALLERY</h1>
                </div>

                <div className="gallery_grid">
                    <img src="/img1.jpg"></img>
                    <img src="/img2.jpg"></img>
                    <img src="/img3.jpg"></img> 

                </div>
            </div>
        </>
    )
}

export default Gallery;