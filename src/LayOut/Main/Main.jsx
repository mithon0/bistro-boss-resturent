import React from 'react';
import Footer from '../../Pages/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navber from '../../Pages/Navber/Navber';

const Main = () => {
    const location =useLocation();
    const noHeaderFooter =location.pathname.includes('login' && 'register');
    
    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;