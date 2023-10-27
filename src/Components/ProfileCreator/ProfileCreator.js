import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'

import './ProfileCreator.css'

function ProfileCreator() {
    return (
        <div className='profile-creator'>
            <div className="profile-creator__right">
                <img className='profile-creator__img' src="/images/PostContent/author-b1.png" alt="profile" />
            </div>
            <div className="profile-creator__left">
                <span className="profile-creator__name">رهبی احمدخان</span>
                <span className="profile-creator__job">طراح UX Sr</span>
                <p className="profile-creator__description">
                    در 29 سالگی، تعریف مورد علاقه من این است که به من می گویند شبیه مادرم هستم
                    . دیدن خودم در تصویر او، مانند این دختر در بالا،
                    باعث می‌شود به این که چقدر پیشرفت کرده‌ام
                    افتخار کنم و از جایی که از آن آمده‌ام بسیار سپاسگزارم.
                </p>
                <SocialMediaIcons />
            </div>
        </div>
    )
}

export default ProfileCreator