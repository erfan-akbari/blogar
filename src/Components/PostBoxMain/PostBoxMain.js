import { Link } from 'react-router-dom';

// Import Style Css
import "./PostBoxMain.css"
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

// Function Component
export default function PostBoxMain({ num, src, catName, title, userName, createdAt, studyperiod, cat }) {

    return (
        <div className="main-home__post">
            <div className="main-home__post-banner img-parent-hover">
                <Link to={`/blogar/post/${title}`}>
                    <img className='main-home__post-banner-img image-hover' src={src} alt="post imgage" />
                    <span className='__num'>{num}</span>
                </Link>
            </div>
            <div className="main-home__post-content">
                <div className='main-home__post-content-category'>{catName}</div>
                <Link to={'/blogar/post'} className='main-home__post-content-title hover-text'>{title}</Link>
                <div className="main-home__post-content-wrapper">
                    <div className="main-home__post-content-wrapper-right">
                        <div className="main-home__post-content-wrapper-username">{userName}</div>
                        <ul className="main-home__post-content-list">
                            <li className="main-home__post-content-item">{createdAt}</li>
                            <li className="main-home__post-content-item">{studyperiod}</li>
                        </ul>
                    </div>
                    <div className="main-home__post-content-wrapper-left">
                        <SocialMediaIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}
