import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => {
      return ++state
    },
    decrement: state => {
      return --state
    }
  }
});