## Info
This module was developed with the aim of helping people to collect information related to their applications hosted on https://squarecloud.app
We recommend using the Square Cloud API [@squarecloud/api](https://www.npmjs.com/package/@squarecloud/api) to get more information in addition to data from the docker environment.

## Install
```
npm install @squarecloud/status
```

```javascript
const { ram, ramTotal, ramUsed } = require("@squarecloud/status");

console.log(ram()) // 23/100MB
console.log(ramUsed()) // 23
console.log(ramTotal()) // 100
```

## LICENSE
This project is licensed under the Apache License 2.0