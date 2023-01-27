import {TextStyle, ViewStyle, FlexStyle} from 'react-native';
import {COLORS} from './colors';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type Align =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

export type AlignSelf =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

export type Spacing =
  | number
  | [number, number]
  | [number, number, number, number];

export type MarginPadding = [number, number, number, number];

export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

export type FlexWrap = 'wrap' | 'nowrap';

export const stylesUtils = {
  flexWrap: (flexWrap: FlexWrap) => {
    return {
      flexWrap,
    };
  },
  normalizeOptions: (inputs: Spacing | undefined): MarginPadding => {
    try {
      if (!inputs) {
        return [0, 0, 0, 0];
      }
      if (!Array.isArray(inputs)) {
        const value = inputs;
        return [value, value, value, value];
      }
      if (inputs.length === 2) {
        const value1 = inputs[0],
          value2 = inputs[1];
        return [value1, value2, value1, value2];
      }
      if (inputs.length === 4) {
        const value1 = inputs[0],
          value2 = inputs[1],
          value3 = inputs[2],
          value4 = inputs[3];
        return [value1, value2, value3, value4];
      }
      return inputs;
    } catch (error) {
      return [0, 0, 0, 0];
    }
  },
  minWidth: (minWidth: string | number | undefined): FlexStyle => {
    return {minWidth};
  },
  minHeight: (minHeight: string | number | undefined): FlexStyle => {
    return {minHeight};
  },
  background: (color: string): ViewStyle => {
    return {backgroundColor: COLORS[color] ? COLORS[color] : color};
  },
  color: (color: string): TextStyle => {
    return {color: COLORS[color] ? COLORS[color] : color};
  },
  fontSize: (fontSize: number): TextStyle => {
    return {fontSize};
  },
  lineHeight: (lineHeight: number): TextStyle => {
    return {lineHeight};
  },
  letterSpacing: (letterSpacing: number): TextStyle => {
    return {letterSpacing};
  },
  textAlign: (alignment: TextAlign): TextStyle => {
    return {
      textAlign: alignment,
    };
  },
  rowGap: (rowGap: number): FlexStyle => {
    return {rowGap};
  },
  columnGap: (columnGap: number): FlexStyle => {
    return {columnGap};
  },
  gap: (gap: number): FlexStyle => {
    return {gap};
  },
  width: (width: string | number): FlexStyle => {
    return {width};
  },
  height: (height: string | number): FlexStyle => {
    return {height};
  },
  flex: (number: number): FlexStyle => {
    return {flex: number};
  },
  flexDirection: (direction: FlexDirection): FlexStyle => {
    return {
      flexDirection: direction,
    };
  },
  justify: (alignment: Justify): FlexStyle => {
    return {
      justifyContent: alignment,
    };
  },
  align: (alignment: Align): FlexStyle => {
    return {
      alignItems: alignment,
    };
  },
  alignSelf: (alignment: AlignSelf): FlexStyle => {
    return {
      alignSelf: alignment,
    };
  },
  square: (number: number | string | undefined): FlexStyle => {
    return {
      height: number,
      width: number,
    };
  },
  circle: (number: number | string | undefined): FlexStyle & ViewStyle => {
    return {
      height: number,
      width: number,
      borderRadius: Number(number) / 2,
    };
  },
  margin: ([top, right, bottom, left]: MarginPadding) => {
    return {
      marginTop: top,
      marginBottom: bottom,
      marginLeft: left,
      marginRight: right,
    };
  },
  padding: ([top, right, bottom, left]: MarginPadding) => {
    return {
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    };
  },
  borderRadius: ([
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
  ]: MarginPadding): ViewStyle => {
    return {
      borderTopLeftRadius: topLeft,
      borderTopRightRadius: topRight,
      borderBottomLeftRadius: bottomLeft,
      borderBottomRightRadius: bottomRight,
    };
  },
  underline: (): TextStyle => {
    return {
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
    };
  },
};
