// Import dependecis
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PostBoxMain from '../PostBoxMain/PostBoxMain'
import SiteBar from '../SiteBar/SiteBar'

// Import Style Css
import "./MainHome.css"
import { getFetch } from '../../utils/apiFetch'

// Function Component
export default function MainHome() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getFetch('posts', setPosts)
    }, [])

    return (
        <main className='main-home'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="main-home__container">
                            <div className="main-home__banner">
                                <img className="main-home__banner-img" src="/images/Main-Home/banner-01.png" alt="banner" />
                            </div>
                            <div className="main-home__wrapper">
                                {posts.map(post => (
                                    <PostBoxMain num={'9.5'} key={post._id} {...post} />
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <SiteBar />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
