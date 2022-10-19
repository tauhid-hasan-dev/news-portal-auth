import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
       <div>
            <Header></Header>
            <div className='grid grid-cols-12 px-32'>
                <div className=" col-span-2 ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" col-span-7 bg-red-500 ">
                    <Outlet></Outlet>
                </div>
                <div className=" col-span-3 bg-base-200 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
       </div>
    );
};

export default Main;