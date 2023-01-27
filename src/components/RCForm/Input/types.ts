import { Spacing } from '@src/atoms/theme/constants/common';
import { Meta } from 'rc-field-form/es/interface';
import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export interface ITextInput extends TextInputProps {
  suffix?: ReactNode | string | null;
  prefix?: ReactNode | string | null;
  placeholder?: string;
  value?: string;
  children?: ReactNode | string | null;
  padding?: Spacing;
  margin?: Spacing;
  disabled?: boolean;
  label?: string;
  focused?: boolean;
  clearable?: boolean;
  meta?: Meta;
  onFocus?: any;
  onChange?: any;
  required?: boolean;
  type?: 'password';
  validator?: any;
}
