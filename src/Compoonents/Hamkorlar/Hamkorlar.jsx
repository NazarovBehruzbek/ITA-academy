import React from 'react'
import Slider from 'react-slick';
import "./Hamkorlar.css"
import itbilim from "../../assets/itbilim.png";
import homekit from "../../assets/hamkor1.png";
import dezinfeksiya from "../../assets/dezinfiksiya.png";
import ataev from  "../../assets/atayev.png";
import namangan from "../../assets/namangan.jpg";
import loyal from "../../assets/loyal.png";
import zamon from '../../assets/zamon.svg'
import autozom from '../../assets/autozom.svg';
export default function Hamkorlar() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,           
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
        ],
    };

  return (
   <>
  <div className="hamkorlar">
  <div className="container">
  <h2 className='hamkor-title' data-aos="flip-up">Hamkorlarimiz</h2>
    <Slider   {...settings}> 
     <div data-aos="zoom-in" className='hamkor-item1'><a target='_blank' href="https://it-bilim.uz/"><img src={itbilim} alt="It bilim" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item2'><a target='_blank' href="https://www.homekit.uz/"><img src={homekit} alt="Homekit" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item3'><a target='_blank' href="https://www.dezinfeksiyatashkent.uz/"><img src={dezinfeksiya} alt="Dezinfikisya" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item4'><a target='_blank' href="https://www.ataevbahodirbuild.uz/"><img src={ataev} alt="Atayev" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item5'><a target='_blank' href="https://www.namanganoits.uz/"><img src={namangan}  alt="Namangan" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item7'><a target='_blank' href="https://zamontour.uz/"><img src={zamon}  alt="Zamon" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item6'><a target='_blank' href="https://www.uzloyal.uz/"><img src={loyal}  alt="Uzloyal" /></a></div>
     <div data-aos="zoom-in" className='hamkor-item8'><a target='_blank' href="https://autozoomrental.com/"><img src={autozom}  alt="Autozoom" /></a></div>
    
    </Slider>
   </div>
  </div>
   </>
  )
}
