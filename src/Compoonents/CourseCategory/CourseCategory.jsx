import React, { useEffect, useState } from 'react';
import './CourseCategory.css';
import logo from '../../assets/LOGO6666.png';
import { Link, useParams } from 'react-router-dom';
import Data from '../CoursesData/Courses';

function CourseCategory() {
    const { id } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const filteredCourses = Data.filter(item => item.id.toString() === id);
        setCourses(filteredCourses);
    }, [id]);
    const toTop = ()=>{
        window.scrollTo(0, 0);
    }
    return (
        <div className="CourseCategory">
            <div className="container">
                {courses.length > 0 ? (
                    courses.map((item, index) => (
                        <React.Fragment key={index}>
                            <h2 className="category-title">{item.nameUZ}</h2>
                            <div className="category-wrapper">
                                <div className="category-item1">
                                    <div className="category-container">
                                        <img
                                            className="categorry-img"
                                            src={item?.img_src}
                                            alt={item?.nameUz}
                                        />
                                    </div>
                                    <div className="all-infos">
                                        <div className="all-item1">
                                            <p className="item1-title">Ta'lim tili</p>
                                            <h4>O‘zbekcha</h4>
                                        </div>
                                        <div className="all-item1">
                                            <p className="item1-title">Murakkablik</p>
                                            <h4>Boshlang'ich</h4>
                                        </div>
                                        <div className="all-item1">
                                            <p className="item1-title">Davomiyligi</p>
                                            <h4>{item.duration} oy</h4>
                                        </div>
                                        <div className="all-item1">
                                            <p className="item1-title">Kurs turi</p>
                                            <h4>Kunduzgi</h4>
                                        </div>
                                     </div>
                                     <div className="course-description">
                                        <h2>Kurs tavsifi</h2>
                                        <p>{item?.description}</p>
                                     </div>
                                </div>
                                <div className="category-item2">
                                    <div className="category-price">
                                        <p>Kurs narxi</p>
                                        <h3>{item?.price} so'mdan</h3>
                                    </div>
                                    <div className="term-payment">
                                        <p>Muddatli to'lov</p>
                                        <h3>11 180 000 so'mdan</h3>
                                        <Link to="/payment-options">
                                            <button>Muddatli to'lov bilan sotib oling</button>
                                        </Link>
                                        <span>Muddatli to'lov shartlari</span>
                                    </div>
                                    <div className="all-courses">
                                        <Link to="/"><img style={{ width: '80%', margin: '20px 0' }} src={logo} alt="Logo" /></Link>
                                        <Link onClick={toTop} to="/course">
                                            <p className="all-course">Barcha kurslarni ko'rish</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </React.Fragment>
                    ))
                ) : (
                    <p>Kurs topilmadi.</p>
                )}
            </div>
        </div>
    );
}

export default CourseCategory;
