<template>
  <a class="articleItem"
     :href="getLink(item.id)">
    <img class="thumb"
         :src="item.thumb">
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
  data() {
    return {
      interval: null,
    };
  },
  methods: {
    getLink(id) {
      return `/article/${id}`;
    },
  },
  mounted() {
    if (this.item.id !== 1) return;

    this.interval = setInterval(() => {
      console.log('Here is our interval!');
    }, 2000);
  },
  beforeDestroy() {
    console.log('=> beforeDestroy Hook', this.item.title);
  },
  destroyed() {
    if (this.interval) {
      clearInterval(this.interval);
      console.log(this.interval);
      this.interval = null;
    }

    console.log('=> destroyed Hook', this.item.title);
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
