import React , {useState} from 'react';
import Jump from 'jump.js';

// import "../css/nav.css";

function Navbar()
{
    const [ navbar , setNavbar] = useState(false);

    const toggle = () => {
        // console.log(navbar);
        setNavbar(!navbar);
      }

    return(
        <>


 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

 {navbar === true ?
     <nav className="menu_responsive">
                    
     <button className="menu_button res" onClick={()=>{Jump('.home',{duration:2000 , offset: 0,}); toggle()}}>Home</button>
     <button className="menu_button res" onClick={()=>{Jump('.about',{duration:2000 , offset: -100}); toggle()} }>About</button>
     <button className="menu_button res" onClick={()=>{Jump('.rooms',{duration:2000 , offset: -250}); toggle()}}>Rooms</button>
     <button className="menu_button res" onClick={()=>{Jump('.services',{duration:2000}); toggle()}}>Services</button>
     <button className="menu_button res" onClick={()=>{Jump('.gallery',{duration:2000}); toggle()}}>Gallery</button>
     <button className="menu_button res" onClick={()=>{Jump('.seeDo',{duration:2000}); toggle()}}>See & Do</button>
     <button className="menu_button res" onClick={()=>{Jump('.contact',{duration:2000 , offset: -50});toggle()}}>Contact</button>

     <button className="navbtn">Book A Room</button>

     <button className="icon" onClick={toggle}>  <i className="fa fa-bars"></i>   </button>


</nav>


    :

                <nav className="menu">
                    
                        <button className="menu_button" onClick={()=>{Jump('.home',{duration:2000 , offset: 0,});}}>Home</button>
                        <button className="menu_button" onClick={()=>{Jump('.about',{duration:2000 , offset: -100});} }>About</button>
                        <button className="menu_button" onClick={()=>{Jump('.rooms',{duration:2000 , offset: -250});}}>Rooms</button>
                        <button className="menu_button" onClick={()=>{Jump('.services',{duration:2000});}}>Services</button>
                        <button className="menu_button" onClick={()=>{Jump('.gallery',{duration:2000});}}>Gallery</button>
                        <button className="menu_button" onClick={()=>{Jump('.seeDo',{duration:2000});}}>See & Do</button>
                        <button className="menu_button" onClick={()=>{Jump('.contact',{duration:2000 , offset: -50});}}>Contact</button>

                        <button className="navbtn">Book A Room</button>

                        <button className="icon" onClick={toggle}>  <i className="fa fa-bars"></i>   </button>


                </nav>
            
 }

{/* <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">WebDev.</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header> */}


        </>
    )
}

export default Navbar;