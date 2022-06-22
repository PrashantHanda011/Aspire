import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';
import ContactUs from './Components/Contact/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './Components/Blogs/BlogPage';
import About from './Components/About/About';
import Career from './Components/Career/Career';
import CareerIndividual from './Components/Career/CareerIndividual';
import Project from './Components/Project/Project';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      {/* <Home/> */}
      <Route path='/' element={<Home />} exact></Route>
      <Route path='/about' element={<About />} exact></Route>
      <Route path='/career' element={<Career />} exact></Route>
      <Route path='/individual-career' element={<CareerIndividual />} exact></Route>
      <Route path='/contact' element={<ContactUs />} exact></Route>
      <Route path='/blogs' element={<BlogPage />} exact></Route>
      <Route path='/projects' element={<Project />} exact></Route>


      {/* <ContactUs/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
