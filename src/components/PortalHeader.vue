<template>
  <div class="header"
       :style="style">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PortalHeader',
  props: {
    title: String,
  },
  computed: {
    style() {
      return {
        backgroundColor: 'white',
      };
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
