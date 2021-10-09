import React from 'react';

function About()
 {
    return(
        <>
            <div className="container about">
                <div className="about_text  h1_text">
                <h1>ABOUT</h1>
                </div>

                <div className="about_p">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click 
                “Edit Text” or double click me to add your own content and make changes to the font.
                 Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to
                  tell a story and let your users know a little more about you.​</p>
                </div>

                <div className="parallax about_parallax">
                    {/* <img src="/logo512.png"></img> */}
                    <div className="rooms">
                        <h1>OUR ROOMS</h1>

                        <p>I'm a paragraph. 
                            Click here to add your own text and edit me.
                            I’m a great place for you to tell a story
                            and let your users know a little more about you.
                        </p>

                        <button>Book a Room</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default About;