import { Link } from 'react-router-dom'

import './MostVisitedVideo.css'

export default function MostVisitedVideo() {
    return (
        <div className='most-visited-video sitebar-box'>
            <h3 className='sitebar-title'>پربازدیدترین ویدئوها</h3>
            <ul className="most-visited-video__list">
                <Link to={'/blogar/post'}>
                    <li className="most-visited-video__item">
                        <div className="most-visited-video__banner img-parent-hover">
                            <img className='most-visited-video__img image-hover' src="/images/Shopping-Review/post-md-01.jpg" alt="Shopping-Review imgage" />
                        </div>
                        <p className='most-visited-video__caption hover-text'>بررسی لپ تاپ هواوی میت بوک D 14 [با بررسی ویدئویی]</p>
                    </li>
                </Link>
                <Link to={'/blogar/post'}>
                    <li className="most-visited-video__item">
                        <div className="most-visited-video__banner img-parent-hover">
                            <img className='most-visited-video__img image-hover' src="/images/Shopping-Review/post-md-02.jpg" alt="Shopping-Review imgage" />
                        </div>
                        <p className='most-visited-video__caption hover-text'>بررسی تلویزیون C1 OLED ال جی [با بررسی ویدیویی]</p>
                    </li>
                </Link>
                <Link to={'/blogar/post'}>
                    <li className="most-visited-video__item">
                        <div className="most-visited-video__banner img-parent-hover">
                            <img className='most-visited-video__img image-hover' src="/images/Shopping-Review/post-md-03.jpg" alt="Shopping-Review imgage" />
                        </div>
                        <p className='most-visited-video__caption hover-text'>بررسی آیپد پرو 2021 اپل [با بررسی ویدئویی]</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
