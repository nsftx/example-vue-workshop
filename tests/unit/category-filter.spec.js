import { shallowMount } from '@vue/test-utils';
import CategoryFilter from '../../src/components/CategoryFilter.vue';

describe('CategoryFilter.vue', () => {
  it('category filter change is emitted', () => {
    const wrapper = shallowMount(CategoryFilter, {
      propsData: {
        categories: ['all', 'some'],
      },
    });

    const category = 'all';
    wrapper.vm.setCategory(category);

    expect(wrapper.emitted().change).toBeTruthy();
  });
});
