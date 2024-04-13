import React from "react";
import logo from "../../assets/LOGO6666.png"
import gamburger from"../../images/gamburger.png"
import "./header.css"
import { NavLink } from "react-router-dom";

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
               <li className="nav-item"><NavLink to="/about" activeClassName="active">Biz haqimizda</NavLink></li>
                <li className="nav-item"><NavLink to="/course"  activeClassName="active">Kurslar</NavLink></li>
                <li className="nav-item"><NavLink to="/contact"  activeClassName="active">Kontakt</NavLink></li>
               </div>
               <div className="menu-btn">
               <li className="nav-item"><div className="nav-btn">Kurslarni ko'rish</div></li>
               </div>
               <div className="sidebar-menu"><img style={{width:'30px'}} src={gamburger} alt="Hamburger" /></div>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Header;