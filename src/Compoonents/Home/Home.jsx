import React from "react";
import HomePage from "../homePage/homePage";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Consulting from "../Consulting/Consulting";
import Teachers from "../Teachers/Teachers";
import Fakt from "../Fakt/Fakt";
import Choose from "../Choose/Choose";

function Home() {
    return (
        <>
            <HomePage />
            <About />
            <Courses />
            <Consulting />
            <Teachers />
            <Fakt />
            <Choose />
        </>
    )
}
export default Home;