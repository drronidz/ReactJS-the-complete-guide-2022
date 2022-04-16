import {createSlice} from '@reduxjs/toolkit';

const counterInitialState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter = state.counter + action.payload;
        },
        decreaseBy(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

export default counterSlice;