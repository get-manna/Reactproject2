import logo from '../assets/images.png'
import Navigation from './Navigation';


const Header = () => {
  return (
  
    <div className="bg-white p-2 w-full   border-b  border-gray-400">
      
     <div className="max-w-[1420px] m-auto flex  justify-between items-center">
      
    
      
      <div className="logo">
         <a href="">
          <img className='w-20'  src={logo} alt="logo" />
          
          </a>
      </div>

      <div className="navmanu">
          <Navigation />
      </div>

      <div className="button">
        <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded'> Login </button>
      </div>
     
    </div>

</div>
  

  )
}

export default Header
