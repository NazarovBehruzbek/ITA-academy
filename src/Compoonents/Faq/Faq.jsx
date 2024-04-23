import React, { useState } from 'react';
import "./Faq.css"
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const items = [
    {
      title: "Kursni bitirganimdan keyiin ish topa olamanmi?",
      content: "Ha albatta kursni muvaffaqiyatli tugatgan o'quvchilarimiz hozirda bir nechta kampaniyalarda ishlayapti.Siz ham shular qatorida bo'lishingiz mumkun ",
    },
    {
      title: "Frontend yoki boshqa kurslarni tugatganman nima qilsam bo'ladi",
      content: "Biror bir kursni 100% to'liq tugatib ( masalan frontend bo'lsa JS advanced biror bir framework ) + gitda kamida ikkita loyihangiz bo'lsa ish uchun suhbatga chaqiramiz. Lekin chala yarim bitirgan bo'lsangiz Frontend kursni boshidan boshlab o'rgatamiz.",
    },
    {
      title: 'Flutterda dasturlashda qanday dizayn patternlaridan foydalaniladi?',
      content: 'Flutterda Widget Tree, State Management, BLoC (Business Logic Component), MVVM (Model-View-ViewModel), Provider, GetX kabilardan foydalaniladi',
    },
  ];

  return (
<div className="faq">
<div className="container">
      <h2 className='faq-title' data-aos="flip-up">Ko'p beriladigan savollar</h2>
    {items.map((item, index) => (
      <div key={index} className='accordion-item' data-aos="zoom-in">
        <div className={`accordion-title ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)} >
          <h3>{item.title}</h3>
          <span className="icon"><span>{activeIndex === index ? '▲' : '▼'}</span></span>
        </div>
        {activeIndex === index && (
          <div className="accordion-content">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
);
};

export default Faq;
