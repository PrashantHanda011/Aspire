import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import TopNav from "../Common/TopNav"
import CareerCard from './CareerCard'
import "../../Assets/Career/Career.css"
import CareerTop from './CareerTop'
import CareerInput from './CareerInput'
import BottomFoot from '../Common/BottomFoot'
import NewNav from '../Common/NewNav'
import axios from 'axios'
function Career() {

  

  
  const [careerData, setcareerData] = useState([])

  const fetchcareerData = async()=>{
      try {
        const data = await axios.get('https://aspire0.herokuapp.com/cr/getAllCareer');
        console.log(data)
        setcareerData(data?.data?.data);
      } catch (error) {
        console.log(error)
      }
  } 

useEffect(() => {
    fetchcareerData()
  }, [])
  return (
    <>
    
    <div className='careerPage'>

    <Row className="careerRow w-100 d-flex justify-content-center align-items-center">
    <Col xs={11}>
      <CareerInput/>
    </Col>

      <Col xs={11} >

      {
        careerData?.map((item,index)=>{
            return <CareerCard
              key={index}
              department={item.department}
              description={item.description}
              experience={item.experience}
              location={item.location}
              name={item.name}
              salary={item.salary}

            />
        })
      }
      
      </Col>
      
    </Row>
  
    </div>
    
    </>
  )
}

export default Career