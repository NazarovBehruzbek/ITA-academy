import React, { useEffect, useState } from "react";
import logo from "../../assets/RTTTTT.png"
import gamburger from "../../assets/gamburger.png"
import "./header.css"
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";

function Header({ showModal }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        window.scrollTo(0, 0);
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
    const toTop = () => {
        window.scrollTo(0, 0);
      }
    return (
        <>
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul className="nav-list">
                        <div className="menu-logo">
                            <li className="nav-item"><NavLink to="/" className="header-item">
                                <img className="nav-img" src={logo} alt="Error" />
                                <h1 className="header-title">IT TIME <span style={{color:'#C60205'}}>ACADEMY</span></h1>
                                </NavLink></li>
                        </div>
                        <div className="menu">
                            <li className="nav-item" onClick={toTop}><NavLink to="/about">Biz haqimizda</NavLink></li>
                            <li className="nav-item" onClick={toTop}><NavLink to="/course">Kurslar</NavLink></li>
                            <li className="nav-item" onClick={toTop}><NavLink to="/news">Yangiliklar</NavLink></li>
                        </div>
                        <div className="menu-btn">
                            <li className="nav-item" onClick={showModal}><div className="nav-btn">Bepul konsultatsiya</div></li>
                        </div>
                        <div onClick={showDrawer} className="sidebar-menu"><img style={{ width: '30px' }} src={gamburger} alt="Hamburger" /></div>
                    </ul>
                </div>
            </div>
            <Drawer onClose={onClose} open={open}>
                <div className="hamburger-menu">
                    <NavLink to="/about" className="hamburger-menu-item" onClick={onClose}>Biz haqimizda</NavLink>
                </div>
                <div className="hamburger-menu">
                    <NavLink to="/course" className="hamburger-menu-item" onClick={onClose}>Kurslar</NavLink>
                </div>
                <div className="hamburger-menu">
                    <NavLink to="/news" className="hamburger-menu-item" onClick={onClose}>Yangiliklar</NavLink>
                </div>
            </Drawer>
        </>
    )
}
export default Header;