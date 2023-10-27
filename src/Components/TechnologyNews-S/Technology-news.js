// Import dependecies
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLink } from "react-icons/fa"

// Import Style Css
import "./Technology-news.css"

// Function Component
export default function TechnologyNews() {

    return (
        <section className='technology-news'>
            <Container>
                <div className="technology-news__wrappre">
                    <h2 className="technology-news__title __title">اخبار حوزه فناوری</h2>
                    <Row>
                        <Col lg={6}>
                            <Link to={'/blogar/post'}>
                                <div className="technology-news__post">
                                    <div className="img-parent-hover">
                                        <img className='technology-news__img image-hover' src="images/Technology-news/post-dark-01.jpg" alt="Image Post Technology" />
                                    </div>
                                    <div className="technology-news__post-content">
                                        <h4 className='technology-news__post-content-title'>حوزه IT</h4>
                                        <p className='technology-news__post-content-desc'>بررسی لپ تاپ هواوی میت بوک D 14 [با بررسی ویدئویی]</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="post-meta">
                                <div className="post-meta__wrapper">
                                    <Link className="post-meta__link" to={'#'}>عصمت جهان</Link>
                                    <ul className="post-meta__list">
                                        <li>20 بهمن, 1399</li>
                                        <li>3 دقیقه زمان مطالعه</li>
                                    </ul>
                                </div>
                                <ul className="post-meta__icons">
                                    <li className='post-meta__icon'>
                                        <Link to={'#'}><FaFacebookF /></Link>
                                    </li>
                                    <li className='post-meta__icon'>
                                        <Link to={'#'}><FaInstagram /></Link>
                                    </li>
                                    <li className='post-meta__icon'>
                                        <Link to={'#'}><FaTwitter /></Link>
                                    </li>
                                    <li className='post-meta__icon'>
                                        <Link to={'#'}><FaLink /></Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col sm={6}>
                                    <Link to={'/blogar/post'}>
                                        <div className="technology-news__post">
                                            <div className="img-parent-hover">
                                                <img className='technology-news__img image-hover' src="images/Technology-news/post-dark-03.jpg" alt="Image Post Technology" />
                                            </div>
                                            <div className="technology-news__post-content">
                                                <h4 className='technology-news__post-content-title'>برنامه نویسی</h4>
                                                <p className='technology-news__post-content-desc'>بررسی کامپیوتر بدون کیس ام اس آی Pro 22X 10M [با بررسی ویدیویی]</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col sm={6}>
                                    <Link to={'/blogar/post'}>
                                        <div className="technology-news__post">
                                            <div className="img-parent-hover">
                                                <img className='technology-news__img image-hover' src="images/Technology-news/post-dark-05.jpg" alt="Image Post Technology" />
                                            </div>
                                            <div className="technology-news__post-content">
                                                <h4 className='technology-news__post-content-title'>نرم افزارهای کاربردی</h4>
                                                <p className='technology-news__post-content-desc'>بررسی آیپد پرو 2021 اپل [با بررسی ویدئویی]</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col sm={6}>
                                    <Link to={'/blogar/post'}>
                                        <div className="technology-news__post">
                                            <div className="img-parent-hover">
                                                <img className='technology-news__img image-hover' src="images/Technology-news/post-dark-05.jpg" alt="Image Post Technology" />
                                            </div>
                                            <div className="technology-news__post-content">
                                                <h4 className='technology-news__post-content-title'>فناوری و اطلاعات</h4>
                                                <p className='technology-news__post-content-desc'>بررسی تلویزیون C1 OLED ال جی [با بررسی ویدیویی]</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col sm={6}>
                                    <Link to={'/blogar/post'}>
                                        <div className="technology-news__post">
                                            <div className="img-parent-hover">
                                                <img className='technology-news__img image-hover' src="images/Technology-news/post-dark-04.jpg" alt="Image Post Technology" />
                                            </div>
                                            <div className="technology-news__post-content">
                                                <h4 className='technology-news__post-content-title'>حوزه آی تی</h4>
                                                <p className='technology-news__post-content-desc'>بررسی تلویزیون C1 OLED ال جی [با بررسی ویدیویی]</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
