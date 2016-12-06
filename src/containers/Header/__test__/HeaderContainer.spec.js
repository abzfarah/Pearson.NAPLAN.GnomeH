import React from 'react'
import { shallow } from 'enzyme'
import { HeaderContainer } from '../HeaderContainer'

const context = {
  claims: { 'centreSearch': true }
}

describe('HeaderContainer', () => {
  it('HeaderContainer renders subcomponents', () => {
    const enzymeWrapper = shallow(<HeaderContainer />, { context })
    expect(enzymeWrapper.find('Header').length).toEqual(3)
  })
})
