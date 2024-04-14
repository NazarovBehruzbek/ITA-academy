import React from "react";
import logo from "../../assets/LOGO6666.png"
import "./Foter.css"
import instagram from "../../images/instagram-logo.png"
import telegram from "../../images/telegram.png"
import youtube from "../../images/Youtube_logo.png"
import facebook from "../../images/facebok.jpg"

function Foter (){
    return(
        <>
        <div className="Foter">
            <div className="container">
               <div className="foter-infos">
               <div className="foter-logo"><img className="logo" src={logo} alt="Logo" /></div>
                <div className="foter-menu">
                    <p>Kurslar</p>
                    <p>Biz haqimizda</p>
                    <p>Bepul darsga yozilish</p>
                </div>
              <div>
                <a href="tel:+998908666051"><p className="foter-phone">+998 90 866 60 51</p></a>
            
              <div className="social">
                    <div className="social-item">
                       <a href="" target="_blank"> <img className="instagram-img" src={instagram} alt="Error" /></a>
                    </div>
                    <div className="social-item">
                      <a href="" target="_blank"> <img className="facebok-img" src={facebook} alt="Error" /></a>
                    </div>
                    <div className="social-item">
                      <a href="" target="_blank"><img className="telegram-img" src={telegram} alt="Error" /></a>
                    </div>
                    <div className="social-item">
                     <a href="" target="_blank"><img className="youtube-img" src={youtube} alt="Error" /></a>
                    </div>
                </div>
              </div>
               </div>
               <p className="foter-text">© It Time Acadmey 2021 - 2024 All rights reserved</p>
            </div>
        </div>
        </>
    )
}
export default Foter;