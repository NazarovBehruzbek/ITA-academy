import React from "react";
import logo from "../../assets/LOGO6666.png"
import "./header.css"

function Header () {
    return(
        <>
        <div className="nav">
        <div className="container">
            <ul className="nav-list">
                <div className="menu-logo">
                <li className="nav-item"><img className="nav-img" src={logo} alt="Error"/></li>
                </div>
               <div className="menu">
               <li className="nav-item">Biz haqimizda</li>
                <li className="nav-item">Kurslar</li>
                <li className="nav-item">Kontakt</li>
               </div>
               <div className="menu-btn">
               <li className="nav-item"><div className="nav-btn">Kurslarni ko'rish</div></li>
               </div>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Header;