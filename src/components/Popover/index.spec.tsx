import React from 'react';
import 'react-native-gesture-handler';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Popover } from '.';

test('screen contains a button linking to the notifications page', async () => {
  const component = <Popover />;

  render(component);
  expect(component).toBeTruthy();

  let offButton = await screen.findByText('Off');
  expect(offButton).toBeTruthy();
  fireEvent(offButton, 'press');
  const onButton = await screen.findByText('On');
  expect(onButton).toBeTruthy();
  fireEvent(offButton, 'press');
  offButton = await screen.findByText('Off');
  expect(offButton).toBeTruthy();
});
