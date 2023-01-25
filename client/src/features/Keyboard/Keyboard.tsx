import { 
  Typography,
  AccordionSummary,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';
import { Root, Header } from '../../styled-components/styles';
import { SketchPicker, CompactPicker  } from 'react-color'
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
  FlexAccordionDetails,
} from './styles';
import { alphaKeys, numericKeys } from './utils';
import { cloneDeep } from 'lodash';
import Carousel from 'react-material-ui-carousel'
import { backgroundImages, keyboardComponentTranslater } from './utils';
import { LightenDarkenColor } from 'lighten-darken-color'; 
//======================================================
export const KeyBored = () => {
  //======================================================
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [customKeyCapsConfig, setCustomKeyCapsConfig] = useState({
    'Esc': {
      color: '#f5cb23',
    },
    'Enter': {
      color: '#f5cb23',
    },
  });
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState('url(./images/brown-wood-table.jpeg)');
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [expandedConfig, setExpandedConfig] = useState<string | null>(null);
  const [caseTopColor, setTopShroudColor] = useState<string>('#663399');
  const [caseColor, setCaseColor] = useState<string>('#FFFAFA');
  const [caseBottomColor, setCaseBottomColor] = useState<string>(String(LightenDarkenColor(caseColor, 20)));
  const [plateColor, setPlateColor] = useState<string>('#D3D3D3');
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
    console.log({ newCustomKeyCapsConfig })
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
  const handleCaseTopColorChange = (color) => {
    setTopShroudColor(color?.hex);
  }
  const handleCaseColor = (color) => {
    setCaseColor(color?.hex);
  }
  const handleCaseBottomColorChange = (color) => {
    setCaseBottomColor(color?.hex);
  }
  const handlePlateColorChange = (color) => {
    setPlateColor(color?.hex)
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
          <Keyboard 
            caseTopColor={caseTopColor} 
            caseColor={caseColor}
            caseBottomColor={caseBottomColor}
            plateColor={plateColor}
          >
            {keysetExample && keysetExample.data.length > 0 && (
              keysetExample.data.map((row, rowi) => {
                return (
                  <Row
                    key={`${rowi}-row`}
                  >
                    {
                      row.map((keyData, i) => {
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
                            key={`${i}-${rowi}-key`}
                          >
                            {keyboardComponentTranslater(width, display, keyColor, fontColor, pressed, caseBottomColor)}
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
        {/* //====================================================== */}
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
              <FlexAccordionDetails>
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
              </FlexAccordionDetails>
            </FullWidthAccordion>
            )
          }

          <FullWidthAccordion expanded={expandedConfig === 'alphas'} onChange={() => handleSetExpandedConfig('alphas')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Alpha Keys
            </AccordionSummary>
            <FlexAccordionDetails>
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
            </FlexAccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion expanded={expandedConfig === 'numerics'} onChange={() => handleSetExpandedConfig('numerics')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Numeric Keys
            </AccordionSummary>
            <FlexAccordionDetails>
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
            </FlexAccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion expanded={expandedConfig === 'modifiers'} onChange={() => handleSetExpandedConfig('modifiers')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Modifier Keys
            </AccordionSummary>
            <FlexAccordionDetails>
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
            </FlexAccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion expanded={expandedConfig === 'shroud'} onChange={() => handleSetExpandedConfig('shroud')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Case
            </AccordionSummary>
            <FlexAccordionDetails>
              <ConfigContainer>
                <ConfigColumn>
                  <Typography>Case Top Color</Typography>
                  <CompactPicker color={caseTopColor} onChange={handleCaseTopColorChange}/>
                </ConfigColumn>
                <ConfigColumn>
                  <Typography>Case Side Color</Typography>
                  <CompactPicker color={caseColor} onChange={handleCaseColor}/>
                </ConfigColumn>
                
              </ConfigContainer>
              <ConfigContainer>
                <ConfigColumn>
                  <Typography>Case Bottom Color</Typography>
                  <CompactPicker color={caseBottomColor} onChange={handleCaseBottomColorChange}/>
                </ConfigColumn>
                <ConfigColumn>
                  <Typography>Plate Color</Typography>
                  <CompactPicker color={plateColor} onChange={handlePlateColorChange}/>
                </ConfigColumn>
                
              </ConfigContainer>
            </FlexAccordionDetails>
          </FullWidthAccordion>

          <FullWidthAccordion TransitionProps={{ unmountOnExit: true }} expanded={expandedConfig === 'background'} onChange={() => handleSetExpandedConfig('background')}>
          <AccordionSummary expandIcon={<ExpandMore />}>
              Background Image
            </AccordionSummary>
            <FlexAccordionDetails>
              <Carousel
                height={400}
                animation='slide'
                interval={6000}
                indicators={false}
              >
                {backgroundImages.map((item, i) => {
                  return (
                    <div onClick={() => {handleBackgroundImageSelected(item)}} key={`${i}-image`}>
                      <img
                        src={`${item}`}
                        // height={400}
                        loading='lazy'
                      />
                    </div>
                  )
                })}
              </Carousel>
            </FlexAccordionDetails>
          </FullWidthAccordion>
        </AccordionContainer>
        {/* //====================================================== */}
      </KeyboardBackground>
    </Root>
  )
}
