

const Productone = ({ img, title, price, category, tag, productId }) => {
  return (
    <div className='border flex flex-col'>

         <>
        <img className="w-full max-w-[400px] max-h-[400px] object-cover" src={img}  alt="product"  />
        </>

        <section className='flex justify-between p-3'>
          <h2>{title}</h2>
          <p>price: ${price}</p>
        </section>
        <hr /> 
        <section className='flex justify-between p-3'>
          <h2>{category}</h2>
          <p>{tag}</p>
        </section>

    </div>
  );
};



export default Productone;
