import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async () => {
        console.log('hello world')
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null
    },
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        }
    }
})

export const weatherReducer = weatherSlice.reducer