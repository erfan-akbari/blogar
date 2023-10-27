import { instagramData } from '../../Data/sitebar-Data'

import './SiteBarInstagram.css'

function SiteBarInstagram() {
    return (
        <div className="sitebar__instagram sitebar-box">
            <div className="sitebar__instagram-title sitebar-title">اینستاگرام</div>
            <div className="sitebar__instagram-wrapper">
                {instagramData.map(img => (
                    <div key={img._id} className="sitebar__instagram-banner img-parent-hover">
                        <img className='sitebar__instagram-img image-hover' src={img.src} alt="blog imgage" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SiteBarInstagram