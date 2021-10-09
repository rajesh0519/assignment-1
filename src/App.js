import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import SeeDo from './components/SeeDo'
import Contact from './components/Contact'
import Footer from './components/Footer'





function App() {
  return (
       <>
          <Navbar />

          <Home />

          <About />

          <Services />

          <Gallery />

          <SeeDo />

          <Contact />

          <Footer />

       </>
  );
}

export default App;
