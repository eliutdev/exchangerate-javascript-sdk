## Installation

```bash
npm i exchangerate-javascript-sdk
```

## Usage

```javascript
import { Exchangerate } from "exchangerate-javascript-sdk";

const exchangerate = new Exchangerate();

// Get the latest foreign exchange rates.
exchangerate.latest().then((data) => console.log(data));

// Currency conversion.
exchangerate
  .convert({ from: "USD", to: "EUR", amount: 18 })
  .then((data) => console.log(data));
```

## API

```javascript
// Get the latest foreign exchange rates.
(method) Exchangerate.latest(parameters?: ExchangerateRequestParams): Promise<any>
```

`parameters`
| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `base` | `string` | `USD` | Base currency. |
| `symbols` | `array` | "available currencies" | Array of currencies to convert. |
| `amount` | `number` | `1` | Amount to convert. |
| `callback` | `function` | `null` | Callback function. |
| `places` | `number` | `2` | Number of decimal places. |
| `format` | `string` | `json` | Format of the response. |
| `source` | `string` | `api` | Source of the response. |

```javascript
// Currency conversion.
(method) Exchangerate.convert(parameters: ExchangerateRequestParams): Promise<any>
```

`parameters`
| Option | Type | Default | Description |
| --- | --- | --- | --- |
|`from` | `string` | `USD` | Source currency. |
| `to` | `string` | `USD` | Destination currency. |
| `date` | `string` | `new Date()` | Date to convert. |
| `base` | `string` | `USD` | Base currency. |
| `symbols` | `array` | "available currencies" | Array of currencies to convert. |
| `amount` | `number` | `1` | Amount to convert. |
| `callback` | `function` | `null` | Callback function. |
| `places` | `number` | `2` | Number of decimal places. |
| `format` | `string` | `json` | Format of the response. |
| `source` | `string` | `api` | Source of the response. |
