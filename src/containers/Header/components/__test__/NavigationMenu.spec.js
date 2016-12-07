import React from 'react'
import { shallow } from 'enzyme'
import { NavigationMenu } from '../NavigationMenu'

const context = {
  claims: { 'centreSearch': true }
}

describe('HeaderContainer', () => {
  it('HeaderContainer renders subcomponents', () => {
    const enzymeWrapper = shallow(<NavigationMenu />, { context })
    expect(enzymeWrapper.find('Header').length).toEqual(3)
  })
})
