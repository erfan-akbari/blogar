import { Link } from 'react-router-dom';

import './SiteBarArchive.css'

function SiteBarArchive() {
    return (
        <div className='sitebar-archive sitebar-box'>
            <h4 className="sitebar-archive__title sitebar-title">آرشیو</h4>
            <ul className="sitebar-archive__list">
                <Link to={'/'}>
                    <li className="sitebar-archive__item">اردیبهشت 1400</li>
                </Link>
                <Link to={'/'}>
                    <li className="sitebar-archive__item">فروردین 1400</li>
                </Link>
                <Link to={'/'}>
                    <li className="sitebar-archive__item">بهمن 1399</li>
                </Link>
                <Link to={'/'}>
                    <li className="sitebar-archive__item">اسفند 1399</li>
                </Link>
            </ul>
        </div>
    )
}

export default SiteBarArchive;