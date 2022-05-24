import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';
import ContactUs from './Components/Contact/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './Components/Blogs/BlogPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      {/* <Home/> */}
      <Route path='/' element={<Home />} exact></Route>
      <Route path='/contact' element={<ContactUs />} exact></Route>
      <Route path='/blogs' element={<BlogPage />} exact></Route>


      {/* <ContactUs/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
