// import React from 'react';
// // import { Route } from 'react-router';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../../src/Hook/Usefirebas'

// const Privateroute = ({ children }) => {
//     const [user] = useAuthState(auth);
//     const location = useLocation();
//     if (!user) {
//         return <Navigate to="/loggedin" state={{ from: location }} replace />;
//     }

//     return children;
// };

// export default Privateroute;