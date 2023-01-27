import { Spacing, TextAlign } from '@src/atoms/theme/constants/common';
import { ThemeColor, ThemeTypography } from '@src/atoms/theme/constants/types';
import { ReactNode } from 'react';
import { TextProps } from 'react-native';

export interface TypographyProps extends TextProps {
  type?: ThemeTypography;
  margin?: Spacing;
  padding?: Spacing;
  children?: ReactNode;
  color?: ThemeColor;
  textAlign?: TextAlign;
  underline?: boolean;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
}
