import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    data: number;
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { data: 42 } as CounterState,
    reducers: {
        increment(state, action) {
            state.data += action.payload;
        },
        decrement(state, action) {
            state.data -= action.payload;
        }
    }

})

export const {increment, decrement } = counterSlice.actions

const initialState: CounterState = {
    data: 42
}

export default function counterReducer(state = initialState, action: {type: string, payload: number}): CounterState {
    switch (action.type) {
        case 'increment':
            return { ...state, data: state.data + action.payload };
        case 'decrement':
            return { ...state, data: state.data - action.payload };
        default:
            return state;
    }
}