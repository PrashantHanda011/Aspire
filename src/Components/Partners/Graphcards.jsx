import React from 'react'
import '../../Assets/Partner/partner.css'

function Graphcards(prop) {
  return (
    <>
            <div className="col-lg-4 col-12 my-4 my-lg-0 me-lg-4  partner-doitall-card">
              <div className="row partner-doitall-card-1 d-flex flex-column justify-content-center px-3"> <h5>{prop?.name}</h5> <p>{prop?.interest}</p> </div>
              <div className="row mt-lg-4 px-lg-3"><p style={{wordBreak:"break-word"}}>{prop?.description}</p></div>
            </div>
    </>
  )
}

export default Graphcards