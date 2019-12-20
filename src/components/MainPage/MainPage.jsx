import React from 'react';
import List from '../List/List.jsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from '../../store/slices';

const items = [`redux-toolkit`, `react-dom-router`, `sass`, `react-router-dom`];

const MainPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <h1>Main page</h1>
      <div className="testBlock">
        <button onClick={() => dispatch(counterSlice.actions.increment())}>+ 1</button>
        <p>{counter}</p>
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>- 1</button>
      </div>
      <Link to="/testpage">Router link to /testpage</Link>
      <List items={items} />
    </div>
  )
}

export default MainPage;
