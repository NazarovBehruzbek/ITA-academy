import React from 'react'
import "./Fikrlar.css"
import person from "../../assets/person.jpg"

export default function 
() {
  return (
    <div className='container'>
          <h2 className='fikr-title' data-aos="flip-left">O'quvchilarimiz fikrlari</h2>
          <div className="fikr-wrapper">
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                    <img src={person} alt="Error" />
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <img src={person} alt="Error" />
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <img src={person} alt="Error" />
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <img src={person} alt="Error" />  
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
          </div>
    </div>
  )
}
