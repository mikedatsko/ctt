webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-between sticky-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <img src=\"../assets/images/logo-small.png\" alt=\"logo\" height=\"50\" class=\"d-inline-block align-top\">\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse float-right\" [style.flex-grow]=\"0\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"isLogged()\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/translation-list']\">Translations</a>\n        </li>\n        <li *ngIf=\"isLogged()\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/language-list']\">Languages</a>\n        </li>\n        <!--<li class=\"nav-item\" routerLinkActive=\"active\">-->\n          <!--<a class=\"nav-link\" [routerLink]=\"['/origin-key-list']\">Origin Keys</a>-->\n        <!--</li>-->\n        <li *ngIf=\"!isLogged()\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/sign-in']\">Sign in</a>\n        </li>\n        <li *ngIf=\"isLogged()\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/sign-out']\">Sign out</a>\n        </li>\n        <li *ngIf=\"!isLogged()\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/sign-up']\">Sign up</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md\">\n      <br/>\n\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(authGuardSrv) {
        this.authGuardSrv = authGuardSrv;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.isLogged = function () {
        return this.authGuardSrv.isLogged();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [services_1.AuthGuardService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var components_1 = __webpack_require__("./src/app/components/index.ts");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                components_1.TranslationListComponent,
                components_1.LoaderComponent,
                components_1.SignInComponent,
                components_1.SignOutComponent,
                components_1.SignUpComponent,
                components_1.LanguageListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'translation-list'
                    },
                    {
                        path: 'translation-list',
                        component: components_1.TranslationListComponent,
                        canActivate: [services_1.AuthGuardService]
                    },
                    {
                        path: 'language-list',
                        component: components_1.LanguageListComponent,
                        canActivate: [services_1.AuthGuardService]
                    },
                    {
                        path: 'sign-in',
                        component: components_1.SignInComponent
                    },
                    {
                        path: 'sign-out',
                        component: components_1.SignOutComponent,
                        canActivate: [services_1.AuthGuardService]
                    },
                    {
                        path: 'sign-up',
                        component: components_1.SignUpComponent
                    }
                ]),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [services_1.AuthGuardService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/translation-list/index.ts"));
__export(__webpack_require__("./src/app/components/loader/index.ts"));
__export(__webpack_require__("./src/app/components/sign-in/index.ts"));
__export(__webpack_require__("./src/app/components/sign-up/index.ts"));
__export(__webpack_require__("./src/app/components/sign-out/index.ts"));
__export(__webpack_require__("./src/app/components/language-list/index.ts"));


/***/ }),

/***/ "./src/app/components/language-list/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/language-list/language-list.component.ts"));


/***/ }),

/***/ "./src/app/components/language-list/language-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n\n<div class=\"add-language-form\">\n  <form #addLanguageForm=\"ngForm\" (submit)=\"addLanguage(addLanguageForm)\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\" class=\"form-control\" name=\"title\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"code\">Code</label>\n      <input type=\"text\" class=\"form-control\" name=\"code\" ngModel>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Add language</button>\n  </form>\n</div>\n\n<h1>\n  Languages\n</h1>\n\n<table class=\"table\">\n  <thead>\n    <th>#</th>\n    <th>Title</th>\n    <th>Code</th>\n    <th></th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let language of languageList; let languageIndex = index\">\n      <td [innerText]=\"languageIndex + 1\"></td>\n      <td [innerText]=\"language.title\"></td>\n      <td [innerText]=\"language.code\"></td>\n      <td class=\"text-right\">\n        <span class=\"btn btn-sm btn-primary\" (click)=\"downloadLanguage(language)\">\n          Download .json\n        </span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/language-list/language-list.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .add-language-form {\n  display: block;\n  max-width: 400px;\n  float: right; }\n  :host .add-language-form form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    margin-bottom: 20px; }\n  :host .add-language-form form .form-group {\n      display: block;\n      margin-right: 10px;\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/components/language-list/language-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var flat_1 = __webpack_require__("./node_modules/flat/index.js");
var LanguageListComponent = /** @class */ (function () {
    function LanguageListComponent(http) {
        this.http = http;
        this.subscribers = [];
        this.languageList = [];
        this.isLoading = true;
    }
    LanguageListComponent.prototype.ngOnInit = function () {
        this.getLanguageList();
    };
    LanguageListComponent.prototype.addLanguage = function (form) {
        var _this = this;
        console.log('form', form.value);
        var language = form.value;
        form.controls['title'].setErrors(null);
        form.controls['code'].setErrors(null);
        if (!language.title) {
            form.controls['title'].setErrors({ 'incorrect': true });
            return;
        }
        if (!language.code) {
            form.controls['code'].setErrors({ 'incorrect': true });
            return;
        }
        form.reset();
        this.subscribers.push(this.http
            .post('/api/language', language)
            .subscribe(function (response) { return _this.getLanguageList(); }));
    };
    LanguageListComponent.prototype.getLanguageList = function () {
        var _this = this;
        this.isLoading = true;
        this.subscribers.push(this.http
            .get('/api/language/list')
            .subscribe(function (response) {
            _this.languageList = response.languageList;
            _this.isLoading = false;
        }));
    };
    LanguageListComponent.prototype.downloadLanguage = function (language) {
        var _this = this;
        this.isLoading = true;
        this.subscribers.push(this.http
            .get("/api/language/" + language._id)
            .subscribe(function (response) {
            console.log('response', response);
            var languageObject = flat_1.unflatten(response.languageObject);
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(languageObject, null, 2));
            var a = document.createElement('a');
            a.href = dataStr;
            a.download = "comment_widget-" + response.language.code + ".json";
            a.click();
            _this.isLoading = false;
        }));
    };
    LanguageListComponent = __decorate([
        core_1.Component({
            selector: 'app-language-list',
            template: __webpack_require__("./src/app/components/language-list/language-list.component.html"),
            styles: [__webpack_require__("./src/app/components/language-list/language-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LanguageListComponent);
    return LanguageListComponent;
}());
exports.LanguageListComponent = LanguageListComponent;


/***/ }),

/***/ "./src/app/components/loader/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/loader/loader.component.ts"));


/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"100\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .progress {\n  width: 200px; }\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;


/***/ }),

/***/ "./src/app/components/sign-in/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/sign-in/sign-in.component.ts"));


/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n\n<form #signInForm=\"ngForm\" (submit)=\"signIn(signInForm.value)\">\n  <h1>Sign in</h1>\n\n  <div class=\"form-group\">\n    <label for=\"inputEmail\">Email address</label>\n    <input name=\"email\" type=\"email\" class=\"form-control\" [class.is-invalid]=\"errorEmail\" id=\"inputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" ngModel>\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputPassword\">Password</label>\n    <input name=\"password\" type=\"password\" class=\"form-control\" [class.is-invalid]=\"errorPassword\" id=\"inputPassword\" placeholder=\"Password\" ngModel>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/***/ (function(module, exports) {

module.exports = ":host form {\n  max-width: 300px;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(http, router) {
        this.http = http;
        this.router = router;
        this.errorEmail = false;
        this.errorPassword = false;
        this.isLoading = true;
        this.subscribers = [];
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    SignInComponent.prototype.signIn = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        this.isLoading = true;
        this.errorEmail = false;
        this.errorPassword = false;
        if (!email) {
            this.errorEmail = true;
        }
        if (!password) {
            this.errorPassword = true;
        }
        if (this.errorEmail || this.errorPassword) {
            this.isLoading = false;
            return;
        }
        this.subscribers.push(this.http.post('api/user/auth', { email: email, password: password }).subscribe(function (response) {
            if (response.message === 'SAVE_SUCCESS') {
                var token = Math.round(Math.random() * 1000) + "-" + Math.round(Math.random() * 100) + "-" + Math.round(Math.random() * 10000);
                localStorage.setItem('token', token);
                _this.router.navigate(['/']);
            }
            else {
                _this.isLoading = false;
            }
        }, function (error) { return _this.isLoading = false; }));
    };
    SignInComponent.prototype.ngOnDestroy = function () {
        this.subscribers.forEach(function (subscriber) { return subscriber.unsubscribe(); });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/components/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;


/***/ }),

/***/ "./src/app/components/sign-out/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/sign-out/sign-out.component.ts"));


/***/ }),

/***/ "./src/app/components/sign-out/sign-out.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1>Sign out</h1>\n\n  <br>\n\n  <h2>Are you sure?</h2>\n\n  <button type=\"button\" (click)=\"back()\" class=\"btn btn-primary\">No</button>\n  <button type=\"button\" (click)=\"signOut()\" class=\"btn btn-outline-primary\">Yes</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sign-out/sign-out.component.scss":
/***/ (function(module, exports) {

module.exports = ":host form {\n  max-width: 300px;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/sign-out/sign-out.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SignOutComponent = /** @class */ (function () {
    function SignOutComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    SignOutComponent.prototype.ngOnInit = function () {
    };
    SignOutComponent.prototype.back = function () {
        if (window.history.length > 1) {
            this.location.back();
        }
        else {
            this.router.navigate(['/']);
        }
    };
    SignOutComponent.prototype.signOut = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    SignOutComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-out',
            template: __webpack_require__("./src/app/components/sign-out/sign-out.component.html"),
            styles: [__webpack_require__("./src/app/components/sign-out/sign-out.component.scss")]
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], SignOutComponent);
    return SignOutComponent;
}());
exports.SignOutComponent = SignOutComponent;


/***/ }),

/***/ "./src/app/components/sign-up/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/sign-up/sign-up.component.ts"));


/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n\n<form #signUpForm=\"ngForm\" (submit)=\"signUp(signUpForm.value)\">\n  <h1>Sign up</h1>\n\n  <div class=\"form-group\">\n    <label for=\"inputName\">Name</label>\n    <input name=\"name\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"errorName\" id=\"inputName\" aria-describedby=\"nameHelp\" placeholder=\"Enter your name\" ngModel>\n    <small id=\"nameHelp\" class=\"form-text text-muted\">John, Dan Smith, Elen, etc.</small>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputEmail\">Email address</label>\n    <input name=\"email\" type=\"email\" class=\"form-control\" [class.is-invalid]=\"errorEmail\" id=\"inputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" ngModel required>\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword\">Password</label>\n    <input name=\"password\" type=\"password\" class=\"form-control\" [class.is-invalid]=\"errorPassword\" id=\"exampleInputPassword\" placeholder=\"Password\" ngModel required>\n  </div>\n\n  <div class=\"text-center\">\n    <a [routerLink]=\"['/sign-in']\" class=\"btn btn-outline-primary\">Already registered?</a>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ":host form {\n  max-width: 300px;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(http, router) {
        this.http = http;
        this.router = router;
        this.errorName = false;
        this.errorEmail = false;
        this.errorPassword = false;
        this.isLoading = true;
        this.subscribers = [];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    SignUpComponent.prototype.signUp = function (_a) {
        var _this = this;
        var name = _a.name, email = _a.email, password = _a.password;
        this.isLoading = true;
        this.errorName = false;
        this.errorEmail = false;
        this.errorPassword = false;
        if (!name) {
            this.errorName = true;
        }
        if (!email) {
            this.errorEmail = true;
        }
        if (!password) {
            this.errorPassword = true;
        }
        if (this.errorName || this.errorEmail || this.errorPassword) {
            this.isLoading = false;
            return;
        }
        this.subscribers.push(this.http.post('api/user', { name: name, email: email, password: password }).subscribe(function (response) {
            if (response.message === 'SAVE_SUCCESS') {
                _this.router.navigate(['/sign-in']);
            }
            else {
                _this.isLoading = false;
            }
        }));
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this.subscribers.forEach(function (subscriber) { return subscriber.unsubscribe(); });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/components/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "./src/app/components/translation-list/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/translation-list/translation-list.component.ts"));


/***/ }),

/***/ "./src/app/components/translation-list/translation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<form #translationListForm=\"ngForm\" (submit)=\"saveTranslation(translationListForm)\">\n\n  <app-loader *ngIf=\"isLoading\"></app-loader>\n\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"toggleImportFile()\">Import translations</button>\n  <button type=\"submit\" class=\"btn btn-success float-right\">Save translations</button>\n\n  <div class=\"row\" *ngIf=\"isShowImport\">\n    <div class=\"col-sm\">\n      <select class=\"form-control\" (change)=\"importLanguage = $event.target.value\">\n        <option value=\"\">- Select language -</option>\n        <option *ngFor=\"let language of languageList\" [value]=\"language._id\" [innerText]=\"language.title\"></option>\n      </select>\n    </div>\n    <div class=\"col-sm\">\n      <input class=\"form-control\" type=\"file\" (change)=\"onChangeImportFile($event)\">\n    </div>\n    <div class=\"col-sm\">\n      <button class=\"btn btn-success\" type=\"button\" (click)=\"importFile()\">Import</button>\n    </div>\n  </div>\n\n  <h1>Translation list</h1>\n\n  <span *ngFor=\"let language of languageList\" class=\"badge\" (click)=\"language.isSelected = !language.isSelected\">\n    <span\n      class=\"fa\"\n      [class.fa-check-square]=\"language.isSelected\"\n      [class.fa-square]=\"!language.isSelected\"\n    >\n    </span>\n    {{language.title}}\n  </span>\n\n  <div class=\"translation-list\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" width=\"60\">#</th>\n          <th scope=\"col\" width=\"200\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              (input)=\"setOriginKeyFilter($event.target.value)\"\n              placeholder=\"Origin key\"\n            >\n          </th>\n          <th *ngFor=\"let language of getLanguageFilteredList()\" width=\"300\">{{language.title}}</th>\n          <th scope=\"col\" width=\"60\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let originKey of getOriginKeyFilteredList(); let i = index\">\n          <th scope=\"row\">{{i + 1}}</th>\n          <td>{{originKey.title}}</td>\n          <td *ngFor=\"let language of getLanguageFilteredList()\">\n            <div\n              class=\"form-control\"\n              contentEditable\n              suppressContentEditableWarning\n              (keyup)=\"setTranslation(originKey._id, language._id, $event.target.innerText)\"\n            >\n              {{getTranslation(originKey._id, language._id)}}\n            </div>\n  \n            <input\n              type=\"hidden\"\n              class=\"form-control\"\n              [name]=\"'translation_' + originKey._id + '_' +language._id + '_' + this.getTranslationId(originKey._id, language._id)\"\n              [ngModel]=\"getTranslation(originKey._id, language._id)\"\n              ngModel\n            >\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-sm btn-light\" (click)=\"removeOriginKey(originKey._id)\">✕</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/translation-list/translation-list.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .translation-list {\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/components/translation-list/translation-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var flatten = __webpack_require__("./node_modules/flat/index.js");
var TranslationListComponent = /** @class */ (function () {
    function TranslationListComponent(http) {
        this.http = http;
        this.translationObj = {};
        this.languageList = [];
        this.originKeyList = [];
        this.subscribers = [];
        this.importLanguage = '';
        this.isLoading = true;
        this.isShowImport = false;
        this.originKeyFilter = '';
    }
    TranslationListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLanguageList()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getOriginKeyList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getTranslationList()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranslationListComponent.prototype.getTranslationList = function () {
        var _this = this;
        this.subscribers.push(this.http.get('/api/translation/list').subscribe(function (response) {
            _this.translationObj = response;
            _this.isLoading = false;
        }));
    };
    TranslationListComponent.prototype.getLanguageList = function () {
        var _this = this;
        this.subscribers.push(this.http
            .get('/api/language/list')
            .subscribe(function (response) { return _this.languageList = response.languageList; }));
    };
    TranslationListComponent.prototype.getLanguageFilteredList = function () {
        return this.languageList.filter(function (language) { return language.isSelected; });
    };
    TranslationListComponent.prototype.getOriginKeyList = function () {
        var _this = this;
        this.subscribers.push(this.http.get('/api/originKey/list').subscribe(function (response) { return _this.originKeyList = response; }));
    };
    TranslationListComponent.prototype.getOriginKeyFilteredList = function () {
        var _this = this;
        return this.originKeyList.filter(function (originKey) { return originKey.title.search(_this.originKeyFilter) > -1; });
    };
    TranslationListComponent.prototype.getTranslation = function (originKeyId, languageId) {
        var translationObjOriginKey = this.translationObj[originKeyId];
        if (!translationObjOriginKey) {
            return '';
        }
        if (!translationObjOriginKey[languageId]) {
            return '';
        }
        // console.log(translationObjOriginKey[languageId].translatedText)
        return translationObjOriginKey[languageId].translatedText;
    };
    TranslationListComponent.prototype.getTranslationId = function (originKeyId, languageId) {
        // console.log('originKeyId', originKeyId);
        var translationObjOriginKey = this.translationObj[originKeyId];
        if (!translationObjOriginKey) {
            return '';
        }
        if (!translationObjOriginKey[languageId]) {
            return '';
        }
        return translationObjOriginKey[languageId]._id;
    };
    TranslationListComponent.prototype.setTranslation = function (originKeyId, languageId, translationText) {
        var translationObj = this.translationObj;
        if (!translationObj[originKeyId]) {
            translationObj[originKeyId] = {};
        }
        if (!translationObj[originKeyId][languageId]) {
            translationObj[originKeyId][languageId] = {};
        }
        translationObj[originKeyId][languageId].translatedText = translationText;
        this.translationObj = translationObj;
    };
    TranslationListComponent.prototype.setOriginKeyFilter = function (value) {
        var _this = this;
        clearTimeout(this.keyPressTimeout);
        this.keyPressTimeout = setTimeout(function () {
            _this.originKeyFilter = value;
        }, 2);
    };
    TranslationListComponent.prototype.toggleImportFile = function () {
        this.isShowImport = !this.isShowImport;
    };
    TranslationListComponent.prototype.onChangeImportFile = function (event) {
        // console.log('event', event.target.files)
        var _this = this;
        var reader = new FileReader();
        reader.onload = function () { return __awaiter(_this, void 0, void 0, function () {
            var resultJson;
            return __generator(this, function (_a) {
                resultJson = flatten(JSON.parse(reader.result));
                this.importObject = resultJson;
                return [2 /*return*/];
            });
        }); };
        reader.readAsText(event.target.files[0]);
    };
    TranslationListComponent.prototype.importFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var importLanguage, importObject, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        importLanguage = this.importLanguage;
                        importObject = this.importObject;
                        if (!importLanguage) {
                            return [2 /*return*/];
                        }
                        if (!importObject) {
                            return [2 /*return*/];
                        }
                        this.isLoading = true;
                        _b = (_a = this.subscribers).push;
                        return [4 /*yield*/, this.http.post('/api/translation/import', {
                                language: importLanguage,
                                translation: importObject
                            }).subscribe(function (response) {
                                _this.getTranslationList();
                                _this.isShowImport = false;
                            })];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TranslationListComponent.prototype.saveTranslation = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formValue, translationList, translationListChunks, chunk, i, j, _i, translationListChunks_1, translationListChunk, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        formValue = form.value;
                        // console.log(formValue)
                        if (!formValue) {
                            return [2 /*return*/];
                        }
                        translationList = [];
                        this.originKeyList.forEach(function (originKey) {
                            _this.languageList.forEach(function (language) {
                                var translationElement = _this.translationObj[originKey._id] && _this.translationObj[originKey._id][language._id] || {};
                                var translation = {
                                    originKey: originKey._id,
                                    language: language._id,
                                    translatedText: translationElement.translatedText || ''
                                };
                                if (translationElement._id) {
                                    translation._id = translationElement._id;
                                }
                                translationList.push(translation);
                            });
                        });
                        this.isLoading = true;
                        translationListChunks = [];
                        chunk = 100;
                        for (i = 0, j = translationList.length; i < j; i += chunk) {
                            translationListChunks.push(translationList.slice(i, i + chunk));
                        }
                        _i = 0, translationListChunks_1 = translationListChunks;
                        _c.label = 1;
                    case 1:
                        if (!(_i < translationListChunks_1.length)) return [3 /*break*/, 4];
                        translationListChunk = translationListChunks_1[_i];
                        _b = (_a = this.subscribers).push;
                        return [4 /*yield*/, this.http.put('/api/translation', translationListChunk).subscribe()];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, this.getTranslationList()];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranslationListComponent.prototype.removeOriginKey = function (originKeyId) {
        var _this = this;
        if (!window.confirm('Delete origin key?')) {
            return;
        }
        this.subscribers.push(this.http
            .delete("/api/originKey/" + originKeyId)
            .subscribe(function (response) { return _this.originKeyList = _this.originKeyList.filter(function (originKey) { return originKey._id !== originKeyId; }); }));
    };
    TranslationListComponent.prototype.ngOnDestroy = function () {
        this.subscribers.forEach(function (subscriber) { return subscriber.unsubscribe(); });
    };
    TranslationListComponent = __decorate([
        core_1.Component({
            selector: 'app-translation-list',
            template: __webpack_require__("./src/app/components/translation-list/translation-list.component.html"),
            styles: [__webpack_require__("./src/app/components/translation-list/translation-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TranslationListComponent);
    return TranslationListComponent;
}());
exports.TranslationListComponent = TranslationListComponent;


/***/ }),

/***/ "./src/app/services/auth-guard/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        // console.log(url);
        var isUrlPublic = ['/sign-in', '/sign-up'].includes(url);
        if (!this.isLogged() && !isUrlPublic) {
            this.router.navigate(['/sign-in']);
        }
        else if (this.isLogged() && isUrlPublic) {
            this.router.navigate(['/']);
        }
        return this.isLogged();
    };
    AuthGuardService.prototype.isLogged = function () {
        return !!localStorage.getItem('token');
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "./src/app/services/auth-guard/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/services/auth-guard/auth-guard.service.ts"));


/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/services/auth-guard/index.ts"));


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map