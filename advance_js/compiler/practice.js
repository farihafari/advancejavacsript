"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 20;
var b = 30;
function sum(x, z) {
    return x + z;
}
var y = sum(exports.a, b);
console.log(y);
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function (c_name, c_price) {
    };
    car.prototype.break = function () {
    };
    return car;
}());
var obj = new car();
var c2 = obj.drive("corola", 900000);
var c3 = obj.break();
