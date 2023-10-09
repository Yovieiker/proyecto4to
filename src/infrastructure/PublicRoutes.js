import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => <Component {...props} />}
    />
    );

PublicRoutes.propTypes = {
    component: PropTypes.func.isRequired,
    };

export { PublicRoutes };

