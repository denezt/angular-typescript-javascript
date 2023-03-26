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
var $ = require("jquery");
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
var main_app_1 = require("./main_app");
var screen_features_1 = require("./screen_features");
var FirstClass = (function (_super) {
    __extends(FirstClass, _super);
    function FirstClass(name, initAge) {
        return _super.call(this, name, initAge) || this;
    }
    FirstClass.prototype.setAge = function (newAge) {
        var currentDate = new Date();
        this.age = newAge + currentDate.getDate();
        _super.prototype.calculateAge.call(this);
        $("body").css('background-color', 'green');
        $("body").html("<h1>" + this.age + "</h1>");
    };
    return FirstClass;
}(main_app_1.MainApp));
var firstclassA = new FirstClass('My First Class A', 0);
var firstclassB = new FirstClass('My First Class B', 0);
console.log(firstclassA.age);
console.log(firstclassB.age);
firstclassA.calculateAge();
firstclassB.calculateAge();
setInterval(function () { firstclassA.setAge(89); }, 1500);
var MainScreen = (function (_super) {
    __extends(MainScreen, _super);
    function MainScreen() {
        return _super.call(this) || this;
    }
    MainScreen.prototype.addExec = function () {
        var input = document.getElementById('userid');
        var input$ = (0, rxjs_1.fromEvent)(input, 'input');
    };
    return MainScreen;
}(screen_features_1.ScreenFeatures));
var mainScreen = new MainScreen();
mainScreen.execMouseWatch();
var data = [1, 2, 1, 3, 4, 4, 5];
(0, rxjs_2.from)(data).pipe((0, rxjs_1.distinctUntilChanged)()).subscribe(function (val) { return console.log(val); });
