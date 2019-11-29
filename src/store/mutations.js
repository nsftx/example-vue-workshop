import types from './mutationTypes';

export default {
  [types.SET_ACTIVE_ARTICLE](state, payload) {
    state.activeArticle = payload;
  },
  [types.SET_ARTICLES](state, payload) {
    state.articles = payload;
  },
};
