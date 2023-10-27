import { FiSearch } from 'react-icons/fi'

import './SiteBarSerach.css'

function SiteBarSerach() {
    return (
        <div className="sitebar__search-box sitebar-box">
            <div className='sitebar__search-box-title sitebar__search-title'>جستجو</div>
            <div className="sitebar__search-box-input-wrapper">
                <button className='sitebar__search-box-btn'><FiSearch /></button>
                <input className='sitebar__search-box-input' type="text" placeholder='جستجو' />
            </div>
        </div>
    )
}

export default SiteBarSerach