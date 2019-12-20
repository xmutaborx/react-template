import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import MainPage from '../MainPage/MainPage.jsx';

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/testpage">
        <div>
          <h1>This is test page</h1>
          <Link to="/">back to main page</Link>
          </div>
      </Route>
    </Switch>
  );
}

export default App;
