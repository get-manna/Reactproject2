import React from 'react'


let navigations =[
    {
        name:'Home',
        path:'/Home',
    },
    {
        name:'About',
        path:'/About',
    },
    {
        name:'Services',
        path:'/Services',
    },

    {
        name:'Contact',
        path:'/Contact',
    }
]

const Navigation = () => {
  return (
    <div>


          
<ul className='flex'>
  {
    navigations.map((navbar, index) => (
      <li className='p-2' key={index}>
        <a className='text-black text-bold uppercase hover:text-blue-700' href={navbar.path}>{navbar.name}</a>
      </li>
    ))
  }
</ul>




    </div>
  )
}

export default Navigation
