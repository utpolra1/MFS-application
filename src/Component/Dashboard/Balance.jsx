import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { TbCoinTaka } from 'react-icons/tb';

const Balance = () => {
    const {user} = useContext(authContext);
    return (
        <div>
           <h className="flex justify-center items-center gap-1" ><TbCoinTaka/>Balance: {user.balance}</h>
        </div>
    );
};

export default Balance;