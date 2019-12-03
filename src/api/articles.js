
import http from './http';

export default {
  loadArticles() {
    return http.get('sources/workshop-articles').then((result) => {
      const articles = result.data['workshop-articles'].items;

      return articles;
    });
  },
  loadArticle(id) {
    return http.get(`sources/workshop-articles/${id}`).then((result) => {
      const articles = result.data['workshop-articles'].items;

      return articles;
    });
  },
};
