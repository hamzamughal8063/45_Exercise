"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarinfo(manufacture, modelName, ...extraOption) {
    const carinfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carinfo;
}
;
let answer = storeCarinfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigation', 'Power window'] });
console.log(answer);
