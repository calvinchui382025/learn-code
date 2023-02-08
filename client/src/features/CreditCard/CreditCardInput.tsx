import { Card, styled, Typography } from '@mui/material'
import { Header, Root } from '../../styled-components/styles'
//======================================================

const CreditCardInputBody = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '120px 12px 0px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})
//======================================================
export const CreditCardInput = () => {



  return (
    <Root>
      <Header>
        <Typography variant='h3'>Credit Card Input</Typography>
      </Header>
      <CreditCardInputBody>
        
      </CreditCardInputBody>
    </Root>
  )
}

// Card Number
// Card Holder
// Expiration Date (month, year)
// CVV