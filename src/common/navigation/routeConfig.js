import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from './routes';
import { MakeRouteWithSubRoutes } from './makeRoute';

export const RouteConfig = (props) => {
    return (
        <Switch>
            {
                routes.map((route, key) => <MakeRouteWithSubRoutes key={key} {...route} />)
            }
        </Switch>
    )
}