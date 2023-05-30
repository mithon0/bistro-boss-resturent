import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=' my-10'>
          <p className='text-center text-[#D99904] text-xl pb-4 '>---{subHeading}---</p>
          <h3 className='border-y-4 py-4 w-[424px] text-center text-5xl mx-auto mb-10'>{heading}</h3>  
        </div>
    );
};

export default SectionTitle;