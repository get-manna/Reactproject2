import servic from '../assets/servic.webp'


const Service = () => {
  return (
    <section className="container mx-auto pt-6">


     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      <div> 
        <img src={ servic} className="w-full h-auto " />
      </div>


      <div>
        <h2 className="text-blue-500 text-3xl mb-2 uppercase font-bold">Our service</h2>
        <p className="text-black  mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias necessitatibus accusantium atque obcaecati fuga voluptates nisi voluptas sequi cupiditate!
        </p>
        <button className=" bg-blue-500 p-3 text-white rounded uppercase"> Read more</button>
      </div>
    </div>
  </section>
  )
}

export default Service
