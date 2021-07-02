export default {
  SET_COMPANIES_TO_STATE: (state, company) => {
    state.companies = company;
  },
  DELETE_COMPANY: (state, symbol) => {
    state.companies = state.companies.filter((el) => el.symbol !== symbol);
  },
  UPDATE_INPUT_VALUE: (state, value) => {
    state.inputValue = value;
  },
};
