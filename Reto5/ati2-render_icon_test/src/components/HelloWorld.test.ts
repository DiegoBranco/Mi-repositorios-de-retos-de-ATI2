/*
* @vitest-environment jsdom
*/
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { describe, it, expect } from 'vitest'

describe('HelloWorld Icons', () => {
  it('reads icon prop from v-btn components', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        // replace with a simple stub that preserves props (or register real VBtn)
        stubs: { 'v-btn': true }
      }
    })
    const iconButtons = wrapper.findAll('[data-test="icon-buttons"]') // stub still yields attributes
    const expectedIcons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']

    expect(iconButtons.length).toBe(expectedIcons.length)
    iconButtons.forEach((btnWrapper, index) => {
      expect(btnWrapper.attributes('icon')).toBe(expectedIcons[index])
    })
  })
})
