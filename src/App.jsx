import { useEffect } from "react";
import About from "./Compoonents/About/About"
import Header from "./Compoonents/header/header"
import HomePage from "./Compoonents/homePage/homePage"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Courses from "./Compoonents/Courses/Courses";
import Consulting from "./Compoonents/Consulting/Consulting";

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation easing
    });
}, []);
  
  return (
    <>
     <Header/>
     <HomePage/>
     <About/>
     <Courses/>
     <Consulting/>
    </>
  )
}

export default App
