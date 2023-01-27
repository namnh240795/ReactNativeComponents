interface IFonts {
  [key: string]: string;
}

export const Fonts: IFonts = {
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_MEDIUM: 'Poppins-Medium',
};

export const INPUTS_CONTAINER = {
  flex: 1,
  padding: 10,
  fontFamily: Fonts.POPPINS_REGULAR,
};

// export const INPUT_DISABLE = {
//   display: 'flex',
//   flexDirection: 'row',
//   flex: 1,
//   borderWidth: 2,
//   borderColor: COLORS.GOLBAT_20,
//   padding: 10,
//   borderRadius: 10,
//   backgroundColor: COLORS.GOLBAT_20,
// };

export const DEFAULT_INPUT = {
  fontSize: 16,
  lineHeight: 24,
  fontFamily: Fonts.POPPINS_LIGHT,
};
