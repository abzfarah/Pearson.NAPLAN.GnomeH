import React from 'react'
import { shallow } from 'enzyme'
import { AppContainer } from '../AppContainer'



const context = { claims: { 'centreSearch': true } }



describe('AppContainer', () => {
  it('AppContainer renders subcomponents', () => {
    const enzymeWrapper = shallow(<AppContainer />, { context })
    expect(enzymeWrapper.find('App').length).toEqual(1)
  })
})
