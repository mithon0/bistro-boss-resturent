import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Category from '../../Pages/category/Category';
import PopulerManu from '../../Pages/PoplulerManu/PopulerManu';
import CallFooter from '../../Pages/Footer/CallFooter';
import Featured from '../../Pages/Featured/Featured';
import Testmonials from '../../Pages/TestMonials/Testmonials';
import { Helmet} from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro-Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerManu></PopulerManu>
            <CallFooter></CallFooter>
            <Featured></Featured>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;