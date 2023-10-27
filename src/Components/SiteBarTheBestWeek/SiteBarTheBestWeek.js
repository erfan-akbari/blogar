import { theBestWeekBlogData } from '../../Data/sitebar-Data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './SiteBarTheBestWeek.css'

function SiteBarTheBestWeek() {

    const [blogs, setBlogs] = useState(theBestWeekBlogData)


    return (
        <div className="sitebar__thebestweek sitebar-box">
            <div className="sitebar__thebestweek-title sitebar-title">بهترین های هفته</div>
            {blogs.map(blog => (
                <div key={blog._id} className="sitebar__thebestweek-box">
                    <Link to={'/blogar/post'}>
                        <div className="sitebar__thebestweek-banner img-parent-hover">
                            <img className='image-hover' src={blog.src} alt="blog imgage" />
                        </div>
                    </Link>
                    <div className="sitebar__thebestweek-content">
                        <Link to={'/blogar/post'}>
                            <h5 className='sitebar__thebestweek-title'>{blog.title}</h5>
                        </Link>
                        <ul className='sitebar__thebestweek-caption'>
                            <li className='sitebar__thebestweek-item'>{blog.creatAt}</li>
                            <li className='sitebar__thebestweek-item'>{blog.view}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SiteBarTheBestWeek