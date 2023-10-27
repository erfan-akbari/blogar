import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

import './SiteBarSocialMedia.css'

function SiteBarSocialMedia() {
    return (
        <div className="sitebar__social-media sitebar-box">
            <div className="sitebar__social-media-title sitebar-title">شبکه های اجتماعی ما</div>
            <ul className='sitebar__social-media-list'>
                <li className="sitebar__social-media-item">
                    <Link className='sitebar__social-media-link' to={'#'}><FaFacebookF /></Link>
                </li>
                <li className="sitebar__social-media-item">
                    <Link className='sitebar__social-media-link' to={'#'}><FaInstagram /></Link>
                </li>
                <li className="sitebar__social-media-item">
                    <Link className='sitebar__social-media-link' to={'#'}><FaTwitter /></Link>
                </li>
                <li className="sitebar__social-media-item">
                    <Link className='sitebar__social-media-link' to={'#'}><FaTelegramPlane /></Link>
                </li>
                <li className="sitebar__social-media-item">
                    <Link className='sitebar__social-media-link' to={'#'}><FaLinkedinIn /></Link>
                </li>
            </ul>
        </div>
    )
}

export default SiteBarSocialMedia