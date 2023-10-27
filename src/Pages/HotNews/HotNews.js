import { Container } from "react-bootstrap"
import Footer from "../../Components/Footer/Footer"
import MainHome from "../../Components/MainHome-S/MainHome"
import NavbarV2 from "../../Components/NavbarV2/NavbarV2"

function HotNews() {
    return (
        <div className='hot-news'>
            <NavbarV2 />
            <Container>
                <h2 className="__title" style={{marginBottom: '0'}}>جدید ترین اخبار </h2>
            </Container>
            <MainHome />
            <Footer />
        </div>
    )
}

export default HotNews