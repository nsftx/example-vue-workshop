import api from '@/api';
import types from './mutationTypes';

export default {
  loadArticles({ commit }) {
    api.articles.loadArticles().then((result) => {
      commit(types.SET_ARTICLES, result);
    });
  },
  loadArticle({ commit }, id) {
    api.articles.loadArticle(id).then((result) => {
      commit(types.SET_ACTIVE_ARTICLE, result[0]);
    });
  },
  updateArticleLike({ commit }, data) {
    commit(types.SET_ARTICLE_LIKE, data);
  },
};
