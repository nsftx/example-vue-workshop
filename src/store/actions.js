import api from '@/api';
import types from './mutationTypes';

export default {
  loadArticles({ commit }) {
    api.articles.loadArticles().then((data) => {
      commit(types.SET_ARTICLES, data.items);
    });
  },
  loadArticle({ commit }, id) {
    api.articles.loadArticle(id).then((data) => {
      commit(types.SET_ACTIVE_ARTICLE, data.items);
    });
  },
};
