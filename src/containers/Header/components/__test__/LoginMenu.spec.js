import React from 'react'
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import { LoginMenu } from '../LoginMenu'
import { assert } from 'chai'
import sinon from 'sinon'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme()

describe('LoginMenu', () => {
  let wrapper, status

  beforeEach(() => {
    status = {
      loggedIn: true,
      onLogin: jest.fn(),
      onLogout: jest.fn()
    }
    wrapper = shallow(<LoginMenu onClick={status.onLogout} status={status} />)
  })

  it('renders correct menu items for an admin user', () => {

    wrapper.find('List').first().simulate('click')
    expect(status.onLogout).toHaveBeenCalled()
  })
})
