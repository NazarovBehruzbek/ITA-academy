import React from "react";
import "./Fakt.css";

function Fakt() {
    return (
        <>
            <div className="fakt">
                <div className="container">
                    <h2 className="fakt-title" data-aos="flip-left">Qiziqarli raqamlar</h2>
                    <div className="fakt-wrapper">
                        <div className="fakt-card" data-aos="flip-up">
                            <p className="fakt-number">250+</p>
                            <p className="fakt-text">dan ortiq mutaxassislar tayyorlaganmiz</p>
                            <div className="line"></div>
                        </div>
                        <div className="fakt-card" data-aos="flip-up">
                            <p className="fakt-number">10+</p>
                            <p className="fakt-text">dan ortiq kuchli mentorlar</p>
                            <div className="line"></div>
                        </div>
                        <div className="fakt-card" data-aos="flip-up">
                            <p className="fakt-number">6+</p>
                            <p className="fakt-text">mentorlarimizning tajribasi eng kamida 2 yil</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fakt;