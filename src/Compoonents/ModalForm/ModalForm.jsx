import React, { useEffect, useRef, useState } from 'react';
import { Modal, message } from 'antd';
import axios from 'axios';
import Data from '../CoursesData/Courses';

function ModalForm({ isModalOpen, handleCancel }) {
    const phoneInputRef = useRef(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+998 ');
    const [selectedCourse, setSelectedCourse] = useState('');
    
    useEffect(() => {
        const input = phoneInputRef.current;
        const handleFocus = () => {
            input.setSelectionRange(5, 5);
        };

        const handleInput = () => {
            if (!input.value.startsWith('+998 ')) {
                setPhone(input.value.replace(/^(\+998 )?/, ''));
            }
        };

        if (input) {
            input.addEventListener('focus', handleFocus);
            input.addEventListener('input', handleInput);
            return () => {
                input.removeEventListener('focus', handleFocus);
                input.removeEventListener('input', handleInput);
            };
        }
    }, [phone]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = "6395452715:AAFCxS69thPtZMXSFbLHyeLr17sYQqESJnc";
        const chat_id = 7045653787;

        const messageContent = `Ismi: ${name}\nTelefon raqami: ${phone}\nKurs: ${selectedCourse}`;
        
        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chat_id,
                text: messageContent
            });

            message.success('Muvaffaqiyatli yuborildi');
            handleCancel();
        } catch (error) {
            message.error('Yuborishda xatolik');
            console.error(error);
        }
        setName('');
        setPhone('+998 ');
        setSelectedCourse('');
    };

    return (
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
            <h2>Kursga yozilish uchun formani to'ldiring</h2>
            <p style={{fontSize:'20px',lineHeight:'25px',padding:'20px 0'}}>Agar kurs haqida savollaringiz bo'lsa yoki tanlashni bilmasangiz, raqamingizni qoldiring va bizning operatorlarimiz sizga qo'ng'iroq qilishadi.</p>
            <form onSubmit={handleSubmit}>
                <div className="consult-form">
                    <input
                        required
                        className="form-input"
                        type="text"
                        placeholder="Ismingiz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Ismingiz"
                    />
                    <select
                        className="choose-select modal-select"
                        name="kurs"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        required
                        aria-label="Kursni tanlang"
                    >
                        <option value="" disabled>Kursni tanlang</option>
                        {Data && Data.map((item, index) => (
                            <option
                                value={item?.nameUZ}
                                key={index}
                            >
                                {item?.nameUZ}
                            </option>
                        ))}
                    </select>
                    <input
                        required
                        className="form-input"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        placeholder="Telefon raqamingiz"
                        ref={phoneInputRef}
                        aria-label="Telefon raqamingiz"
                    />
                    <button type="submit" className="form-btn">Yuborish</button>
                </div>
            </form>
        </Modal>
    );
}

export default ModalForm;
