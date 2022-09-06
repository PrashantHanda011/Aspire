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
        <p>Aspire is a one-stop solution designed to make your home buying experience as pleasurable as possible. If you are looking for your perfect abode in the most sought-after locations, let’s go get it! 👇</p>
        </div>
        <img src={HelpImage} style={{width:"100%"}} />
        {/* <video src="https://www.youtube.com/watch?v=lMHfzIvRoOU"></video> */}
    </div>
    </div>
  )
}

export default Help
