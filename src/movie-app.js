import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

function Home() {
  return (
    <h1>Fuck!</h1>
  );
}

export default function test() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
    </Router>
  );
}