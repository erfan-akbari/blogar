import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import './MoreContentBox.css'

function MoreContentBox({ title, cat, src, href }) {
    return (
        <Col md={6} lg={3}>
            <div className='more-content-box'>
                <div className="more-content-box__banner">
                    <img className='more-content-box__img' src={src} alt="More Content Image" />
                </div>
                <div className="more-content-box__info">
                    <Link className='more-content-box__cat' to={href}>{cat}</Link>
                    <Link className='more-content-box__title hover-text' to={href}>{title}</Link>
                </div>
            </div>
        </Col>
    )
}

export default MoreContentBox