import React from 'react'
import {Row,Container,Col} from 'react-bootstrap'
import '../../Assets/Project/property.css'
function Singleunit(props) {
  return (
    <>
    <div className='Property-singleunit'>
        <div className='Property-singleunit-img'>
          <figure>
            <img src={props?.data?.floorPlan} className='w-100' alt="" />
          </figure>
        </div>
        <div className='Property-singleunit-desc'> {props?.data?.range}</div>
        <div className='Property-singleunit-desc'>{props?.data?.size}</div>
        <div className='Property-singleunit-desc'>{props?.data?.price}</div>
    </div>
    </>
  )
}

export default Singleunit