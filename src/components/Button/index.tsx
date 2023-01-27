/* eslint-disable react/react-in-jsx-scope */
import {
  BUTTON_TYPE,
  DEFAULT_BUTTON_STYLE,
  DISABLE_BUTTON_STYLE,
  getSizeButton,
} from '@src/atoms/theme/constants/button';
import { COLORS } from '@src/atoms/theme/constants/colors';
import { useMemo } from 'react';
import { stylesUtils } from '@src/atoms/theme/constants/common';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import { Typography } from '../Typography';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  title,
  type,
  size,
  disabled,
  padding,
  margin,
  ...props
}) => {
  const typoStyle = useMemo(() => {
    if (disabled) {
      return COLORS.GOLBAT_60;
    } else {
      if (type === 'black05') {
        return COLORS.GOLBAT_80;
      }
      if (type === 'brand03') {
        return COLORS.BRAND_02;
      } else {
        return COLORS.GOLBAT_140;
      }
    }
  }, [disabled, type]);

  const buttonContainerStyle = useMemo(() => {
    let sizeValue, typeValue;
    let marginValues, paddingValues;
    switch (type) {
      case 'brand01':
        typeValue = BUTTON_TYPE.BRAND_01;
        break;
      case 'brand03':
        typeValue = BUTTON_TYPE.BRAND_03;
        break;
      case 'black05':
        typeValue = BUTTON_TYPE.BLACK_05;
        break;
      default:
        typeValue = DEFAULT_BUTTON_STYLE;
    }
    if (disabled) {
      typeValue = DISABLE_BUTTON_STYLE;
    }
    if (margin) {
      marginValues = stylesUtils.margin(stylesUtils.normalizeOptions(margin));
    }
    if (padding) {
      paddingValues = stylesUtils.padding(
        stylesUtils.normalizeOptions(padding),
      );
    }

    return StyleSheet.flatten([
      typeValue,
      sizeValue,
      marginValues,
      paddingValues,
      size && getSizeButton(size),
    ]);
  }, [size, type, margin, padding, disabled]);

  return (
    <Box style={buttonContainerStyle} pressable={!disabled} {...props}>
      <Typography color={typoStyle}>{title}</Typography>
    </Box>
  );
};

export default Button;
