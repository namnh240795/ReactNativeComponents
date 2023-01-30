import Box from '@src/components/Box';
import {Typography} from '@src/components/Typography';
import React, {Dayjs} from 'dayjs';
import {forwardRef, Ref, useImperativeHandle, useState} from 'react';

interface TitleProps {
  activeMonth: Dayjs;
}

export interface TitleRef {
  setMonth: (d: Dayjs) => void;
}

const Title = forwardRef(({activeMonth}: TitleProps, ref: Ref<TitleRef>) => {
  const [month, setMonth] = useState<Dayjs>(activeMonth);

  useImperativeHandle(ref, () => ({setMonth}), []);

  return (
    <Box height={40} justify="center" margin={[8, 0]} align="center">
      <Typography>{month.format('MMM YYYY')}</Typography>
    </Box>
  );
});

export default Title;
