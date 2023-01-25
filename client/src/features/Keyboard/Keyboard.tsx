import { 
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';
import { Root, Header } from '../../styled-components/styles';
import { SketchPicker  } from 'react-color'
import { keysetExample } from './dummyData';
import { 
  Keyboard, 
  KeyboardContainer, 
  Row, 
  ConfigColumn,
  KeyboardBackground,
  ConfigContainer,
  AccordionContainer,
  FullWidthAccordion, 
} from './styles';
import { alphaKeys, numericKeys } from './utils';
import { cloneDeep } from 'lodash';
import Carousel from 'react-material-ui-carousel'
import { backgroundImages } from './utils';
//======================================================
export const KeyBored = () => {
  //======================================================
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [customKeyCapsConfig, setCustomKeyCapsConfig] = useState({});
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState('url(./images/brown-wood-table.jpeg)');
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [expandedConfig, setExpandedConfig] = useState<string | null>(null);
  //====================================================== accordion logic
  const handleSetExpandedConfig = (panel: string) => {
    if(panel !== expandedConfig) setExpandedConfig(panel)
    else setExpandedConfig(null)


  }
  //====================================================== backgroundImage change
  const handleBackgroundImageSelected = (image: string) => {
    setSelectedBackgroundImage(`url(${image})`);
  }
  //====================================================== exception keys (single press)
  const handleSingleKeyPress = (name: string) => {
    if(selectedKey === name) {
      setSelectedKey(null);
      setPressedKey(null)
    }
    else {
      setSelectedKey(name);
      setPressedKey(name);
    }
  }
  const handleUpdateSelectedCustomKeyCapColor = (color, name: string, param: string) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    if(newCustomKeyCapsConfig[name]){
      newCustomKeyCapsConfig[name][param] = color?.hex;
    } else {
      newCustomKeyCapsConfig[name] = {
        [param]: color?.hex,
      };
    }
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
  }
  //====================================================== alphas
  const [alphaKeyColor, setAlphaKeysColor] = useState('#87CEEB')
  const handleAlphaKeyColorChange = (color) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (alphaKeys[key.toLowerCase()]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setAlphaKeysColor(color?.hex);
  }
  const [alphaFontColor, setAlphaFontColor] = useState('#FFFFFF');
  const handleAlphaFontColorChange = (color) => {
    setAlphaFontColor(color?.hex || '#FFFFFF');
  }
  //====================================================== numerics
  const [numericKeyColor, setNumericKeyColor] = useState('#87CEEB');
  const handleNumericKeyColorChange = (color) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (numericKeys[key]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setNumericKeyColor(color?.hex || '#FFFFFF');
  }
  const [numericFontColor, setNumericFontColor] = useState('#FFFFFF');
  const handleNumericFontColorChange = (color) => {
    setNumericFontColor(color?.hex || '#FFFFFF');
  }
  //====================================================== modifiers
  const [modifierKeyColor, setModifierKeyColor] = useState('#87CEEB');
  const handleModifierKeyColorChange = (color) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (!alphaKeys[key.toLowerCase()] && !numericKeys[key]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setModifierKeyColor(color?.hex || '#FFFFFF');
  }
  const [modifierFontColor, setModifierFontColor] = useState('#FFFFFF');
  const handleModifierFontColorChange = (color) => {
    setModifierFontColor(color?.hex || '#FFFFFF');
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
          backgroundImage: selectedBackgroundImage,
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
                        if (customKeyCapsConfig[name] && (customKeyCapsConfig[name]?.color || customKeyCapsConfig[name]?.text)) {
                          keyColor = customKeyCapsConfig[name]?.color || keyColor;
                          fontColor = customKeyCapsConfig[name]?.text || fontColor;
                        }
                        const display = icon || name;
                        const pressed = pressedKey === name
                        return (
                          <div 
                            onClick={() => {
                              handleSingleKeyPress(name)
                              handleSetExpandedConfig(name)
                            }}
                          >
                            {keyComponent(display, keyColor, fontColor, pressed)}
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

        <AccordionContainer>
          {selectedKey && expandedConfig === selectedKey && (
            <FullWidthAccordion 
              // expanded={!!selectedKey} 
              // expanded={expandedConfig === selectedKey}
              expanded={true}
              onChange={() => {
                setSelectedKey(null)
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Selected Key {selectedKey}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ConfigContainer>
                  <ConfigColumn>
                    <Typography>Key Cap Color</Typography>
                    <SketchPicker color={customKeyCapsConfig[selectedKey]?.color} onChange={(e) => handleUpdateSelectedCustomKeyCapColor(e, selectedKey, 'color')} />
                  </ConfigColumn>
                  <ConfigColumn>
                  <Typography>Key Font Color</Typography>
                    <SketchPicker color={customKeyCapsConfig[selectedKey]?.text} onChange={(e) => handleUpdateSelectedCustomKeyCapColor(e, selectedKey, 'text')} />
                  </ConfigColumn>
                </ConfigContainer>
              </AccordionDetails>
            </FullWidthAccordion>
            )
          }

          <FullWidthAccordion expanded={expandedConfig === 'alphas'} onChange={() => handleSetExpandedConfig('alphas')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Alpha Keys
            </AccordionSummary>
            <AccordionDetails>
              <ConfigContainer>
                <ConfigColumn>
                  <Typography>Key Cap Color</Typography>
                  <SketchPicker color={alphaKeyColor} onChange={handleAlphaKeyColorChange}/>
                </ConfigColumn>
                <ConfigColumn>
                  <Typography>Key Font Color</Typography>
                  <SketchPicker color={alphaFontColor} onChange={handleAlphaFontColorChange}/>
                </ConfigColumn>
              </ConfigContainer>
            </AccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion expanded={expandedConfig === 'numerics'} onChange={() => handleSetExpandedConfig('numerics')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Numeric Keys
            </AccordionSummary>
            <AccordionDetails>
              <ConfigContainer>
                <ConfigColumn>
                  <Typography>Key Cap Color</Typography>
                  <SketchPicker color={numericKeyColor} onChange={handleNumericKeyColorChange}/>
                </ConfigColumn>
                <ConfigColumn>
                  <Typography>Key Font Color</Typography>
                  <SketchPicker color={numericFontColor} onChange={handleNumericFontColorChange}/>
                </ConfigColumn>
              </ConfigContainer>
            </AccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion expanded={expandedConfig === 'modifiers'} onChange={() => handleSetExpandedConfig('modifiers')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Modifier Keys
            </AccordionSummary>
            <AccordionDetails>
              <ConfigContainer>
                <ConfigColumn>
                  <Typography>Key Cap Color</Typography>
                  <SketchPicker color={modifierKeyColor} onChange={handleModifierKeyColorChange}/>
                </ConfigColumn>
                <ConfigColumn>
                  <Typography>Key Font Color</Typography>
                  <SketchPicker color={modifierFontColor} onChange={handleModifierFontColorChange}/>
                </ConfigColumn>
              </ConfigContainer>
            </AccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion TransitionProps={{ unmountOnExit: true }} expanded={expandedConfig === 'background'} onChange={() => handleSetExpandedConfig('background')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Background Image
            </AccordionSummary>
            <AccordionDetails>
              <Carousel
                height={400}
                animation='slide'
                interval={6000}
                indicators={false}
              >
                {backgroundImages.map((item, i) => {
                  return (
                    <div onClick={() => {handleBackgroundImageSelected(item)}}>
                      <img
                        src={`${item}`}
                        // height={400}
                        loading='lazy'
                      />
                    </div>
                  )
                })}
              </Carousel>
            </AccordionDetails>
          </FullWidthAccordion>
        </AccordionContainer>
      </KeyboardBackground>
    </Root>
  )
}