import React from 'react';
import './courses.css';
import CoursesData from '../CoursesData/Courses';
import stars from '../../images/stars.svg';
import clock from '../../images/clock.svg';
import { Link } from 'react-router-dom';

function Courses() {
    return (
        <div className="courses" id="courses">
            <div className="container">
                <h2 className="course-title" data-aos="zoom-in-right">O'z sohangizni tanlang</h2>
                <div className="wrapper">
                    {CoursesData && CoursesData.map((item, index) => (
                        <Link to={`/course/${item.id}`} key={index}>
                            <div className="card" data-aos="zoom-in">
                                <img className="course-img" src={item?.img_src} alt={item?.nameUZ} />
                                <div className="course-infos">
                                    <div className="tulov">
                                        <span><img className="course-icon" src={stars} alt="stars" /></span>
                                        <span className="icon-name">Muddatli to'lov</span>
                                    </div>
                                    <h2 className="course-sub-title">{item?.nameUZ}</h2>
                                    <p className="price-title">Narxi</p>
                                    <p className="price">{item?.price} sumdan</p>
                                    <div className="course-duration">
                                        <span><img className="clock" src={clock} alt="clock" /></span>
                                        <span className="duration">{item.duration} oy</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
