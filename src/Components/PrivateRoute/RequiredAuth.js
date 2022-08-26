import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../src/Hook/Usefirebase'
import useAuth from '../../Hook/useAuth';
import Loading from '../Loggedin/Loading';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    // const { user, logout } = useAuth();
    // console.log(user);
    const location = useLocation();
    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (!user) {
        return <Navigate to="/loggedin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;