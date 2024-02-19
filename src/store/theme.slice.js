import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isNormal: true,
    indicators: {},
};

export const changeTheme = createAsyncThunk('theme/themeChanger', async () => {
    try {
        const { data } = await axios.get('http://dushnila.gooddelo.com/data');
        return data;
    } catch (e) {
        if (e) {
            throw new Error(e.response?.data.message);
        }
    }
});

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(changeTheme.fulfilled, (state, action) => {
            if (!action.payload) {
                return;
            }
            if (action.payload.co2 > 800 || action.payload.temp > 27) {
                state.isNormal = false;
            } else state.isNormal = true;
            state.indicators = action.payload;
        });
        builder.addCase(changeTheme.rejected, (state, action) => {
            state.Error = action.error.message;
        });
    },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
