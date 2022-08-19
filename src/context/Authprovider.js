import React from 'react';
import { createContext } from 'react';
import Usefirebase from '../Hook/Usefirebase';

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
    const allContext = Usefirebase();
    return (
        <Authcontext.Provider value={allContext}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;