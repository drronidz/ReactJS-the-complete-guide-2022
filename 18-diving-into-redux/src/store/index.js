import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./CounterSlice";
import authSlice from "./authSlice";



// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'
// export const INCREASE = 'INCREASE'
// export const TOGGLE = 'TOGGLE'

// const counterReducer = (state = initialState, action) => {
//
//     if (action.type === INCREMENT) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === DECREMENT) {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === INCREASE) {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === TOGGLE) {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//
//     return state
// }
//
// const store = createStore(counterReducer)

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        // auth: authSlice.reducer
    },
});

export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions

export default store;