"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var main_app_1 = require("./main_app");
var FirstClass = (function (_super) {
    __extends(FirstClass, _super);
    function FirstClass(name, initAge) {
        return _super.call(this, name, initAge) || this;
    }
    FirstClass.prototype.setAge = function (newAge) {
        var currentDate = new Date();
        this.age = newAge + currentDate.getDate();
        _super.prototype.calculateAge.call(this);
    };
    return FirstClass;
}(main_app_1.MainApp));
var firstclassA = new FirstClass('My First Class A', 0);
var firstclassB = new FirstClass('My First Class B', 0);
console.log(firstclassA.age);
console.log(firstclassB.age);
firstclassA.calculateAge();
firstclassB.calculateAge();
