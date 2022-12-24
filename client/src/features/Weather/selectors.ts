import { RootState } from '../../app/store';
import axios from 'axios';
import { createAsyncAction, createAsyncSelectorResults } from 'async-selector-kit';
import { requestCurrentWeather } from './weatherAPI';
import { debounce } from 'lodash';
import { store } from '../../app/store'
//======================================================
export const searchInputValueSelector = (state: RootState) => state.weather.searchInputValue;
export const allLocationsDataSelector = (state: RootState) => state.weather.allLocationsData;

// export const [
//   locationWeatherData, 
//   locationWeatherDataLoading, 
//   locationWeatherDataError,
//   forceLocationWeatherDataFetch,
// ] = createAsyncSelectorResults(
//   {
//     // id: 'locationWeatherData',
//     async: requestCurrentWeather,
//     defaultValue: {},
//     onResolve: res => console.log({ res }),
//     onReject: err => console.log({ err }),
//     throttle: (f:any) => debounce(f, 250),
//     // onCancel: () => {},
//     // shouldUseAsync: (input: string) => input !== '',
//   },
//   // [searchInputValue],
//   [],
// )