import { Typography } from '@mui/material';
import React from 'react';
import { Header, Root } from '../../styled-components/styles';
//======================================================

export default () => {
  return (
    <Root>
      <Header>
        <Typography variant='h3'>Home Page</Typography>
      </Header>
    </Root>
  )
}