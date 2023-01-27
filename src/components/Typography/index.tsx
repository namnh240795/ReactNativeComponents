import React from 'react';
import {
  DEFAULT_TYPOGRAPHY_STYLE,
  TYPOGRAPHYS,
} from '@src/atoms/theme/constants/typography';
import { useMemo } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { TypographyProps } from './types';
import { stylesUtils } from '@src/atoms/theme/constants/common';

export const Typography: React.FC<TypographyProps> = ({
  type,
  children,
  margin,
  padding,
  color,
  underline,
  textAlign,
  fontSize,
  lineHeight,
  letterSpacing,
  style,
  ...props
}) => {
  const combinedStyle: StyleProp<TextStyle> = useMemo(() => {
    let marginValues,
      paddingValues,
      underlineVal,
      textAlignVal,
      fontSizeVal,
      lineHeightVal,
      letterSpacingVal;

    if (margin) {
      marginValues = stylesUtils.margin(stylesUtils.normalizeOptions(margin));
    }
    if (padding) {
      paddingValues = stylesUtils.padding(
        stylesUtils.normalizeOptions(padding),
      );
    }
    if (underline) {
      underlineVal = stylesUtils.underline();
    }

    if (textAlign) {
      textAlignVal = stylesUtils.textAlign(textAlign);
    }

    if (fontSize) {
      fontSizeVal = stylesUtils.fontSize(fontSize);
    }

    if (lineHeight) {
      lineHeightVal = stylesUtils.lineHeight(lineHeight);
    }

    if (letterSpacing) {
      letterSpacingVal = stylesUtils.letterSpacing(letterSpacing);
    }

    return StyleSheet.flatten([
      DEFAULT_TYPOGRAPHY_STYLE && DEFAULT_TYPOGRAPHY_STYLE,
      type && TYPOGRAPHYS[type],
      marginValues,
      paddingValues,
      color && stylesUtils.color(color),
      underlineVal,
      textAlignVal,
      fontSizeVal,
      lineHeightVal,
      letterSpacingVal,
      style,
    ]);
  }, [
    margin,
    padding,
    underline,
    textAlign,
    fontSize,
    lineHeight,
    type,
    color,
    style,
    letterSpacing,
  ]);

  return (
    <Text style={combinedStyle} allowFontScaling={false} {...props}>
      {children}
    </Text>
  );
};
