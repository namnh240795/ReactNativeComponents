import React from 'react';
import renderer from 'react-test-renderer';
import Box from '.';

test('Render empty box', () => {
  const tree = renderer.create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render GOLBAT_120 box', () => {
  const tree = renderer.create(<Box background={'GOLBAT_120'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render custom color square 40 box', () => {
  const tree = renderer
    .create(<Box background="#ffffff" square={40} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render DITTO_140 circle 40 box', () => {
  const tree = renderer
    .create(<Box background="DITTO_140" circle={40} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding all box', () => {
  const tree = renderer.create(<Box padding={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding hv box', () => {
  const tree = renderer.create(<Box padding={[0, 2]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render padding width array box', () => {
  const tree = renderer.create(<Box padding={[0, 2, 0, 4]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin undefined box', () => {
  const tree = renderer.create(<Box margin={undefined} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin all box', () => {
  const tree = renderer.create(<Box margin={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin hv box', () => {
  const tree = renderer.create(<Box margin={[0, 2]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render margin with number array box', () => {
  const tree = renderer.create(<Box margin={[0, 2, 0, 4]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render border all box', () => {
  const tree = renderer.create(<Box borderRadius={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render flex 1 box', () => {
  const tree = renderer.create(<Box flex={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render flexWrap box', () => {
  const tree = renderer.create(<Box flexWrap="wrap" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render width 100 box', () => {
  const tree = renderer.create(<Box width={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render height 100 box', () => {
  const tree = renderer.create(<Box height={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render min width 100 box', () => {
  const tree = renderer.create(<Box minWidth={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render min height 100 box', () => {
  const tree = renderer.create(<Box minHeight={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render pressable box', () => {
  const tree = renderer.create(<Box pressable />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render align box', () => {
  const tree = renderer
    .create(
      <Box
        align="center"
        alignSelf="center"
        justify="center"
        flexDirection="row"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
