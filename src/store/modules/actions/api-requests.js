import axios from 'axios';

export default {
  GET_COMPANIES_FROM_API({ commit }, symbol) {
    return axios(
      `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=25285b6eb71bd12a07ecf1a52ae9fb29`,
      {
        method: 'GET',
      },
    )
      .then((response) => {
        commit('SET_COMPANIES_TO_STATE', response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
