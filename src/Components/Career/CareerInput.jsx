import { Input } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';


function CareerInput() {
    const [Location, setLocation] = React.useState('');
    const [Department, setDepartment] = React.useState('');

    
    
    const handleLocation = (event) => {
        setLocation(event.target.value);
      };
    const handleDepartment = (event) => {
        setDepartment(event.target.value);
      };
  
  
    return (
    <div className='careerInputDiv'>
       <h3>Open Position</h3>
       <Row xs={12} className="careerCardDiv CareerInputBox d-flex flex-column flex-md-row flex-lg-row  bg-white" >
    
    <Col xs={12} lg={6} className=" d-flex justify-content-center " style={{borderRight:"0.5px solid rgba(0,0,0,0.3)"}}>
       <Col xs={6} lg={4} className="Search-Location border-sm-none">
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
       <Col xs={6} lg={4} className="mx-lg-5 ms-2 ">
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
       </Col>
     

       <Col lg={6} className="d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0 align-items-center">
       <Col xs={12} lg={6}>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Positions"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
       </Col>
       </Col>

        </Row>
    </div>
  )
}

export default CareerInput