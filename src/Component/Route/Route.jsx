import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../UserAuthtication/Login';

const Route = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Route;