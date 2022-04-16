import {useSelector, useDispatch} from 'react-redux'

import classes from './Counter.module.css';
import {useRef} from "react";
import { counterActions } from "../store";
import counterSlice from "../store/CounterSlice";
// import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from "../store";

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);
    const dispatch = useDispatch()

    const increaseCounterRef = useRef()
    const decreaseCounterRef = useRef()

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };

    const incrementHandler = () => {
        console.log(counter)
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        console.log('DECREMENT')
        dispatch(counterActions.decrement())
    }

    const increaseHandler = () => {
        const value = +increaseCounterRef.current.value
        dispatch(counterActions.increaseBy(value))
    }

    const decreaseHandler = () => {
        const value = +decreaseCounterRef.current.value
        dispatch(counterActions.decreaseBy(value))
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increaseHandler}>Increase By 5</button>
                <button>Decrease By 5</button>
                <div>
                    <button onClick={increaseHandler}>Increase By</button>
                    <input type="number" ref={increaseCounterRef} defaultValue="1" min="1"/>
                </div>
                <div>
                    <button onClick={decreaseHandler}>Decrease By</button>
                    <input type="number" ref={decreaseCounterRef} defaultValue="1" min="1"/>
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
