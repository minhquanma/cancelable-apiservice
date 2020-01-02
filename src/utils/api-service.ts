const url = "http://slowwly.robertomurray.co.uk/delay/2000/url/https://jsonplaceholder.typicode.com/";

import axios, { AxiosResponse, CancelToken } from "axios";

function createApiService() {
  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export const apiService = {
  get: async function(url: string, cancelToken: CancelToken, params = {}) {
    return createApiService()
      .get(url, { params, cancelToken })
      .then(({ data: response }: AxiosResponse) => {
        return response;
      }).catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Is canceled: ' + url);
        }
      });
  },

  post: function() {}
};
