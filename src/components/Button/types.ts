import { Spacing } from '@src/atoms/theme/constants/common';
import {
  ButtonSize,
  ButtonType,
  ThemeColor,
} from '@src/atoms/theme/constants/types';
import { ButtonProps } from 'react-native';

export interface IButtonProps extends ButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  margin?: Spacing;
  padding?: Spacing;
  fontSize?: number;
  children?: string;
  backgroundColor?: ThemeColor;
  textColor?: ThemeColor;
  borderRadius?: Spacing;
  width?: string | number | undefined;
  height?: string | number | undefined;
}
