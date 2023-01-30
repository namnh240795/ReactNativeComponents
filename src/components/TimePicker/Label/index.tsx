import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React from 'react';

interface LabelProps {
  children: string;
  index: number;
  animatedValue: any;
  max: number;
}

const Label: React.FC<LabelProps> = ({
  children,
  index,
  animatedValue,
  max,
}) => {
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedValue.value,
          new Array(max)
            .fill(1)
            .map((_, i) => i)
            .map(e => e * 48),
          new Array(max).fill(1).fill(1.5, index - 1, index),
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  if (index === 0) {
    return null;
  }

  if (index === max - 1) {
    return null;
  }

  return <Animated.Text style={style}>{children}</Animated.Text>;
};

export default Label;
