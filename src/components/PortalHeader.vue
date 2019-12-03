<template>
  <div class="header"
       :style="style">
    <h1 to="/">{{ portalTitle }}</h1>
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
    portalTitle() {
      return (this.$route.meta && this.$route.meta.title) || this.title;
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
