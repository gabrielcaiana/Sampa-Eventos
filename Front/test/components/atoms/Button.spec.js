import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button.vue'

describe('Button', () => {
  const wrapper = mount(Button, {
    propsData: {
      text: 'Button',
      color: 'button-default',
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
