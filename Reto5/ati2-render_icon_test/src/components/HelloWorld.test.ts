/*
* @vitest-environment jsdom
*/
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { describe, it } from 'vitest'


describe('HelloWorld Icons', () => {
  it('renders the correct icon based on the prop', () => {
    const wrapper = mount(HelloWorld)
  })
})