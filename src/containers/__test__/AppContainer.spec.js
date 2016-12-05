import React from 'react'
import { shallow } from 'enzyme'
jest.dontMock('../AppContainer')
import AppContainer from '../AppContainer'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('AppContainer', () => {

  it('should render self and subcomponents', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const enzymeWrapper = shallow(<AppContainer />)

    expect(enzymeWrapper.find('div').hasClass('grommetux-app')).toBe(true)
  })
})
