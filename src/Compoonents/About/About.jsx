import React from "react";
import "./About.css"
import { Row, Col } from 'antd'
import card from "../../images/card.png"
import tanga from "../../images/tanga.png"
import kubok from "../../images/kubok.png"
import papka from "../../images/papka.png"
import kompyuter from "../../images/noutbuk.png"
import sertifikat from "../../images/sertifikat.png"

function About() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <h2 className="about-title" data-aos="zoom-in">Nega aynan biz?</h2>
                    <hr />
                    <div className="about-card" data-aos="zoom-in">
                        <Row>
                            <Col lg={4} md={5} xs={24}><img className="card-img" src={card} alt="Error" /> </Col>
                            <Col lg={9} md={9} xs={24} ><h2 className="card-title"> Mablag'ingiz yo'qmi?-yechimi bor!</h2></Col>
                            <Col lg={11} md={10} xs={24} ><p className="card-text"> Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.</p></Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="about-card" data-aos="zoom-in">
                        <Row>
                            <Col lg={4} md={5} xs={24}> <img className="card-img" style={{ marginTop: '-30px', marginLeft: '-30px' }} src={tanga} alt="Error" /> </Col>
                            <Col lg={9} md={9} xs={24}> <h2 className="card-title">Bilimingizni muvaffaqiyatli soting! </h2></Col>
                            <Col lg={11} md={10} xs={24}> <p className="card-text">Bizning kurslarimiz nafaqat aniq bir zamonaviy kasbni o'rgatadi balki, mijozlar bilan ishlashni, qo'shimcha daromad qilishni va to'g'ri ish joyini tanlashni ham o'rgatadi.</p> </Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="about-card" data-aos="zoom-in">
                        <Row>
                            <Col lg={4} md={5} xs={24}> <img className="card-img" style={{ marginLeft: '-30px' }} src={kubok} alt="Error" /> </Col>
                            <Col lg={9} md={9} xs={24}> <h2 className="card-title">Kuchli mutaxassislardan sifatli ta'lim oling! </h2></Col>
                            <Col lg={11} md={10} xs={24}> <p className="card-text">Bizning barcha Mentorlarimiz kamida 3 yil tajribaga ega va ko'plab loyihalar muallifi bo'lgan mutaxassislardir. Bizning o'quv dasturlarimiz ular ishtirokida shakillantiriladi. Bu hammasi Sizning sifatli ta'lim olishingiz uchun!</p> </Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="about-card" data-aos="zoom-in">
                        <Row>
                            <Col lg={4} md={5} xs={24}> <img className="card-img" src={papka} alt="Error" /> </Col>
                            <Col lg={9} md={9} xs={24}> <h2 className="card-title">Amaliyot, real loyihalar va portfolio! </h2></Col>
                            <Col lg={11} md={10} xs={24}> <p className="card-text">Bizning kursimiz davomida o'quvchilar real loyihalarni tamomlab mijozga taqdim etishadi. Bundan yaxshiroq amaliyot bo'lmasa kerak! Va bu portfolio uchun juda foydali!</p> </Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="about-card" data-aos="zoom-in">
                        <Row>
                            <Col lg={4} md={5} xs={24}> <img className="card-img" src={kompyuter} alt="Error" /> </Col>
                            <Col lg={9} md={9} xs={24}> <h2 className="card-title">Zamonaviy muhit, bepul Coworking va Wi-fi </h2></Col>
                            <Col lg={11} md={10} xs={24}> <p className="card-text">It Ta'lim Academy o'quv markazi zamon talabiga javob beradigan barcha imkoniyatlar va texnologiyalar bilan jihozlangan. Bularning barchasi bizning o'quvchilarimiz uchun bepul!</p> </Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="about-card" data-aos="zoom-in">
                        <Row>
                            <Col lg={4} md={5} xs={24}> <img className="card-img" src={sertifikat} alt="Error" /> </Col>
                            <Col lg={9} md={9} xs={24}> <h2 className="card-title" style={{ width: '100%' }}>Sertifikat </h2></Col>
                            <Col lg={11} md={10} xs={24}> <p className="card-text">It Ta'lim Academy kurslarini muvaffaqiyatli tamomlagan barcha o'quvchilarga Sertifikat taqdim etiladi!</p> </Col>
                        </Row>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default About;