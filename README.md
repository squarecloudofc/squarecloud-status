## Info
This module was developed with the aim of helping people to collect information related to their applications hosted on https://squarecloud.app

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