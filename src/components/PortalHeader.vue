<template>
  <div class="header">
    <slot name="mainTitle"><h1>Best Vue.js Portal</h1></slot>
    <slot name="subTitle"><h3>News that is fit to print</h3></slot>
  </div>
</template>

<script>
export default {
  name: 'PortalHeader',
  props: {},
};
</script>

<style lang="scss">
.header {
  background-color: #fff;
  padding: 16px;

  h1, span {
    padding: 0;
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 24px;
  }

  span {
    display: block;
    font-size: 14px;
  }
}
</style>
