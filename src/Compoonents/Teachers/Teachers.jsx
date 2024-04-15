import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Teacgers.css"
import left from "../../images/arrow-left.svg"
import user from "../../images/backend.png"

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
                <h2 className='teacher-title' data-aos="zoom-in">Bizning mentorlarimiz</h2>
                <div className="slider-container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}>
                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={user} alt="Error" />
                                <div>
                                    <h3 className='user-title'>Nazarov Behruzbek</h3>
                                    <p className='user-text'>Mentor: Grafik dizayn</p>
                                </div>
                            </div>
                            <p className='teacher-about'>4+ yil tajriba va 50 dan ortiq o'quvchilar. «DizaynLab» taʼsischisi, TSTrU da bo‘limi boshlig‘i.</p>

                        </div>
                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={user} alt="Error" />
                                <div>
                                    <h3 className='user-title'>Nazarov Behruzbek</h3>
                                    <p className='user-text'>Mentor: Grafik dizayn</p>
                                </div>
                            </div>
                            <p className='teacher-about'>4+ yil tajriba va 50 dan ortiq o'quvchilar. «DizaynLab» taʼsischisi, TSTrU da bo‘limi boshlig‘i.</p>

                        </div>
                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={user} alt="Error" />
                                <div>
                                    <h3 className='user-title'>Nazarov Behruzbek</h3>
                                    <p className='user-text'>Mentor: Grafik dizayn</p>
                                </div>
                            </div>
                            <p className='teacher-about'>4+ yil tajriba va 50 dan ortiq o'quvchilar. «DizaynLab» taʼsischisi, TSTrU da bo‘limi boshlig‘i.</p>

                        </div>
                    </Slider>
                    <div className='arrows'>
                        <img onClick={previous} className='left-img' src={left} alt="Error" />
                        <img onClick={next} className='right-img' src={left} alt="Error" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teachers;
