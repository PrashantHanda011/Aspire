import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';
import ContactUs from './Components/Contact/ContactUs';
import { useState,useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './Components/Blogs/BlogPage';
import About from './Components/About/About';
import Career from './Components/Career/Career';
import CareerIndividual from './Components/Career/CareerIndividual';
import Project from './Components/Project/Project';
import Singleblog from './Components/Blogs/Singleblog';
import Property from './Components/Project/Property';
import NewNav from './Components/Common/NewNav';
import BottomFoot from './Components/Common/BottomFoot';
import Partner from './Components/Partners/Partner';
import Loader from './Components/Common/Loader';
import Homeloan from './Components/Homeloan/Homeloan';
function App() {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setloading(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
    <div className="App">
      {
        loading ? (<Loader />):(
        
          <>
        <NewNav/> 
        <Routes>
           <Route exact path='/' element={<Home />} /> 
          <Route exact path='/about' element={<About />} />
          <Route exact path='/loader' element={<Loader />} />
          <Route exact path='/homeloan' element={<Homeloan />} />
          <Route exact path='/property/:id' element={<Property />} />
          <Route exact path='/career' element={<Career />} />
          <Route exact path='/individual-career' element={<CareerIndividual />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='/partners' element={<Partner />} />
          <Route exact path='/blogs' element={<BlogPage />} />
          <Route exact path='/blogs/:id' element={<Singleblog/>} />
          <Route exact path='/projects' element={<Project />} />
          </Routes>
        <BottomFoot/>    
        </>
        )
      } 
    </div>
    </BrowserRouter>
  );
}

export default App;
