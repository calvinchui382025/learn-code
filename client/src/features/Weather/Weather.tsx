import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { gridFormer } from './utils';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setSearchInputValue,
  fetchLocationWeather,
} from './reducers';
import { 
  searchInputValueSelector,
  allLocationsDataSelector,
} from './selectors';
import { 
  TextField, 
  Typography 
} from '@mui/material';
import { Header, Root } from '../../styled-components/styles';
//======================================================

//======================================================

const Title = styled(Typography)({
  marginRight: '12px',
  // color: 'gainsboro',
});
const SearchInput = styled(TextField)({

});
const CardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});
//======================================================
const dummyData = [
  { 
    name: 'Houston',
    condition: 'Thunderstorm',
    minTemp: '70°',
    maxTemp: '80°',
    temp: '75°',
    conditionCode: '1000',
  },
  { 
    name: 'Austin',
    condition: 'Clear',
    minTemp: '60°',
    maxTemp: '70°',
    temp: '65°',
    conditionCode: '1000',
  },
  { 
    name: 'Dallas',
    condition: 'Rain',
    minTemp: '70°',
    maxTemp: '80°',
    temp: '75°',
    conditionCode: '1000',
  },
  { 
    name: 'San Antonio',
    condition: 'Cloudy',
    minTemp: '70°',
    maxTemp: '80°',
    temp: '75°',
    conditionCode: '1000',
  },
  { 
    name: 'New York City',
    condition: 'Snowy',
    minTemp: '15°',
    maxTemp: '25°',
    temp: '20°',
    conditionCode: '1000',
  },
]
//======================================================
const Weather = () => {

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(searchInputValueSelector)
  const allLocationsData = useAppSelector(allLocationsDataSelector);

  const [grid, setGrid] = useState<any[]>([]);
  
  useEffect(() => {
    const newGrid = gridFormer(allLocationsData);
    console.log({newGrid})
    setGrid(newGrid);
  }, [allLocationsData]);

  const handleInputChange = (input: { target: { value: string; }; }) => {
    console.clear();
    dispatch(setSearchInputValue(input.target.value))
  }

  const handleEnter = (input: any) => {
    if(input.keyCode === 13 && searchValue.length > 0) {
      fetchLocationWeather();
    }
  }

  return (
    <Root>
      <Header>
        <Title
          variant='h3'
        >
          WeatherTiles
        </Title>
        <SearchInput 
          variant='outlined'
          label='Location'
          size='small'
          color='info'
          focused
          value={searchValue}
          // onChange={(e) => {
          //   handleInputChange(e.target.value)
          // }}
          onChange={handleInputChange}
          onKeyDown={(e) => handleEnter(e)}
        />
        <div />
      </Header>
      <CardContainer >
        {
          grid.map((row, i) => {
            return (
            <Row 
              key={`${row}${i}`}
            >
              {
                row.map((location:any, i: number) => {
                  return (
                    <WeatherCard 
                      key={`${location}${i}`} 
                      locationData={location} 
                    />
                  )
                })
              }
            </Row>)
          })
        }
      </CardContainer>
    </Root>
  )
}

export default Weather