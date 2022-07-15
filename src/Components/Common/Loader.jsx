import React from 'react'
import '../../Assets/Common/loader.css'
import cap from  '../../Assets/Images/logo/cap.svg'
import aspire from  '../../Assets/Images/logo/aspire.svg'
function Loader() {
  return (
    <>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center loader">
         <div>
            <img src={cap} height="50" className="mb-5 cap" alt="" />
         </div>
         <div>
            <img src={aspire} height="100" alt="" />
         </div>
        </div>
    </>
  )
}

export default Loader