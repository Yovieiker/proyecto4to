import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login' }} />}
        />
    );
}

PrivateRoutes.propTypes = {
    component: PropTypes.func.isRequired,
};

export { PrivateRoutes };