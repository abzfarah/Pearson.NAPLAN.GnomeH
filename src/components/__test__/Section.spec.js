// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import Section from '../Section';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('Section', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Section />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
