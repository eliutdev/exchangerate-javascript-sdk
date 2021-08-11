import { ExchangerateRequest } from "./helpers/exchangerateRequest";

interface ExchangerateRequestParams {
  from?: string;
  to?: string;
  date?: string;
  symbols?: Array<string>,
  amount?: number,
  places?: number,
  format?: string,
  source?: string,
  callback?: Function
}

export class Exchangerate extends ExchangerateRequest {
  requestURL = "https://api.exchangerate.host";

  /**
   * Latest Rates
   * @param {object} parameters - Parameters for the request
   * @param {string} parameters.base - Base currency
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {number} parameters.amount - Amount to convert
   * @param {function} parameters.callback - Callback function
   * @param {number} parameters.places - Number of decimal places
   * @param {string} parameters.format - Format of the response
   * @param {string} parameters.source - Source of the exchange rate
   */
  async latest(parameters: ExchangerateRequestParams): Promise<any> {
    try {
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(
        `${this.requestURL}/latest`,
        "GET",
        query
      );
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      throw error;
    }
  }
  /**
   * Convert currency
   * @param {object} parameters - Parameters for the request
   * @param {string} parameters.from - The three-letter currency code of the currency you would like to convert from.
   * @param {string} parameters.to - The three-letter currency code of the currency you would like to convert to.
   * @param {string} parameters.date - Date of the exchange rate you would like to get.
   * @param {string} parameters.base - Base currency
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {number} parameters.amount - Amount to convert
   * @param {function} parameters.callback - Callback function
   * @param {number} parameters.places - Number of decimal places
   * @param {string} parameters.format - Format of the response
   * @param {string} parameters.source - Source of the exchange rate
   */
  async convert(parameters: ExchangerateRequestParams): Promise<any> {
    try {
      // from and to are required
      if (!parameters.from || !parameters.to) {
        throw new Error("from and to are required");
      }
      // date format must be YYYY-MM-DD
      if (parameters.date && !/^\d{4}-\d{2}-\d{2}$/.test(parameters.date)) {
        throw new Error("date must be in YYYY-MM-DD format");
      }
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(
        `${this.requestURL}/convert`,
        "GET",
        query
      );
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      throw error;
    }
  }
}
