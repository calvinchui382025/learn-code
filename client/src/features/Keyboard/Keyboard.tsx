import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Root, Header } from '../../styled-components/styles';
import isDarkColor from 'is-dark-color'
import { SketchPicker  } from 'react-color'
import { keysetExample } from './dummyData';
import { 
  Keyboard, 
  KeyboardContainer, 
  Row, 
  ConfigColumn,
  KeyboardBackground,
  ConfigContainer, 
} from './styles';
import { alphaKeys, numericKeys } from './utils';
//======================================================
export const KeyBored = () => {
  //====================================================== alphas
  const [alphaColorKeysConfigOpen, setAlphaColorKeysConfigOpen] = useState(false);
  const [alphaKeyColor, setAlphaKeysColor] = useState('#87CEEB')
  const handleAlphaKeyColorChange = (color) => {
    setAlphaKeysColor(color?.hex);
    setAlphaColorKeysConfigOpen(false);
  }
  const [alphaFontColorConfigOpen, setAlphaFontColorConfigOpen] = useState(false);
  const [alphaFontColor, setAlphaFontColor] = useState('#FFFFFF');
  const handleAlphaFontColorChange = (color) => {
    setAlphaFontColor(color?.hex || '#FFFFFF');
    setAlphaFontColorConfigOpen(false);
  }
  //====================================================== numerics
  const [numericKeyColorConfigOpen, setNumericKeyColorConfigOpen] = useState(false);
  const [numericKeyColor, setNumericKeyColor] = useState('#87CEEB');
  const handleNumericKeyColorChange = (color) => {
    setNumericKeyColor(color?.hex || '#FFFFFF');
    setNumericKeyColorConfigOpen(false);
  }
  const [numericFontColorConfigOpen, setNumericFontColorConfigOpen] = useState(false);
  const [numericFontColor, setNumericFontColor] = useState('#FFFFFF');
  const handleNumericFontColorChange = (color) => {
    setNumericFontColor(color?.hex || '#FFFFFF');
    setNumericFontColorConfigOpen(false);
  }
  //====================================================== modifiers
  const [modifierKeyColorConfigOpen, setModifierKeyColorConfigOpen] = useState(false);
  const [modifierKeyColor, setModifierKeyColor] = useState('#87CEEB');
  const handleModifierKeyColorChange = (color) => {
    setModifierKeyColor(color?.hex || '#FFFFFF');
    setModifierKeyColorConfigOpen(false);
  }
  const [modifierFontColorConfigOpen, setModifierFontColorConfigOpen] = useState(false);
  const [modifierFontColor, setModifierFontColor] = useState('#FFFFFF');
  const handleModifierFontColorChange = (color) => {
    setModifierFontColor(color?.hex || '#FFFFFF');
    setModifierFontColorConfigOpen(false);
  }
  //====================================================== 
  return (
    <Root>
      <Header>
        <Typography variant='h3'>KeyBORED</Typography>
      </Header>
      <KeyboardBackground 
        style={{ 
          // backgroundColor: 'SaddleBrown', 
          flexDirection: 'column',
          backgroundImage: 'url(./images/brown-wood-table.jpeg)',
        }}
      >
        <KeyboardContainer>
          <Keyboard>
            {keysetExample && keysetExample.data.length > 0 && (
              keysetExample.data.map((row) => {
                return (
                  <Row>
                    {
                      row.map((keyData) => {
                        let keyColor = '#BBBBBB';
                        let fontColor = '#000000';
                        const { name, width, keyComponent, icon } = keyData
                        const isAlphaKey = alphaKeys[name.toLowerCase()];
                        const isNumericKey = numericKeys[name];
                        const isModifierKey = !isAlphaKey && !isNumericKey;

                        if (isAlphaKey) {
                          keyColor = alphaKeyColor;
                          fontColor = alphaFontColor;
                        }
                        if (isNumericKey) {
                          keyColor = numericKeyColor;
                          fontColor = numericFontColor;
                        }
                        if (isModifierKey) {
                          keyColor = modifierKeyColor;
                          fontColor = modifierFontColor;
                        }

                        const display = icon || name;
                        
                        return keyComponent(display, keyColor, fontColor)
                        
                      })
                    }
                  </Row>
                )
              })
            )}
          </Keyboard>

        </KeyboardContainer>
        <ConfigContainer>
          <ConfigColumn>
            {alphaColorKeysConfigOpen ? 
              <SketchPicker color={alphaKeyColor} onChange={handleAlphaKeyColorChange}/>
                : <Button 
                    onClick={() => setAlphaColorKeysConfigOpen(true)}
                    style={{ 
                      backgroundColor: alphaKeyColor, 
                      color: isDarkColor(alphaKeyColor) ? 'white' : 'black'
                    }}
                  >
                    Alphas
                  </Button>
            }
            {alphaFontColorConfigOpen ? 
              <SketchPicker color={alphaFontColor} onChange={handleAlphaFontColorChange}/>
                : <Button 
                    onClick={() => setAlphaFontColorConfigOpen(true)}
                    style={{ 
                      backgroundColor: alphaFontColor, 
                      color: isDarkColor(alphaFontColor) ? 'white' : 'black', 
                    }}
                  >
                    Alpha Font
                  </Button>
            }
          </ConfigColumn>
          <ConfigColumn>
            {numericKeyColorConfigOpen ? 
              <SketchPicker color={numericKeyColor} onChange={handleNumericKeyColorChange}/>
                : <Button 
                    onClick={() => setNumericKeyColorConfigOpen(true)}
                    style={{ 
                      backgroundColor: numericKeyColor, 
                      color: isDarkColor(numericKeyColor) ? 'white' : 'black'
                    }}
                  >
                    Numerics
                  </Button>
            }
            {numericFontColorConfigOpen ? 
              <SketchPicker color={numericFontColor} onChange={handleNumericFontColorChange}/>
                : <Button 
                    onClick={() => setNumericFontColorConfigOpen(true)}
                    style={{ 
                      backgroundColor: numericFontColor, 
                      color: isDarkColor(numericFontColor) ? 'white' : 'black', 
                    }}
                  >
                    Numeric Font
                  </Button>
            }
          </ConfigColumn>
          <ConfigColumn>
            {modifierKeyColorConfigOpen ? 
              <SketchPicker color={modifierKeyColor} onChange={handleModifierKeyColorChange}/>
                : <Button 
                    onClick={() => setModifierKeyColorConfigOpen(true)}
                    style={{ 
                      backgroundColor: modifierKeyColor, 
                      color: isDarkColor(modifierKeyColor) ? 'white' : 'black'
                    }}
                  >
                    Modifiers
                  </Button>
            }
            {modifierFontColorConfigOpen ? 
              <SketchPicker color={modifierFontColor} onChange={handleModifierFontColorChange}/>
                : <Button 
                    onClick={() => setModifierFontColorConfigOpen(true)}
                    style={{ 
                      backgroundColor: modifierFontColor, 
                      color: isDarkColor(modifierFontColor) ? 'white' : 'black', 
                    }}
                  >
                    Modifiers Font
                  </Button>
            }
          </ConfigColumn>
        </ConfigContainer>
      </KeyboardBackground>
    </Root>
  )
}