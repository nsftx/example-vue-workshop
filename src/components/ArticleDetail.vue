<template>
  <div class="articleDetail"
       v-if="article">
    <div class="title">{{article.title}}</div>
    <div class="text"
         v-html="article.text"></div>
    <div class="date">{{article.date}}</div>
    <button class="like"
            :class="{ active: isLiked }"
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
import { toNumber } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ArticleDetail',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      article: 'activeArticle',
      isArticleLiked: 'isArticleLiked',
      articleLikes: 'articleLikes',
    }),
    articleId() {
      return toNumber(this.$route.params.id);
    },
    isLiked() {
      return this.isArticleLiked(this.articleId);
    },
    message() {
      return this.isLiked ? 'Thank you!' : null;
    },
  },
  methods: {
    ...mapActions([
      'loadArticle',
      'updateArticleLike',
    ]),

    like() {
      this.updateArticleLike({
        id: this.articleId,
        liked: !this.isLiked,
      });
    },
  },
  created() {
    this.loadArticle(this.articleId);
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
