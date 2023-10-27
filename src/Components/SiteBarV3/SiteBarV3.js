import SiteBarCategoris from "../SiteBarCategoris/SiteBarCategoris"
import SiteBarSerach from "../SiteBarSerach/SiteBarSerach"
import SiteBarTheBestWeek from "../SiteBarTheBestWeek/SiteBarTheBestWeek"
import SiteBarInstagram from "../SiteBarInstagram/SiteBarInstagram"
import MostVisitedVideo from "../MostVisitedVideo/MostVisitedVideo"
import SiteBarSocialMedia from "../SiteBarSocialMedia/SiteBarSocialMedia"
import SiteBarNewsletter from "../SiteBarNewsletter/SiteBarNewsletter"
import Banner from "../Banner/Banner"
import SiteBarArchive from "../SiteBarArchive/SiteBarArchive"
import SiteBarLabels from "../SiteBarLabels/SiteBarLabels"
import SiteBarArchiveText from "../SiteBarArchiveText/SiteBarArchiveText"
import SiteBarRecentContent from "../SiteBarRecentContent/SiteBarRecentContent"


function SiteBarV3() {
  return (
    <div className='siteBarv3'>
      {/* SiteBar Category */}
      <SiteBarCategoris />
      {/* SiteBar Serach */}
      <SiteBarSerach />
      {/* SiteBar The Best Week */}
      <SiteBarTheBestWeek />
      {/* SiteBar Newsletter */}
      <SiteBarNewsletter />
      {/* Banner Download*/}
      <Banner>
        <img className="banner__download-app" src="/images/banner/ads-01.jpg" alt="banner" />
      </Banner>
      {/* SiteBar Social Media */}
      <SiteBarSocialMedia />
      {/* SiteBar Instagram */}
      <SiteBarInstagram />
      {/* Archive */}
      <SiteBarArchive />
      {/* SiteBar Visited Video */}
      <MostVisitedVideo />
      {/* Sitebar Labels */}
      <SiteBarLabels />
      {/* Sitebar Archive Text */}
      <SiteBarArchiveText />
      {/* Sitebar Recent Content */}
      <SiteBarRecentContent />
      {/* Banner */}
      <Banner>
        <img className="banner__advertising" src="/images/banner/banner-02.png" alt="banner" />
      </Banner>
    </div>
  )
}

export default SiteBarV3;