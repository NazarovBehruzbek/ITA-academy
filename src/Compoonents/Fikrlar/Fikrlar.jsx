import React from 'react'
import "./Fikrlar.css"
import video1 from "../../videos/video1.mp4"
import video2 from "../../videos/video2.mp4"
import video3 from "../../videos/video3.mp4"
import video4 from "../../videos/video4.mp4"
import video5 from "../../videos/video5.mp4"
import video6 from "../../videos/video6.mp4"

export default function 
() {
  return (
    <div className='container'>
          <h2 className='fikr-title' data-aos="flip-left">O'quvchilarimiz fikrlari</h2>
          <div className="fikr-wrapper">
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                   <video controls src={video1} ></video>
                </div>
                <h3>Hojimuhammedov Muhammadislom</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={video2} ></video>
                </div>
                <h3>Haydarov Asilbek</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={video3} ></video>
                </div>
                <h3>Abdullayev Farruh</h3>
                <p>"Backend" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={video4}></video>
                </div>
                <h3>Samandar</h3>
                <p>"Front end" kursi bitiruvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={video5} ></video>
                </div>
                <h3>Lazizbek</h3>
                <p>"Front end" kursi o'quvchisi</p>
            </div>
            <div className="fikr-card" data-aos="zoom-in">
                <div className="fikr-card-item">
                <video controls src={video6} ></video>
                </div>
                <h3>Jafarbek</h3>
                <p>"Python Backend" kursi o'quvchisi</p>
            </div>
          </div>
    </div>
  )
}
