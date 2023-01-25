import { Accordion, AccordionDetails, styled } from '@mui/material';
import { LightenDarkenColor } from 'lighten-darken-color'; 
//====================================================== static css
const standardKeyWidth = 38
//====================================================== variable colors

//======================================================
export const KeyboardBackground = styled('body')({
  display: 'flex',
  flexDirection: 'column',
  margin: '100px 0px 0px 0px',
  height: '100%',
  alignItems: 'center',
});
export const AccordionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'space-evenly',
  // minHeight: '200px',
  // width: '80%',
  backdropFilter: 'blur(6px) saturate(70%)',
  borderRadius: '12px',
  overflow: 'hidden'
});
export const FlexAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  flexDirection: 'column',
})
export const ConfigContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
})
export const ConfigColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // height: '100%',
  // justifyContent: 'center',
  alignItems: 'center',
  margin: '4px 8px',
})

export const KeyboardContainer = styled('div')({
  // height: '50%',
  minHeight: '400px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export interface KeyboardProps {
  caseTopColor: string,
  caseColor: string,
  caseBottomColor: string,
  plateColor: string,
}

export const Keyboard = styled('div')<KeyboardProps>(({caseTopColor, caseColor, caseBottomColor, plateColor}) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0',
  borderRadius: '4px',
  border: `13px solid ${caseColor}`,
  borderTopColor: caseTopColor,
  borderBottomColor: caseBottomColor,
  outline: '3px solid rgba(black, 0.2)',
  outlineOffset: '-1px',
  boxShadow: 
    'inset 0 1rem 1rem rgba(0,0,0, 0.5), 0 2rem 3rem -0.5rem rgba(0,0,0,0.55)',
  backgroundColor: plateColor,
  padding: '0.25rem',
}));

export const Row = styled('div')({
  display: 'flex',
  paddingTop: '1px',
})

export interface BaseKeyCapProps {
  keyCapTextColor: string;
  mainKeysColor: string;
}

export const BaseKeyCap = styled('div')<BaseKeyCapProps>((props:any) => ({
  borderRadius: '3px',
  boxSizing: 'border-box',
  color: props?.keyCapTextColor,
  display: 'flex',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '10px',
  fontWeight: '400',
  lineHeight:  '1.125',
  textAlign: 'center',  
  verticalAlign: 'middle',
  height: standardKeyWidth,
  
  border: '4px solid transparent',
  borderTop: '2px solid transparent',
  borderBottom: '6px solid transparent',

  backgroundColor: props.mainKeysColor ? LightenDarkenColor(props.mainKeysColor, 20) : 'black',
  borderColor: props.mainKeysColor ? LightenDarkenColor(props.mainKeysColor, 0) : 'black',
  boxShadow: '0 -0.125em 0 -0.063em $dark, 0 0.125em 0 -0.063em rgba(0,0,0,0.5)',

  '&.pressed': {
    transform: 'scale(0.96,0.96) translate(0, 2px)',
  }
}));
//======================================================
export const KBD100 = styled(BaseKeyCap)({
  width: standardKeyWidth,
})
export const KBD125 = styled(BaseKeyCap)({
  width: standardKeyWidth * 1.25,
})
export const KBD150 = styled(BaseKeyCap)({
  width: standardKeyWidth * 1.5,
})
export const KBD175 = styled(BaseKeyCap)({
  width: standardKeyWidth * 1.75,
})
export const KBD200 = styled(BaseKeyCap)({
  width: standardKeyWidth * 2.00,
})
export const KBD215 = styled(BaseKeyCap)({
  width: standardKeyWidth * 2.15,
})
export const KBD225 = styled(BaseKeyCap)({
  width: standardKeyWidth * 2.25,
})
export const KBD250 = styled(BaseKeyCap)({
  width: standardKeyWidth * 2.50,
})
export const KBD275 = styled(BaseKeyCap)({
  width: standardKeyWidth * 2.75,
})
export const KBD625 = styled(BaseKeyCap)({
  width: standardKeyWidth * 6.25,
})
export const KBD650 = styled(BaseKeyCap)({
  width: standardKeyWidth * 6.50,
})
//======================================================
export interface SpacerProps {
  caseBottomColor: string,
}

export const Spacer05 = styled('div')<SpacerProps>(({ caseBottomColor }) => ({
  width: standardKeyWidth / 2,
  height: standardKeyWidth,
  backgroundColor: caseBottomColor,
  transform: 'translateY(4px)',
}));
//======================================================
export const WhiteKeyCaps = styled('div')({
  backgroundColor: '#e9e8e6',
  borderColor: '#dedad6',
  'border-top-color': '#ece8e4',
  'border-bottom-color': '#c9c4c4',
  boxShadow: '0 -0.125em 0 -0.063em $dark, 0 0.125em 0 -0.063em rgba(0,0,0,0.5)',
})
//======================================================
export const FullWidthAccordion = styled(Accordion)({
  width: '100%',
  margin: '0px !important',
})