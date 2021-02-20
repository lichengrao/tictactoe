import { H1 } from 'components';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));
const Profile = lazy(() => import('pages/profile'));
const Room = lazy(() => import('pages/room'));
const Signup = lazy(() => import('pages/signup'));

const Routes = () => (
	<Switch>
		<Suspense fallback={<H1>Loading Page...</H1>}>
			<Route path="/r/:roomId" component={Room} />
			<Route path="/u/:userId" component={Profile} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route exact path="/" component={Home} />
		</Suspense>
	</Switch>
);

export default Routes;
