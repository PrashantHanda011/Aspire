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
import "../../Assets/HomePage/Help.css"
import "../../Assets/HomePage/portfolio.css"

function Home() {
  return (
      <>
      <div className=''></div>
      <HomeBuying/>
      <Help/>
      <HomeChoice/>
      <div className='helpSection'>
              <div className="separatorDiv"></div>
        <h4>Project Portfolio</h4>
        <div className='helpPara'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        </div>
      <Portfolio/>
      </div>
      <Perfect/>
      <Community/>
      <Promise/>
      <Cards/>
      <ChangeGame/>
      </>
    
  )
}

export default Home