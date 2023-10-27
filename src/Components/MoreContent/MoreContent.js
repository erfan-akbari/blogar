import { Container, Row } from 'react-bootstrap'
import MoreContentBox from '../MoreContentBox/MoreContentBox'
import { useState } from 'react'
import MoreContentData from '../../Data/MoreContentData'

import './MoreContent.css'

function MoreContent() {

    const [contents, setContents] = useState(MoreContentData)

    return (
        <section className='more-content'>
            <Container>
                <h4 className="more-content__title">مطالب پیشنهادی</h4>
                <Row>
                    {contents.map(content => (
                        <MoreContentBox key={content._id} {...content} />
                    ))}
                </Row>
            </Container>
        </section >
    )
}

export default MoreContent