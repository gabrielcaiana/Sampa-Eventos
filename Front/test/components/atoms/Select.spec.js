import { mount } from '@vue/test-utils'
import Select from '@/components/atoms/Select.vue'

describe('Select', () => {
  const wrapper = mount(Select, {
    propsData: {
      text: 'select',
      name: 'select',
      items: ['item 1', 'item 2'],
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
