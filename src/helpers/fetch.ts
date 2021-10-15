import axios, { AxiosRequestConfig, Method } from 'axios';
import * as url from 'url';

export default {
  // serialize javascript object to query string
  serialize(object: any) {
    return new URLSearchParams(object).toString();
  },
  prepareRequest(uri: string, method: Method | undefined, query: string) {
    return {
      url: `${uri}?${query}`,
      method,
    };
  },
  sendRequest(request: AxiosRequestConfig) {
    return axios(request).then((response) => {
      return response.data;
    });
  },
};
