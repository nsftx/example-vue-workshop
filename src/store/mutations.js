import Vue from 'vue';
import types from './mutationTypes';

export default {
  [types.SET_ACTIVE_ARTICLE](state, payload) {
    state.activeArticle = payload;
  },
  [types.SET_ARTICLES](state, payload) {
    state.articles = payload;
  },
  [types.SET_ARTICLE_LIKE](state, payload) {
    Vue.set(state.articleLikes, `article${payload.id}`, payload.isLiked);
  },
};
