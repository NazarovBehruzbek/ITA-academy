import React, { useState } from 'react';
import "./Faq.css"
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const items = [
    {
      title: 'What is React?',
      content: 'React is a front-end JavaScript library for building user interfaces.',
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite among developers due to its simplicity and flexibility.',
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components that represent different parts of your UI.',
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
