"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cityservice_1 = require("./cityservice");
var CityComponent = (function () {
    function CityComponent(svc) {
        this.svc = svc;
        this.stat = false;
        this.location = {};
    }
    CityComponent.prototype.setPosition = function (position) {
        this.location = position.coords;
    };
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.stat = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = position.coords;
                _this.lati = position.coords.latitude;
                _this.longi = position.coords.longitude;
                _this.svc.getlocation(_this.lati, _this.longi).subscribe(function (t) { _this.a = t; console.log(_this.a); });
            });
        }
    };
    CityComponent.prototype.submit = function (pin, country) {
        var _this = this;
        this.svc.postdetails(pin, country).subscribe(function (t) { _this.a = t; _this.b = (_this.a.main); });
        this.stat = true;
    };
    CityComponent = __decorate([
        core_1.Component({
            selector: 'app-city',
            templateUrl: 'app/weather/city.component.html',
            styleUrls: ['app/weather/city.component.css'],
            providers: [cityservice_1.Service]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof cityservice_1.Service !== "undefined" && cityservice_1.Service) === "function" && _a || Object])
    ], CityComponent);
    return CityComponent;
    var _a;
}());
exports.CityComponent = CityComponent;
//# sourceMappingURL=city.component.js.map