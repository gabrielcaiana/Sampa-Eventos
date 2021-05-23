import { mount } from '@vue/test-utils'
import Input from '@/components/atoms/Input.vue'

describe('Input', () => {
  const wrapper = mount(Input, {
    propsData: {
      type: 'email',
      text: 'Email',
      placeholder: 'Informe seu email',
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
