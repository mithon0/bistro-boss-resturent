import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ManuItem from '../Shared/ManuItem/ManuItem';
import useManu from '../../Hooks/useManu';

const PopulerManu = () => {
    const [manu]=useManu();
    const populerManu = manu.filter(d => d.category === 'popular')


    // const [manu, setManu] = useState([]);

    // useEffect(() => {
    //     fetch('manu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const populerManu = data.filter(d => d.category === 'popular')
    //             setManu(populerManu)
    //         })
    // }, []);
    // console.log(manu);

    return (
        <section>
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'
            ></SectionTitle>

            <div className='grid grid-cols-2 gap-10 mb-12'>
                {
                    populerManu.map(item=><ManuItem
                    key={item._id}
                    item={item}
                    ></ManuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerManu;