import React, { Fragment, useState, useReducer } from "react";
import "./reducer.css";
const ReducerCounter = () => {
   
  const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };
  const countReducer = (state, action) => {
    switch (action.type) {
      case ACTION.INCREMENT:
        return {count:state.count + 1};
      case ACTION.DECREMENT:
        return {count:state.count - 1};
      default:
        return state;
    }
  };

  //dispatch
  const [countState, countDispatch] = useReducer(countReducer, {count:0});

  const increment = () => {
    countDispatch({ type: ACTION.INCREMENT });
  };
  const decrement = () => {
    countDispatch({ type: ACTION.DECREMENT });
  };
  return (
    <Fragment>
      <div className="pageWrapper">
        <h2 className="pageTitle">Reducer counter</h2>
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <span className="count">{countState.count}</span>
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>
      </div>
    </Fragment>
  );
};

export default ReducerCounter;
