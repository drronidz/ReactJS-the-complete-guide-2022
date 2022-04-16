import {useSelector, useDispatch} from 'react-redux'

import classes from './Counter.module.css';
import {useRef} from "react";
import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from "../store";

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const show = useSelector(state => state.showCounter)
    const dispatch = useDispatch()

    const counterRef = useRef()

    const toggleCounterHandler = () => {
        dispatch({
            type: TOGGLE
        })
    };

    const incrementHandler = () => {
        dispatch({
            type: INCREMENT
        })
    }

    const decrementHandler = () => {
        dispatch({
            type: DECREMENT
        })
    }

    const increaseHandler = (amount = 5) => {
        dispatch({
            type: INCREASE,
            amount: +counterRef.current.value
        })
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increaseHandler}>Increase By 5</button>
                <button>Decrease By 5</button>
                <div>
                    <button onClick={increaseHandler}>Increase By ...</button>
                    <input type="number" ref={counterRef}/>
                </div>
            </div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
