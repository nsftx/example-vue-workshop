<template>
  <router-link tag="div"
               class="articleItem"
               :to="{ name: 'article', params: { id: item.id }}">
    <img class="thumb"
         :src="item.thumb">
    <div class="author">{{item.author}}</div>
    <div class="title">{{item.title}}</div>
    <div class="date">{{item.date}}</div>
  </router-link>
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
  position: relative;
  cursor: pointer;

  .author {
    position: absolute;
    left: 150px;
    background-color: #ccc;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 14px;
  }

  .thumb {
    float: left;
    display: block;
    margin-right: 12px;
  }

  .title {
    font-size: 18px;
    padding-top: 28px;
    line-height: 24px;
    height: 72px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .date {
    position: absolute;
    left: 150px;
    bottom: 12px;
    background-color: #f0f0f0;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 14px;
  }
}
</style>
