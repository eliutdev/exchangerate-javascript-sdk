## Installation

```bash
npm i exchangerate-javascript-sdk
```

## Usage

```javascript
// Only import what you need
import { latest, convert, historicalRates, timeseries, fluctuation, symbols, EUVATRates } from "exchangerate-javascript-sdk";

// Latest Rates.
latest().then((data) => console.log(data)); 

// Output: {motd: Object, success: true, base: "EUR", date: "2021-08-28", rates: Object}

// Currency conversion
convert({ from: "USD", to: "EUR", amount: 18 })
  .then((data) => console.log(data));
  
/* Output: {
  motd: Object
  success: true
  query: Object
  info: Object
  historical: false
  date: "2021-08-28"
  result: 15.259822
} */

// Currency conversion
convert({ from: "USD", to: "EUR", amount: 18, places: 2 })
  .then((data) => console.log(data));
  
/* Output: {
  motd: Object
  success: true
  query: Object
  info: Object
  historical: false
  date: "2021-08-28"
  result: 15.25 // using places property
} */

// Historical Rates
(async () => {
  const data = await historicalRates("2020-04-04");
  console.log(data);
})()

// Output: {motd: Object, success: true, historical: true, base: "EUR", date: "2020-04-04", rates: Object}

// Timeseries
timeseries("2020-04-04", "2021-01-01")
  .then((data) => console.log(data));
  

// Fluctuation
fluctuation("2020-04-04", "2021-01-01")
  .then((data) => console.log(data));

// Symbols
symbols().then((data) => console.log(data));

// EU Vat Rates
EUVATRates().then((data) => console.log(data));
```

## Documentation
https://eliutgon.github.io/exchangerate-javascript-sdk
