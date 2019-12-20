import React from 'react';
import List from '../List/List.jsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from '../../store/slices';

const items = [`redux-toolkit`, `react-dom-router`, `sass`, `react-router-dom`, `axios`, `hooks`];

const MainPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="container">
      <h1>Main page</h1>
        <div className="wrapper">
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(counterSlice.actions.decrement())}
            >- 1</button>
            <p>store value: {counter}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(counterSlice.actions.increment())}
            >+ 1</button>
          </div>
        </div>
      <Link to="/second-page">Router link to /testpage</Link>
      <List items={items} />
    </div>
  )
}

export default MainPage;
