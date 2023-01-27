import axios from 'axios';
import React, { useEffect } from 'react';
import { Header, Root, StyledBody } from '../../styled-components/styles';

const AI = () => {

  const testFetch = () => {
    const result = axios.get('/test')
      .then((response) => {
        console.log('response', response)
        return response.data;
      });
    
    console.log('result', result);
  }

  useEffect(() => {
    testFetch();
  }, [])

  //======================================================
  return (
    <Root>
      <Header>
        <h1>Hello from AI!</h1>
      </Header>
      <StyledBody>
        
      </StyledBody>
    </Root>
  );
}

export default AI;
