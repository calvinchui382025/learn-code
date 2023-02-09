import { Button, Card, FormControl, InputLabel, MenuItem, Select, styled, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { Header, Root } from '../../styled-components/styles'

export const niceBoxShadow = '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)';
const monthNumbers = Array.from(Array(12).keys()).map((i) => i + 1)
const yearNumbers = Array.from(Array(20).keys()).map((i) => i + 2023)
//======================================================

const CreditCardInputBody = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '120px 12px 0px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100%',
})

const InputCard = styled(Card)({
  width: '800px',
  height: '600px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px',
  boxShadow: niceBoxShadow,
  backgroundColor: '#ffffff',
  borderRadius: '12px',
})

const creditCardWidth = 500;
// const creditCardHeight= 
const CreditCard = styled(Card)({
  width: creditCardWidth,
  height: creditCardWidth * 0.628,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: niceBoxShadow,
  borderRadius: '12px',
});

const CardImage = styled('img')({

})

const CardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  top: '250px'
})
const InputsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '12px',

})
const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '90%',
  padding: '12px',
})
const ExpirationRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '90%',
  padding: '12px',
})
const CardNumberTextWrapper = styled('div')({
  position: 'absolute',
  color: 'white',
  width: '100%',
  height: '100%',
  top: '180px',
  left: '30px',
})
const CardNumberText = styled(Typography)({
  // position: 'absolute',
  color: 'white',
})
const CardHolderTextWrapper = styled('div')({
  position: 'absolute',
  color: 'white',
  width: '100%',
  height: '100%',
  top: '220px',
  left: '30px',
})
const CardHolderText = styled(Typography)({
  color: 'white',
})
const CardExpirationTextWrapper = styled('div')({
  position: 'absolute',
  color: 'white',
  width: '100%',
  height: '100%',
  top: '260px',
  left: '30px',
})
const CardExpirationText = styled(Typography)({
  color: 'white',
})
const CardCvvTextWrapper = styled('div')({
  position: 'absolute',
  color: 'black',
  width: '100%',
  height: '100%',
  top: '118px',
  left: '265px',
})
const CardCvvText = styled(Typography)({
  color: 'black',
})

//======================================================
export const CreditCardInput = () => {
  const [cardNumber, setCardNumber] = useState<string>('')
  const [cardHolder, setCardHolder] = useState<string>('')
  const [expirationMonth, setExpirationMonth] = useState<string>('')
  const [expirationYear, setExpirationYear] = useState<string>('')
  const [cvv, setCvv] = useState<string>('')

  const [flipped, setFlipped] = useState<boolean>(false)

  const handleSubmit = () => {
    console.log({cardNumber, cardHolder, expirationMonth, expirationYear, cvv})
    setFlipped(false);
  }

  const monthTextFormatter = () => {
    if (String(expirationMonth).length === 1) {
      return `0${expirationMonth}`
    }
    return expirationMonth
  }

  const lastTwoDigitsOfYear = () => {
    return String(expirationYear).slice(2)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const onlyNumbers = value.replace(/[^0-9]/g, '')
    const formatted = onlyNumbers.replace(/(.{4})/g, '$1 ').trim()
    if (flipped) setFlipped(false);
    setCardNumber(formatted)
  }

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const onlyLetters = value.replace(/[^a-zA-Z ]/g, '')
    const formatted = onlyLetters.toUpperCase()
    if (flipped) setFlipped(false);
    setCardHolder(formatted)
  }

  const handleExpirationMonthChange = (e) => {
    const { target } = e;
    const { value } = target;
    const onlyNumbers = String(value).replace(/[^0-9]/g, '')
    const formatted = onlyNumbers
    if (flipped) setFlipped(false);
    setExpirationMonth(formatted)
  }

  const handleExpirationYearChange = (e) => {
    const { target } = e;
    const { value } = target;
    const onlyNumbers = String(value).replace(/[^0-9]/g, '')
    const formatted = onlyNumbers
    if (flipped) setFlipped(false);
    setExpirationYear(formatted)
  }



  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const onlyNumbers = value.replace(/[^0-9]/g, '')
    const formatted = onlyNumbers
    if (!flipped) setFlipped(true);
    setCvv(formatted);
  }

  //================================================================
  return (
    <Root style={{backgroundColor: '#F0F0F0'}}>
      <Header>
        <Typography variant='h3'>Credit Card Input</Typography>
      </Header>

      <CreditCardInputBody>

          <CardsContainer>
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
              <CreditCard
                  onClick={() => setFlipped(!flipped)}
                >
                <CardImage src='./images/card-front.png' width={'100%'} />

                <CardNumberTextWrapper>
                  <CardNumberText variant='h5'>{cardNumber}</CardNumberText>
                </CardNumberTextWrapper>
                <CardHolderTextWrapper>
                  <CardHolderText variant='h5'>{cardHolder}</CardHolderText>
                </CardHolderTextWrapper>
                <CardExpirationTextWrapper>
                  <CardExpirationText variant='h5'>{`${monthTextFormatter()}${expirationMonth && expirationYear && '/'}${lastTwoDigitsOfYear()}`}</CardExpirationText>
                </CardExpirationTextWrapper>

              </CreditCard>
              <CreditCard
                  onClick={() => setFlipped(!flipped)}
                >
                <CardImage src='./images/card-rear.png' width={'100%'} />

                <CardCvvTextWrapper>
                  <CardCvvText variant='h6'>{cvv}</CardCvvText>
                </CardCvvTextWrapper>

              </CreditCard>
            </ReactCardFlip>
          </CardsContainer>

        <InputCard>
          <div style={{height: '100%'}} />
          <InputsContainer>
            <Row>
              <TextField
                required
                id="outlined-required"
                label="Card Number"
                fullWidth
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </Row>
            <Row>
              <TextField
                required
                id="outlined-required"
                label="Card Holder"
                fullWidth
                value={cardHolder}
                onChange={handleCardNameChange}
              />
            </Row>

            <ExpirationRow>
              <FormControl 
                fullWidth
              >
                <InputLabel id="month">Month</InputLabel>
                <Select
                  labelId="month"
                  value={expirationMonth}
                  onChange={(e) => handleExpirationMonthChange(e)}
                  fullWidth
                  label="Expiration Month"
                >
                  {monthNumbers.map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl 
                fullWidth
              >
                <InputLabel id="year">Year</InputLabel>
                <Select
                  labelId="year"
                  value={expirationYear}
                  onChange={(e) => handleExpirationYearChange(e)}
                  fullWidth
                  label="Expiration Year"
                >
                  {yearNumbers.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                required
                id="outlined-required"
                label="CVV"
                fullWidth
                value={cvv}
                onChange={handleCVVChange}
              />
            </ExpirationRow>
            <Row >
              <Button 
                variant="contained" color="primary" fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Row>
          </InputsContainer>

        </InputCard>
      </CreditCardInputBody>
    </Root>
  )
}