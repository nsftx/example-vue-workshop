<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PortalHeader',
  props: {
    title: {
      type: String,
      default: 'Moj portal',
      required: true,
      validator(value) {
        return value.length >= 5;
      },
    },
  },
};
</script>

<style lang="scss">
.header {
  background-color: #fff;
  padding: 16px;

  h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 24px;
  }
}
</style>
