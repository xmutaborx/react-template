import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainPage from '../MainPage/MainPage.jsx';
import SecondPage from '../SecondPage/SecondPage.jsx';

const App = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/second-page" component={SecondPage} />
  </Switch>
);

export default App;
