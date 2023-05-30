import React from 'react';
import { Helmet } from 'react-helmet-async';
import Covar from '../Shared/Covar/Covar';
import covarImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import useManu from '../../Hooks/useManu';
import ManuItem from '../Shared/ManuItem/ManuItem';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import ManuCategory from './ManuCategory/ManuCategory';
const Manu = () => {
    const [manu] = useManu();
    const offerdManu = manu.filter(m => m.category === 'offered');
    const dessertManu = manu.filter(m => m.category === 'dessert');
    const pizzaManu = manu.filter(m => m.category === 'pizza');
    const saladManu = manu.filter(m => m.category === 'salad');
    const soupManu = manu.filter(m => m.category === 'soup');

    // console.log(offerdManu);

    return (
        <div>
            <Helmet>
                <title>Bistro-Boss|Manu</title>
            </Helmet>
            <Covar
                img={covarImg}
                title={"our manu"}
                subTitle={"would you like to try a dish"}
            ></Covar>
            <SectionTitle

                heading={'todays offer'}
                subHeading={"Don't miss"}
            ></SectionTitle>

            <div className='grid grid-cols-2 gap-10 mb-12 my-10' >
                {
                    offerdManu.map(m => <ManuItem
                        item={m}
                        key={m._id}
                    ></ManuItem>)
                }
            </div>
            <div>
                {/* dessert */}
                <ManuCategory
                    img={dessertImg}
                    title={"desserts"}
                    item={dessertManu}
                ></ManuCategory>
               
            </div>
            <div>
                {/* pizza */}
                <ManuCategory
                    img={pizzaImg}
                    title={"pizza"}
                    item={pizzaManu}
                ></ManuCategory>
                
            </div>
            <div>
                {/* salad */}
                <ManuCategory
                    img={saladImg}
                    title={"salad"}
                    item={saladManu}
                ></ManuCategory>
               
            </div>
            <div>
                {/* soup */}
                <ManuCategory
                    img={soupImg}
                    title={"soup"}
                    item={soupManu}
                ></ManuCategory>
               
            </div>


        </div>
    );
};

export default Manu;