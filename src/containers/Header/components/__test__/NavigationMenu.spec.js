import React from 'react'
import { shallow } from 'enzyme'
import { NavigationMenu } from '../NavigationMenu'
import { assert } from 'chai'

const context = {
  claims: {
    'centreSearch': true,
    'authorizedStaff': true,
    'centre': true,
    'soc': true,
    'studentRegistrationData': true,
    'userService': true,
    'alternativeTestOrderFormat': true
  }
}

describe('NavigationMenu', () => {
  it('NavigationMenu renders subcomponents', () => {
    const wrapper = shallow(<NavigationMenu />, { context })
    assert.isDefined(NavigationMenu)
  })
})
