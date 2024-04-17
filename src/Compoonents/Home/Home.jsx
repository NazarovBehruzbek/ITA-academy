import React, { useState } from "react";
import HomePage from "../homePage/homePage";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Consulting from "../Consulting/Consulting";
import Teachers from "../Teachers/Teachers";
import Fakt from "../Fakt/Fakt";
import Choose from "../Choose/Choose";
import ModalForm from "../ModalForm/ModalForm";
import Fikrlar from "../Fikrlar/Fikrlar";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <HomePage showModal={showModal} />
      <About />
      <Fikrlar/>
      <Courses />
      <Consulting />
      <Teachers />
      <Fakt />
      <Choose />
      <ModalForm isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  )
}
export default Home;