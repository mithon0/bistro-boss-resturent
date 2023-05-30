import React from 'react';

const ManuItem = ({item}) => {
    const {name,image,price,recipe}=item;
    console.log(item);
    return (
        <div>
            <div className='flex gap-1 '>
            <img className='w-[118px] mr-8 ' style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className='text-[#151515] text-xl'>{name}--------------------</h2>
                <p className='text-[#737373] text-base mr-2 '>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-xl'>${price}</p>
        </div>
        
        </div>
    );
};

export default ManuItem;