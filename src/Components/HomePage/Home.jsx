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

function Home() {
  return (
      <>
      <div className=''></div>
      <TopNav/>
      <HomeBuying/>
      <Help/>
      <HomeChoice/>
      <Portfolio/>
      <Perfect/>
      <Community/>
      <Promise/>
      <Cards/>
      <ChangeGame/>
      <BlueFooter/>
      </>
    
  )
}

export default Home