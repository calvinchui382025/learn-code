import React from 'react';
import { styled } from '@mui/system';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
// import { TextField } from '@mui/material';
//======================================================
const Root = styled('div')({
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  // backgroundColor: 'dimgray',
  backgroundColor: 'black',
  overflow: 'auto'
})

const CardContainer = styled('div')({
  display: 'flex',

})
//======================================================
const dummyData = [
  { 
    name: 'Houston',
    weather: 'Thunderstorm',
    minTemp: '70°',
    maxTemp: '80°',
    temp: '75°',
  },
  { 
    name: 'Austin',
    weather: 'Clear',
    minTemp: '60°',
    maxTemp: '70°',
    temp: '65°',
  },
  { 
    name: 'Dallas',
    weather: 'Rain',
    minTemp: '70°',
    maxTemp: '80°',
    temp: '75°',
  },
  // { 
  //   name: 'San Antonio',
  //   weather: 'Cloudy',
  //   minTemp: '70°',
  //   maxTemp: '80°',
  //   temp: '75°',
  // },
]
//======================================================
const Weather = () => {

  return (
    <Root>
      {/* <video autoPlay loop muted>
        <source src='/videos/rain.mp4' type='video/mp4'/>
      </video> */}
      {/* <TextField
        label="Location"
        id="outlined-size-small"
        defaultValue="Small"
        size="small"
      /> */}
      <CardContainer >
        {dummyData.map((city:any) => {
          return <WeatherCard cityData={city}/>
        })}
      </CardContainer>
    </Root>
  )
}

export default Weather