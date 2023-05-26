/*
Copyright 2021-2023 Square Cloud - All rights reserved.
*/

const { existsSync, readFileSync } = require("node:fs");
const format = (value) => Math.round(value / Math.pow(1024, 2), 2);

// Thanks arthurcosta for the refactored code.
function getMemDetail(cat) {
    const path = `/sys/fs/cgroup/memory/memory.${cat}_in_bytes`;

    if (existsSync(path))
        return format(readFileSync(path)).toString();
    else
        throw new Error("The requested data could not be found.");
}

module.exports = {
    ramUsed: () => getMemDetail("usage"),
    ramTotal: () => getMemDetail("limit"),
    ram: () => `${this.ramUsed()}/${this.ramTotal()}MB`
}; 