import React from 'react';
import NavigationBar from '../shared/NavigationBar';
import FooterComp from '../shared/FooterComp';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterComp></FooterComp>
        </div>
    );
};

export default Main;