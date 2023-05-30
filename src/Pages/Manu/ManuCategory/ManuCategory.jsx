import React from 'react';
import ManuItem from '../../Shared/ManuItem/ManuItem';
import Covar from '../../Shared/Covar/Covar';
import { Link } from 'react-router-dom';

const ManuCategory = ({img,title,item}) => {
    return (
        <div>
           {
            <Covar
            img={img}
            title={title}
            subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></Covar>
           }
            <div className='grid grid-cols-2 gap-10 mb-12 my-10' >
                {
                    item.map(m => <ManuItem
                        item={m}
                        key={m._id}
                    ></ManuItem>)
                }
            </div> 
            <div className='mx-auto text-center mb-10'>
                <Link to={`/order/${title}`}><button className='btn btn-outline w-64  border-t-0 mx-auto border-l-0 border-r-0'>Read more</button></Link>
                </div> 
        </div>
    );
};

export default ManuCategory;