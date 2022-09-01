import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../src/Hook/Usefirebase'
import useAuth from '../../Hook/useAuth';
import Loading from '../Loggedin/Loading';
// import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router';




const RequiredAuth = ({ children }) => {
    // const [user, loading] = useAuthState(auth);
    const { user, isLoading } = useAuth();
    console.log(user);
    const location = useLocation();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!user.name) {
        return <Navigate to="/loggedin" state={{ from: location }} replace />;
    }
    return children;
}

//     

export default RequiredAuth;

// const RequiredAuth = ({ children, ...rest }) => {

//     const { user, logout } = useAuth();

//return (
    //         <Route
    //             {...rest}
    //             render={({ location }) =>
    //                 auth.user ? (
    //                     children
    //                 ) : (
    //                     <Redirect
    //                         to={{
    //                             pathname: "/login",
    //                             state: { from: location }
    //                         }}
    //                     />
    //                 )
    //             }
    //         />
    //     );
    // };