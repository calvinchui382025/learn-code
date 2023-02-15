// react component called Test

import { styled, Typography } from '@mui/material';
import { Header, Root } from '../../styled-components/styles';
import { Select, MenuItem } from '@mui/material';
import React from 'react';

// array of the next 20 years;
const years = Array.from({ length: 20 }, (v, k) => k + 2021);

const TestContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const TestFont = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));



const Test = () => {
  const [selectedYear, setSelectedYear] = React.useState(2021);

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value as number);
  };

  return (
    <Root>
      <Header>
        Test
      </Header>
      <TestContentContainer>

        <TestFont>
          Hello world!
        </TestFont>
        <Select
          value={selectedYear}
          onChange={handleYearChange}
          label="Year"
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </TestContentContainer>
    </Root>
  );
};
export default Test;