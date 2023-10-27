import "./HeaderHome.css"
import { Container } from "react-bootstrap";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar"

function HeaderHome() {
    return (
        <header className="Header-Home">
            <Topbar />
            <Container>
                <div className="Header-Home__top">
                    <div className="Header-Home__logo">
                        <img className="main-logo" src="images/logo/logo-black.png" alt="logo" />
                    </div>
                    <div className="Header-Home__banner">
                        <img className="Header-Home__banner-img" src="images/banner/add-01.png" alt="banner" />
                    </div>
                </div>
                <Navbar />
            </Container>
        </header>
    );
}

export default HeaderHome;