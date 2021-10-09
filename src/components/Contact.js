import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


function Contact()
{
    return(
        <>
            <div className="container contact">
                <div className="contact_text h1_text">
                    <h1> Contact Us</h1>

                    <p>info@mysite.com     /     500 Terry Francois Street, San Francisco, CA 94158    /     Tel: 123-456-7890  </p>
                </div>

                <div className="contact_form">
                        <form className="form_grid">
                            <input type="text" placeholder="Name*" required></input>
                            <input type="email" placeholder="Email*" required></input>
                            <input type="text" placeholder="Subject*" required></input>
                            <textarea type="text" placeholder="Message*"></textarea>
                            <button type="submit">Send</button>
                        </form>

                </div>

            </div>
                {/* <div style={{ height: '100vh', width: '100%' }}>
               
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCej-gvY6CVqBmnaJcxt479baj1bhGRVZQ' }}
                        defaultCenter={10}
                        defaultZoom={{ lat:59.955413 , lng:30.337844}}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                        >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
        </div> */}
        </>
// AIzaSyCej-gvY6CVqBmnaJcxt479baj1bhGRVZQ
       
    )
}

export default Contact;
