import React from 'react';
import { Route, Redirect } from 'react-router';
import useAuth from '../../Hook/useAuth';

const Privateroute = ({ children, ...rest }) => {
    const { user } = useAuth()
    return (

        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}>

            </Redirect>
            }>
        </Route>

    );
};

export default Privateroute;