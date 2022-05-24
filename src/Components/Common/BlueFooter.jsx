import React from 'react'
import "../../Assets/Common/BottomFoot.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function BlueFooter() {
  return (
    <div className='blueFooter'>
        <div className='blueFootDiv'>
            <h1 style={{fontSize: 100, display: "inline"}}>Let’s Talk</h1>
            <ArrowRightAltIcon sx={{fontSize: 100}}/>

        </div>
        

    </div>
  )
}

export default BlueFooter