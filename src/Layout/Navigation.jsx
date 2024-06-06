import React from 'react'
import {   Link } from 'react-router-dom'


let navigations =[
    {
        name:'Home',
        path:'/Home',
    },



    {
        name:'Service',
        path:'/Service',
    },


    {
      name:'Cetagory',
      path:'/Cetagory',
  },


    {
        name:'Contact',
        path:'/Contact',
    },
]

const Navigation = () => {
  return (
    <div>


          
<ul className='flex'>
  {
    navigations.map((navbar, index) => (
      <li className='p-2' key={index}>
        <Link className='text-black text-bold uppercase hover:text-blue-700' to={navbar.path}>{navbar.name}</Link>
      </li>
      
    ))
  }
</ul>




    </div>
  )
}

export default Navigation
