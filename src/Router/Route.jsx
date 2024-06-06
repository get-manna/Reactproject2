import { Routes, Route } from 'react-router-dom';

import Home from "../Pages/Home";
import Service from '../Pages/Service';
import Cetagory from '../Pages/Cetagory';
import Contact from '../Pages/Contact';


function Router() {
  return (
    <div>
     <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Service' element={<Service/>} />
        <Route exact path='/Cetagory' element={<Cetagory/>} />
        <Route exact path='/Contact' element={<Contact/>} />

           

     </Routes>
    </div>
  )
}

export default Router;