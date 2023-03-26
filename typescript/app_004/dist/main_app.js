"use strict";
exports.__esModule = true;
exports.MainApp = void 0;
var MainApp = (function () {
    function MainApp(name, initAge) {
        console.log("Running, my first class: " + name);
        this.age = initAge;
    }
    MainApp.prototype.calculateAge = function () {
        var date = new Date();
        var calculateAge = 100 + date.getDate();
        console.log(calculateAge);
    };
    return MainApp;
}());
exports.MainApp = MainApp;
