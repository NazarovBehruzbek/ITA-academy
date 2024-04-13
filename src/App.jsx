import { useEffect } from "react";
import About from "./Compoonents/About/About"
import Header from "./Compoonents/header/header"
import HomePage from "./Compoonents/homePage/homePage"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Courses from "./Compoonents/Courses/Courses";
import Consulting from "./Compoonents/Consulting/Consulting";
import Teachers from "./Compoonents/Teachers/Teachers";
import Fakt from "./Compoonents/Fakt/Fakt";
import Choose from "./Compoonents/Choose/Choose";
import Foter from "./Compoonents/Foter/Foter";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        offset: 100,
        easing: 'ease-in-out', 
    });
}, []);
  
  return (
    <>
     <Header/>
     <main>
      <Outlet/>
     </main>
     <Foter/>
    </>
  )
}

export default App
