import React from 'react'
import moxios from 'moxios'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetch #1' }, { name: 'Fetch #2' }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', done => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  )

  wrapper.find('.fetch-comments').simulate('click')

  moxios.wait(() => {
    wrapper.update()
    expect(wrapper.find('li').length).toEqual(2)

    done()
    wrapper.unmount()
  })
})
