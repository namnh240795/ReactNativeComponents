import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

test('Render padding all button', () => {
  const tree = renderer.create(<Button title={''} padding={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding hv button', () => {
  const tree = renderer.create(<Button title={''} padding={[0, 2]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding width array button', () => {
  const tree = renderer
    .create(<Button title={''} padding={[0, 2, 0, 4]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin all button', () => {
  const tree = renderer.create(<Button title={''} margin={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin hv button', () => {
  const tree = renderer.create(<Button title={''} margin={[0, 2]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin width array button', () => {
  const tree = renderer
    .create(<Button title={''} margin={[0, 2, 0, 4]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render type button default', () => {
  const tree = renderer.create(<Button title={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render type button brand 01', () => {
  const tree = renderer.create(<Button title={''} type="brand01" />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Render type button brand 03', () => {
  const tree = renderer.create(<Button title={''} type="brand03" />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Render type button black 05', () => {
  const tree = renderer.create(<Button title={''} type="black05" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render size button medium', () => {
  const tree = renderer.create(<Button title={''} size="medium" />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Render size button large', () => {
  const tree = renderer.create(<Button title={''} size="large" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render button disable', () => {
  const tree = renderer.create(<Button title={''} disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button click event', () => {
  const onPressButton = jest.fn();
  const tree = renderer.create(
    <Button title={''} onPress={onPressButton}>
      Click here!
    </Button>,
  );
  expect(tree).toMatchSnapshot();
});
