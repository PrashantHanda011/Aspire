import React from 'react'
import TopNav from '../Common/TopNav'
import CareerDetails from './CareerDetails'
import TopHeading from './TopHeading'
import "../../Assets/Career/Career.css"

function CareerIndividual() {
  return (
    <>
        <TopNav/>

        <TopHeading/>
        <div style={{width: "90%", margin: "auto"}}>
        <CareerDetails/>

        </div>

    </>
  )
}

export default CareerIndividual