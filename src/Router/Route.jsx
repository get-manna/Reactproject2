import { Routes, Route } from 'react-router-dom';

import Home from "../Pages/Home";
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';
import Cetagory from './../Pages/Cetagory';


function Router() {
  return (
    <div>
     <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Service' element={<Service/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/Cetagory' element={<Cetagory/>} />
     </Routes>
    </div>
  )
}

export default Router;