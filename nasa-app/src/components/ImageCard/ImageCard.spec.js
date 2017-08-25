import React from 'react';
import renderer from 'react-test-renderer';
import ImageCard from './ImageCard';

describe('ImageCard Component', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <ImageCard />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given imageData', () => {
    const imageData = {
      title: 'test title',
      url: 'test url',
      explanation: 'test explanation',
      date: 'test date',
      copyright: 'test copyright'
    };

    it('matches snapshot', () => {
      const component = renderer.create(
        <ImageCard imageData={imageData} />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});