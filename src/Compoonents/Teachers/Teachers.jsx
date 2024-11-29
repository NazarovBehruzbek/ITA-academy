import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Teacgers.css";
import left from "../../assets/arrow-left.svg";
import Islom from "../../assets/Islom.png";
import Mohlaroyim from "../../assets/Mohlaroyim.jpg";
import Gulbahor from "../../assets/Gulbahor.jpg";
import Aziza from "../../assets/Aziza.jpg";
import Marjonabonu from "../../assets/Marjonabonu.jpg";
function Teachers() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="teachers">
      <div className="container">
        <h2 className="teacher-title" data-aos="zoom-in">
          Bizning mentorlarimiz
        </h2>
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="teachers-card" data-aos="zoom-in">
              <div className="infos-card">
                <img className="user-img" src={Islom} alt="Error" />
                <div>
                  <h3 className="user-title">Raximjanov Islombek</h3>
                  <p className="user-text">Mentor: Frontend dasturchi</p>
                </div>
              </div>
              <p className="teacher-about">
                Tajribasi—1,5 yil, Til bo'yicha daraja—rus tili B1, Qo'shimcha
                ma'lumotlar—talaba(TATU 4-kurs){" "}
              </p>
            </div>
            <div className="teachers-card" data-aos="zoom-in">
              <div className="infos-card">
                <img className="user-img" src={Mohlaroyim} alt="Error" />
                <div>
                  <h3 className="user-title">Komiljonova Mohlaroyim</h3>
                  <p className="user-text">Mentor: Arab tili </p>
                </div>
              </div>
              <p className="teacher-about">
                Tajribasi—2 yil, Til bo’yicha daraja–Arab tili B2, Qo’shimcha
                ma’lumotlar (Islom institutida talaba)
              </p>
            </div>
            <div className="teachers-card" data-aos="zoom-in">
              <div className="infos-card">
                <img className="user-img" src={Gulbahor} alt="Error" />
                <div>
                  <h3 className="user-title">G'ofurova Gulbahor</h3>
                  <p className="user-text">Mentor: Grafik dizayn</p>
                </div>
              </div>
              <p className="teacher-about">
                Tajribasi—4 yil, Til bo'yicha daraja—B1(rus tili), Qo'shimcha
                ma'lumot—talaba(Moliya 3-kurs){" "}
              </p>
            </div>
            <div className="teachers-card" data-aos="zoom-in">
              <div className="infos-card">
                <img className="user-img" src={Marjonabonu} alt="Error" />
                <div>
                  <h3 className="user-title">Абдусаттарова Маржонабону </h3>
                  <p className="user-text">Mentor: Grafik dizayn</p>
                </div>
              </div>
              <p className="teacher-about">
                Tajribasi–1,5 yil, Til bilish darajasi-– rus tili B2,ingiz tili
                B2, O’quvchilari soni – 500 +
              </p>
            </div>
            <div className="teachers-card" data-aos="zoom-in">
              <div className="infos-card">
                <img className="user-img" src={Aziza} alt="Error" />
                <div>
                  <h3 className="user-title">Xamroyeva Azizabonu</h3>
                  <p className="user-text">Mentor: Adminstrator</p>
                </div>
              </div>
              <p className="teacher-about">
                Tajribasi—1yil, Qo'shimcha ma'lumot— shartnoma ishlari bo'yicha
                ma'lumoti bor, talaba(yuridik 1-kurs){" "}
              </p>
            </div>
          </Slider>
          <div className="arrows">
            <img
              onClick={previous}
              className="left-img"
              src={left}
              alt="Error"
            />
            <img onClick={next} className="right-img" src={left} alt="Error" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
