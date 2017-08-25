import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from './Home';

describe('Home Component', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <Home />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when isReady=true', () => {
    const component = renderer.create(
      <Home isReady={true} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when isReady=true and images', () => {
    const images = {
      collection: {}
    }
    const component = renderer.create(
      <Home isReady={true} images={images}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});