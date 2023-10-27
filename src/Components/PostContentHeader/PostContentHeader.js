import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'

import './PostContentHeader.css'

function PostContentHeader({ mainPost }) {
  return (
    <header className='postcontent-header'>
      <span className="postcontent-header__subtitle">خبر ویژه</span>
      <h1 className='postcontent-header__title'>{mainPost}</h1>
      <div className="postcontent-header__nav">
        <div className="postcontent-header__profile">
          <img src="/images/PostContent/author-image-3.png" alt="banner" className="postcontent-header__profile-img" />
          <div className="postcontent-header__profile-wrapper">
            <h5 className='postcontent-header__profile-name'>عصمت جهان</h5>
            <div>
              <span className="postcontent-header__profile-item">300 نفر بازدید</span>
              <span className="postcontent-header__profile-item">17 بهمن, 1399</span>
            </div>
          </div>
        </div>
        <div className="postcontent-header__nav-icons">
          <SocialMediaIcons />
        </div>
      </div>
    </header>
  )
}

export default PostContentHeader