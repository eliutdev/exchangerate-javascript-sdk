interface ExchangerateRequestParams {
  from?: string;
  to?: string;
  date?: string;
  symbols?: Array<string>;
  amount?: number;
  places?: number;
  format?: string;
  source?: string;
  callback?: () => void;
}
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
export declare const latest: (parameters?: ExchangerateRequestParams) => Promise<any>;
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
export declare const convert: (parameters: ExchangerateRequestParams) => Promise<any>;
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
export declare const historicalRates: (
  date: string,
  parameters?: Omit<ExchangerateRequestParams, 'from' | 'to'>,
) => Promise<any>;
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
export declare const timeseries: (
  startDate: string,
  endDate: string,
  parameters?: Omit<ExchangerateRequestParams, 'from' | 'to'>,
) => Promise<any>;
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
export declare const fluctuation: (
  startDate: string,
  endDate: string,
  parameters?: Omit<ExchangerateRequestParams, 'from' | 'to'>,
) => Promise<any>;
/**
 * API comes with a constantly updated endpoint returning all available currencies.
 * @param {object} parameters - Parameters for the request
 * @param {function} parameters.callback - Callback function
 * @param {string} parameters.format - Format of the response
 */
export declare const symbols: (parameters?: Pick<ExchangerateRequestParams, 'callback' | 'format'>) => Promise<any>;
/**
 * Our accurate EU VAT information API simplifies in and around the European Union.
 * @param {object} parameters - Parameters for the request
 * @param {Array} parameters.symbols - Symbols to convert
 * @param {function} parameters.callback - Callback function
 * @param {string} parameters.format - Format of the response
 */
export declare const EUVATRates: (
  parameters?: Pick<ExchangerateRequestParams, 'symbols' | 'callback' | 'format'>,
) => Promise<any>;
