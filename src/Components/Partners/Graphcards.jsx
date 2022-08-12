import React from 'react'
import '../../Assets/Partner/partner.css'

function Graphcards({data}) {
  return (
    <>
            <div className="col-lg-4 col-12 my-4 my-lg-0  partner-doitall-card">
              <div className="row partner-doitall-card-1 d-flex flex-column justify-content-center px-3"> <h5>{data?.name}</h5> <p>{data?.interest}</p> </div>
              <div className="row mt-lg-4 px-lg-3"><p>{data?.description}</p></div>
            </div>
    </>
  )
}

export default Graphcards