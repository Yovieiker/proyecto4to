import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useAuth } from '../hooks/useAuth';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

const Routes = () => {
    const { isAuthenticated } = useAuth();
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoutes exact path="/login" component={Login} />
                <PrivateRoutes exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export { Routes };
