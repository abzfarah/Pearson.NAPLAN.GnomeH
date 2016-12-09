import React from 'react'
import { shallow } from 'enzyme'
import { AppContainer } from '../AppContainer'

describe('AppContainer', () => {
  let _component

  beforeEach(() => {
    _component = AppContainer.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof HomeRoute).to.equal('object')
  })

})
