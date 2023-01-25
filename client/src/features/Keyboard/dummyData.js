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
import {
  ArrowUpward,
  ArrowDownward,
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material';
//======================================================
export const keysetExample = {
  name: 'Mode65',
  alphaKeyCapColor: '#87CEEB',
  alphaFontColor: '#FFFFFF',
  modifierKeyCapColor: '',
  modifierFontColor: '',
  data: [
    [
      {
        name: 'Esc',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '1',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '2',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '3',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '4',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '5',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '6',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '7',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '8',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '9',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '0',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '-', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: '=', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: 'Backspace',
        width: 'KBD225',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD225 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD225>
        ),
      },  
      {
        name: '`',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },
    ],
    [
      {
        name: 'Tab',
        width: 'KBD150',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD150 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD150>
        ),
      },  
      {
        name: 'Q',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'W',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'E',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'R',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'T',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'Y',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'U',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'I',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'O',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'P',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: '[', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: ']', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: "|", 
        width: 'KBD175',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD175 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD175>
        ),
      }, 
      {
        name: 'Del',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
    ],
    [
      {
        name: 'Caps Lock',
        width: 'KBD175',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD175 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD175>
        ),
      },
      {
        name: 'A',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'S',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'D',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'F',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'G',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'H',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'J',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'K',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'L',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: ';', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: "'", 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: 'Enter',
        width: 'KBD250',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD250 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD250>
        ),
      },  
      {
        name: 'PgUp',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
    ],
    [
      {
        name: 'Shift',
        width: 'KBD225',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD225 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD225>
        ),
      },  
      {
        name: 'Z',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'X',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'C',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'V',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'B',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'N',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: 'M',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      },  
      {
        name: ',', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: '.', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: '/', 
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
      {
        name: 'Shift',
        width: 'KBD200',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD200 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD200>
        ),
      },  
      {
        name: 'UpArrow',
        width: 'KBD100',
        icon: <ArrowUpward fontSize='small'/>,
        keyComponent: (icon, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{icon}</KBD100>
        ),
      },  
      {
        name: 'PgDn',
        width: 'KBD100',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD100>
        ),
      }, 
    ],
    [
      {
        name: 'Control',
        width: 'KBD125',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD125 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD125>
        ),
      },  
      {
        name: 'System',
        width: 'KBD125',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD125 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD125>
        ),
      },  
      {
        name: 'Alt',
        width: 'KBD125',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD125 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD125>
        ),
      },  
      {
        name: 'SpaceBar',
        width: 'KBD650',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD650 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD650>
        ),
      },  
      {
        name: 'Alt',
        width: 'KBD125',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD125 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD125>
        ),
      },  
      {
        name: 'Menu',
        width: 'KBD125',
        keyComponent: (name, keyColor, fontColor, pressed ) => (
          <KBD125 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{name}</KBD125>
        ),
      },  
      {
        name: 'SPACER05',
        width: 'Spacer05',
        keyComponent: (name, keyColor, fontColor, pressed, caseBottomColor ) => (
          <Spacer05 caseBottomColor={caseBottomColor}/>
        ),
      },  
      {
        name: 'LeftArrow',
        width: 'KBD100',
        icon: <ArrowBack fontSize='small' />,
        keyComponent: (icon, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{icon}</KBD100>
        ),
      },  
      {
        name: 'DownArrow',
        width: 'KBD100',
        icon: <ArrowDownward fontSize='small'/>,
        keyComponent: (icon, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{icon}</KBD100>
        ),
      },  
      {
        name: 'RightArrow',
        width: 'KBD100',
        icon: <ArrowForward fontSize='small'/>,
        keyComponent: (icon, keyColor, fontColor, pressed ) => (
          <KBD100 mainkeyscolor={keyColor} keycaptextcolor={fontColor} className={pressed ? 'pressed' : undefined} >{icon}</KBD100>
        ),
      }, 
    ],
  ],
}