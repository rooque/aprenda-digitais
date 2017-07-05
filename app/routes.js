/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import InicialPage from './containers/InicialPage';
import CounterPage from './containers/CounterPage';
import LevelPage from './components/Level';
import LevelPage2 from './components/Level2';
import LevelPage3 from './components/Level3';
import FinalPage from './components/Final'

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/level" component={LevelPage} />
      <Route path="/level2/:score" component={LevelPage2} />
      <Route path="/level3/:score" component={LevelPage3} />
      <Route path="/final/:score" component={FinalPage} />
      <Route path="/" component={InicialPage} />
    </Switch>
  </App>
);
