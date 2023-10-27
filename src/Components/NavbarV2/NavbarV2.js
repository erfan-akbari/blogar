import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import "./NavbarV2.css"

function NavbarV2() {
    return (
        <div className="navbarv2">
            <Container>
                <div className="navbarv2__wrapper">
                    <Link to={'/blogar'} className="navbarv2__navbar-logo Header-Home__logo">
                        <img className="navbarv2__logo" src="/images/logo/logo-black.png" alt="logo" />
                    </Link>
                    <Navbar />
                </div>
            </Container>
        </div>
    )
}

export default NavbarV2