import React from 'react'
import { Skeleton } from '@mui/material'
function Map2(prop) {

  return (
    <>
    {
      <iframe width="100%" height={prop.height} id="gmap_canvas" src="https://maps.google.com/maps?q=45,%20N%20Park%20Rd,%20Kumara%20Park%20East,%20Sampangi%20Rama%20Nagar,%20Bengaluru,%20Karnataka%20560001&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> ?(
        <iframe width="100%" height={prop.height} id="gmap_canvas" src="https://maps.google.com/maps?q=45,%20N%20Park%20Rd,%20Kumara%20Park%20East,%20Sampangi%20Rama%20Nagar,%20Bengaluru,%20Karnataka%20560001&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      ):(
        <Skeleton variant="rectangular" width={600} height={prop.height} />
      )

    }
      
   
    </>
  )
}

export default Map2