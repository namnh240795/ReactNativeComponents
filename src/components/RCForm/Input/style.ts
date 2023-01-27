import { COLORS } from '@src/atoms/theme/constants/colors';
import { StyleProp, ViewStyle } from 'react-native';

export const BORDER_ERROR: any = {
  borderColor: '#D80027',
  borderWidth: 2,
};

export const BORDER_TOUCHED: StyleProp<ViewStyle> = {
  borderColor: COLORS.GOLBAT_20,
  borderWidth: 2,
  borderRadius: 10,
};

export const BORDER_VALIDATING: StyleProp<ViewStyle> = {
  borderColor: COLORS.BRAND_01,
  borderWidth: 2,
  borderRadius: 10,
};

export const INPUT_CONTENT: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: COLORS.GOLBAT_5,
  borderRadius: 10,
  marginBottom: 4,
};
