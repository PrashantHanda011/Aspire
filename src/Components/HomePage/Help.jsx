import React from 'react'
import "../../Assets/HomePage/Help.css"
import HelpImage from "../../Assets/Images/HelpImage.png"

function Help() {
  return (
    <div className="helpDiv">
    <div className='helpSection'>
      <div className="separatorDiv"></div>
        <h4>How can we help?</h4>
        <div className='helpPara'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        </div>
        <img src={HelpImage} style={{width:"100%"}} />
        {/* <video src="https://www.youtube.com/watch?v=lMHfzIvRoOU"></video> */}
    </div>
    </div>
  )
}

export default Help
