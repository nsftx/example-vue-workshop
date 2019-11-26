<template>
  <div class="articleDetail"
       v-if="article">
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
import localStorage from '@/utility/localStorage';

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
    articleStorageKey() {
      return `articleLike${this.articleId}`;
    },
    article() {
      return find(articlesMock, { id: this.articleId });
    },
  },
  methods: {
    isLiked() {
      return localStorage.getItem(this.articleStorageKey);
    },
    like() {
      if (this.isLiked()) {
        localStorage.removeItem(this.articleStorageKey);
      } else {
        localStorage.setItem(this.articleStorageKey, true);
      }

      this.isActiveLike = this.isLiked();
    },
  },
  watch: {
    isActiveLike(value) {
      this.message = value ? 'Thank you!' : null;
    },
  },
  mounted() {
    this.isActiveLike = this.isLiked();
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
