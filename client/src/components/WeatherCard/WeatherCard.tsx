import React, { useEffect, useState } from 'react';
import { conditionMeta } from '../../features/Weather/utils';
import { styled } from '@mui/system';
//======================================================
const isMobile = window.innerWidth <= 768;

const Container = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  alignItems: 'center',
  width: isMobile ? '100%' : '30%',
  margin: '12px',
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
  backdropFilter: 'blur(6px) saturate(150%)',
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
const Location = styled('h4')({
  textTransform: 'uppercase',
  letterSpacing: '1px',
  whiteSpace: 'nowrap',
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

const FrontCard = styled('div')({

});

const RearCard = styled('div')({

})
//======================================================
const WeatherCard = ({ locationData }: {locationData: any}) => {

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
  // const isMobile = width <= 768;

  const { name, condition, conditionCode, minTemp, maxTemp, temp} = locationData;

  const { video, textColor } = conditionMeta[conditionCode];

return (
  <Container>
    <VideoPlayer autoPlay loop muted>
      <source src={video} type='video/mp4'/>
    </VideoPlayer>
    <Card style={{color: textColor}}> {/* inline styles are bad practice */}
      <Location>{name}</Location>
      <Weather>{condition}</Weather>
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