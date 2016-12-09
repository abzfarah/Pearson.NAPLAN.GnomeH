import React from 'react'
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import { NavigationMenu } from '../NavigationMenu'
import { assert } from 'chai'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme()

describe('NavigationMenu (admin)', () => {
  let wrapper
  beforeEach(() => {
    const claims = { 'centreSearch': true } // Value doesn't matter, as long as it is defined'
    wrapper = mount(<NavigationMenu />, { // muiTheme context object required for all material-ui components
      context: { muiTheme, claims }, childContextTypes: { muiTheme: React.PropTypes.object }
    })
  })

  it('renders correct menu items for an admin user', () => {
    expect(wrapper.find('List').length).toEqual(1)
    expect(wrapper.find('Paper').length).toEqual(1)
    expect(wrapper.find('Menu').length).toEqual(1)
    expect(wrapper.find('MenuItem').length).toEqual(4)
  })
})
