// Import dependecis
import { useState } from 'react'
import { categorisData } from '../../Data/sitebar-Data'

// Import Style Css
import './SiteBarCategoris.css'

// Function Component
export default function SiteBarCategoris() {

    const [categoris, setCategoris] = useState(categorisData)

    return (
        <div className="sitebar__categoris">
            {categoris.map(cat => (
                <div key={cat._id} className="sitebar__categoris-box">
                    <img className='sitebar__categoris-img' src={cat.src} alt="category image" />
                    <span className='sitebar__categoris-title'>{cat.title}</span>
                </div>
            ))}
        </div>
    )
}
