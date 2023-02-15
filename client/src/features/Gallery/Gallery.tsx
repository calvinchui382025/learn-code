import { styled, Typography } from '@mui/material'
import { useState } from 'react'
import { Header, Root } from '../../styled-components/styles'
//======================================================
const imageArray = [
  'bluegt3rs.jpg',
  'bmw.jpg',
  'brz.jpg',
  'c8.jpg',
  'ferrari.jpg',
  'frs.jpg',
  'supra.jpg',
  'typer.jpg',
  'varis.jpg',
  'whitegt3rs.jpg',
  'wrx.jpg',
  'gs.jpg',
]

// const imageArray = [
//   'crap.jpg',
//   'crap.jpg',
//   'crap.jpg',
//   'crap.jpg',
//   'crap.jpg',
//   'crap.jpg',
//   'crap.jpg',
//   'crap.jpg',
// ]
//======================================================
const GalleryRoot = styled(Root)({
  backgroundColor: 'black',
})
const GalleryHeader = styled(Header)({
  backgroundColor: '#be9b7b',
})

const ImageTrack = styled('div')<any>(({percentage}) => {
  return ({
    backgroundColor: 'black',
    display: 'flex',
    gap: '4vmin',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translate(${percentage}%, -50%)`,
    // animation: `translate(${percentage}%, -50%)`,
    // animation: `translate(${percentage}%, -50%) 1.2s ease-out)`,
    // animation: `$slide 1.2s ease-out`,
  })}
)
const Image = styled('img')<any>(({percentage}) => {
  const imagePercentage = percentage + 100;
  
  return ({
    width: '40vmin',
    height: '56vmin',
    objectFit: 'cover',
    objectPosition: `${imagePercentage}% 50%`,
  })}
)

export const Gallery = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  window.onmousedown = (e) => {
    setMouseDownAt(e.clientX)
  }
  window.onmousemove = (e) => {
    if (mouseDownAt === 0) return;
    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const newPercentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = prevPercentage + newPercentage;
    nextPercentage = Math.min(nextPercentage, 0)
    nextPercentage = Math.max(nextPercentage, -100);
    
    setPercentage(nextPercentage);
  }
  window.onmouseup = (e) => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  }
  //==========================================
  return (
    <GalleryRoot>
      <GalleryHeader>
        <Typography variant='h3'>Gallery</Typography>
      </GalleryHeader>
      <ImageTrack 
        percentage={percentage}
      >
        {
          imageArray.map((image, index) => {
            return (
              <Image 
                percentage={percentage}
                src={`./images/GalleryImages/${image}`}
                key={index}
                loading='lazy'
                draggable={false}
              />
            )
          })
        }

      </ImageTrack>
    </GalleryRoot>
  )
}