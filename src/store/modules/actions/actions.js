export default {
  DELETE_FROM_COMPANIES({ commit }, symbol) {
    commit('DELETE_COMPANY', symbol);
  },
  SET_INPUT_VALUE({ commit }, value) {
    commit('UPDATE_INPUT_VALUE', value);
  },
};
