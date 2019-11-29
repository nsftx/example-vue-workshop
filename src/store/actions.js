import api from '@/api';
import types from './mutationTypes';

export default {
  loadArticles({ commit }) {
    api.articles.loadArticles().then((result) => {
      commit(types.SET_ARTICLES, result);
    });
  },
  loadArticle({ commit }, id) {
    api.articles.loadArticles(id).then((result) => {
      commit(types.SET_ARTICLES, result);
    });
  },
};
