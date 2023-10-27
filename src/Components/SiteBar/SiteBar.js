// Import dependecis
import SiteBarCategoris from '../SiteBarCategoris/SiteBarCategoris'
import SiteBarSerach from '../SiteBarSerach/SiteBarSerach'
import SiteBarTheBestWeek from '../SiteBarTheBestWeek/SiteBarTheBestWeek'
import SiteBarSocialMedia from '../SiteBarSocialMedia/SiteBarSocialMedia'
import SiteBarInstagram from  '../SiteBarInstagram/SiteBarInstagram'

// Function Component
export default function SiteBar() {
    return (
        <div className="sitebar">
            {/* SiteBar Category */}
            <SiteBarCategoris />
            {/* SiteBar Serach */}
            <SiteBarSerach />
            {/* SiteBar The Best Week */}
            <SiteBarTheBestWeek />
            {/* SiteBar Social Media */}
            <SiteBarSocialMedia />
            {/* SiteBar Instagram */}
            <SiteBarInstagram />
        </div>
    )
}
