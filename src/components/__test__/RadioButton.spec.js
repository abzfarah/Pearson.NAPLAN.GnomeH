// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import RadioButton from '../RadioButton';

describe('RadioButton', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <RadioButton id="choice" name="choice" label="Choice" checked={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
