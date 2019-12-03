<template>
  <a class="articleItem"
     :href="getLink(item.id)">
    <img class="thumb"
         :src="item.thumb"
         v-show="hasThumb">
    <div class="author">{{item.author}}</div>
    <div class="title">{{item.title}}</div>
    <div class="date">{{item.date}}</div>
  </a>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    item: {
      type: Object,
      required: true,
      validator(value) {
        return value.title.length > 0;
      },
    },
  },
  computed: {
    hasThumb() {
      return this.item.thumb.length > 0;
    },
  },
  methods: {
    getLink(id) {
      return `/article/${id}`;
    },
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
  text-decoration: none;
  color: black;

  .author {
    position: absolute;
    left: 150px;
    background-color: #ccc;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 14px;
  }

  .thumb {
    width: 130px;
    height: 130px;
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
