import {FlexWrap} from './../../atoms/theme/constants/common';
import {
  Align,
  AlignSelf,
  FlexDirection,
  Justify,
  Spacing,
} from '@src/atoms/theme/constants/common';
import {ThemeColor} from '@src/atoms/theme/constants/types';
import {ReactNode} from 'react';
import {TouchableOpacityProps, ViewProps} from 'react-native';

export interface BoxProps extends ViewProps, TouchableOpacityProps {
  background?: ThemeColor;
  flexDirection?: FlexDirection;
  justify?: Justify;
  align?: Align;
  alignSelf?: AlignSelf;
  flex?: number;
  square?: number;
  circle?: number | string;
  width?: string | number | undefined;
  height?: string | number | undefined;
  minWidth?: string | number | undefined;
  minHeight?: string | number | undefined;
  margin?: Spacing;
  padding?: Spacing;
  pressable?: boolean;
  borderRadius?: Spacing;
  children?: ReactNode;
  flexWrap?: FlexWrap;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
}
