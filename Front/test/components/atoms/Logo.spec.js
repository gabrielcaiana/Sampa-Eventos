import { mount } from '@vue/test-utils'
import Logo from '@/components/atoms/Logo.vue'

describe('Button', () => {
  const wrapper = mount(Logo)

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
