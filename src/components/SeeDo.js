import React from 'react';

function SeeDo()
{
    return(
        <>
            <div className="container seeDo">
                <div className="seeDo_text  h1_text">
                    <h1>THINGS TO DO</h1>
                </div>

                <div className="seeDo_grid grid">
                    <div>
                        <h1>Wineries Tour</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>    
                    </div>    
                    <div>
                        <h1>Cultural Sites</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>    
                    </div>    
                    <div>
                        <h1>Market Tour </h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>    
                    </div>    
                    <div>
                        <h1>Leisure Activities</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>    
                    </div>    
                    <div>
                        <h1>Birds Safari</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>    
                    </div>    
                    <div>
                        <h1>Horse Riding </h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>    
                    </div>    
                </div>   

                <div>
                    {/* <img src="/favicon.ico"></img> */}
                    <div className="review parallax">
                        <div className="review_content ">
                        <h1>GUEST REVIEW</h1>

                        <p>“I'm a paragraph.
                             Click here to add your own text and edit me.
                              I’m a great place for you to tell a story and 
                              let your users know a little more about you.”
                        </p>

                        <div className="review_button_grid">
                        <button>.</button>
                        <button>.</button>
                        <button>.</button>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SeeDo;