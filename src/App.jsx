import { useEffect, useState } from "react";
import Header from "./Compoonents/header/header"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foter from "./Compoonents/Foter/Foter";
import { Outlet } from "react-router-dom";
import ModalForm from "./Compoonents/ModalForm/ModalForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    
    AOS.init({
        duration: 900,
        offset: 100,
        easing: 'ease-in-out', 
    });
}, []);

  
  return (
    <>
     <Header showModal={showModal}/>
     <main>
      <Outlet/>
      <ModalForm isModalOpen={isModalOpen} handleCancel={handleCancel}/>
     </main>
     <Foter showModal={showModal}/>
    </>
  )
}

export default App
