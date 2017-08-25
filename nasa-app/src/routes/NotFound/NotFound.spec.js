import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <NotFound />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});