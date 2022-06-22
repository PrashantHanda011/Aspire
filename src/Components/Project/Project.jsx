import React from 'react'
import TopNav from "../Common/TopNav"
import BottomFoot from "../Common/BottomFoot"
import BrowseTop from './BrowseTop'
import AspireAdvantage from './AspireAdvantage'
import SoldProject from './SoldProject'

function Project() {
  return (
    <>
        <TopNav/>
            <BrowseTop/>
            <AspireAdvantage/>
            <SoldProject/>
        <BottomFoot/>
    </>
  )
}

export default Project