// Import dependencies
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import MostVisitedSectionData from "../../Data/Most-Visited-Section-Data"

// Style Css
import "./Most-Visited-Section.css"

// function Component
export default function MostVisitedSection() {

  const [Data, setData] = useState(MostVisitedSectionData)
  const [indexMainPost, setIndexMainPost] = useState(0)

  const categoryClick = (index) => {
    setIndexMainPost(index)
  }

  return (
    <section className='Most-Visited-Section'>
      <Container>

        <div className="Most-Visited-Section__wrapper-title">
          <h2 className='Most-Visited-Section__title __title'>پربازدیدترین مطالب</h2>
          <Link to={'#'}>مشاهده همه</Link>
        </div>

        <div className="Most-Visited-Section__wrapper">
          <div className="Most-Visited-Section__category-buttons">
            {Data.map((data, index) => (
              <button
                key={Data._id}
                onClick={() => categoryClick(index)}
                className={`Most-Visited-Section__category-button ${index === indexMainPost && "cat-btn-active"}`}> {/* add class "cat-btn-active" for active button */}
                {data.title}
              </button>
            ))}
          </div>
          <div className="Most-Visited-Section__posts">
            <Row>
              <Col lg={6}>
                <div className="Most-Visited-Section__posts-right">
                  {Data[indexMainPost].posts.map(post => (
                    <div key={post._id}>
                      <hr />
                      <Link to={'/blogar/post'}>
                        <div className="Most-Visited-Section__posts-box">
                          <div className="img-parent-hover">
                            <img className='Most-Visited-Section__posts-box-img image-hover' src={post.img} alt="post image" />
                          </div>
                          <div className="Most-Visited-Section__posts-box-content">
                            <h4 className="Most-Visited-Section__posts-box-content-title">{post.title}</h4>
                            <p className="Most-Visited-Section__posts-box-content-desc">{post.desc}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={6}>
                <Link to={'/blogar/post'}>
                  <div className="Most-Visited-Section__posts-left">
                    <div className="Post-Banner__wrapper-img-box img-parent-hover">
                      <img className="Post-Banner__wrapper-img image-hover" src="images/Most-Visited-Section/post-tech-06.jpg" alt="Post Banner" />
                    </div>
                    <div className="Most-Visited-Section__text">
                      <h3 className="Most-Visited-Section__wrapper-title">برند اپل</h3>
                      <p className="Most-Visited-Section__wrapper-subTitle hover-text">آیفون SE متوقف شده است، اما همچنان آن را می فروشند!</p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>

      </Container>
    </section>
  )
}
