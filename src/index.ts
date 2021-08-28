import { ExchangerateRequest } from './helpers/exchangerateRequest';

interface ExchangerateRequestParams {
  from?: string;
  to?: string;
  date?: string;
  /* tslint:disable */
  symbols?: Array<string>;
  amount?: number;
  places?: number;
  format?: string;
  source?: string;
  callback?: () => void;
}

export class Exchangerate extends ExchangerateRequest {
  requestURL = 'https://api.exchangerate.host';

  /**
   * Get the latest foreign exchange reference rates.
   * @param {object} parameters - Parameters for the request
   * @param {string} parameters.base - Base currency
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {number} parameters.amount - Amount to convert
   * @param {function} parameters.callback - Callback function
   * @param {number} parameters.places - Number of decimal places
   * @param {string} parameters.format - Format of the response
   * @param {string} parameters.source - Source of the exchange rate
   */
  async latest(parameters?: ExchangerateRequestParams): Promise<any> {
    try {
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/latest`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  /**
   * Currency conversion endpoint, can be used to convert any amount from one currency to another.
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
        throw new Error('from and to are required');
      }
      // date format must be YYYY-MM-DD
      if (parameters.date && !/^\d{4}-\d{2}-\d{2}$/.test(parameters.date)) {
        throw new Error('date must be in YYYY-MM-DD format');
      }
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/convert`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  /**
   * Historical rates are available for most currencies all the way back to the year of 1999.
   * @param {string} date - Date of the exchange rate you would like to get.
   * @param {object} parameters - Parameters for the request
   * @param {string} parameters.base - Base currency
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {number} parameters.amount - Amount to convert
   * @param {function} parameters.callback - Callback function
   * @param {number} parameters.places - Number of decimal places
   * @param {string} parameters.format - Format of the response
   * @param {string} parameters.source - Source of the exchange rate
   */
  async historicalRates(date: string, parameters?: Omit<ExchangerateRequestParams, 'from' | 'to'>): Promise<any> {
    try {
      // date format must be YYYY-MM-DD
      if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error('date must be in YYYY-MM-DD format');
      }
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/${date}`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  /**
   * Timeseries endpoint are for daily historical rates between two dates of your choice, with a maximum time frame of 366 days.
   * @param {string} startDate - The start date of your preferred timeframe.
   * @param {string} endDate - The end date of your preferred timeframe.
   * @param {object} parameters - Parameters for the request
   * @param {string} parameters.base - Base currency
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {number} parameters.amount - Amount to convert
   * @param {function} parameters.callback - Callback function
   * @param {number} parameters.places - Number of decimal places
   * @param {string} parameters.format - Format of the response
   * @param {string} parameters.source - Source of the exchange rate
   */
  async timeseries(
    startDate: string,
    endDate: string,
    parameters?: Omit<ExchangerateRequestParams, 'from' | 'to'>,
  ): Promise<any> {
    try {
      // startDate and endDate format must be YYYY-MM-DD
      if (startDate && !/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
        throw new Error('startDate must be in YYYY-MM-DD format');
      }
      if (endDate && !/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
        throw new Error('endDate must be in YYYY-MM-DD format');
      }
      // endDate must be after startDate
      if (endDate && startDate && new Date(endDate) < new Date(startDate)) {
        throw new Error('endDate must be after startDate');
      }
      // serialize the parameters
      const query = this.serialize({ ...parameters, start_date: startDate, end_date: endDate });
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/timeseries`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  /**
   * Using the fluctuation endpoint you will be able to retrieve information about how currencies fluctuate on a day-to-day basis.
   * @param {string} startDate - The start date of your preferred timeframe.
   * @param {string} endDate - The end date of your preferred timeframe.
   * @param {object} parameters - Parameters for the request
   * @param {string} parameters.base - Base currency
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {number} parameters.amount - Amount to convert
   * @param {function} parameters.callback - Callback function
   * @param {number} parameters.places - Number of decimal places
   * @param {string} parameters.format - Format of the response
   * @param {string} parameters.source - Source of the exchange rate
   */
  async fluctuation(
    startDate: string,
    endDate: string,
    parameters?: Omit<ExchangerateRequestParams, 'from' | 'to'>,
  ): Promise<any> {
    try {
      // startDate and endDate format must be YYYY-MM-DD
      if (startDate && !/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
        throw new Error('startDate must be in YYYY-MM-DD format');
      }
      if (endDate && !/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
        throw new Error('endDate must be in YYYY-MM-DD format');
      }
      // endDate must be after startDate
      if (endDate && startDate && new Date(endDate) < new Date(startDate)) {
        throw new Error('endDate must be after startDate');
      }
      // serialize the parameters
      const query = this.serialize({ ...parameters, start_date: startDate, end_date: endDate });
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/fluctuation`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  /**
   * API comes with a constantly updated endpoint returning all available currencies.
   * @param {object} parameters - Parameters for the request
   * @param {function} parameters.callback - Callback function
   * @param {string} parameters.format - Format of the response
   */
  async symbols(parameters?: Pick<ExchangerateRequestParams, 'callback' | 'format'>): Promise<any> {
    try {
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/symbols`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  /**
   * Our accurate EU VAT information API simplifies in and around the European Union.
   * @param {object} parameters - Parameters for the request
   * @param {Array} parameters.symbols - Symbols to convert
   * @param {function} parameters.callback - Callback function
   * @param {string} parameters.format - Format of the response
   */
  async EUVATRates(parameters?: Pick<ExchangerateRequestParams, 'symbols' | 'callback' | 'format'>): Promise<any> {
    try {
      // serialize the parameters
      const query = this.serialize(parameters);
      // prepare the request
      const request = this.prepareRequest(`${this.requestURL}/vat_rates`, 'GET', query);
      // send the request
      return this.sendRequest(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
