import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    },
});
