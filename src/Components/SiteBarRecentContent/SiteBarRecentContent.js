import { Link } from 'react-router-dom'

import './SiteBarRecentContent.css'

function SiteBarRecentContent() {
    return (
        <div className='sitebar-recentcontent sitebar-box'>
            <h4 className="sitebar-recentcontent__title sitebar-title">مطالب اخیر</h4>
            <ul className="sitebar-recentcontent__list">
                <li className='sitebar-recentcontent__item'>
                    <Link className='sitebar-recentcontent__link' to={'/'}>بهترین لوازم جانبی برای iPad جدید شما</Link>
                    <div className="sitebar-recentcontent__wrapper">
                        <span className="sitebar-recentcontent__caption">17 بهمن, 1399</span>
                        <span className="sitebar-recentcontent__caption">300 بازدید</span>
                    </div>
                </li>
                <li className='sitebar-recentcontent__item'>
                    <Link className='sitebar-recentcontent__link' to={'/'}>۱۳ زبان به آپدیت جدید کلاب‌هاوس اضافه شد</Link>
                    <div className="sitebar-recentcontent__wrapper">
                        <span className="sitebar-recentcontent__caption">17 بهمن, 1399</span>
                        <span className="sitebar-recentcontent__caption">300 بازدید</span>
                    </div>
                </li>
                <li className='sitebar-recentcontent__item'>
                    <Link className='sitebar-recentcontent__link' to={'/'}>بهترین برنامه‌های فشرده‌سازی فایل برای آیفون</Link>
                    <div className="sitebar-recentcontent__wrapper">
                        <span className="sitebar-recentcontent__caption">17 بهمن, 1399</span>
                        <span className="sitebar-recentcontent__caption">300 بازدید</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SiteBarRecentContent