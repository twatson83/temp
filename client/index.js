import React from 'react';
import { render } from 'react-dom';
import App from './shared/components/App';
import HomePage from './home/components/HomePage';
import { Router, Route, browserHistory } from 'react-router';

if (process.env.BROWSER ) {
    require ("./shared/style/fonts.scss");
    require ("./shared/style/base.scss")
    require ("font-awesome/scss/font-awesome.scss")
}

render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={HomePage}/>
      </Route>
  </Router>
), document.getElementById('root'));