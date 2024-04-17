import React from 'react'
import "./Fikrlar.css"
import fikr1 from "../../videos/fikr1.mp4"
import fikr3 from "../../videos/fikr3.mp4"
import rasm from "../../assets/person.jpg"

export default function 
() {
  return (
    <div className='container'>
          <h2 className='fikr-title' data-aos="flip-left">O'quvchilarimiz fikrlari</h2>
          <div className="fikr-wrapper">
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                   <video controls src={fikr3} poster={rasm}></video>
                </div>
                <h3>Jafarbek</h3>
                <p>"Python Backend" kursi o'quvchis</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={fikr1} poster={rasm}></video>
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={fikr3} poster={rasm}></video>
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={fikr1} poster={rasm}></video>
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={fikr3} poster={rasm}></video>
                </div>
                <h3>Behruzbek Nazarov</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
          </div>
    </div>
  )
}
