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
  backgroundColor: 'gainsboro',
  overflowY: 'auto',
  overflowX: 'hidden',
});
//======================================================
export const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '24px 12px 12px 110px',
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
  }
})