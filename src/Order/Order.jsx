import React, { useState } from 'react';

import orderimg from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Covar from '../Pages/Shared/Covar/Covar';
import useManu from '../Hooks/useManu';
import OrderCard from './OrderCard/OrderCard';
import { useParams } from 'react-router-dom';
const Order = () => {
    
    const categories =['salad','pizza','soup','dessert','drinks']
    const {category}=useParams();
    const initialIndex =categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [manu] = useManu();
    
    const dessertManu = manu.filter(m => m.category === 'dessert');
    const pizzaManu = manu.filter(m => m.category === 'pizza');
    const saladManu = manu.filter(m => m.category === 'salad');
    const soupManu = manu.filter(m => m.category === 'soup');
    const drinksManu = manu.filter(m => m.category === 'drinks');


    return (

        <div>

            <Covar
                img={orderimg}
                title={"Our shop"}
                subTitle={"would you like to try our dish"}
            ></Covar>

          <div className='text-center'>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index)=>setTabIndex(index)}
          >
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                    
                </TabList>

                
                <TabPanel>
                <div className='grid md:grid-cols-3 grid-cols-1 my-5'>
                {
                    saladManu.map(m=><OrderCard
                    key={m._id}
                    item={m}
                    ></OrderCard>)
                }
                </div>
                </TabPanel>
                
                <TabPanel>
                <div className='grid md:grid-cols-3 grid-cols-1 my-5'>
                {
                    pizzaManu.map(m=><OrderCard
                    key={m._id}
                    item={m}
                    ></OrderCard>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 grid-cols-1 my-5'>
                {
                    soupManu.map(m=><OrderCard
                    key={m._id}
                    item={m}
                    ></OrderCard>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 grid-cols-1 my-5'>
                {
                    dessertManu.map(m=><OrderCard
                    key={m._id}
                    item={m}
                    ></OrderCard>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 grid-cols-1 my-5'>
                {
                    drinksManu.map(m=><OrderCard
                    key={m._id}
                    item={m}
                    ></OrderCard>)
                }
                </div>
                </TabPanel>
            </Tabs>
          </div>
        </div>
    );
};

export default Order;