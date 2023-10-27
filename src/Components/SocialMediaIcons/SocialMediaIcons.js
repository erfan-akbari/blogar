import { FaLinkedinIn } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import './SocialMediaIcons.css'

export default function SocialMediaIcons() {
    return (
        <div className="social-media-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
        </div>
    )
}
