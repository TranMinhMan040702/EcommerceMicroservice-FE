import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'account',
    initialState: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        avatar: '',
        cartId: '',
    },
    reducers: {
        createAccount: (state, action) => {
            console.log(state);
        },
    },
});

export function createAccount() {
    return function createAccountThunk(dispatch, getState) {
        console.log('[Login]', getState);
    };
}
