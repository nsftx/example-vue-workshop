import http from './http';

export default {
  loadArticles() {
    return http.get('/sources/workshop-articles').then((result) => {
      const data = result.data['workshop-articles'];
      console.log('Articles response');
      return data;
    });
  },
  loadArticle(id) {
    return http.get(`/sources/workshop-articles/${id}`).then((result) => {
      const data = result.data['workshop-articles'];
      return data;
    });
  },
};
