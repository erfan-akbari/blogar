// Import dependecis
import { Link } from 'react-router-dom'

// Import Style Css
import "./NewSoppingBox.css"

// Function Component
export default function NewSoppingBox({ title, src, href, num }) {

    return (
        <>
            <Link to={href}>
                <div className='new-sopping-box'>
                    <div className="new-sopping-box__content">
                        <span className="new-sopping-box__subtitle">خرید جدید</span>
                    </div>
                    <div className="new-sopping-box__banner img-parent-hover">
                        <img src={src} alt="" className="new-sopping-box__img image-hover" />
                        <span className='__num'>{num}</span>
                    </div>
                    <div className="new-sopping-box__content">
                        <h3 className="new-sopping-box__title">{title}</h3>
                    </div>
                </div>
            </Link>
        </>
    )
}
