import { Container } from "react-bootstrap";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

import "./Topbar.css"

function Topbar() {
    return (
        <div className="Topbar">
            <Container>
                <div className="Topbar__wrapper">
                    <div className="Topbar__right">
                        <span className="Topbar__date">هجدهم شهریور، 1400</span>
                        <ul className="Topbar__list">
                            <li className="Topbar__list-item">تبلیغات سایت</li>
                            <li className="Topbar__list-item">درباره ما</li>
                            <li className="Topbar__list-item">تماس با ما</li>
                        </ul>
                    </div>
                    <div className="Topbar__left">
                        <SocialMediaIcons />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Topbar;