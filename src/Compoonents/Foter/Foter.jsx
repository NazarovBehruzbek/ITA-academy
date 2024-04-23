import React from "react";
import logo from "../../assets/LOGO6666.png"
import "./Foter.css"
import instagram from "../../assets/instagram-logo.png"
import telegram from "../../assets/telegram.png"
import youtube from "../../assets/Youtube_logo.png"
import facebook from "../../assets/facebok.jpg"
import { Link } from "react-router-dom";

function Foter({ showModal }) {
  const toTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="Foter">
        <div className="container">
          <div className="foter-infos">
            <div className="foter-logo" data-aos="flip-up"><Link to="/" onClick={toTop}><img className="logo" src={logo} alt="Logo" /></Link></div>
            <div className="foter-menu" data-aos="flip-up">
              <Link to="/course" onClick={toTop}><p>Kurslar</p></Link>
              <Link to="/about" onClick={toTop}>  <p>Biz haqimizda</p></Link>
              <p onClick={showModal}>Bepul darsga yozilish</p>
            </div>
            <div data-aos="flip-up">
              <a href="tel:+998947820092"><p className="foter-phone">+998 94 782 00 92</p></a>

              <div className="social">
                <div className="social-item">
                  <a href="https://www.instagram.com/it_time_academy" target="_blank"> <img className="instagram-img" src={instagram} alt="Error" /></a>
                </div>
                <div className="social-item">
                  <a href="" target="_blank"> <img className="facebok-img" src={facebook} alt="Error" /></a>
                </div>
                <div className="social-item">
                  <a href="https://t.me/it_time" target="_blank"><img className="telegram-img" src={telegram} alt="Error" /></a>
                </div>
                <div className="social-item">
                  <a href="https://www.youtube.com/@it-time-academy" target="_blank"><img className="youtube-img" src={youtube} alt="Error" /></a>
                </div>
              </div>
            </div>
          </div >
          <p data-aos="flip-up" className="foter-text">© It Time Acadmey 2021 - 2024 All rights reserved</p>
        </div>
      </div>
    </>
  )
}
export default Foter;