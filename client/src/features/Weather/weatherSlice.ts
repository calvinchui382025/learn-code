import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { requestCurrentWeather } from './weatherAPI';
//======================================================
export interface WeatherState {
  searchInputValue: string,
}
//======================================================
const initialState: WeatherState = {
  searchInputValue: '',
}
//======================================================
export const fetchLocationWeatherAsync = createAsyncThunk(
  'weather/fetchLocationWeather',
  async (location: string) => {
    const response = await requestCurrentWeather(location);
    console.log({location, response})
    return response.data;
  }
)
//======================================================
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload;
    },
  },
});
//====================================================== actions
export const { setSearchInputValue } = weatherSlice.actions;
//====================================================== selectors
export const searchInputValue = (state: RootState) => state.weather.searchInputValue;
//======================================================
export default weatherSlice.reducer;