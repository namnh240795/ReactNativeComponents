import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InputText from '.';

test('Render empty input', () => {
  const tree = renderer.create(<InputText />);
  expect(tree).toMatchSnapshot();
});

test('Render padding all input', () => {
  const tree = renderer.create(<InputText padding={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding hv input', () => {
  const tree = renderer.create(<InputText padding={[0, 2]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding width array input', () => {
  const tree = renderer.create(<InputText padding={[0, 2, 0, 4]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin all input', () => {
  const tree = renderer.create(<InputText margin={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin hv input', () => {
  const tree = renderer.create(<InputText margin={[0, 2]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin width array input', () => {
  const tree = renderer.create(<InputText margin={[0, 2, 0, 4]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render disable input', () => {
  const tree = renderer.create(<InputText disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render input with suffix', () => {
  const tree = renderer.create(<InputText suffix={<>suffix</>} />);
  expect(tree).toMatchSnapshot();
});

test('Render input with prefix', () => {
  const tree = renderer.create(<InputText prefix={<>paste</>} />);
  expect(tree).toMatchSnapshot();
});

test('change text input event', () => {
  const onChangeMock = jest.fn();
  render(<InputText placeholder="change" onChange={onChangeMock} />);
  fireEvent(
    screen.getByPlaceholderText('change'),
    'onChangeText',
    'text change',
  );
  expect(onChangeMock).toHaveBeenCalledWith('text change');
});

test('focus text input event', () => {
  const onFocusMock = jest.fn();
  render(<InputText placeholder="focus placeholder" onFocus={onFocusMock} />);
  fireEvent(
    screen.getByPlaceholderText('focus placeholder'),
    'focus',
    'focus event',
  );
  expect(onFocusMock).toHaveBeenCalledWith('focus event');
});

test('Event blur input', () => {
  const onBlurMock = jest.fn();
  render(<InputText placeholder="placeholder" onBlur={onBlurMock} />);
  fireEvent(screen.getByPlaceholderText('placeholder'), 'blur', 'blur event');
  expect(onBlurMock).toHaveBeenCalledWith('blur event');
});
