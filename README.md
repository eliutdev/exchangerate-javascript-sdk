## Installation

```bash
npm i exchangerate-javascript-sdk
```

## Usage

```javascript
const Exchangerate = require("exchangerate-javascript-sdk");

const exchangerate = new Exchangerate();

// Get the latest foreign exchange rates.
exchangerate.latest().then((data) => console.log(data));

// Currency conversion.
exchangerate
  .convert({ from: "USD", to: "EUR", amount: 18 })
  .then((data) => console.log(data));
```
