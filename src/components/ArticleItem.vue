<template>
  <div class="articleItem">
    <img class="thumb" :src="item.thumb">
    <div class="title">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    item: Object,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
.articleItem {
  padding: 12px;
  margin-bottom: 12px;
  background-color: #fff;
  display: flow-root;

  .thumb {
    float: left;
    display: block;
    margin-right: 12px;
  }

  .title {
    float: none;
  }
}
</style>
