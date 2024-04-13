import React, { useEffect, useRef } from "react";
import "./Choose.css"

function Choose () {
    const phoneInputRef = useRef(null);
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
        <div className="choose">
            <div className="container">
             <div className="choose-wrapper">
             <div className="choose-infos" data-aos="flip-left">
                    <h2 className="choose-title" >Yo'nalishni tanlay olmayapsizmi?</h2>
                    <p className="choose-text">Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi.</p>
                </div>
                <div className="choose-forms" data-aos="flip-left">
                <div className="choose-form">
                            <input className="choose-input" type="text" placeholder="Ismingiz" />
                            <select className="choose-select"  name="Kurs" id="kurs" >
                                <option className="choose-option" value="frontend">Frontend</option>
                                <option className="choose-option" value="frontend">Backend</option>
                                <option className="choose-option" value="frontend">IOS</option>
                                <option className="choose-option" value="frontend">Flutter</option>
                            </select>
                            <input
                                className="choose-input"
                                type="tel"
                                defaultValue="+998 "
                                placeholder="Telefon raqamingiz"
                                ref={phoneInputRef}
                            />
                            <button className="choose-btn">Kursga yozilish</button>
                        </div>

                </div>

             </div>
            </div>
        </div>
        </>
    )
}
export default Choose;