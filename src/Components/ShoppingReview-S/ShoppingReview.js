// Import dependecis
import { useEffect, useState } from "react"
import NewSoppingBox from "../NewSoppingBox/NewSoppingBox"
import { Col, Container, Row } from "react-bootstrap"
import SiteBarV2 from "../SiteBarV2/SiteBarV2"
import PostBoxMain from "../PostBoxMain/PostBoxMain"
import Buttons from "../Buttons/Buttons"
import Instagram from "../Instagram-S/instagram"

// Import Style Css
import "./ShoppingReview.css"
import { getFetch } from "../../utils/apiFetch"

// Function Component
export default function ShoppingReview() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getFetch('shoppingposts', setPosts)
    }, [])

    return (
        <div className='shopping-review'>
            <Container>
                <h3 className="shopping-review__title __title">راهنمای خرید و بررسی</h3>
                <Buttons>
                    <button className="shopping-review__button shopping-review__button--active">موبایل</button>
                    <button className="shopping-review__button">لپ تاب</button>
                    <button className="shopping-review__button">هدفون</button>
                </Buttons>
                <div className="shopping-review__boxes">
                    <NewSoppingBox title={'بررسی Oppo Find X2 Pro: گوشی هوشمند سوپراسپرت'} num={'8.1'} href={'/blogar/post'} src={'images/Shopping-Review/featured-post-01.jpg'} />
                    <NewSoppingBox title={'هر آنچه باید درمورد اپلیکیشن Health سامسونگ بدانید'} num={'10'} href={'/blogar/post'} src={'images/Shopping-Review/featured-post-02.jpg'} />
                </div>
                <Row>
                    <Col lg={8}>
                        <div className="main-home__container">
                            <div className="mshopping-review__wrapper">
                                {posts.map(post => (
                                    <PostBoxMain num={'10'} key={post._id} {...post} />
                                ))}
                            </div>
                            <div className="shopping-review__banner">
                                <img className="main-home__banner-img" src="images/Main-Home/banner-01.png" alt="banner" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <SiteBarV2 />
                    </Col>
                </Row>
                <Instagram />
            </Container>
        </div>
    )
}
