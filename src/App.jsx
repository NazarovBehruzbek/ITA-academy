import { useEffect } from "react";
import Header from "./Compoonents/header/header"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foter from "./Compoonents/Foter/Foter";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
        duration: 900,
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
