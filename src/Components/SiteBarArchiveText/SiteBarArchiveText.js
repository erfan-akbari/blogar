import './SiteBarArchiveText.css'

function SiteBarArchiveText() {
    return (
        <div className='sitebar-archiveText sitebar-box'>
            <h4 className='sitebar-archiveText__title sitebar-title'>آرشیو مطالب</h4>
            <select className='sitebar-archiveText__selectbox'>
                <option>انتخاب ماه</option>
                <option>خرداد 1400 (4)</option>
                <option>اردیبهشت 1400 (3)</option>
                <option>فروردین 1400 (11)</option>
                <option>اسفند 1399 (5)</option>
            </select>
        </div>
    )
}

export default SiteBarArchiveText