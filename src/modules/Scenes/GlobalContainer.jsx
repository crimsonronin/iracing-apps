// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {STATE_NAMESPACE} from 'src/modules/Utils/webSocketReducer';
import {Route as RouteType, routeConfig} from 'src/modules/Routing/routeConfig';

export const mapStateToProps = (state: any) => ({
    isWebsocketConnected: state[STATE_NAMESPACE].isConnected
});

type Props = {
    isWebsocketConnected: boolean,
};

const RouteWithSubRoutes = (route: RouteType) => {
    const getSubRoute = (subRoute: RouteType) => (
        <Route
            key={subRoute.name}
            exact={subRoute.exact}
            path={`${subRoute.path}${subRoute.params}`}
            render={props => <subRoute.component {...props} {...subRoute.props} />}
        />
    );

    return (
        <Route
            key={route.name}
            exact={route.exact}
            path={`${route.path}${route.params}`}
            render={props => (
                <route.component {...props} {...route.props}>
                    {// Check for sub routes
                        route.subRoutes &&
                        route.subRoutes.length &&
                        route.subRoutes.map(getSubRoute)}
                </route.component>
            )}
        />
    );
};


class GlobalContainer extends Component<Props> {
    render() {
        const {isWebsocketConnected} = this.props;

        if (isWebsocketConnected) {
            return (
                <Switch location={location}>
                    {routeConfig.map(route => (
                        <RouteWithSubRoutes key={route.name} {...route} />
                    ))}
                </Switch>
            );
        }

        return null;
    }
}

export default connect(mapStateToProps)(GlobalContainer);
