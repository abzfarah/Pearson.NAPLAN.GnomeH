import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import Header from '../../components/common/Header';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('Header', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Header>
        testing
      </Header>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
