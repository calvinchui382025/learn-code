import { cloneDeep } from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncAction } from 'async-selector-kit';
import { requestCurrentWeather } from './weatherAPI';
//======================================================
export type WeatherType = {
  name: string,
  condition: string,
  minTemp: string,
  maxTemp: string,
  temp: string,
  conditionCode: string,
}
//======================================================
export interface WeatherState {
  searchInputValue: string,
  allLocationsData: WeatherType[],
}
//======================================================
const initialState: WeatherState = {
  searchInputValue: '',
  allLocationsData: [],
}
//======================================================
export const WeatherReducer = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload;
    },
    setAllLocationsData: (state, action:PayloadAction<WeatherType[]>) => {
      state.allLocationsData = action.payload;
    }
  },
});
//======================================================
export const [
  fetchLocationWeather, 
  fetchLocationWeatherLoading, 
  fetchLocationWeatherError,
] = createAsyncAction({
  async: (store, status) => async () => {
    const state:any = store.getState();
    const { actions: WeatherActions } = WeatherReducer;
    const { weather } = state;
    const currentLocationsData = weather.allLocationsData;
    const newLocationsData = cloneDeep(currentLocationsData);
    
    const response = await requestCurrentWeather();
    newLocationsData.unshift(response);
    console.log({ state, response, newLocationsData });

    store.dispatch(WeatherActions.setSearchInputValue(''));
    store.dispatch(WeatherActions.setAllLocationsData(newLocationsData));
  },
})
//====================================================== actions
export const { setSearchInputValue } = WeatherReducer.actions;
//======================================================
export default WeatherReducer.reducer;