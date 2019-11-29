<template>
  <div class="categories">
    <div class="category"
          v-for="(category, index) in categories"
          :key="category"
          @click="changeCategory(category)">
      {{index + 1}}. {{category}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesFilter',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeCategory(category) {
      this.$emit('change', category);
    },
  },
};
</script>
