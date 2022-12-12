import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
//======================================================
const isMobile = window.innerWidth <= 768;

const Container = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  alignItems: 'center',
  width: isMobile ? '100%' : '33%',
});
const VideoPlayer = styled('video')({
  gridRowStart: 1,
  gridColumnStart: 1,
  width: '100%',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
});
const Card = styled('div')({
  display: 'flex',
  height: '300px',
  width: '200px',
  backdropFilter: 'blur(16px) saturate(150%)',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 40px',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  gridRowStart: 1,
  gridColumnStart: 1,
  margin: 'auto',
  color: 'gainsboro',
});
const City = styled('h4')({
  textTransform: 'uppercase',
  letterSpacing: '1px',
});
const Weather = styled('p')({
  textTransform: 'uppercase',
  fontSize: '13px',
});
const Temperature = styled('div')({
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '18px 0px',
});
const MinMaxTemp = styled('div')({
  display: 'flex',
  fontSize: '12px',
  alignItems: 'center',
  justifyContent: 'center',
});
//======================================================
const WeatherCard = ({ cityData }: {cityData: any}) => {

  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
  }
  }, []);
  const isMobile = width <= 768;

  const { name, weather, minTemp, maxTemp, temp} = cityData;

  const video = (weatherType: string) => {
    if(weatherType === 'Rain') {
      return '/videos/Rain.mp4';
    };
    if(weatherType === 'Cloudy') {
      return '/videos/Overcast.mp4';
    };
    if(weatherType === 'Thunderstorm') {
      return '/videos/Thunderstorm.mp4';
    };
    if(weatherType === 'Clear') {
      return '/videos/Clear.mp4';
    }
  };

return (
  <Container>
    <VideoPlayer autoPlay loop muted>
      <source src={video(weather)} type='video/mp4'/>
    </VideoPlayer>
    <Card>
      <City>{name}</City>
      <Weather>{weather}</Weather>
      <Temperature>
        <p>{temp}</p>
      </Temperature>
      <MinMaxTemp>
        <p>
          <span>min </span>
          <span>{minTemp}</span>
        </p>
        <p style={{margin: "0 15px"}}>|</p>
        <p>
          <span>max </span>
          <span>{maxTemp}</span>
        </p>
      </MinMaxTemp>
    </Card>
  </Container>
)}
export default WeatherCard;