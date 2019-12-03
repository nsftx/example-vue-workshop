<template>
  <div class="articleDetail">
    <div class="title">{{article.title}}</div>
    <div class="text"
         v-html="article.text"></div>
    <div class="date">{{article.date}}</div>
    <button class="like"
            :class="{ active: isActiveLike }"
            @click="like()">
      Like
    </button>
    <span class="message"
          v-if="message">
      {{message}}
    </span>
  </div>
</template>

<script>
import { find, toNumber } from 'lodash';
import articlesMock from '@/utility/articlesMock';

export default {
  name: 'ArticleDetail',
  data() {
    return {
      isActiveLike: false,
      message: null,
    };
  },
  computed: {
    articleId() {
      return toNumber(this.$route.params.id);
    },
    article() {
      return find(articlesMock, { id: this.articleId });
    },
  },
  watch: {
    isActiveLike() {
      this.message = 'Thank you!';
    },
  },
  methods: {
    like() {
      this.isActiveLike = true;
    },
  },
};
</script>

<style lang="scss">
.articleDetail {
  margin: 12px;
  padding: 12px;
  background-color: #fff;
  position: relative;

  .title {
    font-size: 26px;
  }

  .message {
    padding: 6px;
    font-weight: bold;
  }

  .like {
    background-color: lightskyblue;
    color: white;
    border-radius: 2px;
    border: 0;
    padding: 4px 8px;
    margin-top: 12px;
    cursor: pointer;

    &.active {
      background-color: blue;
    }
  }
}
</style>
