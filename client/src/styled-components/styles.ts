import { styled } from '@mui/system';
//======================================================
export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // padding: '8px',
  width: '100%',
  height: '100vh',
  backgroundColor: 'gainsboro',
  overflowY: 'auto',
  overflowX: 'hidden',
});

export const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '24px 12px 12px 110px',
});