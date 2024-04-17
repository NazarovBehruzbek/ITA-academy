import news from "../../assets/ios.jpg"
import "./News.css"

const News = () => {
    return (
        <>
            <section id="new2_content">
                <div className="container">
                    <h2>Yangiliklar</h2>
                    <div className="news2_wrapper">
                        <div className="news2_card">
                            <img src={news} className="slide_image" alt="Card image" />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>Who is the project manager of construction?</h4>
                                <p>
                                    Discover Invest has several construction project managers.
                                    This is the specialist responsible for the successful sale of
                                    real estate building. Directs the entire process, from the
                                    stage of planning and approval of project documentation to the
                                    commissioning of the building and performs post-project
                                    support as well.
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img
                                src={news}
                                className="slide_image"
                                alt="Card image"
                            />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    NexGenBuild congratulates everyone on a coming Happy New Year
                                    2023!
                                </h4>
                                <p>
                                    NextGen Build congratulates everyone on a coming Happy New
                                    Year 2023! We wish that every day of the next year opens up
                                    new prospects and that there are always reliable partners
                                    nearby. Good health, happiness and good luck in all your
                                    endeavors!
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img
                                src={news}
                                className="slide_image"
                                alt="Card image"
                            />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    THE DAY WHEN THE CONSTITUTION OF THE REPUBLIC OF UZBEKISTAN
                                    WAS ADOPTED
                                </h4>
                                <p>
                                    NextGen Build construction company expresses its deep respect
                                    and congratulates you on the Constitution Day of the Republic
                                    of Uzbekistan! We sincerely congratulate you on the holiday
                                    and wish each of you well-being, success, a happy and peaceful
                                    future!
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img src={news} className="slide_image" alt="Card image" />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    We continue to introduce you to Discover Invest's wide range
                                    of construction properties.
                                </h4>
                                <p>
                                    We continue to introduce you to NextGen Build's wide range of
                                    construction properties. Among them is the Yangi Choshtepa
                                    residential complex which is being built in the Yangihayot
                                    town of Tashkent. The total area of the settlement is 12
                                    hectares. To date, 29 houses have been built and handed over
                                    by the company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;