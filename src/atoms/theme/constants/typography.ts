import { COLORS } from './colors';
interface IFonts {
  [key: string]: string;
}

export const Fonts: IFonts = {
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_MEDIUM: 'Poppins-Medium',
};

export const TYPOGRAPHYS = {
  h1: {
    fontSize: 96,
    letterSpacing: -1.5,
    lineHeight: 112,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  h2: {
    fontSize: 60,
    letterSpacing: -0.5,
    lineHeight: 72,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  h3: {
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  h4: {
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: 0.25,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  h5: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  h6: {
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.15,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.15,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.1,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.15,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  body3: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.15,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  caption: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.4,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  overline: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.4,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
};

export const DEFAULT_TYPOGRAPHY_STYLE = {
  color: COLORS.GOLBAT_140,
};
