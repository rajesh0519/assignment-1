import React from 'react';
import {Parallax} from 'react-parallax'

const image = "/img1.jpg";

function Home()
{
    return(
        <>

        <div className="social_box">
            <a href="http://instagram.com"><img src="insta.png"></img></a>
            <a href="http://facebook.com"><img src="facebook.png"></img></a>
            {/* <img src="img1.jpg"></img> */}

        </div>

        <div className="message_box">
        <button>M</button>
        </div>

            <div className="container home">
                <div className="home_text ">
                    <h1>Ferofly</h1>
                    <h2>Magnify Your Journey</h2>
                </div>

                <div  className="parallax home_parallax">

                {/* <img src="img1.jpg"></img> */}

                    {/* <Parallax bgImage={image}  className="home_parralax" >
                        <div>Hii</div>
                    </Parallax> */}
                </div>

                <div className="home_input">
                    <div>
                    <label for="date">Check In</label>
                    <input type="date" placeholder="Name" ></input>
                    </div>

                    <div>
                    <label for="date">Check Out</label>
                    <input type="date" placeholder="Name" ></input>
                    </div>

                    <div>
                    <label for="number">Adults</label>
                    <input type="number" value="1" ></input>
                    </div>

                    <div>
                    <label for="number">Childs</label>
                    <input type="number" value="0" ></input>
                    </div>

                    <div>
                        <label for="">.</label>
                        <button type="button">Search</button>
                    </div>
                   
                </div>

            </div>


        </>
    )
}

export default Home;