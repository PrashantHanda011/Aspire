import React from 'react'
import Cards from './Cards'
import ChangeGame from './ChangeGame'
import Help from './Help'
import HomeBuying from './HomeBuying'
import HomeChoice from './HomeChoice'
import Perfect from './Perfect'
import Portfolio from './Portfolio'
import "../../Assets/HomePage/Home.css"
import TopNav from '../Common/TopNav'
import Promise from './Promise'
import BlueFooter from '../Common/BlueFooter'
import Community from './Community'
import BottomFoot from '../Common/BottomFoot'
import NewNav from '../Common/NewNav'
function Home() {
  return (
      <>
      <div className=''></div>
      <HomeBuying/>
      <Help/>
      <HomeChoice/>
      <Portfolio/>
      <Perfect/>
      <Community/>
      <Promise/>
      <Cards/>
      <ChangeGame/>
      </>
    
  )
}

export default Home