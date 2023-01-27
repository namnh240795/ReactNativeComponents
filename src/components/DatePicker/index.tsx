import React, {useMemo, useRef} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {Typography} from '../Typography';
import Box from '../Box';
import Day, {DayRef} from './Day';
import {debounce} from 'lodash';
import Title, {TitleRef} from './Title';

interface Refs {
  [key: string | number]: DayRef | null;
}

const getDays = (today: Dayjs) => {
  const days: Dayjs[] = new Array(42).fill(null);
  const daysInMonth = today.daysInMonth();
  const firstIndexOfMonth = today.startOf('month').get('d');
  for (let i = firstIndexOfMonth, j = 0; j < daysInMonth; i++, j++) {
    days[i] = dayjs(today.startOf('month')).add(j, 'd');
  }
  return days;
};

export const DatePicker = () => {
  let today = useRef(dayjs(new Date()).startOf('day')).current;
  const selectedDate = useRef<Dayjs | null>(dayjs(new Date()).startOf('day'));
  const days = useMemo(() => getDays(today), [today]);

  const refs = useRef<Refs>({});
  const titleRef = useRef<TitleRef | null>();

  const handlePress = useRef(
    debounce(
      (d: Dayjs, index: number) => {
        const selected = selectedDate?.current?.format('DD-MM-YYYY');
        const pickedDate = d.format('DD-MM-YYYY');
        for (let i = 0; i <= 42; i++) {
          if (refs.current[i]?.getActive()) {
            refs.current[i]?.toggle();
          }
        }
        refs.current[index]?.toggle();

        if (selected === pickedDate) {
          selectedDate.current = null;
        } else {
          selectedDate.current = d;
        }
      },
      200,
      {leading: true},
    ),
  ).current;

  return (
    <Box
      width={360}
      align="center"
      justify="center"
      padding={10}
      background="BULBASAUR_140">
      <Box flexDirection="row" gap={8} justify="space-between" width={328}>
        <Title activeMonth={today} ref={ref => (titleRef.current = ref)} />
        <Box flexDirection="row" gap={8} margin={[8, 0]}>
          <Box
            square={40}
            justify="center"
            align="center"
            pressable
            onPress={async () => {
              today = today.subtract(1, 'month');
              titleRef.current?.setMonth(today);
              const prevMonthDays = getDays(today);
              for (let index in days) {
                await refs.current[index]?.setD(prevMonthDays[index]);
              }
              for (let i = 0; i <= 42; i++) {
                if (refs.current[i]?.getActive()) {
                  refs.current[i]?.toggle();
                }
                if (
                  refs.current[i]?.getD()?.format('DD-MM-YYYY') ===
                  selectedDate.current?.format('DD-MM-YYYY')
                ) {
                  refs.current[i]?.toggle();
                }
              }
            }}>
            <Typography>{'<'}</Typography>
          </Box>
          <Box
            square={40}
            justify="center"
            align="center"
            pressable
            onPress={async () => {
              today = await today.add(1, 'month');
              const nextMonth = getDays(today);
              titleRef.current?.setMonth(today);
              for (let index in days) {
                console.log(days);
                await refs.current[index]?.setD(nextMonth[index]);
              }

              for (let i = 0; i <= 42; i++) {
                if (refs.current[i]?.getActive()) {
                  refs.current[i]?.toggle();
                }
                if (
                  refs.current[i]?.getD()?.format('DD-MM-YYYY') ===
                  selectedDate.current?.format('DD-MM-YYYY')
                ) {
                  refs.current[i]?.toggle();
                }
              }
            }}>
            <Typography>{'>'}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        width={328}
        flexWrap="wrap"
        gap={8}
        background={'BULBASAUR_140'}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <Box
            square={40}
            justify="center"
            align="center"
            key={`date-${index}`}>
            <Typography>{day}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        flexDirection="row"
        width={328}
        flexWrap="wrap"
        gap={8}
        background={'BULBASAUR_140'}>
        {days.map((day, index) => (
          <Day
            index={index}
            day={day}
            key={`date-${index}-${day?.format('DD-MM-YYYY')}`}
            onPress={handlePress}
            isActive={selectedDate?.current?.isSame(day)}
            ref={ref => {
              refs.current[index] = ref;
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
