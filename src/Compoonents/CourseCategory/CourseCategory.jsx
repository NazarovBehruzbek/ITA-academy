import React, { useEffect, useState } from "react";
import "./CourseCategory.css"
import backend from "../../images/backend.png"
import logo from "../../assets/LOGO6666.png"
import { Link, useParams } from "react-router-dom";
import Data from "../CoursesData/Courses"
function CourseCategory (){
    const {id} = useParams();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const filteredCourses = Data.filter(item => item.id === id);
        setCourses(filteredCourses);
    }, [id]);
    return(
        <>
        <div className="CourseCategory">
           <div className="container">
           {
            courses && courses.map((item,index)=>(
                <>
                  <h2 className="category-title">{item.nameUz}</h2>
                  <div className="category-wrapper">
                <div className="category-item1">
                    <div className="category-container">
                        <img className="categorry-img" src={item?.img_src} alt={item?.nameUz} />
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
                        <Link><button>Muddatli to'lov bilan sotib oling</button></Link>
                        <span>Muddatli to'lov shartlari</span>
                    </div>
                    <div className="all-courses">
                        <img style={{width:'80%',margin:'20px 0'}} src={logo} alt="Error"/>
                        <Link> <p className="all-course">Barcha kurslarni ko'rish</p></Link>
                    </div>
                </div>
               </div>
                </>
            ))
           }
           </div>
        </div>
        </>
    )
}
export default CourseCategory;