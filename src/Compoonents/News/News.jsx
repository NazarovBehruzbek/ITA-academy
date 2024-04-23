import React from 'react'
import "./News.css"
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";

export default function News() {
    return (
        <div className='news'>
            <div className="container">
                <h2>It Time Academy yangiliklari</h2>
                <div className="news-wrapper">
                    <div className="news-card">
                        <img src={news1} alt="Error" />
                        <h3>O'quvchilarni taqdirlash</h3>
                        <p>Imtihonlardan yaxshi natijalarga erishgan o'quvchilarni taqdirlash va ularga tashakkurnomalar berildi. Bundan tashqari o'quvchilar bilan individual suhbatlar tashkil qilindi.</p>              
                    </div>
                    <div className="news-card">
                    <img src={news2} alt="Error" />
                    <h3>O'quvchilarni taqdirlash</h3>
                        <p>Imtihonlardan yaxshi natijalarga erishgan o'quvchilarni taqdirlash va ularga tashakkurnomalar berildi. Bundan tashqari o'quvchilar bilan individual suhbatlar tashkil qilindi.</p>
                    </div>
                    <div className="news-card">
                    <img src={news3} alt="Error" />
                    <h3>O'quvchilarni taqdirlash</h3>
                        <p>Imtihonlardan yaxshi natijalarga erishgan o'quvchilarni taqdirlash va ularga tashakkurnomalar berildi. Bundan tashqari o'quvchilar bilan individual suhbatlar tashkil qilindi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
