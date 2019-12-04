<template>
  <div class="articleDetail">
    <div class="title">{{article.title}}</div>
    <div class="text"
         v-html="article.text"></div>
    <div class="date">{{article.date}}</div>
    <button class="like"
            :class="{ active: isArticleLiked }"
            @click="toggleLike()">
      {{translations.likeLabel}}
    </button>
    <span class="message"
          v-if="message">
      {{message}}
    </span>
  </div>
</template>

<script>
import { find, toNumber } from 'lodash';
import { mapActions, mapGetters } from 'vuex';
import articlesMock from '@/utility/articlesMock';
import { translatable } from '@/mixins';

export default {
  name: 'ArticleDetail',
  mixins: [
    translatable,
  ],
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'articleLike',
    ]),
    articleId() {
      return toNumber(this.$route.params.id);
    },
    article() {
      return find(articlesMock, { id: this.articleId });
    },
    isArticleLiked() {
      return this.articleLike(this.articleId);
    },
    message() {
      return this.isArticleLiked ? this.translations.thankYouLabel : '';
    },
  },
  methods: {
    ...mapActions([
      'setArticleLike',
    ]),
    toggleLike() {
      this.setArticleLike({
        isLiked: !this.isArticleLiked,
        id: this.articleId,
      });
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
