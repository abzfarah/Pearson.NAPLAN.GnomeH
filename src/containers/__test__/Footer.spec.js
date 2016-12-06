import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../Footer'

describe('Footer', () => {
  it('Footer renders subcomponents', () => {
    const enzymeWrapper = shallow(<Footer />)
    expect(enzymeWrapper.find('Footer').length).toEqual(1)
  })
})
