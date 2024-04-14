import React from "react";
import Banner from "../../assets/aboutbanner.png";
import PhoneSVG from "../../assets/phone-svgrepo-com.svg";
import LocationSVG from "../../assets/location-pin-alt-1-svgrepo-com.svg";
import WebSVG from "../../assets/web-svgrepo-com.svg";
import "./AboutWe.css";

function AboutWe() {
  return (
    <>
      <div className="about-page">
        <div className="container">
          <h2 className="about-page-title" data-aos="flip-up">Biz haqimizda</h2>
          <img data-aos="zoom-in" src={Banner} className="about-page_image" alt="ITA image" />

          <div className="about_content" data-aos="zoom-in">
            <h3>O'quv markazi haqida ma'lumot</h3>
            <article>
              IT Time Akademiyasida tajribali ustozlardan sifatli ta’lim oling!{" "}
              <br />
              <br />
              Biz talabalarimizga nafaqat kelajakdagi ishlarida yordam
              beradigan, balki ularning kasbiy va martabaviy o'sishiga hissa
              qo'shadigan bilimlarni berishga intilamiz. <br />
              <br />
              Biz amaliyot bilan o'rgansangiz natijaga chiqishingizga ishonamiz,
              shuning uchun kurs bilimingizni mustahkamlash uchun amaliy
              mashg‘ulotlar va loyihalarni ham o‘z ichiga oladi. Kursdan so’ng
              qo’shimcha 2oylik jamoaviy amaliyot darslari bo’ladi. Chet el
              saytlaridan proyekt olish o'rgatiladi, ishga joylashishda yordam
              beriladi va intervyuga tayyorlaniladi, yaxshi bitiruvchilarni
              kompaniyaga ishga olinadi. <br /> <br />
            </article>
            <p>O’quv markazimizda siz quyidagi imkoniyatlar egasi bo'lasiz:</p>
            <ul>
              <li>Bepul wifi</li>
              <li>Real Proyektlar</li>
              <li>Kovorking markazi va undan bepul foydalanish;</li>
              <li>O'quvchilar uchun tanlovlar va master-klasslar;</li>
              <li>Doimiy ustoz yordami va texnik qo'llab - quvvatlash;</li>
              <li>Kurs so'ngida rasmiy sertifikat va portfolio;</li>
              <li>O'rganish uchun barcha qulay sharoit.</li>
              <li>
                Darslar yozib olinadi va telegram guruhga tashlab boriladi.
              </li>
              <li>Ishga joylashishda tavsiyalar va yordam</li>
            </ul>

            <div className="about_contact">
              <h4>Biz bilan bog'lanish:</h4>
              <div className="about_contact--items">
                <div className="phone">
                  <img src={PhoneSVG} alt="Phone icon" />
                  <span>+998 (94) 782 00 92</span>
                </div>
                <div className="location">
                  <img src={LocationSVG} alt="Location icon" />
                  <span>
                    Toshkent shahri, Yunusobod tumani, Amir Temur ko'chasi,
                    100-uy
                  </span>
                </div>
                <div className="site">
                  <img src={WebSVG} alt="Web icon" />
                  <span>https://t.me/it_time_admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutWe;
