import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Teacgers.css"
import left from "../../images/arrow-left.svg"

function Teachers() {
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        nextArrow: <SampleNextArrow />,
        responsive: [ // Responsive settings for different screen sizes
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                },
            },
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    slidesToScroll: 2, // Scroll 2 slides at a time
                },
            },
        ],
    };
    function SampleNextArrow(props) {
        const {onClick } = props;
        
        return (
            <div className='arrow-left' onClick={onClick} >
                <img className='right-img' src={left} alt="Error" />
            </div>
        );
    }
    
    return (
       <div className="teachers">
         <div className="container">
            <h2>Bizning mentorlarimiz</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Slider>
            </div>
        </div>
       </div>
    );
}

export default Teachers;
