import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
       <div>
            <Header></Header>
            <div className='grid grid-cols-12 px-20'>
                <div className="products col-span-2 bg-red-700 ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="products col-span-7 bg-red-500 ">
                    <Outlet></Outlet>
                </div>
                <div className="products col-span-3 bg-red-600 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
       </div>
    );
};

export default Main;