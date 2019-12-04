export default {
  articles: [],
  activeArticle: {
    id: 1,
    title: 'This is the Most Important Feature in Vue',
    author: 'Michael Thiessen',
    date: '2019-11-15',
    thumb: 'images/avatar1.jpeg',
    category: 'features',
    highlighted: true,
  },
  articleLikes: {},
  language: 'hr-HR',
  translations: {
    'hr-HR': {
      likeLabel: 'Sviđa mi se',
      thankYouLabel: 'Hvala!',
      homePageLabel: 'Naslovnica',
      articlesLabel: 'Članci',
      contactLabel: 'Kontakt',
    },
    'bs-BA': {
      likeLabel: 'Sviđa mi se',
      thankYouLabel: 'Hvala!',
      homePageLabel: 'Naslovnica',
      articlesLabel: 'Članci',
      contactLabel: 'Kontakt',
    },
  },
};
