import React, { useEffect, useState } from "react";
import logo from "../../assets/LOGO6666.png"
import gamburger from"../../images/gamburger.png"
import "./header.css"
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";

function Header ({showModal}) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleMenuClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        const menuHeight = document.querySelector('.nav').offsetHeight;

        if (section) {
            const offset = section.offsetTop - menuHeight;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
        setOpen(false)
    };
    return(
        <>
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
            <ul className="nav-list">
                <div className="menu-logo">
                <li className="nav-item"><NavLink to="/"><img className="nav-img" src={logo} alt="Error"/></NavLink></li>
                </div>
               <div className="menu">
               <li className="nav-item"><NavLink to="/about">Biz haqimizda</NavLink></li>
                <li className="nav-item"><NavLink to="/course">Kurslar</NavLink></li>
                {/* <li className="nav-item"><NavLink className="nav-menu-item">Mentorlar</NavLink></li> */}
               </div>
               <div className="menu-btn">
               <li className="nav-item" onClick={showModal}><div className="nav-btn">Bepul konsultatsiya</div></li>
               </div>
               <div onClick={showDrawer} className="sidebar-menu"><img style={{width:'30px'}} src={gamburger} alt="Hamburger" /></div>
            </ul>
            </div>
        </div>
        <Drawer onClose={onClose} open={open}>
        <div className="hamburger-menu">
            <NavLink to="/about" className="hamburger-menu-item" onClick={onClose}>Biz haqimizda</NavLink>
        </div>
        <div className="hamburger-menu">
            <NavLink className="hamburger-menu-item">Kurslar</NavLink>
        </div>
        {/* <div className="hamburger-menu">
            <NavLink className="hamburger-menu-item">Mentorlar</NavLink>
        </div> */}
        </Drawer>
        </>
    )
}
export default Header;