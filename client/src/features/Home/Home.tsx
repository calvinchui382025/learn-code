import { Typography } from '@mui/material';
import React from 'react';
import { Header, Root, StyledBody } from '../../styled-components/styles';
//======================================================

export default () => {
  return (
    <Root>
      <Header>
        <Typography variant='h3'>Home Page</Typography>
      </Header>
      <StyledBody>
        <Typography variant='h5'>Calvin's Playground</Typography>
      </StyledBody>
    </Root>
  )
}