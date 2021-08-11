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

// Currency conversion
exchangerate
  .convert({ from: "USD", to: "EUR", amount: 18 })
  .then((data) => console.log(data));

// Historical Rates
exchangerate.historicalRates("2020-04-04").then((data) => console.log(data));

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
https://reliut-g.github.io/exchangerate-javascript-sdk/