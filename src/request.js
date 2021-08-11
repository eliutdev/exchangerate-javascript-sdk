const axios = require("axios");

class ExchangerateRequest {
  // serialize javascript object to query string
  serialize(object) {
    return new URLSearchParams(object).toString();
  }
  prepareRequest(url, method, query) {
    return {
      url: `${url}?${query}`,
      method: method,
    };
  }
  sendRequest(request) {
    return axios(request).then((response) => {
      return response.data;
    });
  }
}

module.exports = ExchangerateRequest;
