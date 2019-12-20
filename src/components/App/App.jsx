import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { usersSlice } from '../../store/slices';
import axios from 'axios';

import MainPage from '../MainPage/MainPage.jsx';
import SecondPage from '../SecondPage/SecondPage.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://api.myjson.com/bins/ukwwk`)
      .then((response) => dispatch(usersSlice.actions.setUsers(response.data)))
    console.log(`request completed`)
  }, [dispatch])

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/second-page" component={SecondPage} />
    </Switch>
  )
};

export default App;
