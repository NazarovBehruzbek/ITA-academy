import React, { useEffect, useRef, useState } from "react";
import "./Choose.css"
import axios from "axios";
import { message } from "antd";
import Data from "../CoursesData/Courses"

function Choose() {
    const phoneInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        event.preventDefault();
        const token = "6395452715:AAFCxS69thPtZMXSFbLHyeLr17sYQqESJnc";
        const chat_id = -1002092768784;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const method = 'POST';
        const name = document.getElementById("nameInput").value;
        const course = document.getElementById("chooseKurs").value;
        const phone = document.getElementById("phoneNumber").value;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone} \nKursi: ${course}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            document.getElementById("courseForm").reset();
            message.success("Muvaffaqiyatli yuborildi")
        }).catch(error => {
            message.error("Xatolik")
            console.log(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    };
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
                            <form id="courseForm" onSubmit={onFinish}>
                                <div className="choose-form">
                                    <input className="choose-input" type="text" placeholder="Ismingiz" id="nameInput" required />
                                    <select className="choose-select" name="Kurs" id="chooseKurs" aria-label="Kursni tanlang" required>
                                        <option value="" disabled>Kursni tanlang</option>
                                        {
                                            Data && Data.map((item, index) => (
                                                <option key={index} className="choose-option" value={item?.nameUZ}>{item?.nameUZ}</option>
                                            ))
                                        }
                                    </select>
                                    <input
                                        id="phoneNumber"
                                        className="choose-input"
                                        type="tel"
                                        defaultValue="+998 "
                                        placeholder="Telefon raqamingiz"
                                        ref={phoneInputRef}
                                        required
                                    />
                                    <button type="submit" className="form-btn" disabled={loading}>{loading ? 'Yuborilmoqda...' : 'Kursga yozilish'}</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Choose;