import { 
  KBD100, 
  KBD200, 
  KBD225, 
  KBD275, 
  KBD175, 
  KBD625, 
  KBD125, 
  KBD150, 
  KBD250, 
  KBD215, 
  KBD650,
  Spacer05,
} from './styles';

export const alphaKeys = {
  'a': true,
  'b': true,
  'c': true,
  'd': true,
  'e': true,
  'f': true,
  'g': true,
  'h': true,
  'i': true,
  'j': true,
  'k': true,
  'l': true,
  'm': true,
  'n': true,
  'o': true,
  'p': true,
  'q': true,
  'r': true,
  's': true,
  't': true,
  'u': true,
  'v': true,
  'w': true,
  'x': true,
  'y': true,
  'z': true,
}
//======================================================
export const numericKeys = {
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '5': true,
  '6': true,
  '7': true,
  '8': true,
  '9': true,
  '0': true,
}
//======================================================
export const backgroundImages = [
  './images/brown-wood-table.jpeg',
  './images/fabric.jpg',
  './images/wood1.jpg',
  './images/wood2.jpg',
  './images/wood3.jpg',
  './images/wood4.jpg',
  './images/wood5.jpg',
  './images/wood6.jpg',
]
//======================================================
export const keyboardComponentTranslater = (
  name: string | Element, 
  display: any,
  keyColor: string, 
  fontColor: string, 
  pressed: boolean,
  caseBottomColor?: string,
  ) => {
  switch(name) {
    case 'KBD100':
      return <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD100> 
    case 'KBD200':
      return <KBD200 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD200> 
    case 'KBD225':
      return <KBD225 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD225> 
    case 'KBD275':
      return <KBD275 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD275> 
    case 'KBD175':
      return <KBD175 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD175> 
    case 'KBD625':
      return <KBD625 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD625> 
    case 'KBD125':
      return <KBD125 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD125> 
    case 'KBD150':
      return <KBD150 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD150> 
    case 'KBD250':
      return <KBD250 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD250> 
    case 'KBD215':
      return <KBD215 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD215> 
    case 'KBD650':
      return <KBD650 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined}>{display}</KBD650>
    case 'Spacer05':
      return <Spacer05 caseBottomColor={caseBottomColor || 'white'}>{name}</Spacer05>
    default: 
      return null
  }
  
}