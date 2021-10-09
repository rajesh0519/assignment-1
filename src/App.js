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


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCBx2Q_-JCDUlLdludMO9art2yVd475Mwo",

  authDomain: "assignment-1-11002.firebaseapp.com",

  projectId: "assignment-1-11002",

  storageBucket: "assignment-1-11002.appspot.com",

  messagingSenderId: "286388846643",

  appId: "1:286388846643:web:04a56c145f01aca3f1a346"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);




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
