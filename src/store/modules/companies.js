import commonActions from './actions/actions';
import apiRequests from './actions/api-requests';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = { ...commonActions, ...apiRequests };

export default {
  state: () => ({
    companies: [],
    inputValue: '',
  }),
  getters: {
    ...getters,
  },

  mutations: {
    ...mutations,
  },

  actions: {
    ...actions,
  },
};
