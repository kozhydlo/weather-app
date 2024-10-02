import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (CityName) => {
        try {
            // Getting coordinates by city name
            let coordinates = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${CityName}&count=1&language=en&format=json`)
            let {latitude, longitude} = coordinates.data.results[0]
            // Getting weather data
            let response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover&timezone=auto&forecast_days=1`)
            let {temperature_2m, rain, cloud_cover} = response.data.hourly;
            let temperature = []
            const getIconType = (cloud_cover, rain) => {
                let IconTypes = '';
                IconTypes =
                    (cloud_cover > 50 ) ? 'heavy-cloud' :
                    (cloud_cover > 30) ? 'moderate-cloud' : 'light-cloud';
                IconTypes =
                    (rain > 7.6) ? 'heavy-rain' :
                    (rain > 2.5) ? 'moderate-rain' :
                    (rain > 1) ? 'light-rain' : IconTypes;
                return IconTypes;
            }
            // Weather data - 6, 9, 12, 15, 18
            /*  rain:
                    0 - 2.5 -> light rain
                    2.5 - 7.6 -> moderate rain
                    >7.6 -> heavy rain
                 cloud:
                    0 - 30 -> light cloud
                    30 - 50 -> moderate cloud
                    >50 -> heavy cloud
             */
            for (let i = 6; i <= 18; i += 3) {
                temperature.push({
                    id: CityName + i,
                    time: `${i}:00`,
                    temp: temperature_2m[i],
                    IconType: getIconType(cloud_cover[i], rain[i])
                })
            }
            return temperature;
        } catch (e) {
            throw new Error('Check the city name')
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        isLoading: false,
        error: '',
    },
    extraReducers (builder) {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(getWeather.pending, (state, action) => {
            state.error = ''
            state.isLoading = true
        })
        builder.addCase(getWeather.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const weatherReducer = weatherSlice.reducer