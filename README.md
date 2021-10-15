## Installation

```bash
npm i exchangerate-javascript-sdk
```

## Usage

```javascript
import { Exchangerate } from "exchangerate-javascript-sdk";

const exchangerate = new Exchangerate();

// Latest Rates.
exchangerate.latest().then((data) => console.log(data)); 

// Output: {motd: Object, success: true, base: "EUR", date: "2021-08-28", rates: Object}

// Currency conversion
exchangerate
  .convert({ from: "USD", to: "EUR", amount: 18 })
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
exchangerate
  .convert({ from: "USD", to: "EUR", amount: 18, places: 2 })
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
  const data = await exchangerate.historicalRates("2020-04-04");
  console.log(data);
})()

// Output: {motd: Object, success: true, historical: true, base: "EUR", date: "2020-04-04", rates: Object}

// Timeseries
exchangerate
  .timeseries("2020-04-04", "2021-01-01")
  .then((data) => console.log(data));
  

// Fluctuation
exchangerate
  .fluctuation("2020-04-04", "2021-01-01")
  .then((data) => console.log(data));

// Symbols
exchangerate.symbols().then((data) => console.log(data));

// EU Vat Rates
exchangerate.EUVATRates().then((data) => console.log(data));
```

## Documentation
https://eliutgon.github.io/exchangerate-javascript-sdk
