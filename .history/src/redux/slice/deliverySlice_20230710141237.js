import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DeliveryService from '../../services/DeliveryService';
const deliverySlice = createSlice({
    name: 'delivery',
    initialState: {
        status: 'idle',
        deliverise: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDeliveries.pending, (state, action) => {
                state.status = 'padding';
            })
            .addCase(getDeliveries.fulfilled, (state, action) => {
                state.status = 'idle';
                state.deliverise = action.payload;
            });
    },
});
export default deliverySlice;
export const getDeliveries = createAsyncThunk('delivery/getDeliveries', async () => {
    const response = await DeliveryService.getDelivery();
    return response.data;
});
