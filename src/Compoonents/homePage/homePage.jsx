import React from "react";
import banner from "../../assets/banner.png"
import {Row,Col} from 'antd'
import "./homePage.css"

function HomePage() {
    return (
        <>
            <div className="homePage">
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <h1>Tajribaga asoslangan <span>ishonchli</span> kelajak</h1>
                            <p>Qisqa muddatda o’z portfolioyingizga ega bo’ling</p>
                            <button>Ariza qoldirish</button>
                        </Col>
                        <Col lg={12}>
                            <img src={banner} alt="Error" />
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}
export default HomePage;