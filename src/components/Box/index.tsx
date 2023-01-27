import { stylesUtils } from '@src/atoms/theme/constants/common';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { BoxProps } from './types';

const Box: React.FC<BoxProps> = ({
  pressable,
  flexDirection,
  justify,
  align,
  alignSelf,
  flex,
  background,
  square,
  circle,
  height,
  width,
  minWidth,
  minHeight,
  margin,
  padding,
  borderRadius,
  children,
  flexWrap,
  onPress,
  style,
  ...props
}) => {
  const combinedStyle: StyleProp<ViewStyle> = useMemo(() => {
    let marginValues, paddingValues;
    let borderRadiusValues;
    let flexValue,
      widthValue,
      heightValue,
      squareValue,
      circleValue,
      minWidthVal,
      minHeightVal,
      flexWrapVal;
    if (flexWrap) {
      flexWrapVal = stylesUtils.flexWrap(flexWrap);
    }
    if (flex) {
      flexValue = stylesUtils.flex(flex);
    }
    if (width) {
      widthValue = stylesUtils.width(width);
    }
    if (height) {
      heightValue = stylesUtils.height(height);
    }
    if (square) {
      squareValue = stylesUtils.square(square);
    }
    if (circle) {
      circleValue = stylesUtils.circle(circle);
    }
    if (minWidth) {
      minWidthVal = stylesUtils.minWidth(minWidth);
    }
    if (minHeight) {
      minHeightVal = stylesUtils.minHeight(minHeight);
    }
    if (margin) {
      marginValues = stylesUtils.margin(stylesUtils.normalizeOptions(margin));
    }
    if (padding) {
      paddingValues = stylesUtils.padding(
        stylesUtils.normalizeOptions(padding),
      );
    }
    if (borderRadius) {
      borderRadiusValues = stylesUtils.borderRadius(
        stylesUtils.normalizeOptions(borderRadius),
      );
    }

    return StyleSheet.flatten([
      marginValues,
      paddingValues,
      borderRadiusValues,
      background && stylesUtils.background(background),
      flexDirection && stylesUtils.flexDirection(flexDirection),
      justify && stylesUtils.justify(justify),
      align && stylesUtils.align(align),
      alignSelf && stylesUtils.alignSelf(alignSelf),
      flexValue,
      widthValue,
      heightValue,
      squareValue,
      circleValue,
      minHeightVal,
      minWidthVal,
      flexWrapVal,
      style,
    ]);
  }, [
    align,
    alignSelf,
    background,
    flexDirection,
    justify,
    margin,
    padding,
    borderRadius,
    flex,
    width,
    height,
    minWidth,
    minHeight,
    square,
    circle,
    style,
    flexWrap,
  ]);

  if (pressable) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={combinedStyle}
        onPress={onPress}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={combinedStyle} {...props}>
      {children}
    </View>
  );
};

export default Box;
