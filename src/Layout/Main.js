import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header> {/* header is unchangeable. Header এর  children হিসেবে যেগুলো change হবে, সেগুলো Outlet এর মধ্যে যাবে */}
            
            <Outlet></Outlet> {/* every thing that changes in react router dom, all are => (OUTLET) */}
            
        </div>
    );
};

export default Main;