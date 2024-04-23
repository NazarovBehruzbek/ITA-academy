import React, { useRef, useEffect } from "react";
import "./Consulting.css";
import bannerimg1 from "../../assets/banner-img2.png";
import bannerimg2 from "../../assets/banner-img1.png";
import bannerimg3 from "../../assets/banner-img3.png";
import axios from "axios";
import { message } from "antd";

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

    const onFinish = (event) => {
        event.preventDefault()
        const token = "6395452715:AAFCxS69thPtZMXSFbLHyeLr17sYQqESJnc";
        const chat_id = -1002092768784;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const method = 'POST';
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            document.getElementById("myForm").reset();
            message.success("Muvaffaqiyatli yuborildi")
        }).catch(error => {
            message.error("Xatolik")
            console.log(error);
        });
    };

    return (
        <>
            <div className="container">
                <div className="consult-wrapper">
                    <div className="card-item1" data-aos="zoom-in">
                        <h2 className="consult-title">
                            IT - bu kelajak, zamonaviy kasblardan birini IT Time Academy bilan tajribali ustozlardan o'rganing!
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
                        <form id="myForm" onSubmit={onFinish}>
                            <div className="consult-form">
                                <input className="form-input" type="text" placeholder="Ismingiz" id="name" />
                                <input
                                    id="phone"
                                    className="form-input"
                                    type="tel"
                                    defaultValue="+998 "
                                    placeholder="Telefon raqamingiz"
                                    ref={phoneInputRef}
                                />
                                <button className="form-btn" type="submit">Yuborish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consulting;
