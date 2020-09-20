// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '..';

test('renders correctly', () => {
  const tree = renderer.create(<WelcomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
