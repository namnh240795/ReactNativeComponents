import React, { useState } from 'react';
import Box from '../Box';
import { Typography } from '../Typography';

export const Popover = () => {
  const [state, setState] = useState<boolean>(false);
  if (!state) {
    return (
      <Box
        pressable
        square={40}
        background="red"
        onPress={() => {
          setState(true);
        }}
      >
        <Typography type="body1" margin={10} color="BRAND_01" underline>
          Off
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      pressable
      square={40}
      background="blue"
      onPress={() => {
        setState(false);
      }}
    >
      <Typography
        padding={10}
        color={'red'}
        textAlign="center"
        letterSpacing={1}
        fontSize={14}
        lineHeight={22}
      >
        On
      </Typography>
    </Box>
  );
};
