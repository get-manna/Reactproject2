import {Routes,Route} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './../Pages/Home'
import About from './../Pages/About';
import Service from './../Pages/Service';
import Contact from './../Pages/Contact';

const Router = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="About" element={<About/>} />
    <Route exact path="Service" element={<Service/>} />
    <Route exact path="Contact" element={<Contact/>} />
     
    </Routes>
      
    </>
  )
}

export default Router
