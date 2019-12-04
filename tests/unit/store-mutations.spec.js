import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import types from '@/store/mutationTypes';

import activeArticleMock from './__mocks__/activeArticle';
import activeArticleStateMock from './__mocks__/addActiveArticleState';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('State mutations', () => {
  const store = new Vuex.Store({
    state,
    mutations,
    getters,
  });

  const localVuexState = store.state;

  it('tests SET_ACTIVE_ARTICLE mutation', () => {
    store.commit(types.SET_ACTIVE_ARTICLE, activeArticleMock);

    expect(activeArticleStateMock).toEqual(localVuexState);
  });
});
