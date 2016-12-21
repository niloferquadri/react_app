import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import App from '../App';
import User from '../components/sample/user/container/user';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={User} />
  </Route>
);
