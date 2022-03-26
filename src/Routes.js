import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage, PrivateRoute } from './auth';
// import {
//     CreateGroupPage,
//     GroupPage,
//     GroupsListPage,
// } from './groups';
import { NavBar } from './navbar';
import {BrowsePhotosPage} from './photos'

const routes = [
//     {
//     path: '/',
//     Component: GroupsListPage,
//     private: true,
//     exact: true,
// }, 
// {
//     path: '/groups/:id',
//     private: true,
//     Component: GroupPage,
// },
 {
    path: '/sign-in',
    Component: SignInPage,
},
//  {
//     path: '/create-group',
//     private: true,
//     Component: CreateGroupPage,
// },
{   path:'/sign-in',
    Component: SignInPage,
},
{
    path:'/',
    Component: BrowsePhotosPage,
    exact:true,
    private: true,
}];

export const Routes = ({ isLoading, user }) => {
    return (
        <Router>
            <NavBar user={user} />
            <Switch>
            {routes.map((route, index) => {
                const RouteType = route.private
                    ? PrivateRoute
                    : Route;
                return (
                    <RouteType
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                    >
                        <route.Component />
                    </RouteType>
                );
            })}
            </Switch>
        </Router>
    );
}


// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const routes = [ ];

// export const Routes = () => (
//     <Router>
//         <Switch>
//         {routes.map((route, index) => (
//             <Route
//                 key={index}
//                 path={route.path}
//                 exact={route.exact}
//             >
//                 <route.Component />
//             </Route>
//         ))}
//         </Switch>
//     </Router>
// )