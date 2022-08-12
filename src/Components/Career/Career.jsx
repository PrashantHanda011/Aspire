import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import CareerCard from './CareerCard'
import "../../Assets/Career/Career.css"
import { Input } from '@mui/material'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

function Career() {  
  const [careerData, setcareerData] = useState([])
  const [Location, setLocation] = React.useState('');
  const [Department, setDepartment] = React.useState('');
  const [searchInput, setsearchInput] = useState('');
  const [filterData, setfilterData] = useState([])
  const handleLocation = (event) => {
      setLocation(event.target.value);
    };
  const handleDepartment = (event) => {
      setDepartment(event.target.value);
    };


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

  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    if(searchInput !== ''){
      let filteredData =  careerData.filter((item) => {  
      return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
      })
      setfilterData(filteredData)
    }else{
      setfilterData(careerData)
    }
  }




  return (
    <>
    
    <div className='careerPage'>

    <Row className="careerRow w-100 d-flex justify-content-center align-items-center">
    
    <Col xs={11}>
    <div className='careerInputDiv'>
       <h3>Open Position</h3>
       <Row xs={12} className="careerCardDiv CareerInputBox d-flex flex-column flex-md-row flex-lg-row  bg-white" >
    
    <Col xs={12} lg={6} className=" d-flex justify-content-center " style={{borderRight:"0.5px solid rgba(0,0,0,0.3)"}}>
       <Col xs={6} lg={4} className="Search-Location border-sm-none">
                <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <InputLabel id="demo-select-small">Department</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Department}
                    label="Department"
                    onChange={handleDepartment}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>IT</MenuItem>
                    <MenuItem value={2}>Marketing</MenuItem>
                    <MenuItem value={3}>HR</MenuItem>
                </Select>
                </FormControl>
       </Col>
       <Col xs={6} lg={4} className="mx-lg-5 ms-2 ">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Location</InputLabel>

                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Location}
                    label={"Location"}
                    onChange={handleLocation}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Noida"}>Noida</MenuItem>
                    <MenuItem value={"Banglore"}>Banglore</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                </Select>
                
                </FormControl>
            </Col>
       </Col>
     

       <Col lg={6} className="d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0 align-items-center">
       <Col xs={12} lg={6}>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Positions"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={searchInput}
            onChange={(e)=>searchItems(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
       </Col>
       </Col>

        </Row>
    </div>


    </Col>

      <Col xs={11} >

      {
        (searchInput.length > 1) ?(
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
        ):(
          filterData?.map((item,index)=>{
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
        )
        
      }
      
      </Col>
      
    </Row>
  
    </div>
    
    </>
  )
}

export default Career