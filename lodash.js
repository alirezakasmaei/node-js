const _ = require('lodash');
var result;

var arr = { "ali":1, "reza":2, "ahmad":3};
var arr2 = [3, 4];
// result = _.union(arr, arr2);
result = _.pick(arr, ["ali", "reza"]);

console.log(result);
