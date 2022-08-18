import React from 'react';
import { createContext } from 'react';
import Usefirebas from '../Hook/Usefirebase';

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
    const allContext = Usefirebas();
    return (
        <Authcontext.Provider value={allContext}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;