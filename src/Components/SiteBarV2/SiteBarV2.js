// Import dependecis
import React, { Component } from 'react'
import SiteBarCategoris from "../SiteBarCategoris/SiteBarCategoris"
import MostVisitedVideo from "../MostVisitedVideo/MostVisitedVideo"

// Import Style Css
import "./SiteBarV2.css"

// Function Component
export default class SiteBarSR extends Component {
  render() {
    return (
      <div className='SiteBarV2'>
            {/* Category */}
            <SiteBarCategoris />
            {/* Most Visited Video */}
            <MostVisitedVideo />
      </div>
    )
  }
}
