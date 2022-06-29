import React from 'react'
import TopNav from "../Common/TopNav"
import BottomFoot from "../Common/BottomFoot"
import BrowseTop from './BrowseTop'
import AspireAdvantage from './AspireAdvantage'
import SoldProject from './SoldProject'
import NewNav from '../Common/NewNav'

function Project() {
  return (
    <>
    <NewNav/>
            <BrowseTop/>
            <AspireAdvantage/>
            <SoldProject/>
        <BottomFoot/>
    </>
  )
}

export default Project