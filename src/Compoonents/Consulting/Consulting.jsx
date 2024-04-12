import React, { useRef, useEffect } from "react";
import "./Consulting.css";
import bannerimg1 from "../../images/banner-img2.png";
import bannerimg2 from "../../images/banner-img1.png";
import bannerimg3 from "../../images/banner-img3.png";

function Consulting() {
    const phoneInputRef = useRef(null);

    // Handle events when the component mounts and unmounts
    useEffect(() => {
        const input = phoneInputRef.current;
        const handleFocus = () => {
            input.setSelectionRange(5, 5);
        };

        // Input event handler
        const handleInput = () => {
            if (!input.value.startsWith("+998 ")) {
                input.value = "+998 ";
            }
        };

        // Add event listeners
        input.addEventListener("focus", handleFocus);
        input.addEventListener("input", handleInput);

        // Cleanup event listeners when the component unmounts
        return () => {
            input.removeEventListener("focus", handleFocus);
            input.removeEventListener("input", handleInput);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="consult-wrapper">
                    <div className="card-item1" data-aos="zoom-in">
                        <h2 className="consult-title">
                            IT - bu kelajak, zamonaviy kasblardan birini IT Ta'lim Academy bilan tajribali ustozlardan o'rganing!
                        </h2>
                        <div className="wrapper-consult">
                            <div className="card-consult">
                                <img className="consult-img" src={bannerimg1} alt="Error" />
                            </div>
                            <div className="card-consult">
                                <img className="consult-img" src={bannerimg2} alt="Error" />
                            </div>
                            <div className="card-consult">
                                <img className="consult-img" src={bannerimg3} alt="Error" />
                            </div>
                        </div>
                    </div>
                    <div className="card-item2" data-aos="zoom-in">
                        <h2 className="card-item2-title">Bepul konsultatsiya</h2>
                        <p className="card-item2-text">
                            Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va barcha savollaringizga javob beramiz!
                        </p>
                        <div className="consult-form">
                            <input className="form-input" type="text" placeholder="Ismingiz" />
                            <input
                                className="form-input"
                                type="tel"
                                defaultValue="+998 "
                                placeholder="Telefon raqamingiz"
                                ref={phoneInputRef}
                            />
                            <button className="form-btn">Yuborish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consulting;
