import React from 'react'
import "../../Assets/About/About.css"
import TopNav from '../Common/TopNav'
import BottomFoot from "../Common/BottomFoot"
import Companies from './Companies'
import OurStory from './OurStory'
import CardSection from './CardSection'

function About() {
  return (
    <div className='aboutPage'>
        <TopNav/>
        <CardSection/>
        <OurStory/>
          <Companies/>
        <BottomFoot/>
    </div>
  )
}

export default About