import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { gridFormer } from './utils';
import { TextField, Typography } from '@mui/material';
import { cloneDeep } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setSearchInputValue,
  searchInputValue,
} from './weatherSlice'
import { requestCurrentWeather } from './weatherAPI';
//======================================================

//======================================================
const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px',
  width: '100%',
  height: '100%',
  backgroundColor: 'gainsboro',
  overflowY: 'auto',
  overflowX: 'hidden',
});
const Header = styled('div')({
  display: 'flex',
  // justifyContent: 'space-between',
  alignItems: 'center',
  margin: '12px',
});
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
  const searchValue = useAppSelector(searchInputValue)

  const [grid, setGrid] = useState<any[]>([]);
  // const [searchInput, setSearchInput] = useState<string>('');
  const [locationsData, setLocationsData] = useState<any>([]);
  
  useEffect(() => {
    const newGrid = gridFormer(locationsData);
    setGrid(newGrid);
  }, [locationsData]);

  const handleInputChange = (input: { target: { value: string; }; }) => {
    // setSearchInput(input.target.value);
    dispatch(setSearchInputValue(input.target.value))
  }

  const handleEnter = (input: any) => {
    if(input.keyCode === 13 && searchValue.length > 0) {
      requestCurrentWeather(searchValue).then((res) => {
        if (res.name) {
          const newLocationsData = cloneDeep(locationsData);
          newLocationsData.push(res);
          setLocationsData(newLocationsData);
          dispatch(setSearchInputValue(''))
        }
      })
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
          grid.map((row) => {
            return <Row>
              {
                row.map((location:any) => {
                  return (
                    <WeatherCard locationData={location} />
                  )
                })
              }
            </Row>
          })
        }
      </CardContainer>
    </Root>
  )
}

export default Weather