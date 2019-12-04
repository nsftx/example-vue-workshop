<template>
  <div class="categories">
    <div class="category"
         v-for="(category, index) in categoriesList"
         :key="index"
         @click="setCategory(category)">
      {{category}}
    </div>
  </div>
</template>
<script>
const defaultCategory = 'all';

export default {
  name: 'CategoryFilter',
  props: {
    categories: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  computed: {
    categoriesList() {
      const { categories } = this;
      categories.unshift(defaultCategory);

      return categories;
    },
  },
  methods: {
    setCategory(category) {
      this.$emit('change', category);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.categories {
  display: flow-root;
  margin-bottom: 12px;
}

.category {
  float: left;
  width: (100 / 3) * 1%;
  text-align: center;
  background-color: whitesmoke;
  cursor: pointer;
}
</style>
