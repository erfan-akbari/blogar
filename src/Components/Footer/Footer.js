import { Container, Row } from 'react-bootstrap'
import { FaLinkedinIn } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <div className="footer__top">
                        <h5 className='footer__title-links'>ما را دنبال کنید</h5>
                        <div className="footer__link-icons">
                            <Link className='footer__icon' to={'/'}><FaFacebookF /></Link>
                            <Link className='footer__icon' to={'/'}><FaInstagram /></Link>
                            <Link className='footer__icon' to={'/'}><FaTwitter /></Link>
                            <Link className='footer__icon' to={'/'}><FaLinkedinIn /></Link>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="footer__bottom">
                        <Link to={'/'}>
                            <img className='footer__logo' src="/images/logo/logo-black.png" alt="logo" />
                        </Link>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to={'/'}>تماس با ما</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={'/blogar/rules'}>شرایط و قوانین</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={'/'}>درباره ما</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={'/'}>تبلیغات با ما</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={'/'}>لیست مقالات</Link>
                            </li>
                        </ul>
                        <p className='caption-site'>© کلیه حقوق این سایت محفوظ می باشد.</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer