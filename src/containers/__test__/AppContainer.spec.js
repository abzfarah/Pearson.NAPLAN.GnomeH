import React from 'react'
import { shallow } from 'enzyme'
import { AppContainer } from '../AppContainer'

describe('AppContainer', () => {
  it('AppContainer renders subcomponents', () => {
    const enzymeWrapper = shallow(<AppContainer /> )
    expect(enzymeWrapper.find('App').length).toEqual(1)
  })
})
