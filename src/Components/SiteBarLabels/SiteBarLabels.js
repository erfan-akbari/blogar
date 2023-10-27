import './SiteBarLabels.css'

function SiteBarLabels() {
  return (
    <div className='sitebar-labels sitebar-box'>
        <h4 className="sitebar-labels__title sitebar-title">برچسب ها</h4>
        <ul className="sitebar-labels__list">
            <li className="sitebar-labels__item">طراحی</li>
            <li className="sitebar-labels__item">برنامه نویسی</li>
            <li className="sitebar-labels__item">گرافیک</li>
            <li className="sitebar-labels__item">طراحی UI/UX</li>
            <li className="sitebar-labels__item">HTML</li>
        </ul>
    </div>
  )
}

export default SiteBarLabels