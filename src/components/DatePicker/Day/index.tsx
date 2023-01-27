import {COLORS} from '@src/atoms/theme/constants/colors';
import Box from '@src/components/Box';
import {Typography} from '@src/components/Typography';
import {Dayjs} from 'dayjs';
import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface DayProps {
  day: Dayjs;
  index: number;
  onPress?: (day: Dayjs, index: number) => void;
  isActive?: Boolean;
}

export interface DayRef {
  toggle: Function;
  setD: Function;
  getActive: Function;
  getD: () => Dayjs;
}

const Day = forwardRef(
  ({day, onPress, isActive, index}: DayProps, ref: Ref<DayRef>) => {
    const active = useSharedValue(isActive ? 1 : 0);
    const [d, setD] = useState<Dayjs | null>(day);

    const toggle = useCallback(() => {
      if (active.value === 1) {
        active.value = withTiming(0, {
          duration: 200,
          easing: Easing.bezier(0.25, 0.5, 0.75, 1),
        });
      } else {
        active.value = withTiming(1, {
          duration: 200,
          easing: Easing.bezier(0.25, 0.5, 0.75, 1),
        });
      }
    }, [active]);

    const getActive = useCallback(() => {
      return !!active.value;
    }, [active.value]);

    const dayStyle = useAnimatedStyle(() => ({
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: interpolateColor(
        active.value,
        [0, 1],
        [COLORS.BULBASAUR_140, COLORS.BRAND_01],
      ),
    }));

    const handlePress = useCallback(() => {
      if (d) {
        onPress && onPress(d, index);
      }
    }, [d, index, onPress]);

    const getD = useCallback(() => {
      return d;
    }, [d]);

    useImperativeHandle(ref, () => ({
      toggle,
      setD,
      getD,
      getActive,
    }));

    if (!d) {
      return <Box square={40} />;
    }

    return (
      <Animated.View style={dayStyle}>
        <Box
          pressable={d !== null}
          circle={40}
          onPress={handlePress}
          justify="center"
          align="center">
          <Typography>{d?.get('date')}</Typography>
        </Box>
      </Animated.View>
    );
  },
);

export default Day;
