import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Root, Header } from '../../styled-components/styles';
import isDarkColor from 'is-dark-color'
import { SwatchesPicker  } from 'react-color'
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
import { cloneDeep } from 'lodash';
//======================================================
export const KeyBored = () => {
  //======================================================
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [customKeyCapsConfig, setCustomKeyCapsConfig] = useState({});

  const handleSingleKeyPress = (name: string) => {
    setSelectedKey(name);
  }

  const handleUpdateSelectedCustomKeyCapColor = (color, name: string) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    newCustomKeyCapsConfig[name] = {
      color: color?.hex,
    };
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setSelectedKey(null);
  }

  //====================================================== alphas
  const [alphaColorKeysConfigOpen, setAlphaColorKeysConfigOpen] = useState(false);
  const [alphaKeyColor, setAlphaKeysColor] = useState('#87CEEB')
  const handleAlphaKeyColorChange = (color) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (alphaKeys[key.toLowerCase()]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
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
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (numericKeys[key]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
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
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (!alphaKeys[key.toLowerCase()] && !numericKeys[key]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
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
                        if (customKeyCapsConfig[name] && customKeyCapsConfig[name]?.color) {
                          keyColor = customKeyCapsConfig[name]?.color
                        }

                        const display = icon || name;
                        
                        return (
                          <div onClick={() => handleSingleKeyPress(name)}>
                            {keyComponent(display, keyColor, fontColor)}
                          </div>
                        )
                      })
                    }
                  </Row>
                )
              })
            )}
          </Keyboard>

        </KeyboardContainer>
        <ConfigContainer>
          {selectedKey && <ConfigColumn>
            <SwatchesPicker onChange={(e) => handleUpdateSelectedCustomKeyCapColor(e, selectedKey)} />
            {/* <SwatchesPicker onChange={(e) => handleUpdateSelectedCustomKeyCapColor(e, selectedKey)} /> */}
          </ConfigColumn>}
          <ConfigColumn>
            {alphaColorKeysConfigOpen ? 
              <SwatchesPicker color={alphaKeyColor} onChange={handleAlphaKeyColorChange}/>
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
              <SwatchesPicker color={alphaFontColor} onChange={handleAlphaFontColorChange}/>
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
              <SwatchesPicker color={numericKeyColor} onChange={handleNumericKeyColorChange}/>
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
              <SwatchesPicker color={numericFontColor} onChange={handleNumericFontColorChange}/>
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
              <SwatchesPicker color={modifierKeyColor} onChange={handleModifierKeyColorChange}/>
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
              <SwatchesPicker color={modifierFontColor} onChange={handleModifierFontColorChange}/>
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