import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarV2 from '../../Components/NavbarV2/NavbarV2'
import SiteBarV3 from '../../Components/SiteBarV3/SiteBarV3'
import PostContent from '../../Components/PostContent/PostContent'
import MoreContent from '../../Components/MoreContent/MoreContent'
import Instagram from '../../Components/Instagram-S/instagram'
import Footer from '../../Components/Footer/Footer'

import './PostDetales.css'

function PostDetales() {

  const params = useParams()

  return (
    <>
      <NavbarV2 />
      <Container>
        <Row>
          <Col lg={8}>
            <PostContent mainPost={params.postTitle} />
          </Col>
          <Col lg={4}>
            <SiteBarV3 />
          </Col>
        </Row>
      </Container>
      <MoreContent />
      <Container>
        <Instagram />
      </Container>
      <Footer />
    </>
  )
}

export default PostDetales