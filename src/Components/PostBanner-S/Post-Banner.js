import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Post-Banner.css"

function PostBanner() {
    return (
        <section className="Post-Banner">
            <Container>
                <Row>
                    <Col xl={6}>
                        <Link to={'/blogar/post'}>
                            <div className="Post-Banner__wrapper">
                                <div className="Post-Banner__wrapper-img-box img-parent-hover">
                                    <img className="Post-Banner__wrapper-img image-hover" src="images/Post-Banner/post-tect-01.jpg" alt="Post Banner" />
                                </div>
                                <div className="Post-Banner__text">
                                    <h3 className="Post-Banner__wrapper-title">فضانوردی</h3>
                                    <p className="Post-Banner__wrapper-subTitle-1  hover-text">ماموریت Rocket Lab</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={6}>
                        <Row>
                            <Col lg={6}>
                                <Link to={'/blogar/post'}>
                                    <div className="Post-Banner__wrapper">
                                        <div className="Post-Banner__wrapper-img-box img-parent-hover">
                                            <img className="Post-Banner__wrapper-img image-hover" src="images/Post-Banner/post-tect-02.jpg" alt="Post Banner" />
                                        </div>
                                        <h3 className="Post-Banner__wrapper-title">فضانوردی</h3>
                                        <p className="Post-Banner__wrapper-subTitle hover-text">ماموریت Rocket Lab</p>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to={'/blogar/post'}>
                                    <div className="Post-Banner__wrapper">
                                        <div className="Post-Banner__wrapper-img-box img-parent-hover">
                                            <img className="Post-Banner__wrapper-img image-hover" src="images/Post-Banner/post-tect-03.jpg" alt="Post Banner" />
                                        </div>
                                        <h3 className="Post-Banner__wrapper-title">فضانوردی</h3>
                                        <p className="Post-Banner__wrapper-subTitle hover-text">ماموریت Rocket Lab</p>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to={'/blogar/post'}>
                                    <div className="Post-Banner__wrapper">
                                        <div className="Post-Banner__wrapper-img-box img-parent-hover">
                                            <img className="Post-Banner__wrapper-img image-hover" src="images/Post-Banner/post-tect-04.jpg" alt="Post Banner" />
                                        </div>
                                        <h3 className="Post-Banner__wrapper-title">فضانوردی</h3>
                                        <p className="Post-Banner__wrapper-subTitle hover-text">ماموریت Rocket Lab</p>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to={'/blogar/post'}>
                                    <div className="Post-Banner__wrapper">
                                        <div className="Post-Banner__wrapper-img-box img-parent-hover">
                                            <img className="Post-Banner__wrapper-img image-hover" src="images/Post-Banner/post-tect-05.jpg" alt="Post Banner" />
                                        </div>
                                        <h3 className="Post-Banner__wrapper-title">فضانوردی</h3>
                                        <p className="Post-Banner__wrapper-subTitle hover-text">ماموریت Rocket Lab</p>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default PostBanner;