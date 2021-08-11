import axios, { AxiosRequestConfig, Method } from "axios";
import * as url from "url";

export class ExchangerateRequest {
  // serialize javascript object to query string
  serialize(object: any) {
    return new URLSearchParams(object).toString();
  }
  prepareRequest(url: string, method: Method | undefined, query: string) {
    return {
      url: `${url}?${query}`,
      method: method,
    };
  }
  sendRequest(request: AxiosRequestConfig) {
    return axios(request).then((response) => {
      return response.data;
    });
  }
}
