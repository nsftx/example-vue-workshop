import { find } from 'lodash';

export default {
  articles: state => state.articles,
  activeArticle: state => state.activeArticles,
  articleById: state => id => find(state.articles, { id }),
  articleLike: state => id => state.articleLikes[`article${id}`],
};
