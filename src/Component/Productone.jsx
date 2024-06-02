import PropTypes from "prop-types";

const Productone = ({ title, price, category, tag }) => {
  return (
    <article className='border flex flex-col'>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyXgHgqhkk9vjCDP5iU8jkGzJsgQoNVVDdnld6qBebkqWleb-metAb2f97S7g4nXphyI&usqp=CAU" 
          alt="product" 
        />
        <section className='flex justify-between p-3'>
          <h2>{title}</h2>
          <p>price: ${price}</p>
        </section>
        <hr /> 
        <section className='flex justify-between p-3'>
          <h2>{category}</h2>
          <p>{tag}</p>
        </section>
        <button className='text-bold text-white bg-blue-500 uppercase rounded p-2'>
          Add To Cart
        </button>
    </article>
  );
};



export default Productone;
