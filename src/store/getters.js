import { find } from 'lodash';

export default {
  articles: state => state.articles,
  activeArticle: state => state.activeArticle,
  articleById: state => id => find(state.articles, { id }),
  isArticleLiked: state => (id) => {
    const { articleLikes } = state;
    return articleLikes[`article${id}`];
  },
  articleLikes: state => state.articleLikes,
};
