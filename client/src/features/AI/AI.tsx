import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Header, Root, StyledBody } from '../../styled-components/styles';
import { Typography, TextField, Button } from '@mui/material';
import { cloneDeep } from 'lodash';
//======================================================
const apiKey = process.env.REACT_APP_OPENAI_KEY;

const AIBody = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '120px 12px 0px 12px',
  // justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

const InputContainer = styled('div')({
  display: 'flex',
})
//======================================================
const AI = () => {

  const [input, setInput] = useState('');
  const [dataWall, setDataWall] = useState<string[]>([]);

  // const testFetch = () => {
  //   const result = axios.get('/test')
  //     .then((response) => {
  //       console.log('response', response)
  //       return response.data;
  //     });
    
  //   console.log('result', result);
  // }

  
  const handleInputChange = (value) => {
    setInput(value);
  }

  const handleSubmit = () => {
    let newDataWall = cloneDeep(dataWall);
    newDataWall.push(input);

    axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: input,
      temperature: 0.5,
      max_tokens: 100
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })
    .then(response => {
      console.log(response.data);
      const text = response?.data?.choices[0]?.text
      console.log(text)
      newDataWall.push(text);
      setDataWall(newDataWall);
      setInput('');
    })
    .catch(error => {
      console.log(error);
      setInput('');
    });


  }

  //======================================================
  return (
    <Root>
      <Header>
        <h1>Hello from AI!</h1>
      </Header>
      <AIBody>
        <InputContainer>
          <form>
            <TextField
              label="Enter a Prompt"
              value={input}
              onChange={(event) => handleInputChange(event.target.value)}
              />
          </form>
          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </InputContainer>
        {
          dataWall.map((str) => {
            return (
              <Typography variant='h5'>{str}</Typography>
            )
          })
        }
      </AIBody>
    </Root>
  );
}

export default AI;
