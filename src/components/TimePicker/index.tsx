import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Box from '../Box';
import Label from './Label';

export const TimePicker = () => {
  const hours = useSharedValue(0);
  const minutes = useSharedValue(0);
  const scrollHoursHandler = useAnimatedScrollHandler(event => {
    hours.value = event.contentOffset.y;
  });

  const scrollMinutesHandler = useAnimatedScrollHandler(event => {
    minutes.value = event.contentOffset.y;
  });

  return (
    <Box flexDirection="row" width={288}>
      <Box flex={1} height={144}>
        <Animated.ScrollView
          bounces={false}
          decelerationRate="fast"
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={48}
          showsVerticalScrollIndicator={false}
          onScroll={scrollHoursHandler}
        >
          {new Array(26)
            .fill(1)
            .map((_, index) => index)
            .map((e, index) => (
              <Box
                background="BULBASAUR_140"
                height={48}
                key={e}
                justify="center"
                align="center"
              >
                <Label
                  index={index}
                  animatedValue={hours}
                  max={26}
                >{`${e}`}</Label>
              </Box>
            ))}
        </Animated.ScrollView>
      </Box>
      <Box flex={1} height={144}>
        <Animated.ScrollView
          bounces={false}
          decelerationRate="fast"
          scrollEventThrottle={1}
          snapToAlignment="center"
          snapToInterval={48}
          showsVerticalScrollIndicator={false}
          onScroll={scrollMinutesHandler}
        >
          {new Array(62)
            .fill(1)
            .map((_, index) => `${index - 1}`)
            .map((e, index) => (
              <Box
                background="BULBASAUR_140"
                height={48}
                key={e}
                justify="center"
                align="center"
              >
                <Label
                  index={index}
                  animatedValue={minutes}
                  max={62}
                >{`${e}`}</Label>
              </Box>
            ))}
        </Animated.ScrollView>
      </Box>
    </Box>
  );
};
