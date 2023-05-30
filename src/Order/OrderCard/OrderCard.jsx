import React from 'react';

const OrderCard = ({item}) => {
    const {image,price,recipe,name}=item;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
  <div className='relative'>
  <figure className="">
    <img src={image} alt="Shoes" className="rounded-xl" />
    
  </figure>
  <h4 className='bg-black text-white absolute px-5 py-2 top-5 left-[300px]'>${price}</h4>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OrderCard;