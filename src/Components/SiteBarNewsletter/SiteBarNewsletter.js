import './SiteBarNewsletter.css'

function SiteBarNewsletter() {
    return (
        <div className="sitebar-newsletter sitebar-box">
            <h4 className="sitebar-newsletter__title sitebar-title">عضویت در خبرنامه</h4>
            <div className="sitebar-newsletter__wrapper">
                <p className='sitebar-newsletter__caption'>
                    رایگان ثبت نام کنید و اولین نفر باشید
                    در مورد به روز رسانی ها مطلع شوید
                </p>
                <input className='sitebar-newsletter__input' type="text" placeholder='ایمیل شما' />
                <button className='sitebar-newsletter__submit'>عضویت</button>
            </div>
        </div>
    )
}

export default SiteBarNewsletter