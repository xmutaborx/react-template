import React from 'react';
import List from '../List/List.jsx';
import {useDispatch, useSelector} from "react-redux";

import {counterSlice} from '../../store/slices';

const items = [`redux-toolkit`, `react-dom-router`, `sass`];

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="App">
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+ 1</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>- 1</button>
      <p>{counter}</p>
      <h1>React Template</h1>
      <List items={items} />
    </div>
  );
}

export default App;
