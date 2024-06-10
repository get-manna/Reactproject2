import { Routes, Route } from 'react-router-dom';

import Home from "../Pages/Home";
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';
import Category from "../Pages/Category";
import SingelProduct from './../Pages/SingelProduct';
import SingleCategory from '../Pages/SingleCategory'

function Router() {
  return (
    <div>
     <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Service' element={<Service/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/category' element={<Category/>} />
        <Route exact path='/products/:id' element={<SingelProduct/>} />
        <Route exact path='/all-category/:SingleCategory' element={<SingleCategory/>} /> 
     </Routes>
    </div>
  )
}

export default Router;