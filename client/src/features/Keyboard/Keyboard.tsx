import { 
  Typography,
  AccordionSummary,
} from '@mui/material';
import { ExpandMore, ArrowRight, ArrowLeft } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Root, Header } from '../../styled-components/styles';
import { SketchPicker, CompactPicker, ColorResult  } from 'react-color'
import { Mode65, TOFU60ANSI, TKL40 } from './dummyData';
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
  ImageCarousel,
  KeyboardSwitcherButton,
} from './styles';
import { alphaKeys, numericKeys } from './utils';
import { cloneDeep } from 'lodash';
import { backgroundImages, keyboardComponentTranslater } from './utils';
import { LightenDarkenColor } from 'lighten-darken-color'; 
//======================================================
  const keyboards = [Mode65, TOFU60ANSI, TKL40];
//======================================================
export const KeyBored = () => {
  //======================================================
  const [keyboardData, setKeyboardData] = useState<any>();
  const [currentKeyboardIndex, setCurrentKeyboardIndex] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [customKeyCapsConfig, setCustomKeyCapsConfig] = useState({});
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState('url(./images/brown-wood-table.jpeg)');
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [expandedConfig, setExpandedConfig] = useState<string | null>(null);
  const [caseTopColor, setCaseTopColor] = useState<string>('#808080');
  const [caseColor, setCaseColor] = useState<string>('#808080');
  const [caseBottomColor, setCaseBottomColor] = useState<string>(String(LightenDarkenColor(caseColor, 20)));
  const [plateColor, setPlateColor] = useState<string>('#696969');
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
  const handleUpdateSelectedCustomKeyCapColor = (color: ColorResult, name: string, param: string) => {
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
  const [alphaKeyColor, setAlphaKeysColor] = useState('#808080')
  const handleAlphaKeyColorChange = (color: { hex: React.SetStateAction<string>; }) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (alphaKeys[key.toLowerCase()]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setAlphaKeysColor(color?.hex);
  }
  const [alphaFontColor, setAlphaFontColor] = useState('#FFFFFF');
  const handleAlphaFontColorChange = (color: { hex: any; }) => {
    setAlphaFontColor(color?.hex || '#FFFFFF');
  }
  //====================================================== numerics
  const [numericKeyColor, setNumericKeyColor] = useState('#808080');
  const handleNumericKeyColorChange = (color: { hex: any; }) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (numericKeys[key]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setNumericKeyColor(color?.hex || '#FFFFFF');
  }
  const [numericFontColor, setNumericFontColor] = useState('#FFFFFF');
  const handleNumericFontColorChange = (color: { hex: any; }) => {
    setNumericFontColor(color?.hex || '#FFFFFF');
  }
  //====================================================== modifiers
  const [modifierKeyColor, setModifierKeyColor] = useState('#808080');
  const handleModifierKeyColorChange = (color: { hex: any; }) => {
    const newCustomKeyCapsConfig = cloneDeep(customKeyCapsConfig);
    Object.keys(newCustomKeyCapsConfig).forEach((key) => {
      if (!alphaKeys[key.toLowerCase()] && !numericKeys[key]) delete newCustomKeyCapsConfig[key]
    })
    setCustomKeyCapsConfig(newCustomKeyCapsConfig)
    setModifierKeyColor(color?.hex || '#FFFFFF');
  }
  const [modifierFontColor, setModifierFontColor] = useState('#FFFFFF');
  const handleModifierFontColorChange = (color: { hex: any; }) => {
    setModifierFontColor(color?.hex || '#FFFFFF');
  }
  //======================================================
  const handleCaseTopColorChange = (color: { hex: React.SetStateAction<string>; }) => {
    setCaseTopColor(color?.hex);
  }
  const handleCaseColor = (color: { hex: React.SetStateAction<string>; }) => {
    setCaseColor(color?.hex);
  }
  const handleCaseBottomColorChange = (color: { hex: React.SetStateAction<string>; }) => {
    setCaseBottomColor(color?.hex);
  }
  const handlePlateColorChange = (color: { hex: React.SetStateAction<string>; }) => {
    setPlateColor(color?.hex)
  }
  //======================================================
  //====================================================== handle keyboard default logic
  const handleSetKeyboard = (keyboard: any) => {
    const { defaults } = keyboard;
    const { 
      defaultAlphaKeyColor,
      defaultAlphaFontColor,
      defaultNumericKeyColor,
      defaultNumericFontColor,
      defaultModifierKeyColor,
      defaultModifierFontColor,
      defaultCaseTopColor,
      defaultCaseColor,
      defaultCaseBottomColor,
      defaultCustomKeyCapsConfig, 
      defaultPlateColor,
  } = defaults;
    setAlphaKeysColor(defaultAlphaKeyColor);
    setAlphaFontColor(defaultAlphaFontColor);
    setNumericKeyColor(defaultNumericKeyColor);
    setNumericFontColor(defaultNumericFontColor);
    setModifierKeyColor(defaultModifierKeyColor);
    setModifierFontColor(defaultModifierFontColor);
    setCaseTopColor(defaultCaseTopColor);
    setCaseColor(defaultCaseColor);
    setCaseBottomColor(defaultCaseBottomColor);
    setPlateColor(defaultPlateColor);
    setCustomKeyCapsConfig(defaultCustomKeyCapsConfig);
    

    setKeyboardData(keyboard);
  }
  //====================================================== keyboard set stuff

  useEffect(() => {
    handleSetKeyboard(keyboards[0]);
    setCurrentKeyboardIndex(0);
  }, [])


  const handlePreviousKeyboard = () => {
    let newIndex = currentKeyboardIndex;
    if(currentKeyboardIndex === 0) {
      newIndex = keyboards.length - 1;
    } else {
      newIndex--;
    }
    handleSetKeyboard(keyboards[newIndex])
    setCurrentKeyboardIndex(newIndex)
  }
  const handleNextKeyboard = () => {
    let newIndex = currentKeyboardIndex;
    if(currentKeyboardIndex < keyboards.length - 1) {
      newIndex++;
    } else {
      newIndex = 0;
    }
    handleSetKeyboard(keyboards[newIndex])
    setCurrentKeyboardIndex(newIndex)
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

          <KeyboardSwitcherButton onClick={handlePreviousKeyboard}>
            <ArrowLeft fontSize='large'/>
          </KeyboardSwitcherButton>

          <Keyboard 
            caseTopColor={caseTopColor} 
            caseColor={caseColor}
            caseBottomColor={caseBottomColor}
            plateColor={plateColor}
          >
            {keyboardData && keyboardData.data.length > 0 && (
              keyboardData.data.map((row: any[], rowi: any) => {
                return (
                  <Row
                    key={`${rowi}-row`}
                  >
                    {
                      row.map((keyData: { name: any; width: any; keyComponent: any; icon: any; }, i: any) => {
                        let keyColor = '#BBBBBB';
                        let fontColor = '#000000';
                        const { name, width, icon } = keyData
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

          <KeyboardSwitcherButton onClick={handleNextKeyboard}>
            <ArrowRight fontSize='large'/>
          </KeyboardSwitcherButton>

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
              <Typography variant='h6'>Alpha Keys</Typography>
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
            <Typography variant='h6'>Numeric Keys</Typography>
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
            <Typography variant='h6'>Modifier Keys</Typography>
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
            <Typography variant='h6'>Case</Typography>
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

          <FullWidthAccordion 
            TransitionProps={{ unmountOnExit: true }} 
            expanded={expandedConfig === 'background'} 
            onChange={() => handleSetExpandedConfig('background')}
          >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Background Image</Typography>
            </AccordionSummary>
            <FlexAccordionDetails>
              <ImageCarousel
                animation='slide'
                autoPlay={false}
              >
                {backgroundImages.map((item, i) => {
                  return (
                    <div onClick={() => {handleBackgroundImageSelected(item)}} key={`${i}-image`}>
                      <img
                        src={`${item}`}
                        height={300}
                        loading='lazy'
                      />
                    </div>
                  )
                })}
              </ImageCarousel>
            </FlexAccordionDetails>
          </FullWidthAccordion>
        </AccordionContainer>
        {/* //====================================================== */}
      </KeyboardBackground>
    </Root>
  )
}
