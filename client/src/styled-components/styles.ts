import { Divider } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
//======================================================
export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // padding: '8px',
  width: '100%',
  height: '100vh',
  // backgroundColor: 'gainsboro',
  overflowY: 'auto',
  overflowX: 'hidden',
});
//======================================================
export const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '100px',
  padding: '0px 0px 0px 110px',
  backgroundColor: 'gainsboro',
  position: 'fixed',
  width: '100%',
  zIndex: 999
});
//======================================================
export const StyledLink = styled(Link)({
  fontSize: 'x-large',
  color: 'gainsboro',
  textDecoration: 'none',
})
//======================================================
export const WhiteDivider = styled(Divider)({
  color: 'gainsboro',
  borderColor: 'gainsboro',
  margin: '14px 0px',
})
//======================================================
export const StyledBurgerMenu = styled(BurgerMenu)({
  // backgroundColor: 'pink',
  '.bm-menu': {
    // overflow: 'hidden !important',
    // background: 'grey',
    '.bm-item-list': {
      height: '',
    }
  },
  // '.bm-burger-button': {
  //   zIndex: 10000,
  // }
})
//======================================================
export const StyledBody = styled('div')({
  display: 'flex',
  margin: '100px 12px 0px 12px',
  height: '100%',
})