import React from "react";
import banner from "../../assets/banner.png"
import {Row,Col} from 'antd'
import "./homePage.css"

function HomePage({showModal}) {
    return (
        <>
            <div className="homePage">
                <div className="container">
                    <Row>
                        <Col lg={12} md={24}>
                          <div className="home-infos">
                          <h1 className="home-title">Tajribaga asoslangan <span style={{color:'#C60205'}}>ishonchli</span> kelajak</h1>
                            <p className="sub-title">Qisqa muddatda o’z portfolioyingizga ega bo’ling</p>
                            <button className="home-btn" onClick={showModal}>Ariza qoldirish</button>
                          </div>
                        </Col>
                        <Col lg={12} md={24}>
                           <div className="home-imgb">
                           <img className="home-img" src={banner} alt="Error" />
                           </div>
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}
export default HomePage;