import { COLORS } from './colors';

interface IFonts {
  [key: string]: string;
}

export const Fonts: IFonts = {
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_MEDIUM: 'Poppins-Medium',
};

export const getSizeButton = (size: string) => {
  if (size === 'medium') {
    return BUTTON_SIZE.medium;
  } else {
    return BUTTON_SIZE.large;
  }
};

export const BUTTON_SIZE = {
  medium: {
    width: '50%',
    flex: 0.5,
  },
  large: {
    flex: 1,
  },
};

export const BUTTON_TYPE = {
  BRAND_01: {
    backgroundColor: COLORS.BRAND_01,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  BRAND_03: {
    backgroundColor: COLORS.BRAND_03,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    alignItems: 'center',
  },
  BLACK_05: {
    backgroundColor: COLORS.GOLBAT_5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    alignItems: 'center',
  },
};

export const DEFAULT_BUTTON_STYLE = {
  backgroundColor: COLORS.BRAND_01,
  marginLeft: 16,
  marginRight: 16,
  borderRadius: 16,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 12,
  paddingBottom: 12,
  display: 'flex',
  alignItems: 'center',
};

export const DISABLE_BUTTON_STYLE = {
  backgroundColor: COLORS.GOLBAT_10,
  marginLeft: 16,
  marginRight: 16,
  borderRadius: 16,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 12,
  paddingBottom: 12,
  display: 'flex',
  alignItems: 'center',
};
