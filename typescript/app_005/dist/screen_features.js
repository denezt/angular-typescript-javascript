"use strict";
exports.__esModule = true;
exports.ScreenFeatures = void 0;
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
var ScreenFeatures = (function () {
    function ScreenFeatures() {
    }
    ScreenFeatures.prototype.execMouseWatch = function () {
        var click$ = (0, rxjs_1.fromEvent)(document, 'click');
        var clicksAudited = click$.pipe((0, rxjs_2.auditTime)(1000));
        clicksAudited.subscribe(function (event) { return console.log(event); });
    };
    return ScreenFeatures;
}());
exports.ScreenFeatures = ScreenFeatures;
