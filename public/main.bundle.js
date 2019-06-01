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

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class=\"container-fluid\">\r\n </div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/account/my-account/my-account.component.css":
/***/ (function(module, exports) {

module.exports = ".enlace {\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    color: #2185D0;\r\n}\r\n\r\n.enlace:hover {\r\n    -webkit-text-decoration: underline #2185D0;\r\n            text-decoration: underline #2185D0;\r\n}"

/***/ }),

/***/ "./src/app/account/my-account/my-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu [newimage]=\"this.newImagen\"></app-menu>\r\n\r\n  <div class=\"align-rigth\">\r\n    <div class=\"ui styled fluid accordion\">\r\n\r\n      <div class=\"title\" [ngClass]=\"{'active': this.activeClass.info}\" (click)=\"onActive('info_user')\">\r\n        <i class=\"dropdown icon\"></i>\r\n        Información personal\r\n      </div>\r\n      <div class=\"content\" [ngClass]=\"{'active': this.activeClass.info}\">\r\n        <div style=\"display: flex\">\r\n          <div style=\"width: 20%; text-align: center;\">\r\n            <img class=\"ui medium circular image\" style=\"width: 90%; height: 200px;\" [src]=\"this.userInfo.imagen\">\r\n            <div class=\"enlace\" (click)=\"onFileSelected()\">\r\n              Cambiar image\r\n            </div>\r\n          </div>\r\n          <div class=\"content\" style=\"width: 80%\">\r\n            <div class=\"ui form\">\r\n              <div class=\"field\">\r\n                <label>Nombre completo</label>\r\n                <div class=\"two fields\">\r\n                  <div class=\"field\">\r\n                    <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"this.userInfo.nombre\">\r\n                  </div>\r\n                  <div class=\"field\">\r\n                    <input type=\"text\" placeholder=\"Apellidos\" [(ngModel)]=\"this.userInfo.apellidos\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"two fields\">\r\n                  <div class=\"field\">\r\n                    <label>Email</label>\r\n                    <input type=\"email\" placeholder=\"Email\" disabled [(ngModel)]=\"this.userInfo.email\">\r\n                  </div>\r\n                  <div class=\"field\">\r\n                    <label>Edad</label>\r\n                    <input type=\"number\" placeholder=\"Edad\" [(ngModel)]=\"this.userInfo.edad\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui left aligned grid\">\r\n                <div class=\"center aligned two column row\">\r\n                  <div class=\"column enlace\" style=\"padding-top: 8px;\" (click)=\"onChangePassword()\">\r\n                    Cambiar contraseña\r\n                  </div>\r\n                  <div class=\"column\">\r\n                    <div class=\"field\">\r\n                      <div class=\"two fields\">\r\n                        <div class=\"field ui primary button\" (click)=\"onSave()\">\r\n                          Guardar\r\n                        </div>\r\n                        <div class=\"field ui button\" (click)=\"onDescartar()\">\r\n                          Descartar\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"title\" [ngClass]=\"{'active': this.activeClass.direccion}\" (click)=\"onActive('direccion')\">\r\n        <i class=\"dropdown icon\"></i>\r\n        Dirección\r\n      </div>\r\n      <div class=\"content\" [ngClass]=\"{'active': this.activeClass.direccion}\">\r\n        <div class=\"ui form\">\r\n          <div class=\"fields\">\r\n            <div class=\"seven wide field\">\r\n              <label>Colonia</label>\r\n              <input type=\"text\" placeholder=\"Colonia\" [(ngModel)]=\"this.userInfo.direccion.colonia\">\r\n            </div>\r\n            <div class=\"seven wide field\">\r\n              <label>Calle</label>\r\n              <input type=\"text\" placeholder=\"Calle\"  [(ngModel)]=\"this.userInfo.direccion.calle\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <label>Numero</label>\r\n              <input type=\"number\" placeholder=\"Numero\"  [(ngModel)]=\"this.userInfo.direccion.numero\">\r\n            </div>\r\n          </div>\r\n          <div class=\"two fields\">\r\n            <div class=\"field\">\r\n              <label>Estado</label>\r\n              <input type=\"text\" placeholder=\"Estado\"  [(ngModel)]=\"this.userInfo.direccion.estado\">\r\n            </div>\r\n            <div class=\"field\">\r\n              <label>Pais</label>\r\n              <input type=\"text\" placeholder=\"Pais\"  [(ngModel)]=\"this.userInfo.direccion.pais\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui right aligned grid\">\r\n          <div class=\"center aligned two column row\">\r\n            <div class=\"column\"></div>\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"two fields\">\r\n                  <div class=\"field ui primary button\" (click)=\"onSave()\">\r\n                    Guardar\r\n                  </div>\r\n                  <div class=\"field ui button\" (click)=\"onDescartar()\">\r\n                    Descartar\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"title\" [ngClass]=\"{'active': this.activeClass.tarjeta}\" (click)=\"onActive('tarjeta')\">\r\n        <i class=\"dropdown icon\"></i>\r\n        Tarjeta\r\n      </div>\r\n      <div class=\"content\" [ngClass]=\"{'active': this.activeClass.tarjeta}\">\r\n        <div class=\"ui form\">\r\n          <div class=\"three fields\">\r\n            <div class=\"field\">\r\n              <label>Tipo</label>\r\n              <input type=\"text\" placeholder=\"Tipo\"  [(ngModel)]=\"this.userInfo.tarjeta.tipo\">\r\n            </div>\r\n            <div class=\"field\">\r\n              <label>Numero</label>\r\n              <input type=\"text\" maxlength=\"16\" placeholder=\"Numero\"  [(ngModel)]=\"this.userInfo.tarjeta.numero\">\r\n            </div>\r\n            <div class=\"field\">\r\n              <label>CVC</label>\r\n              <input type=\"text\" placeholder=\"CVC\"  [(ngModel)]=\"this.userInfo.tarjeta.cvc\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Expiración</label>\r\n            <div class=\"two fields\">\r\n              <div class=\"field\">\r\n                <select class=\"ui fluid search dropdown\"  [(ngModel)]=\"this.userInfo.tarjeta.expiracion.mes\">\r\n                  <option value=\"\">Mes</option>\r\n                  <option value=\"1\">Enero</option>\r\n                  <option value=\"2\">Febrero</option>\r\n                  <option value=\"3\">Marzo</option>\r\n                  <option value=\"4\">Abril</option>\r\n                  <option value=\"5\">Mayo</option>\r\n                  <option value=\"6\">Junio</option>\r\n                  <option value=\"7\">Julio</option>\r\n                  <option value=\"8\">Agosto</option>\r\n                  <option value=\"9\">Septiembre</option>\r\n                  <option value=\"10\">Octubre</option>\r\n                  <option value=\"11\">Noviembre</option>\r\n                  <option value=\"12\">Diciembre</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"field\">\r\n                <input type=\"number\" placeholder=\"Año\"  [(ngModel)]=\"this.userInfo.tarjeta.expiracion.ano\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui right aligned grid\">\r\n          <div class=\"center aligned two column row\">\r\n            <div class=\"column\"></div>\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"two fields\">\r\n                  <div class=\"field ui primary button\" (click)=\"onSave()\">\r\n                    Guardar\r\n                  </div>\r\n                  <div class=\"field ui button\" (click)=\"onSave()\">\r\n                    Descartar\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/my-account/my-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_upload_service__ = __webpack_require__("./src/app/services/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(localStorage, db, uploadService, loginService) {
        var _this = this;
        this.localStorage = localStorage;
        this.db = db;
        this.uploadService = uploadService;
        this.loginService = loginService;
        this.activeClass = {
            info: true,
            tarjeta: false,
            direccion: false,
        };
        this.userInfo = {
            email: '',
            tipo: '',
            imagen: './../../assets/images/image.png',
            direccion: {
                colonia: '',
                calle: '',
                numero: '',
                estado: '',
                pais: '',
            },
            tarjeta: {
                tipo: '',
                numero: '',
                cvc: '',
                cantidad: 0,
                expiracion: {
                    mes: '',
                    ano: 0,
                },
            }
        };
        this.save = {
            user: function (user, callback) {
                _this.db.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, user.id, user).subscribe(function (res) { callback('ok'); }, function (err) { callback('error'); console.log(err); });
            }
        };
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localUser = this.localStorage.getUser();
        setTimeout(function () {
            _this.db.getDataWhere(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, { fieldPath: 'id', operador: '==', fieldPathFirebase: _this.localUser.userId }).subscribe(function (res) {
                _this.userInfo = res.serverResponse[0];
                _this.userInfoBackup = __assign({}, _this.userInfo);
            });
        }, 1000);
    };
    MyAccountComponent.prototype.onActive = function (type) {
        switch (type) {
            case 'info_user':
                this.activeClass.info = !this.activeClass.info;
                break;
            case 'tarjeta':
                this.activeClass.tarjeta = !this.activeClass.tarjeta;
                break;
            case 'direccion':
                this.activeClass.direccion = !this.activeClass.direccion;
        }
    };
    MyAccountComponent.prototype.onSave = function () {
        this.save.user(this.userInfo, function (res) {
            if (res === 'ok') {
                alert('Informacion personal actualizada');
            }
            else {
                alert('Error al actualizar informacion');
            }
        });
    };
    MyAccountComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.loginService.changePassword(this.userInfo.email).subscribe(function (res) {
            alert('El correo para cambiar contraseña fue enviado a ' + _this.userInfo.email);
        }, function (err) {
            alert('No se pudo enviar el correo');
        });
    };
    MyAccountComponent.prototype.onDescartar = function () {
        this.userInfo.nombre = this.userInfoBackup.nombre;
        this.userInfo.apellidos = this.userInfoBackup.apellidos;
        this.userInfo.email = this.userInfoBackup.email;
        this.userInfo.password = void 0;
        this.userInfo.confirmarPassword = void 0;
    };
    MyAccountComponent.prototype.onFileSelected = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.click();
        var that = this;
        input.onchange = function (e) {
            var selectedFile = e.path[0].files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                that.newImagen = event.target.result;
                that.userInfo.imagen = event.target.result;
                that.localStorage.setUser({
                    imagen: event.target.result,
                    email: that.localUser.email,
                    uid: that.localUser.uid,
                    userId: that.localUser.userId,
                    nombre: that.localUser.nombre,
                    tipo: that.localUser.tipo,
                });
            };
            reader.readAsDataURL(e.target.files[0]);
            /** Se queda en segundo plano */
            that.uploadService.onUpload('/imagenes/usuarios/', selectedFile).subscribe(function (res) {
                that.userInfo.imagen = res.downloadURL;
                that.db.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, that.localUser.userId, that.userInfo).subscribe();
            });
            /** Fin segundo plano */
        };
    };
    MyAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-account',
            template: __webpack_require__("./src/app/account/my-account/my-account.component.html"),
            styles: [__webpack_require__("./src/app/account/my-account/my-account.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_4__services_upload_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_4__services_upload_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_guid_guid_service__ = __webpack_require__("./src/app/services/guid/guid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_webstorage__ = __webpack_require__("./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__ = __webpack_require__("./src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_add_product_add_product_component__ = __webpack_require__("./src/app/products/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_list_product_list_product_component__ = __webpack_require__("./src/app/products/list-product/list-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_register_component__ = __webpack_require__("./src/app/components/register/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__categories_category_category_component__ = __webpack_require__("./src/app/categories/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__categories_add_category_add_category_component__ = __webpack_require__("./src/app/categories/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__categories_list_category_list_category_component__ = __webpack_require__("./src/app/categories/list-category/list-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_provider_provider_component__ = __webpack_require__("./src/app/providers/provider/provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_add_provider_add_provider_component__ = __webpack_require__("./src/app/providers/add-provider/add-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_list_provider_list_provider_component__ = __webpack_require__("./src/app/providers/list-provider/list-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__products_product_product_component__ = __webpack_require__("./src/app/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__users_user_user_component__ = __webpack_require__("./src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__users_list_user_list_user_component__ = __webpack_require__("./src/app/users/list-user/list-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__users_add_user_add_user_component__ = __webpack_require__("./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__account_my_account_my_account_component__ = __webpack_require__("./src/app/account/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__ = __webpack_require__("./src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shopping_my_cart_my_cart_component__ = __webpack_require__("./src/app/shopping/my-cart/my-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shopping_purchased_purchased_component__ = __webpack_require__("./src/app/shopping/purchased/purchased.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__record_record_component__ = __webpack_require__("./src/app/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__recuperar_contrasenia_recuperar_contrasenia_component__ = __webpack_require__("./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__correo_admin_correo_admin_component__ = __webpack_require__("./src/app/correo-admin/correo-admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// LOCAL-STORAGE

// FIRESTORAGE




// COMPONENTS

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__products_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__categories_add_category_add_category_component__["a" /* AddCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__products_list_product_list_product_component__["a" /* ListProductComponent */],
                __WEBPACK_IMPORTED_MODULE_20__categories_list_category_list_category_component__["a" /* ListCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_register_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__categories_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__providers_provider_provider_component__["a" /* ProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__providers_add_provider_add_provider_component__["a" /* AddProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__providers_list_provider_list_provider_component__["a" /* ListProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__products_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_25__users_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_26__users_list_user_list_user_component__["a" /* ListUserComponent */],
                __WEBPACK_IMPORTED_MODULE_27__users_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_28__account_my_account_my_account_component__["a" /* MyAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__shopping_my_cart_my_cart_component__["a" /* MyCartComponent */],
                __WEBPACK_IMPORTED_MODULE_31__shopping_purchased_purchased_component__["a" /* PurchasedComponent */],
                __WEBPACK_IMPORTED_MODULE_32__record_record_component__["a" /* RecordComponent */],
                __WEBPACK_IMPORTED_MODULE_33__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_34__recuperar_contrasenia_recuperar_contrasenia_component__["a" /* RecuperarContraseniaComponent */],
                __WEBPACK_IMPORTED_MODULE_35__correo_admin_correo_admin_component__["a" /* CorreoAdminComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_webstorage__["b" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__app_routes__["a" /* appRouting */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_guid_guid_service__["a" /* GuidService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__correo_admin_correo_admin_component__ = __webpack_require__("./src/app/correo-admin/correo-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recuperar_contrasenia_recuperar_contrasenia_component__ = __webpack_require__("./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__record_record_component__ = __webpack_require__("./src/app/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_register_component__ = __webpack_require__("./src/app/components/register/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_category_category_component__ = __webpack_require__("./src/app/categories/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_provider_provider_component__ = __webpack_require__("./src/app/providers/provider/provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_product_product_component__ = __webpack_require__("./src/app/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_user_component__ = __webpack_require__("./src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_my_account_my_account_component__ = __webpack_require__("./src/app/account/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shopping_my_cart_my_cart_component__ = __webpack_require__("./src/app/shopping/my-cart/my-cart.component.ts");














var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_10__products_product_product_component__["a" /* ProductComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_11__users_user_user_component__["a" /* UserComponent */] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_8__categories_category_category_component__["a" /* CategoryComponent */] },
    { path: 'provider', component: __WEBPACK_IMPORTED_MODULE_9__providers_provider_provider_component__["a" /* ProviderComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_register_component__["a" /* RegisterComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_12__account_my_account_my_account_component__["a" /* MyAccountComponent */] },
    { path: 'mycart', component: __WEBPACK_IMPORTED_MODULE_13__shopping_my_cart_my_cart_component__["a" /* MyCartComponent */] },
    { path: 'record', component: __WEBPACK_IMPORTED_MODULE_3__record_record_component__["a" /* RecordComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'email', component: __WEBPACK_IMPORTED_MODULE_0__correo_admin_correo_admin_component__["a" /* CorreoAdminComponent */] },
    { path: 'password', component: __WEBPACK_IMPORTED_MODULE_1__recuperar_contrasenia_recuperar_contrasenia_component__["a" /* RecuperarContraseniaComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
var appRouting = __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/categories/add-category/add-category.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/add-category/add-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui form\">\r\n\r\n  <div class=\"item\" style=\"display: flex;\">\r\n    <div class=\"ui image\" style=\"    margin: 10px; width: 20%;\">\r\n      <img (click)=\"onFileSelected()\" title=\"Subir imagen\" [src]=\"this.input.imagen\" width=\"150px\" height=\"150px\">\r\n    </div>\r\n    <div class=\"content\" style=\"width: 80%;\">\r\n\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Nombre</label>\r\n          <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"this.input.nombre\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Estado</label>\r\n          <select [(ngModel)]=\"this.input.estado\">\r\n            <option value=\"\">Estado</option>\r\n            <option value=\"activo\">Activa</option>\r\n            <option value=\"inactivo\">Inactiva</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Descripcion</label>\r\n        <textarea rows=\"2\" [(ngModel)]=\"this.input.descripcion\"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"two fields\" style=\"margin-top: 5px;\">\r\n    <div class=\"field\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"two fields\" *ngIf=\"!this.statusEdit; else elseTemplate\">\r\n        <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onGuardar()\">\r\n          Guardar\r\n        </div>\r\n        <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onDescartar()\">\r\n          Descartar\r\n        </div>\r\n      </div>\r\n      <ng-template #elseTemplate>\r\n        <div class=\"two fields\">\r\n          <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onEditar()\">\r\n            Editar\r\n          </div>\r\n          <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onEliminar()\">\r\n            Eliminar\r\n          </div>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/categories/add-category/add-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemes_categories_category_scheme__ = __webpack_require__("./src/app/schemes/categories/category.scheme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_upload_service__ = __webpack_require__("./src/app/services/upload/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(databaseGenericService, uploadService) {
        this.databaseGenericService = databaseGenericService;
        this.uploadService = uploadService;
        this.changeOptionCategory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.input = {
            nombre: '',
            creado: new Date().toString(),
            id: '',
            imagen: './../../../assets/images/image.png',
            descripcion: '',
            estado: '',
        };
        this.selectedFile = null;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        if (this.inputCategory !== void 0) {
            this.statusEdit = true;
            this.input = this.inputCategory;
        }
        else {
            this.statusEdit = false;
        }
    };
    AddCategoryComponent.prototype.onGuardar = function () {
        var _this = this;
        if (this.selectedFile !== null) {
            this.uploadService.onUpload('/imagenes/categorias/', this.selectedFile).subscribe(function (resImagen) {
                _this.input.imagen = resImagen.downloadURL;
                _this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA, _this.input).subscribe(function (res) {
                    _this.changeOptionCategory.emit('listar');
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA, this.input).subscribe(function (res) {
                _this.changeOptionCategory.emit('listar');
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddCategoryComponent.prototype.onEditar = function () {
        var _this = this;
        if (this.selectedFile !== null) {
            this.uploadService.onUpload('/imagenes/categorias/', this.selectedFile).subscribe(function (resImagen) {
                _this.input.imagen = resImagen.downloadURL;
                _this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA, _this.input.id, _this.input).subscribe(function (resUpdate) {
                    _this.changeOptionCategory.emit('listar');
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA, this.input.id, this.input).subscribe(function (resUpdate) {
                _this.changeOptionCategory.emit('listar');
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddCategoryComponent.prototype.onFileSelected = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.click();
        var that = this;
        input.onchange = function (e) {
            that.selectedFile = e.path[0].files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                that.input.imagen = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };
    AddCategoryComponent.prototype.onDescartar = function () {
        this.changeOptionCategory.emit('listar');
    };
    AddCategoryComponent.prototype.onEliminar = function () {
        var _this = this;
        this.databaseGenericService.delete(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA, this.input.id).subscribe(function (resDelete) {
            _this.changeOptionCategory.emit('listar');
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddCategoryComponent.prototype, "changeOptionCategory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__schemes_categories_category_scheme__["a" /* CategoryScheme */])
    ], AddCategoryComponent.prototype, "inputCategory", void 0);
    AddCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-category',
            template: __webpack_require__("./src/app/categories/add-category/add-category.component.html"),
            styles: [__webpack_require__("./src/app/categories/add-category/add-category.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_4__services_upload_upload_service__["a" /* UploadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_4__services_upload_upload_service__["a" /* UploadService */]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/categories/category/category.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu></app-menu>\r\n\r\n  <div class=\"align-rigth\">\r\n      <h2 class=\"ui header\">Categorias</h2>\r\n    <div class=\"ui green two item menu\">\r\n      <a class=\"item\" [ngClass]=\"{'active': this.select.agregar}\" (click)=\"onSelected('agregar')\">\r\n        Agregar\r\n      </a>\r\n      <a class=\"item\" [ngClass]=\"{'active': this.select.listar}\" (click)=\"onSelected('listar')\">\r\n        Listar\r\n      </a>\r\n    </div>\r\n\r\n    <app-add-category *ngIf=\"this.select.agregar\" [inputCategory]=\"categoryEdit\" (changeOptionCategory)=\"onSelected('listar')\"></app-add-category>\r\n    <app-list-category *ngIf=\"this.select.listar\" (_categoySelected)=\"_outCategory($event)\"></app-list-category>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/categories/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
        this.select = {
            agregar: true,
            listar: false,
        };
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.onSelected = function (type) {
        this.selectDefault();
        switch (type) {
            case 'agregar':
                this.select.agregar = true;
                break;
            case 'listar':
                this.select.listar = true;
                break;
        }
        this.categoryEdit = void 0;
    };
    CategoryComponent.prototype.selectDefault = function () {
        this.select = {
            agregar: false,
            listar: false,
        };
    };
    CategoryComponent.prototype._outCategory = function (event) {
        this.selectDefault();
        this.select.agregar = true;
        this.categoryEdit = event;
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("./src/app/categories/category/category.component.html"),
            styles: [__webpack_require__("./src/app/categories/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/categories/list-category/list-category.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/list-category/list-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui link cards f-justify-space-around\">\r\n  <div class=\"card\" *ngFor=\"let category of this.categoriesList\" (click)=\"onSelectCard(category)\">\r\n    <div class=\"image\">\r\n      <img [src]=\"category.imagen\" style=\"height: 200px;\">\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">{{ category.nombre }}</div>\r\n      <div class=\"meta\">\r\n      </div>\r\n      <div class=\"description\">\r\n        {{ category.descripcion }}\r\n      </div>\r\n    </div>\r\n    <div class=\"extra content\">\r\n      <span class=\"right floated\">\r\n        Creado el {{ this.formatDate(category.creado) }}\r\n      </span>\r\n      <span>\r\n        <i class=\"bell icon\"></i>\r\n        {{ category.estado }}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/categories/list-category/list-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListCategoryComponent = /** @class */ (function () {
    function ListCategoryComponent(db) {
        this.db = db;
        this._categoySelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.categoriesList = [];
    }
    ListCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getData(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA).subscribe(function (res) {
            _this.categoriesList = res.serverResponse;
        }, function (error) {
            console.log(error);
        });
    };
    ListCategoryComponent.prototype.formatDate = function (creado) {
        var fecha = new Date(creado);
        return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    };
    ListCategoryComponent.prototype.onSelectCard = function (category) {
        this._categoySelected.emit(category);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ListCategoryComponent.prototype, "_categoySelected", void 0);
    ListCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-category',
            template: __webpack_require__("./src/app/categories/list-category/list-category.component.html"),
            styles: [__webpack_require__("./src/app/categories/list-category/list-category.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], ListCategoryComponent);
    return ListCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "/* .more:hover {\r\n    background-color: green;\r\n}\r\n\r\n.less:hover {\r\n    background-color: red;\r\n}\r\n */\r\n\r\n /* body{\r\n    background-color: #c34960;\r\n } */\r\n\r\n hr {\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid #E8707B;\r\n    width: 100%;\r\n    padding: 5; \r\n  }\r\n\r\n .container-fluid{\r\n      padding-left: 0px;\r\n  }\r\n\r\n .align-vertical {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 2px;\r\n }\r\n\r\n .less:hover, .more:hover {\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n }\r\n\r\n .less:active, .more:active {\r\n     -webkit-transform: scale(1.0);\r\n             transform: scale(1.0);\r\n }\r\n\r\n .margin-150-auto {\r\n    position: fixed;\r\n    z-index: 10;\r\n    left: 35%;\r\n    /*margin: 0px auto;*/\r\n    margin: 0px;\r\n    width: 40%;\r\n    background-color: rgba(226, 195, 195, 0.7);\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n  }"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class=\"ui positive message margin-150-auto\" *ngIf=\"message.active\" [ngClass]=\"{'positive': message.type, 'negative': !message.type}\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n    {{ message.title }}\r\n  </div>\r\n  <p> {{ message.subtitle }} </p>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"image\">\r\n        <img class=\"img-fluid\" href=\"http://escueladechefs.com/wp-content/uploads/2016/06/panaderia1.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\"></div>\r\n  </div>\r\n\r\n  <div class=\"align-rigth\">\r\n      <div class=\"ui divided items\">\r\n        <div class=\"item padding-50\" style=\"padding: 50px;\">\r\n          <div class=\"image\" style=\"width: 70%;\">\r\n            <img [src]=\"product.imagen\" style=\"height: 380px;\">\r\n          </div>\r\n          <div class=\"content margin-top-5\" style=\"margin-top: 5px; display: flex; justify-content: center; flex-direction: column;\">\r\n            <h2 class=\"header\" style=\"font-size: 20px;\">{{ product.nombre }}</h2>\r\n            <div class=\"description\">\r\n              <p>{{ product.descripcion }}</p>\r\n            </div>\r\n            <div class=\"extra\">\r\n              <div class=\"ui label\">Edicion limitada</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <hr style=\"margin: 15px 5px;\">\r\n    \r\n      <!-- Lista de productos -->\r\n      <div class=\"ui link cards f-justify-space-around\">\r\n        <div class=\"card\" *ngFor=\"let product of this.productList; index as i\">\r\n          <div class=\"image\">\r\n            <img [src]=\"product.imagen\" style=\"height: 200px;\">\r\n          </div>\r\n          <div class=\"content\">\r\n            <div class=\"header\">{{ product.nombre }}</div>\r\n            <div class=\"meta\">\r\n            <!--   <a>Provedor: </a> {{ product.proveedorId }} -->\r\n              <a>Cantidad: </a> {{ product.cantidad }}\r\n            </div>\r\n            <div class=\"description\">\r\n              Descripcion: {{ product.descripcion }}\r\n            </div>\r\n          </div>\r\n          <div class=\"extra content\">\r\n            <span class=\"right floated\">\r\n              Creado el {{ this.formatDate(product.creado) }}\r\n            </span>\r\n            <span>\r\n              <i class=\"dollar sign icon\"></i>\r\n              {{ product.costo }}\r\n            </span>\r\n          </div>\r\n          <div class=\"extra content\" style=\"display: flex\" *ngIf=\"!onlyAdministrador\">\r\n    \r\n            <span style=\"display: flex;\">\r\n              <div class=\"align-vertical\" (click)=\"onQuantityProducts(i, 'less')\">\r\n                <img class=\"less\" width=\"22px\" height=\"22px\" src=\"./../../../assets/icons/menos.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"align-vertical\">\r\n                <input type=\"text\" disabled [(ngModel)]=\"product.comprar\" style=\"border-radius: 5px; width: 22px; height: 22px; text-align: center\">\r\n              </div>\r\n              <div class=\"align-vertical\" (click)=\"onQuantityProducts(i, 'more')\">\r\n                <img class=\"more\" width=\"22px\" height=\"22px\" src=\"./../../../assets/icons/mas.png\" alt=\"\">\r\n              </div>\r\n            </span>\r\n            <span (click)=\"onAddCart(i)\" class=\"ui right floated primary button\" style=\"width: 100%; margin-top: 5px;\" *ngIf=\"!onlyAdministrador\">\r\n              Agregar al carrito\r\n            </span>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n      <!-- End lista de productos -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(localStorage, db, dbPurchased) {
        this.localStorage = localStorage;
        this.db = db;
        this.dbPurchased = dbPurchased;
        this.message = {
            title: '',
            subtitle: '',
            active: false,
            type: false,
        };
        this.onlyAdministrador = false;
        this.productList = [];
        this.product = {
            imagen: './../../../assets/images/image.png',
            nombre: '',
            categoriaId: '',
            costo: 0,
            cantidad: 0,
            estado: '',
            proveedorId: '',
            creado: '',
        };
        this.purchasedProducts = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.localStorage.getUser();
        this.userInfo = this.localStorage.getUser();
        this.db.getData(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS).subscribe(function (res) {
            _this.productList = res.serverResponse;
            _this.product = __assign({}, _this.productList[0]);
            _this.productList.forEach(function (producto) {
                producto.comprar = 1;
            });
            _this.onlyAdministrador = user.tipo === 'administrador' ? true : false;
            var min = 0;
            var max = _this.productList.length - 1;
            setInterval(function () {
                var index = Math.floor(Math.random() * (max - min) + min);
                _this.product = _this.productList[index];
            }, 5000);
        });
    };
    DashboardComponent.prototype.formatDate = function (creado) {
        var fecha = new Date(creado);
        return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    };
    DashboardComponent.prototype.onQuantityProducts = function (index, moreOrless) {
        if (moreOrless === 'more' && this.productList[index].comprar !== this.productList[index].cantidad) {
            this.productList[index].comprar++;
        }
        else if (moreOrless === 'less' && this.productList[index].comprar !== 1) {
            this.productList[index].comprar--;
        }
    };
    DashboardComponent.prototype.onAddCart = function (index) {
        var _this = this;
        var product = this.productList[index];
        this.message = {
            active: true,
            title: 'Producto agregado correctamente',
            subtitle: product.nombre,
            type: true,
        };
        setTimeout(function () {
            _this.message.active = false;
        }, 3000);
        this.db.getDataWhere(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, { fieldPath: 'userId', operador: '==', fieldPathFirebase: this.userInfo.userId }).subscribe(function (res) {
            _this.purchasedProducts = res.serverResponse;
            var find = _this.purchasedProducts.find(function (p) { return p.productId === product.id; });
            if (find !== undefined) {
                find.cantidad += product.comprar;
                find.total += product.comprar * product.costo;
                _this.dbPurchased.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, find.id, find).subscribe(function (update) {
                    product.cantidad -= product.comprar;
                    _this.db.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, product.id, product).subscribe(function (r) {
                        console.log(r.serverResponse);
                    }, function (e) {
                        console.log(e);
                    });
                }, function (err) { console.log(err); });
            }
            else {
                var purchased = {
                    productImage: product.imagen,
                    productName: product.nombre,
                    cantidad: product.comprar,
                    productId: product.id,
                    total: product.comprar * product.costo,
                    estado: 'carrito',
                    creado: String(new Date()),
                    userId: _this.userInfo.userId,
                };
                _this.dbPurchased.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, purchased).subscribe(function (resPurchased) {
                    product.cantidad -= product.comprar;
                    _this.db.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, product.id, product).subscribe(function (r) {
                        console.log(r.serverResponse);
                    }, function (e) {
                        console.log(e);
                    });
                }, function (err) {
                    console.log(err);
                });
            } // END ELSE
        }, function (err) {
            console.log(err);
        });
        /*   */
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_1__services_local_storage_storage_service__["a" /* StorageService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".hide {\r\n    display: none;\r\n}\r\n\r\n.show {\r\n    opacity: 0.3;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    z-index: 10;\r\n}"

/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\" [ngClass]=\"{'show': this.showLoader, 'hide': !this.showLoader}\">\r\n  <!-- <div class=\"ui active loader\"></div> -->\r\n  <div class=\"ui active dimmer\">\r\n      <div class=\"ui huge text loader\">Loading</div>\r\n  </div>\r\n  <p></p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.showLoader = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "showLoader", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/components/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* .body {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('./../../../assets/images/wall_4.jpg');\r\n  background-size: cover;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.margin-150-auto {\r\n  margin: 150px auto;\r\n  width: 70%;\r\n  background-color: rgba(226, 195, 195, 0.7);\r\n  border-radius: 60px;\r\n  padding: 15px;\r\n}\r\n\r\n.txt-centered {\r\n  text-align: center;\r\n} */\r\n\r\n\r\n.container-fluid{\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n.contenedorInicio{\r\n  padding: 3em;\r\n  width: 30em;\r\n  margin: auto;\r\n  background-color: rgba(217,217,217,0.7);\r\n}\r\n\r\n\r\n.contenedorFormulario{\r\n  padding: 1em;\r\n  width: 38em;\r\n  margin: auto;\r\n  background-color: rgba(217,217,217,0.7);\r\n}\r\n\r\n\r\n.contenedorInicio h1, .contenedorFormulario h1{\r\n  text-align: center;\r\n  font-family: 'Lobster', cursive;\r\n  color: #E8707B;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.contenedorInicio label, input{\r\n  font-family: 'Merienda', cursive;\r\n}\r\n\r\n\r\n#contenedorLogo h1{\r\n  font-family: 'AuthenticHilton',Brush Script MT,cursive;\r\n  color: white;\r\n}\r\n\r\n\r\nh2{\r\n  font-family: 'Lobster', cursive;\r\n  text-align: center;\r\n  color: #c34960;\r\n}\r\n\r\n\r\nh3{\r\n  font-family: 'Lobster', cursive;\r\n  text-align: center;\r\n  color: black;\r\n}\r\n\r\n\r\n.btn-pink{\r\n  background-color: #E8707B;\r\n  color: white;\r\n}\r\n\r\n\r\n.btn-pink:hover{\r\n  background-color: #BF045B;\r\n  color: white;\r\n}\r\n\r\n\r\ndiv{\r\n  margin: 1.5em 0em;\r\n}\r\n\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #E8707B;\r\n  width: 100%;\r\n  padding: 5; \r\n}\r\n\r\n\r\n.btn-barra:hover{\r\n  background-color: #E8707B;\r\n  color: white;\r\n  font-family: 'Courgette', cursive;\r\n}\r\n\r\n\r\ntable tr:hover{\r\n  background-color: #E8707B;\r\n  color: white;\r\n  font-family: 'Courgette', cursive;\r\n}\r\n\r\n\r\n.tabla{\r\n  font-family: 'Courgette', cursive;\r\n}\r\n\r\n\r\n.btn-barra{\r\n  font-family: 'Courgette', cursive;\r\n}\r\n\r\n\r\n.centrado{\r\n  margin: auto;\r\n  max-width: 300px;\r\n}\r\n\r\n\r\n.barra{\r\n  background-color: #E8707B;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div id=\"errorInicio\" class=\"alert alert-danger\" *ngIf=\"showMessage\">\r\n    <i class=\"close icon\" (click)=\"onClose()\"></i>\r\n    <div class=\"header\">\r\n      No se pudo iniciar sesion\r\n    </div>\r\n    <p> Usuario y/o contraseña invalidos\r\n    </p>\r\n  </div>\r\n  \r\n  <div id=\"contenedorLogo\">\r\n      <h1 class=\"text-center display-1\">3Delicias</h1>\r\n      <h1 class=\"text-center\">Endulzando tu vida</h1>\r\n  </div>\r\n\r\n  <div class=\"contenedorInicio\">\r\n    <h1>Login</h1>\r\n    <div>\r\n        <label for=\"email\">Correo electrónico</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Correo electrónico\" [(ngModel)]=\"inputs.email\">\r\n    </div>\r\n    <div>\r\n        <label for=\"password\">Contraseña</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"inputs.password\">\r\n    </div>\r\n    <div>\r\n        <div type=\"submit\" class=\"btn btn-block btn-pink\" (click)=\"onLogin()\">Iniciar Sesión</div>\r\n        <div type=\"submit\" class=\"btn btn-block btn-pink\" (click)=\"password()\">Recuperar Contraseña</div>\r\n    </div>\r\n    <hr>\r\n    <div>\r\n        <div type=\"submit\" class=\"btn btn-block btn-pink\" (click)=\"onRegister()\">Reg&iacute;strate</div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"ui form margin-150-auto\">\r\n    <div class=\"field txt-centered\">\r\n      3 Delicias\r\n    </div>\r\n    <div class=\"field\">\r\n      <img class=\"ui small centered circular image\" src=\"./../../../assets/images/usuario.png\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Email</label>\r\n      <input type=\"email\" name=\"\" placeholder=\"Email\" [(ngModel)]=\"inputs.email\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Password</label>\r\n      <input type=\"password\" name=\"\" placeholder=\"Password\" [(ngModel)]=\"inputs.password\">\r\n    </div>\r\n    <div class=\"ui button fluid\" (click)=\"onLogin()\"> Login </div>\r\n    <div class=\"ui button fluid\" style=\"margin-top: 5px;\" (click)=\"onRegister()\"> Registrarse </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, db, localStorage) {
        this.loginService = loginService;
        this.router = router;
        this.db = db;
        this.localStorage = localStorage;
        this.inputs = {
            email: '',
            password: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.showMessage = false;
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.login(this.inputs.email, this.inputs.password).subscribe(function (res) {
            var uid = res.uid;
            _this.db.getDataWhere(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, { fieldPath: 'uid', operador: '==', fieldPathFirebase: uid }).subscribe(function (resUser) {
                var serverResponse = resUser.serverResponse[0];
                _this.localStorage.setUser({
                    uid: serverResponse.uid,
                    nombre: serverResponse.nombre,
                    email: serverResponse.email,
                    userId: serverResponse.id,
                    imagen: serverResponse.imagen,
                    tipo: serverResponse.tipo,
                });
                _this.router.navigate(['dashboard']);
            });
        }, function (err) {
            _this.showMessage = true;
            setTimeout(function () {
                _this.showMessage = false;
            }, 5000);
        });
    };
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.password = function () {
        this.router.navigate(['password']);
    };
    LoginComponent.prototype.onClose = function () {
        this.showMessage = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_5__services_local_storage_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_5__services_local_storage_storage_service__["a" /* StorageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "#logo {\r\n    font-family: 'AuthenticHilton',Brush Script MT,cursive;\r\n    color: #c34960;\r\n    text-align: center;\r\n}\r\n#slogan{\r\n    font-family: 'AuthenticHilton',Brush Script MT,cursive;\r\n    color: #c34960;\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n#inicio:hover  #logo,#inicio:hover  #slogan{\r\n    font-family: 'AuthenticHilton',Brush Script MT,cursive;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n#inicio:hover{\r\n    background-color: #c34960;\r\n}\r\na.item:hover{\r\n    background-color: #c34960 !important;\r\n    color: white !important;\r\n}\r\n.col-md-2{\r\n    padding-left: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2\" style=\"position: fixed; height: 100%;\">\r\n  <div class=\"ui vertical menu\" style=\"height: 100%;\">\r\n    <div id=\"inicio\" class=\"item\" (click)=\"onSelected('dashboard')\">\r\n        <h1 id=\"logo\" class=\"text-center\">3Delicias</h1>\r\n        <h1 id=\"slogan\" class=\"text-center\">Endulzando tu vida</h1>\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"ui medium circular image\" [src]=\"this.input.imagen\" style=\"height: 150px;\">\r\n    </div>\r\n    <div class=\"flex f-justify-center\">\r\n      {{ this.input.nombre }}\r\n    </div>\r\n\r\n    <!-- <a class=\"item\" >Inicio</a> -->\r\n\r\n    <!--     <div class=\"item\">\r\n      <div class=\"header\">Productos</div>\r\n      <div class=\"menu\" (click)=\"onSelected('list')\">\r\n        <a class=\"item\" (click)=\"onSelected('new')\">Agregar</a>\r\n        <a class=\"item\">Listar</a>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"item\" *ngIf=\"!onlyAdministrador\">\r\n      <div class=\"header\">Carrito</div>\r\n      <div class=\"menu\">\r\n        <a class=\"item\" (click)=\"onSelected('cart')\" >Agregados</a>\r\n        <!-- <a class=\"item\">Comprados</a> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"item\" *ngIf=\"onlyAdministrador\">\r\n      <div class=\"header\">Administrador</div>\r\n      <div class=\"menu\">\r\n        <a class=\"item\" (click)=\"onSelected('product')\">Productos</a>\r\n        <a class=\"item\" (click)=\"onSelected('newCategory')\">Categorias</a>\r\n        <a class=\"item\" (click)=\"onSelected('record')\">Historial</a>\r\n        <a class=\"item\" (click)=\"onSelected('users')\">Usuarios</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"header\">Mi cuenta</div>\r\n      <div class=\"menu\">\r\n        <a class=\"item\" (click)=\"onSelected('email')\" *ngIf=\"!onlyAdministrador\">Enviar correo al Administrador</a>\r\n        <a class=\"item\" (click)=\"onSelected('account')\">Editar cuenta</a>\r\n        <a class=\"item\" (click)=\"onSelected('about')\">Acerca de...</a>\r\n        <a class=\"item\" (click)=\"onLogout()\">Logout</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, loginservice, db, localStorage) {
        this.router = router;
        this.loginservice = loginservice;
        this.db = db;
        this.localStorage = localStorage;
        this.input = {
            imagen: '',
            nombre: '',
        };
        this.onlyAdministrador = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var user = this.localStorage.getUser();
        this.input = {
            nombre: user.nombre,
            imagen: user.imagen,
        };
        this.onlyAdministrador = user.tipo === 'administrador' ? true : false;
    };
    MenuComponent.prototype.ngOnChanges = function (simple) {
        if (simple['newimage']) {
            if (this.newimage !== void 0) {
                this.input.imagen = this.newimage;
            }
        }
    };
    MenuComponent.prototype.onSelected = function (type) {
        switch (type) {
            case 'new':
                this.router.navigate(['product', 'new']);
                break;
            case 'list':
                this.router.navigate(['product', 'list']);
                break;
            case 'dashboard':
                this.router.navigate(['dashboard']);
                break;
            case 'newCategory':
                this.router.navigate(['category']);
                break;
            case 'provider':
                this.router.navigate(['provider']);
                break;
            case 'product':
                this.router.navigate(['product']);
                break;
            case 'users':
                this.router.navigate(['user']);
                break;
            case 'account':
                this.router.navigate(['account']);
                break;
            case 'cart':
                this.router.navigate(['mycart']);
                break;
            case 'record':
                this.router.navigate(['record']);
                break;
            case 'email':
                this.router.navigate(['email']);
                break;
        }
    };
    MenuComponent.prototype.onLogout = function () {
        var _this = this;
        this.loginservice.logout().subscribe(function (res) {
            _this.router.navigate(['login']);
            _this.localStorage.clean();
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "newimage", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/menu/menu.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_4__services_local_storage_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_4__services_local_storage_storage_service__["a" /* StorageService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".body {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('/../../../assets/images/wall_4.jpg');\r\n  background-size: cover;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.center-form {\r\n  width: 70%;\r\n  margin: 15px auto;\r\n  overflow-y: scroll;\r\n  height: 90%;\r\n  overflow-x: hidden;\r\n  position: relative;\r\n  padding: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <div class=\"ui form center-form\">\r\n    <h4 class=\"ui dividing header\">Registro</h4>\r\n    <!-- Datos personales -->\r\n\r\n\r\n    <div class=\"item\" style=\"display: flex;\">\r\n      <div class=\"ui image\" style=\"    margin: 10px; width: 20%;\">\r\n        <img (click)=\"onFileSelected()\" title=\"Subir imagen\" [src]=\"this.input.imagen\" width=\"150px\" height=\"150px\">\r\n      </div>\r\n      <div class=\"content\" style=\"width: 80%;\">\r\n\r\n        <div class=\"field\">\r\n          <label>Nombre completo</label>\r\n          <div class=\"two fields\">\r\n            <div class=\"field\">\r\n              <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"this.input.nombre\">\r\n            </div>\r\n            <div class=\"field\">\r\n              <input type=\"text\" placeholder=\"Apellidos\" [(ngModel)]=\"this.input.apellidos\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"fields\">\r\n          <div class=\"seven wide field\">\r\n            <label>Email</label>\r\n            <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"this.input.email\">\r\n          </div>\r\n          <div class=\"seven wide field\">\r\n            <label>Password</label>\r\n            <input type=\"password\"  placeholder=\"Password\" [(ngModel)]=\"this.input.password\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <label>Edad</label>\r\n            <input type=\"number\" maxlength=\"3\" placeholder=\"Edad\" [(ngModel)]=\"this.input.edad\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Direccion -->\r\n    <h4 class=\"ui dividing header\">Dirección</h4>\r\n    <div class=\"fields\">\r\n      <div class=\"seven wide field\">\r\n        <label>Colonia</label>\r\n        <input type=\"text\" placeholder=\"Colonia\" [(ngModel)]=\"this.input.direccion.colonia\">\r\n      </div>\r\n      <div class=\"seven wide field\">\r\n        <label>Calle</label>\r\n        <input type=\"text\" placeholder=\"Calle\" [(ngModel)]=\"this.input.direccion.calle\">\r\n      </div>\r\n      <div class=\"three wide field\">\r\n        <label>Numero</label>\r\n        <input type=\"number\" placeholder=\"Numero\" [(ngModel)]=\"this.input.direccion.numero\">\r\n      </div>\r\n    </div>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>Estado</label>\r\n        <input type=\"text\" placeholder=\"Estado\" [(ngModel)]=\"this.input.direccion.estado\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Pais</label>\r\n        <input type=\"text\" placeholder=\"Pais\" [(ngModel)]=\"this.input.direccion.pais\">\r\n      </div>\r\n    </div>\r\n    <!-- TARJETA DE CREDITO -->\r\n    <h4 class=\"ui dividing header\">Tarjeta</h4>\r\n    <div class=\"three fields\">\r\n      <div class=\"field\">\r\n        <label>Tipo</label>\r\n        <input type=\"text\" placeholder=\"Tipo\" [(ngModel)]=\"this.input.tarjeta.tipo\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Numero</label>\r\n        <input type=\"text\" placeholder=\"Numero\" [(ngModel)]=\"this.input.tarjeta.numero\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>CVC</label>\r\n        <input type=\"text\" placeholder=\"CVC\" [(ngModel)]=\"this.input.tarjeta.cvc\">\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Expiración</label>\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <select class=\"ui fluid search dropdown\" [(ngModel)]=\"this.input.tarjeta.expiracion.mes\">\r\n            <option value=\"\">Mes</option>\r\n            <option value=\"1\">Enero</option>\r\n            <option value=\"2\">Febrero</option>\r\n            <option value=\"3\">Marzo</option>\r\n            <option value=\"4\">Abril</option>\r\n            <option value=\"5\">Mayo</option>\r\n            <option value=\"6\">Junio</option>\r\n            <option value=\"7\">Julio</option>\r\n            <option value=\"8\">Agosto</option>\r\n            <option value=\"9\">Septiembre</option>\r\n            <option value=\"10\">Octubre</option>\r\n            <option value=\"11\">Noviembre</option>\r\n            <option value=\"12\">Diciembre</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"field\">\r\n          <input type=\"number\" placeholder=\"Año\" [(ngModel)]=\"this.input.tarjeta.expiracion.ano\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n      </div>\r\n      <div class=\"field\" style=\"padding-left: 15px; padding-right: 15px;\">\r\n        <div class=\"two fields\">\r\n          <div class=\"field ui primary button\" style=\"margin-right: 1px;\" (click)=\"onGuardar()\">\r\n            Guardar\r\n          </div>\r\n          <div class=\"field ui button\" style=\"margin-left: 1px;\">\r\n            Descartar\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_upload_service__ = __webpack_require__("./src/app/services/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_guid_guid_service__ = __webpack_require__("./src/app/services/guid/guid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(login, localStorage, db, uploadService, router, guidService) {
        this.login = login;
        this.localStorage = localStorage;
        this.db = db;
        this.uploadService = uploadService;
        this.router = router;
        this.guidService = guidService;
        this.selectedFile = null;
        this.input = {
            nombre: '',
            tipo: 'usuario',
            apellidos: '',
            edad: 0,
            email: '',
            imagen: './../../../assets/images/image.png',
            password: '',
            direccion: {
                colonia: '',
                calle: '',
                numero: '',
                estado: '',
                pais: '',
            },
            tarjeta: {
                tipo: '',
                numero: '',
                cvc: '',
                expiracion: {
                    mes: '',
                    ano: 0,
                },
                cantidad: 0,
            },
            creado: new Date().toString(),
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.input.tarjeta.cantidad = this.guidService.generateRandom(1500, 7800);
    };
    RegisterComponent.prototype.onFileSelected = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.click();
        var that = this;
        input.onchange = function (e) {
            that.selectedFile = e.path[0].files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                that.input.imagen = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };
    RegisterComponent.prototype.onGuardar = function () {
        var _this = this;
        this.login.registerUser(this.input.email, this.input.password).subscribe(function (res) {
            _this.input.uid = res.uid;
            // Borramos el password
            delete _this.input.password;
            if (_this.selectedFile !== null) {
                _this.uploadService.onUpload('/imagenes/usuarios/', _this.selectedFile).subscribe(function (uploadRes) {
                    _this.db.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, _this.input).subscribe(function (resUserInfo) {
                        _this.localStorage.setUser({
                            uid: res.uid,
                            nombre: _this.input.nombre,
                            email: res.email,
                            userId: resUserInfo.id,
                            imagen: uploadRes.downloadURL,
                            tipo: _this.input.tipo,
                        });
                        _this.router.navigate(['dashboard']);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (errorUpload) {
                    console.log(errorUpload);
                });
            }
            else {
                _this.db.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, _this.input).subscribe(function (resUserInfo) {
                    _this.localStorage.setUser({
                        uid: res.uid,
                        nombre: _this.input.nombre,
                        email: res.email,
                        userId: resUserInfo.id,
                        imagen: _this.input.imagen,
                        tipo: _this.input.tipo,
                    });
                    _this.router.navigate(['dashboard']);
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (er) {
            alert('No se pudo registrar el usuario');
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__services_local_storage_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_7__services_guid_guid_service__["a" /* GuidService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__services_local_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__services_guid_guid_service__["a" /* GuidService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/correo-admin/correo-admin.component.css":
/***/ (function(module, exports) {

module.exports = "div.contenedor{\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/correo-admin/correo-admin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <app-menu></app-menu>\r\n    <div class=\"ui positive message margin-150-auto\" *ngIf=\"message.active\" [ngClass]=\"{'positive': message.type, 'negative': !message.type}\">\r\n        <i class=\"close icon\"></i>\r\n        <div class=\"header\">\r\n          {{ message.title }}\r\n        </div>\r\n        <p> {{ message.subtitle }} </p>\r\n      </div>\r\n    \r\n    <div class=\"align-rigth\">\r\n        <div> \r\n            <div class=\"contenedor\" >\r\n              <label for=\"asunto\">Asunto</label><br>\r\n              <input type=\"text\"><br><br>\r\n              <textarea rows=\"10\" cols=\"90\"></textarea><br><br>\r\n              <button (click)=\"redirigir()\" >Enviar</button>\r\n            </div>\r\n          </div>\r\n          <div>\r\n     </div>"

/***/ }),

/***/ "./src/app/correo-admin/correo-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreoAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorreoAdminComponent = /** @class */ (function () {
    function CorreoAdminComponent(router, localStorage, db, dbPurchased) {
        this.router = router;
        this.localStorage = localStorage;
        this.db = db;
        this.dbPurchased = dbPurchased;
        this.message = {
            title: '',
            subtitle: '',
            active: false,
            type: false,
        };
        this.purchasedProducts = [];
    }
    CorreoAdminComponent.prototype.ngOnInit = function () {
        var user = this.localStorage.getUser();
        this.userInfo = this.localStorage.getUser();
    };
    CorreoAdminComponent.prototype.redirigir = function () {
        var _this = this;
        this.message = {
            active: true,
            title: 'Gracias por tu mensaje',
            subtitle: 'En breve nuestros administradores se comunicaran contigo',
            type: true,
        };
        setTimeout(function () {
            _this.message.active = false;
            _this.router.navigate(['dashboard']);
        }, 3000);
    };
    CorreoAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-correo-admin',
            template: __webpack_require__("./src/app/correo-admin/correo-admin.component.html"),
            styles: [__webpack_require__("./src/app/correo-admin/correo-admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_2__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], CorreoAdminComponent);
    return CorreoAdminComponent;
}());



/***/ }),

/***/ "./src/app/products/add-product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/products/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui form\">\r\n\r\n\r\n  <div class=\"item\" style=\"display: flex;\">\r\n    <div class=\"ui image\" style=\"    margin: 10px; width: 20%;\">\r\n      <img (click)=\"onFileSelected()\" title=\"Subir imagen\" [src]=\"this.input.imagen\" width=\"150px\" height=\"150px\">\r\n    </div>\r\n    <div class=\"content\" style=\"width: 80%;\">\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Nombre</label>\r\n          <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"this.input.nombre\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Categoria</label>\r\n          <select class=\"ui fluid dropdown\" [(ngModel)]=\"this.input.categoriaId\">\r\n            <option *ngFor=\"let category of categoriesList;\" value=\"{{ category.id }}\">{{ category.nombre }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Costo</label>\r\n          <input type=\"number\" placeholder=\"Costo\" [(ngModel)]=\"this.input.costo\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Cantidad</label>\r\n          <input type=\"number\" placeholder=\"Cantidad\" [(ngModel)]=\"this.input.cantidad\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Estado</label>\r\n      <select class=\"ui fluid dropdown\" [(ngModel)]=\"this.input.estado\">\r\n        <option value=\"\">Estado</option>\r\n        <option value=\"exitente\">Existente</option>\r\n        <option value=\"agotado\">Agotado</option>\r\n      </select>\r\n    </div>\r\n  \r\n\r\n  <div class=\"field\">\r\n    <label>Descripcion</label>\r\n    <textarea rows=\"2\" [(ngModel)]=\"this.input.descripcion\"></textarea>\r\n  </div>\r\n\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"two fields\" *ngIf=\"!this.statusEdit; else elseTemplate\">\r\n        <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onGuardar()\">\r\n          Guardar\r\n        </div>\r\n        <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onDescartar()\">\r\n          Descartar\r\n        </div>\r\n      </div>\r\n      <ng-template #elseTemplate>\r\n        <div class=\"two fields\">\r\n          <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onEditar()\">\r\n            Editar\r\n          </div>\r\n          <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onEliminar()\">\r\n            Eliminar\r\n          </div>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/products/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_upload_upload_service__ = __webpack_require__("./src/app/services/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schemes_products_products_scheme__ = __webpack_require__("./src/app/schemes/products/products.scheme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(uploadService, databaseGenericService, databaseGenericProvider, databaseGenericCategory) {
        this.uploadService = uploadService;
        this.databaseGenericService = databaseGenericService;
        this.databaseGenericProvider = databaseGenericProvider;
        this.databaseGenericCategory = databaseGenericCategory;
        this.changeOptionProduct = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.input = {
            nombre: '',
            categoriaId: '',
            costo: 0,
            cantidad: 0,
            estado: '',
            proveedorId: '',
            imagen: './../../../assets/images/image.png',
            creado: new Date().toString(),
            descripcion: '',
        };
        this.selectedFile = null;
        this.providersList = [];
        this.categoriesList = [];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.inputProduct !== void 0) {
            this.statusEdit = true;
            this.input = this.inputProduct;
        }
        else {
            this.statusEdit = false;
        }
        this.databaseGenericCategory.getData(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].CATEGORIA).subscribe(function (res) {
            _this.categoriesList = res.serverResponse;
        }, function (error) {
            console.log(error);
        });
        this.databaseGenericProvider.getData(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES).subscribe(function (res) {
            _this.providersList = res.serverResponse;
        }, function (error) {
            console.log(error);
        });
    };
    AddProductComponent.prototype.onGuardar = function () {
        var _this = this;
        if (this.selectedFile === null) {
            this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, this.input).subscribe(function (res) {
                _this.changeOptionProduct.emit('listar');
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.uploadService.onUpload('/imagenes/productos/', this.selectedFile).subscribe(function (imagen) {
                _this.input.imagen = imagen.downloadURL;
                _this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, _this.input).subscribe(function (res) {
                    _this.changeOptionProduct.emit('listar');
                }, function (err) {
                    console.log(err);
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddProductComponent.prototype.onFileSelected = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.click();
        var that = this;
        input.onchange = function (e) {
            that.selectedFile = e.path[0].files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                that.input.imagen = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };
    AddProductComponent.prototype.onEditar = function () {
        var _this = this;
        if (this.selectedFile !== null) {
            this.uploadService.onUpload('/imagenes/productos/', this.selectedFile).subscribe(function (resImagen) {
                _this.input.imagen = resImagen.downloadURL;
                _this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, _this.input.id, _this.input).subscribe(function (resUpdate) {
                    _this.changeOptionProduct.emit('listar');
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, this.input.id, this.input).subscribe(function (resUpdate) {
                _this.changeOptionProduct.emit('listar');
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddProductComponent.prototype.onEliminar = function () {
        var _this = this;
        this.databaseGenericService.delete(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS, this.input.id).subscribe(function (resDelete) {
            _this.changeOptionProduct.emit('listar');
        }, function (error) {
            console.log(error);
        });
    };
    AddProductComponent.prototype.onDescartar = function () {
        this.changeOptionProduct.emit('listar');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], AddProductComponent.prototype, "changeOptionProduct", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__schemes_products_products_scheme__["a" /* ProductsScheme */])
    ], AddProductComponent.prototype, "inputProduct", void 0);
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/products/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/products/add-product/add-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_upload_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_upload_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/products/list-product/list-product.component.css":
/***/ (function(module, exports) {

module.exports = ".image-size {\r\n  height: 240.45px;\r\n  width: 290px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/list-product/list-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui link cards f-justify-space-around\">\r\n  <div class=\"card\" *ngFor=\"let product of this.productList\" (click)=\"onSelectCard(product)\">\r\n    <div class=\"image\">\r\n      <img [src]=\"product.imagen\" style=\"height: 200px;\">\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">{{ product.nombre }}</div>\r\n      <div class=\"meta\">\r\n      </div>\r\n      <div class=\"description\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"extra content\">\r\n      <span class=\"right floated\">\r\n        Creado el {{ this.formatDate(product.creado) }}\r\n      </span>\r\n      <span>\r\n        <i class=\"bell icon\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/products/list-product/list-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListProductComponent = /** @class */ (function () {
    function ListProductComponent(db, dbProvider, dbCategory) {
        this.db = db;
        this.dbProvider = dbProvider;
        this.dbCategory = dbCategory;
        this._productSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.productList = [];
    }
    ListProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getData(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PRODUCTOS).subscribe(function (res) {
            _this.productList = res.serverResponse;
        }, function (error) {
            console.log(error);
        });
    };
    ListProductComponent.prototype.formatDate = function (creado) {
        var fecha = new Date(creado);
        return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    };
    ListProductComponent.prototype.onSelectCard = function (product) {
        this._productSelected.emit(product);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ListProductComponent.prototype, "_productSelected", void 0);
    ListProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-product',
            template: __webpack_require__("./src/app/products/list-product/list-product.component.html"),
            styles: [__webpack_require__("./src/app/products/list-product/list-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], ListProductComponent);
    return ListProductComponent;
}());



/***/ }),

/***/ "./src/app/products/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu></app-menu>\r\n\r\n  <div class=\"align-rigth\">\r\n    <h2 class=\"ui header\">Productos</h2>\r\n    <div class=\"ui green two item menu\">\r\n      <a class=\"item\" [ngClass]=\"{'active': this.select.agregar}\" (click)=\"onSelected('agregar')\">\r\n        Agregar\r\n      </a>\r\n      <a class=\"item\" [ngClass]=\"{'active': this.select.listar}\" (click)=\"onSelected('listar')\">\r\n        Listar\r\n      </a>\r\n    </div>\r\n\r\n    <app-add-product *ngIf=\"this.select.agregar\" [inputProduct]=\"productEdit\" (changeOptionProduct)=\"onSelected('listar')\"></app-add-product>\r\n    <app-list-product *ngIf=\"this.select.listar\" (_productSelected)=\"_outProduct($event)\"></app-list-product>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.select = {
            agregar: true,
            listar: false,
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.onSelected = function (type) {
        this.selectDefault();
        switch (type) {
            case 'agregar':
                this.select.agregar = true;
                break;
            case 'listar':
                this.select.listar = true;
                break;
        }
        this.productEdit = void 0;
    };
    ProductComponent.prototype.selectDefault = function () {
        this.select = {
            agregar: false,
            listar: false,
        };
    };
    ProductComponent.prototype._outProduct = function (event) {
        this.selectDefault();
        this.select.agregar = true;
        this.productEdit = event;
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/products/product/product.component.html"),
            styles: [__webpack_require__("./src/app/products/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/providers/add-provider/add-provider.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/providers/add-provider/add-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui form\">\r\n\r\n  <div class=\"item\" style=\"display: flex;\">\r\n    <div class=\"ui image\" style=\"    margin: 10px; width: 20%;\">\r\n      <img (click)=\"onFileSelected()\" title=\"Subir imagen\" [src]=\"this.input.imagen\" width=\"150px\" height=\"150px\">\r\n    </div>\r\n    <div class=\"content\" style=\"width: 80%;\">\r\n\r\n\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Nombre</label>\r\n          <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"this.input.nombre\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Telefono</label>\r\n          <input type=\"text\" placeholder=\"Telefono\" [(ngModel)]=\"this.input.telefono\">\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Email</label>\r\n        <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"this.input.email\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui sizer vertical\">\r\n    <div class=\"ui tiny header\">Direccion</div>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>Colonia</label>\r\n        <input type=\"text\" placeholder=\"Colinia\" [(ngModel)]=\"this.input.direccion.colonia\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Calle</label>\r\n        <input type=\"text\" placeholder=\"calle\" [(ngModel)]=\"this.input.direccion.calle\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Numero</label>\r\n        <input type=\"number\" placeholder=\"Numero\" [(ngModel)]=\"this.input.direccion.numero\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n      <label>Estado</label>\r\n      <input type=\"text\" placeholder=\"Estado\" [(ngModel)]=\"this.input.direccion.estado\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Pais</label>\r\n      <input type=\"text\" placeholder=\"Pais\" [(ngModel)]=\"this.input.direccion.pais\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"two fields\" *ngIf=\"!this.statusEdit; else elseTemplate\">\r\n        <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onGuardar()\">\r\n          Guardar\r\n        </div>\r\n        <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onDescartar()\">\r\n          Descartar\r\n        </div>\r\n      </div>\r\n      <ng-template #elseTemplate>\r\n        <div class=\"two fields\">\r\n          <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onEditar()\">\r\n            Editar\r\n          </div>\r\n          <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onEliminar()\">\r\n            Eliminar\r\n          </div>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/providers/add-provider/add-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_upload_service__ = __webpack_require__("./src/app/services/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schemes_providers_provider_scheme__ = __webpack_require__("./src/app/schemes/providers/provider.scheme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProviderComponent = /** @class */ (function () {
    function AddProviderComponent(databaseGenericService, uploadService) {
        this.databaseGenericService = databaseGenericService;
        this.uploadService = uploadService;
        this.changeOptionProvider = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.input = {
            nombre: '',
            creado: new Date().toString(),
            email: '',
            telefono: '',
            id: '',
            imagen: './../../../assets/images/image.png',
            direccion: {
                colonia: '',
                calle: '',
                numero: '',
                estado: '',
                pais: '',
            },
        };
        this.selectedFile = null;
    }
    AddProviderComponent.prototype.ngOnInit = function () {
        if (this.inputProvider !== void 0) {
            this.statusEdit = true;
            this.input = this.inputProvider;
        }
        else {
            this.statusEdit = false;
        }
    };
    AddProviderComponent.prototype.onGuardar = function () {
        var _this = this;
        if (this.selectedFile !== null) {
            this.uploadService.onUpload('/imagenes/proveedores/', this.selectedFile).subscribe(function (resImagen) {
                _this.input.imagen = resImagen.downloadURL;
                _this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES, _this.input).subscribe(function (res) {
                    _this.changeOptionProvider.emit('listar');
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES, this.input).subscribe(function (res) {
                _this.changeOptionProvider.emit('listar');
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddProviderComponent.prototype.onEditar = function () {
        var _this = this;
        if (this.selectedFile !== null) {
            this.uploadService.onUpload('/imagenes/proveedores/', this.selectedFile).subscribe(function (resImagen) {
                _this.input.imagen = resImagen.downloadURL;
                _this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES, _this.input.id, _this.input).subscribe(function (resUpdate) {
                    _this.changeOptionProvider.emit('listar');
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES, this.input.id, this.input).subscribe(function (resUpdate) {
                _this.changeOptionProvider.emit('listar');
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddProviderComponent.prototype.onFileSelected = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.click();
        var that = this;
        input.onchange = function (e) {
            that.selectedFile = e.path[0].files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                that.input.imagen = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };
    AddProviderComponent.prototype.onDescartar = function () {
        this.changeOptionProvider.emit('listar');
    };
    AddProviderComponent.prototype.onEliminar = function () {
        var _this = this;
        this.databaseGenericService.delete(__WEBPACK_IMPORTED_MODULE_3__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES, this.input.id).subscribe(function (resDelete) {
            _this.changeOptionProvider.emit('listar');
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddProviderComponent.prototype, "changeOptionProvider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__schemes_providers_provider_scheme__["a" /* ProviderScheme */])
    ], AddProviderComponent.prototype, "inputProvider", void 0);
    AddProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-provider',
            template: __webpack_require__("./src/app/providers/add-provider/add-provider.component.html"),
            styles: [__webpack_require__("./src/app/providers/add-provider/add-provider.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_2__services_upload_upload_service__["a" /* UploadService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_2__services_upload_upload_service__["a" /* UploadService */]])
    ], AddProviderComponent);
    return AddProviderComponent;
}());



/***/ }),

/***/ "./src/app/providers/list-provider/list-provider.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/providers/list-provider/list-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui link cards f-justify-space-around\">\r\n  <div class=\"card\" *ngFor=\"let provider of providersList\" (click)=\"onSelectCard(provider)\">\r\n    <div class=\"image\">\r\n      <img [src]=\"provider.imagen\" style=\"height: 200px;\">\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\"></div>\r\n      <div class=\"meta\">\r\n      </div>\r\n      <div class=\"description\">\r\n        <div>Email: {{ provider.email }}</div>\r\n        <div>Telefono: {{ provider.telefono }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"extra content\">\r\n      <span class=\"right floated\">\r\n        Agregado el {{ this.formatDate(provider.creado)}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/providers/list-provider/list-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListProviderComponent = /** @class */ (function () {
    function ListProviderComponent(db) {
        this.db = db;
        this._providerSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.providersList = [];
    }
    ListProviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getData(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PROVEEDORES).subscribe(function (res) {
            _this.providersList = res.serverResponse;
        }, function (error) {
            console.log(error);
        });
    };
    ListProviderComponent.prototype.formatDate = function (creado) {
        var fecha = new Date(creado);
        return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    };
    ListProviderComponent.prototype.onSelectCard = function (provider) {
        this._providerSelected.emit(provider);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ListProviderComponent.prototype, "_providerSelected", void 0);
    ListProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-provider',
            template: __webpack_require__("./src/app/providers/list-provider/list-provider.component.html"),
            styles: [__webpack_require__("./src/app/providers/list-provider/list-provider.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], ListProviderComponent);
    return ListProviderComponent;
}());



/***/ }),

/***/ "./src/app/providers/provider/provider.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/providers/provider/provider.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu></app-menu>\r\n\r\n  <div class=\"align-rigth\">\r\n    <h2 class=\"ui header\">Proveedores</h2>\r\n    <div class=\"ui green two item menu\">\r\n      <a class=\"item\" [ngClass]=\"{'active': this.select.agregar}\" (click)=\"onSelected('agregar')\">\r\n        Agregar\r\n      </a>\r\n      <a class=\"item\" [ngClass]=\"{'active': this.select.listar}\" (click)=\"onSelected('listar')\">\r\n        Listar\r\n      </a>\r\n    </div>\r\n\r\n    <app-add-provider *ngIf=\"this.select.agregar\" [inputProvider]=\"providerEdit\" (changeOptionProvider)=\"onSelected('listar')\"></app-add-provider>\r\n    <app-list-provider *ngIf=\"this.select.listar\" (_providerSelected)=\"_outProvider($event)\"></app-list-provider>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/providers/provider/provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderComponent = /** @class */ (function () {
    function ProviderComponent() {
        this.select = {
            agregar: true,
            listar: false,
        };
    }
    ProviderComponent.prototype.ngOnInit = function () {
    };
    ProviderComponent.prototype.onSelected = function (type) {
        this.selectDefault();
        switch (type) {
            case 'agregar':
                this.select.agregar = true;
                break;
            case 'listar':
                this.select.listar = true;
                break;
        }
        this.providerEdit = void 0;
    };
    ProviderComponent.prototype.selectDefault = function () {
        this.select = {
            agregar: false,
            listar: false,
        };
    };
    ProviderComponent.prototype._outProvider = function (event) {
        this.selectDefault();
        this.select.agregar = true;
        this.providerEdit = event;
    };
    ProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-provider',
            template: __webpack_require__("./src/app/providers/provider/provider.component.html"),
            styles: [__webpack_require__("./src/app/providers/provider/provider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderComponent);
    return ProviderComponent;
}());



/***/ }),

/***/ "./src/app/record/record.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu></app-menu>\r\n  <div class=\"ui positive message margin-150-auto\" *ngIf=\"message.active\" [ngClass]=\"{'positive': message.type, 'negative': !message.type}\">\r\n      <i class=\"close icon\"></i>\r\n      <div class=\"header\">\r\n        {{ message.title }}\r\n      </div>\r\n      <p> {{ message.subtitle }} </p>\r\n    </div>\r\n\r\n  <div class=\"align-rigth\">\r\n    <h2 class=\"ui header\">Historial</h2>\r\n    <table class=\"ui very basic collapsing celled table\" style=\"width: 100%; border: 1px solid aliceblue; padding: 5px;\">\r\n      <thead>\r\n        <tr>\r\n          <th>id</th>\r\n          <th>cliente</th>\r\n          <th>fecha</th>\r\n          <th>Total</th>\r\n          <th>Fecha</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let compra of purchased; index as i\">\r\n          <td>\r\n            <h4 class=\"ui image header\">\r\n              <img [src]=\"compra.productImage\" class=\"ui mini rounded image\">\r\n              <div class=\"content\">\r\n                {{ compra.productName }}\r\n                <div class=\"sub header\"> {{ compra.productId }}\r\n                </div>\r\n              </div>\r\n            </h4>\r\n          </td>\r\n          <td>\r\n            {{ compra.cantidad }}\r\n          </td>\r\n          <td>\r\n            {{ compra.estado}}\r\n          </td>\r\n          <td>\r\n            {{ compra.total }}\r\n          </td>\r\n          <td>\r\n            {{ formatDate(compra.creado)}}\r\n          </td>\r\n          <td >\r\n            <div   (click)=\"onDelete(compra.id)\" id=\"btn\" style=\"    margin: 5px;\r\n            text-align: center;\r\n            background-color: rgb(112, 34, 34);\r\n            border-radius: 8px;\r\n            font-size: 15px;\r\n            color: white;\r\n            width: 95%;\r\n            height: 45px;\r\n            line-height: 45px;\">\r\n              Eliminar\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordComponent = /** @class */ (function () {
    function RecordComponent(db, localStorage, dbUser) {
        this.db = db;
        this.localStorage = localStorage;
        this.dbUser = dbUser;
        this.purchased = [];
        this.message = {
            title: '',
            subtitle: '',
            active: false,
            type: false,
        };
    }
    RecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.localStorage.getUser();
        this.dbUser.getDataWhere(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, { fieldPath: 'id', operador: '==', fieldPathFirebase: this.user.userId }).subscribe(function (res) {
            _this.infoUser = res.serverResponse[0];
        }, function (err) { return console.log(err); });
        this.db.getDataWhere(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, { fieldPath: 'userId', operador: '==', fieldPathFirebase: this.user.userId }).subscribe(function (res) {
            _this.purchased = res.serverResponse;
        }, function (err) { return console.log(err); });
    };
    RecordComponent.prototype.formatDate = function (fecha) {
        var newFecha = new Date(fecha);
        return newFecha.getDate() + '/' + newFecha.getMonth() + '/' + newFecha.getFullYear();
    };
    RecordComponent.prototype.onBuy = function () {
        var _this = this;
        var cantidad = this.infoUser.tarjeta.cantidad;
        var total = 0;
        this.purchased.forEach(function (product) {
            total += product.total;
        });
        if (total < cantidad) {
        }
        else {
            this.message = {
                title: 'No tiene suficientes fondos para comprar',
                subtitle: 'Su saldo es de: ' + cantidad + ' y la compra es de: ' + total,
                active: true,
                type: false,
            };
            setTimeout(function () {
                _this.message.active = false;
            }, 3000);
        }
    };
    RecordComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.db.delete(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, id).subscribe(function (res) {
            console.log('delete', res.serverResponse);
            var index = _this.purchased.findIndex(function (p) { return p.id === id; });
            _this.message = {
                title: 'Producto eliminado',
                subtitle: _this.purchased[index].productName,
                active: true,
                type: true,
            };
            setTimeout(function () {
                _this.message.active = false;
            }, 3000);
            _this.purchased.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    RecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-record',
            template: __webpack_require__("./src/app/record/record.component.html"),
            styles: [__webpack_require__("./src/app/record/record.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__["a" /* StorageService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.css":
/***/ (function(module, exports) {

module.exports = "p{\r\n color: white;\r\n font-family: 'AuthenticHilton',Brush Script MT,cursive;   \r\n font-size: 25px;\r\n}\r\ndiv{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>Ingrese su correo, dentro de poco le enviaremos un correo para recuperar su contraseña.</p>\r\n  <input type=\"email\" #email>  \r\n  <button (click)=\"onChangePassword(email.value)\" >Enviar contraseña</button>\r\n</div>"

/***/ }),

/***/ "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarContraseniaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecuperarContraseniaComponent = /** @class */ (function () {
    function RecuperarContraseniaComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    RecuperarContraseniaComponent.prototype.ngOnInit = function () {
    };
    RecuperarContraseniaComponent.prototype.onChangePassword = function (email) {
        this.loginService.changePassword(email).subscribe(function (res) {
            alert('El correo para cambiar contraseña fue enviado a ' + email);
        }, function (err) {
            alert('No se pudo enviar el correo a ' + email);
        });
        this.router.navigate(['login']);
    };
    RecuperarContraseniaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recuperar-contrasenia',
            template: __webpack_require__("./src/app/recuperar-contrasenia/recuperar-contrasenia.component.html"),
            styles: [__webpack_require__("./src/app/recuperar-contrasenia/recuperar-contrasenia.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RecuperarContraseniaComponent);
    return RecuperarContraseniaComponent;
}());



/***/ }),

/***/ "./src/app/schemes/categories/category.scheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryScheme; });
var CategoryScheme = /** @class */ (function () {
    function CategoryScheme() {
    }
    return CategoryScheme;
}());



/***/ }),

/***/ "./src/app/schemes/products/products.scheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsScheme; });
var ProductsScheme = /** @class */ (function () {
    function ProductsScheme() {
    }
    return ProductsScheme;
}());



/***/ }),

/***/ "./src/app/schemes/providers/provider.scheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderScheme; });
var ProviderScheme = /** @class */ (function () {
    function ProviderScheme() {
    }
    return ProviderScheme;
}());



/***/ }),

/***/ "./src/app/schemes/users/user.scheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScheme; });
var UserScheme = /** @class */ (function () {
    function UserScheme() {
    }
    return UserScheme;
}());



/***/ }),

/***/ "./src/app/services/base-datos-variables/variables.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesEnum; });
var VariablesEnum;
(function (VariablesEnum) {
    VariablesEnum["PRODUCTOS"] = "producto";
    VariablesEnum["CATEGORIA"] = "categoria";
    VariablesEnum["USER_INFO"] = "userInfo";
    VariablesEnum["PROVEEDORES"] = "proveedores";
    VariablesEnum["PURCHASED"] = "purchased";
})(VariablesEnum || (VariablesEnum = {}));


/***/ }),

/***/ "./src/app/services/database-generic/database-generic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ServerResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseGenericService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerResponse = /** @class */ (function () {
    function ServerResponse() {
    }
    return ServerResponse;
}());

var DatabaseGenericService = /** @class */ (function () {
    function DatabaseGenericService(angularFirestore) {
        this.angularFirestore = angularFirestore;
    }
    DatabaseGenericService.prototype.insert = function (route, type) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFirestore.collection(route).add(type).then(function (res) {
                _this.angularFirestore.collection(route).doc(res.id).update({ id: res.id }).then(function (update) {
                    observer.next({ interface: type, serverResponse: res });
                    observer.complete();
                }, function (errorUpdate) {
                    observer.error({ interface: type, error: errorUpdate });
                    observer.complete();
                });
            }, function (error) {
                observer.error({ interface: type, error: error });
                observer.complete();
            });
        });
    };
    DatabaseGenericService.prototype.getData = function (route) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFirestore.collection(route).valueChanges().subscribe(function (res) {
                observer.next({ interface: null, serverResponse: res });
                observer.complete();
            }, function (err) {
                observer.error({ interface: null, error: err });
                observer.complete();
            });
        });
    };
    DatabaseGenericService.prototype.getDataWhere = function (route, where) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFirestore.collection(route, function (ref) { return ref.where(where.fieldPath, where.operador, where.fieldPathFirebase); }).valueChanges().subscribe(function (res) {
                observer.next({ interface: null, serverResponse: res });
                observer.complete();
            }, function (error) {
                observer.error({ interface: null, error: error });
                observer.complete();
            });
        });
    };
    DatabaseGenericService.prototype.delete = function (route, id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFirestore.collection(route).doc(id).delete().then(function (res) {
                observer.next({ interface: null, serverResponse: res });
                observer.complete();
            }, function (error) {
                observer.error({ interface: null, error: error });
                observer.complete();
            });
        });
    };
    DatabaseGenericService.prototype.update = function (route, id, type) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFirestore.collection(route).doc(id).update(type).then(function (res) {
                observer.next({ interface: type, serverResponse: res });
                observer.complete();
            }, function (error) {
                observer.error({ interface: type, error: error });
                observer.complete();
            });
        });
    };
    DatabaseGenericService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DatabaseGenericService);
    return DatabaseGenericService;
}());



/***/ }),

/***/ "./src/app/services/guid/guid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuidService = /** @class */ (function () {
    function GuidService() {
    }
    GuidService.prototype.generateGuid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    GuidService.prototype.generateRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    GuidService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GuidService);
    return GuidService;
}());



/***/ }),

/***/ "./src/app/services/local-storage/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__("./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.setUser = function (user) {
        this.storage.store('user', user);
    };
    StorageService.prototype.getUser = function () {
        return this.storage.retrieve('user');
    };
    StorageService.prototype.clean = function () {
        this.storage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["a" /* LocalStorageService */]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(function (isLogin) {
                observer.next(isLogin);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFireAuth.auth.signOut().then(function (isLogout) {
                observer.next(isLogout);
                observer.complete();
            }, function (err) {
                observer.error(err);
                observer.complete();
            });
        });
    };
    LoginService.prototype.registerUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    LoginService.prototype.changePassword = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFireAuth.auth.sendPasswordResetEmail(email).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.error(err);
                observer.complete();
            });
        });
    };
    LoginService.prototype.sendEmail = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.angularFireAuth.auth.sendPasswordResetEmail(email).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.error(err);
                observer.complete();
            });
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/upload/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guid_guid_service__ = __webpack_require__("./src/app/services/guid/guid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(guidService) {
        this.guidService = guidService;
    }
    UploadService.prototype.onUpload = function (url, file) {
        var metaData = { 'contentType': file.type };
        var guid = this.guidService.generateGuid();
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child(url + guid);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            storageRef.put(file, metaData).then(function (fileUpload) {
                observer.next(fileUpload);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__guid_guid_service__["a" /* GuidService */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/shopping/my-cart/my-cart.component.css":
/***/ (function(module, exports) {

module.exports = "#btn:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n#btn:active {\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n}\r\n.margin-150-auto {\r\n    position: fixed;\r\n    z-index: 10;\r\n    left: 35%;\r\n    /*margin: 0px auto;*/\r\n    margin: 0px;\r\n    width: 40%;\r\n    background-color: rgba(226, 195, 195, 0.7);\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shopping/my-cart/my-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu></app-menu>\r\n  <div class=\"ui positive message margin-150-auto\" *ngIf=\"message.active\" [ngClass]=\"{'positive': message.type, 'negative': !message.type}\">\r\n      <i class=\"close icon\"></i>\r\n      <div class=\"header\">\r\n        {{ message.title }}\r\n      </div>\r\n      <p> {{ message.subtitle }} </p>\r\n    </div>\r\n\r\n  <div class=\"align-rigth\">\r\n    <h2 class=\"ui header\">Agregados al carrito</h2>\r\n    <table class=\"ui very basic collapsing celled table\" style=\"width: 100%; border: 1px solid aliceblue; padding: 5px;\">\r\n      <thead>\r\n        <tr>\r\n          <th>Producto</th>\r\n          <th>No. comprados</th>\r\n          <th>Estado</th>\r\n          <th>Total</th>\r\n          <th>Fecha</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let compra of purchased; index as i\"  >\r\n          <td ngi>\r\n            <h4 class=\"ui image header\">\r\n              <img [src]=\"compra.productImage\" class=\"ui mini rounded image\">\r\n              <div class=\"content\">\r\n                {{ compra.productName }}\r\n                <div class=\"sub header\"> {{ compra.productId }}\r\n                </div>\r\n              </div>\r\n            </h4>\r\n          </td>\r\n          <td>\r\n            {{ compra.cantidad }}\r\n          </td>\r\n          <td>\r\n            {{ compra.estado}}\r\n          </td>\r\n          <td>\r\n            {{ compra.total }}\r\n          </td>\r\n          <td>\r\n            {{ formatDate(compra.creado)}}\r\n          </td>\r\n          <td >\r\n            <div   (click)=\"onDelete(compra.id)\" id=\"btn\" style=\"    margin: 5px;\r\n            text-align: center;\r\n            background-color: rgb(112, 34, 34);\r\n            border-radius: 8px;\r\n            font-size: 15px;\r\n            color: white;\r\n            width: 95%;\r\n            height: 45px;\r\n            line-height: 45px;\">\r\n              Eliminar\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td >\r\n            <div  (click)=\"onBuy(purchased)\" id=\"btn\" style=\"    margin: 5px;\r\n            text-align: center;\r\n            background-color: #1e88e5;\r\n            border-radius: 8px;\r\n            font-size: 15px;\r\n            color: white;\r\n            width: 95%;\r\n            height: 45px;\r\n            line-height: 45px;\">\r\n              Comprar\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>"

/***/ }),

/***/ "./src/app/shopping/my-cart/my-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__ = __webpack_require__("./src/app/services/local-storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyCartComponent = /** @class */ (function () {
    function MyCartComponent(router, db, localStorage, dbUser) {
        this.router = router;
        this.db = db;
        this.localStorage = localStorage;
        this.dbUser = dbUser;
        this.purchased = [];
        this.message = {
            title: '',
            subtitle: '',
            active: false,
            type: false,
        };
    }
    MyCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.localStorage.getUser();
        this.dbUser.getDataWhere(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, { fieldPath: 'id', operador: '==', fieldPathFirebase: this.user.userId }).subscribe(function (res) {
            _this.infoUser = res.serverResponse[0];
        }, function (err) { return console.log(err); });
        this.db.getDataWhere(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, { fieldPath: 'userId', operador: '==', fieldPathFirebase: this.user.userId }).subscribe(function (res) {
            _this.purchased = res.serverResponse;
        }, function (err) { return console.log(err); });
    };
    MyCartComponent.prototype.formatDate = function (fecha) {
        var newFecha = new Date(fecha);
        return newFecha.getDate() + '/' + newFecha.getMonth() + '/' + newFecha.getFullYear();
    };
    MyCartComponent.prototype.onBuy = function (compras) {
        /* const cantidad = this.infoUser.tarjeta.cantidad;
         let total = 0;
         this.purchased.forEach((product) => {
           total += product.total;
         });
     
         if (total < cantidad) { // puedo comprarlo*/
        var _this = this;
        /* } else { // no puedo comprar
           this.message = {
             title: 'No tiene suficientes fondos para comprar',
             subtitle: 'Su saldo es de: ' + cantidad + ' y la compra es de: ' + total,
             active: true,
             type: false,
           };
           setTimeout(() => {
             this.message.active = false;
           }, 3000);
         }*/
        var find = this.purchased.find(function (p) { return p.estado === 'carrito'; });
        if (find !== undefined) {
            find.estado = 'comprado';
            this.db.update(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, find.id, find).subscribe(function (r) {
                console.log(r.serverResponse);
                _this.message = {
                    active: true,
                    title: 'Su orden ha sido enviada',
                    subtitle: ' ',
                    type: true,
                };
                setTimeout(function () {
                    _this.message.active = false;
                }, 3000);
            }, function (e) {
                console.log(e);
            });
            this.purchased.forEach(function (compra) {
                _this.onDelete(compra.id);
            });
            // this.router.navigate(['dashboard']);
        }
    };
    MyCartComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.db.delete(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].PURCHASED, id).subscribe(function (res) {
            console.log('delete', res.serverResponse);
            var index = _this.purchased.findIndex(function (p) { return p.id === id; });
            _this.message = {
                title: 'Producto eliminado',
                subtitle: _this.purchased[index].productName,
                active: true,
                type: true,
            };
            setTimeout(function () {
                _this.message.active = false;
            }, 3000);
            _this.purchased.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    MyCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-cart',
            template: __webpack_require__("./src/app/shopping/my-cart/my-cart.component.html"),
            styles: [__webpack_require__("./src/app/shopping/my-cart/my-cart.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__["a" /* StorageService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], MyCartComponent);
    return MyCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping/purchased/purchased.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/purchased/purchased.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  purchased works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shopping/purchased/purchased.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchasedComponent = /** @class */ (function () {
    function PurchasedComponent() {
    }
    PurchasedComponent.prototype.ngOnInit = function () {
    };
    PurchasedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-purchased',
            template: __webpack_require__("./src/app/shopping/purchased/purchased.component.html"),
            styles: [__webpack_require__("./src/app/shopping/purchased/purchased.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchasedComponent);
    return PurchasedComponent;
}());



/***/ }),

/***/ "./src/app/users/add-user/add-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui form\">\r\n  <h4 class=\"ui dividing header\">Registro</h4>\r\n  <!-- Datos personales -->\r\n\r\n\r\n  <div class=\"item\" style=\"display: flex;\">\r\n    <div class=\"ui image\" style=\"    margin: 10px; width: 20%;\">\r\n      <img (click)=\"onFileSelected()\" title=\"Subir imagen\" [src]=\"this.input.imagen\" width=\"150px\" height=\"150px\">\r\n    </div>\r\n    <div class=\"content\" style=\"width: 80%;\">\r\n\r\n      <div class=\"field\">\r\n        <label>Nombre completo</label>\r\n        <div class=\"three fields\">\r\n          <div class=\"field\">\r\n            <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"this.input.nombre\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <input type=\"text\" placeholder=\"Apellidos\" [(ngModel)]=\"this.input.apellidos\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <select [(ngModel)]=\"this.input.tipo\">\r\n              <option value=\"\">Tipo</option>\r\n              <option value=\"usuario\">Usuario</option>\r\n              <option value=\"administrador\">Administrador</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"fields\">\r\n        <div class=\"seven wide field\">\r\n          <label>Email</label>\r\n          <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"this.input.email\">\r\n        </div>\r\n        <div class=\"seven wide field\">\r\n          <label>Password</label>\r\n          <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"this.input.password\">\r\n        </div>\r\n        <div class=\"three wide field\">\r\n          <label>Edad</label>\r\n          <input type=\"number\" maxlength=\"3\" placeholder=\"Edad\" [(ngModel)]=\"this.input.edad\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Direccion -->\r\n  <h4 class=\"ui dividing header\">Dirección</h4>\r\n  <div class=\"fields\">\r\n    <div class=\"seven wide field\">\r\n      <label>Colonia</label>\r\n      <input type=\"text\" placeholder=\"Colonia\" [(ngModel)]=\"this.input.direccion.colonia\">\r\n    </div>\r\n    <div class=\"seven wide field\">\r\n      <label>Calle</label>\r\n      <input type=\"text\" placeholder=\"Calle\" [(ngModel)]=\"this.input.direccion.calle\">\r\n    </div>\r\n    <div class=\"three wide field\">\r\n      <label>Numero</label>\r\n      <input type=\"number\" placeholder=\"Numero\" [(ngModel)]=\"this.input.direccion.numero\">\r\n    </div>\r\n  </div>\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n      <label>Estado</label>\r\n      <input type=\"text\" placeholder=\"Estado\" [(ngModel)]=\"this.input.direccion.estado\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Pais</label>\r\n      <input type=\"text\" placeholder=\"Pais\" [(ngModel)]=\"this.input.direccion.pais\">\r\n    </div>\r\n  </div>\r\n  <!-- TARJETA DE CREDITO -->\r\n  <h4 class=\"ui dividing header\">Tarjeta</h4>\r\n  <div class=\"three fields\">\r\n    <div class=\"field\">\r\n      <label>Tipo</label>\r\n      <input type=\"text\" placeholder=\"Tipo\" [(ngModel)]=\"this.input.tarjeta.tipo\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Numero</label>\r\n      <input type=\"text\" placeholder=\"Numero\" [(ngModel)]=\"this.input.tarjeta.numero\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>CVC</label>\r\n      <input type=\"text\" placeholder=\"CVC\" [(ngModel)]=\"this.input.tarjeta.cvc\">\r\n    </div>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Expiración</label>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <select class=\"ui fluid search dropdown\" [(ngModel)]=\"this.input.tarjeta.expiracion.mes\">\r\n          <option value=\"\">Mes</option>\r\n          <option value=\"1\">Enero</option>\r\n          <option value=\"2\">Febrero</option>\r\n          <option value=\"3\">Marzo</option>\r\n          <option value=\"4\">Abril</option>\r\n          <option value=\"5\">Mayo</option>\r\n          <option value=\"6\">Junio</option>\r\n          <option value=\"7\">Julio</option>\r\n          <option value=\"8\">Agosto</option>\r\n          <option value=\"9\">Septiembre</option>\r\n          <option value=\"10\">Octubre</option>\r\n          <option value=\"11\">Noviembre</option>\r\n          <option value=\"12\">Diciembre</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"field\">\r\n        <input type=\"number\" placeholder=\"Año\" [(ngModel)]=\"this.input.tarjeta.expiracion.ano\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"two fields\" *ngIf=\"!this.statusEdit; else elseTemplate\">\r\n        <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onGuardar()\">\r\n          Guardar\r\n        </div>\r\n        <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onDescartar()\">\r\n          Descartar\r\n        </div>\r\n      </div>\r\n      <ng-template #elseTemplate>\r\n        <div class=\"two fields\">\r\n          <div class=\"field positive ui button\" style=\"margin-right: 1px;\" (click)=\"onEditar()\">\r\n            Editar\r\n          </div>\r\n          <div class=\"field negative ui button\" style=\"margin-left: 1px;\" (click)=\"onEliminar()\">\r\n            Eliminar\r\n          </div>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemes_users_user_scheme__ = __webpack_require__("./src/app/schemes/users/user.scheme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_upload_service__ = __webpack_require__("./src/app/services/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_guid_guid_service__ = __webpack_require__("./src/app/services/guid/guid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(uploadService, databaseGenericService, guidService, login) {
        this.uploadService = uploadService;
        this.databaseGenericService = databaseGenericService;
        this.guidService = guidService;
        this.login = login;
        this.changeOptionProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.input = {
            nombre: '',
            tipo: 'usuario',
            apellidos: '',
            edad: 0,
            email: '',
            imagen: './../../../assets/images/image.png',
            direccion: {
                colonia: '',
                calle: '',
                numero: '',
                estado: '',
                pais: '',
            },
            tarjeta: {
                tipo: '',
                numero: '',
                cvc: '',
                expiracion: {
                    mes: '',
                    ano: 0,
                },
                cantidad: 0,
            },
            creado: new Date().toString(),
        };
        this.selectedFile = null;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.input.tarjeta.cantidad = this.guidService.generateRandom(1500, 7800);
        if (this.inputProduct !== void 0) {
            this.statusEdit = true;
            this.input = this.inputProduct;
        }
        else {
            this.statusEdit = false;
        }
    };
    AddUserComponent.prototype.onGuardar = function () {
        var _this = this;
        this.login.registerUser(this.input.email, this.input.password).subscribe(function (res) {
            _this.input.uid = res.uid;
            // Borramos el password
            delete _this.input.password;
            if (_this.selectedFile === null) {
                _this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, _this.input).subscribe(function (userInfo) {
                    _this.changeOptionProduct.emit('listar');
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.uploadService.onUpload('/imagenes/usuarios/', _this.selectedFile).subscribe(function (imagen) {
                    _this.input.imagen = imagen.downloadURL;
                    _this.databaseGenericService.insert(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, _this.input).subscribe(function (resUser) {
                        _this.changeOptionProduct.emit('listar');
                    }, function (err) {
                        console.log(err);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    AddUserComponent.prototype.onFileSelected = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.click();
        var that = this;
        input.onchange = function (e) {
            that.selectedFile = e.path[0].files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                that.input.imagen = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };
    AddUserComponent.prototype.onEditar = function () {
        var _this = this;
        if (this.selectedFile !== null) {
            this.uploadService.onUpload('/imagenes/productos/', this.selectedFile).subscribe(function (resImagen) {
                _this.input.imagen = resImagen.downloadURL;
                _this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, _this.input.id, _this.input).subscribe(function (resUpdate) {
                    _this.changeOptionProduct.emit('listar');
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.databaseGenericService.update(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, this.input.id, this.input).subscribe(function (resUpdate) {
                _this.changeOptionProduct.emit('listar');
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddUserComponent.prototype.onEliminar = function () {
        var _this = this;
        this.databaseGenericService.delete(__WEBPACK_IMPORTED_MODULE_4__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO, this.input.id).subscribe(function (resDelete) {
            _this.changeOptionProduct.emit('listar');
        }, function (error) {
            console.log(error);
        });
    };
    AddUserComponent.prototype.onDescartar = function () {
        this.changeOptionProduct.emit('listar');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddUserComponent.prototype, "changeOptionProduct", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__schemes_users_user_scheme__["a" /* UserScheme */])
    ], AddUserComponent.prototype, "inputProduct", void 0);
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-user',
            template: __webpack_require__("./src/app/users/add-user/add-user.component.html"),
            styles: [__webpack_require__("./src/app/users/add-user/add-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */], __WEBPACK_IMPORTED_MODULE_2__services_upload_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_6__services_guid_guid_service__["a" /* GuidService */], __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_upload_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services_guid_guid_service__["a" /* GuidService */],
            __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/users/list-user/list-user.component.css":
/***/ (function(module, exports) {

module.exports = ".mb-5 {\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/users/list-user/list-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui fluid icon input mb-5\">\r\n  <input type=\"text\" placeholder=\"Search an user...\" (input)=\"onSearch($event)\" > <!-- [(ngModel)]=\"this.serach\" -->\r\n  <i class=\"search icon\"></i>\r\n</div>\r\n\r\n<div class=\"ui link cards f-justify-space-around\">\r\n  <div class=\"card\" *ngFor=\"let user of this.userList\" (click)=\"onSelectCard(user)\">\r\n    \r\n      <div class=\"image\">\r\n        <img [src]=\"user.imagen\" style=\"height: 200px;\">\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"header\">{{ user.nombre }}</div>\r\n        <div class=\"meta\">\r\n          <a>tipo: </a> {{ user.tipo }}\r\n        </div>\r\n        <div class=\"description\">\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"extra content\">\r\n        <span class=\"right floated\">\r\n          Creado el {{ this.formatDate(user.creado) }}\r\n        </span>\r\n        <span>\r\n          <i class=\"bell icon\"></i>\r\n\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/users/list-user/list-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__ = __webpack_require__("./src/app/services/database-generic/database-generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__ = __webpack_require__("./src/app/services/base-datos-variables/variables.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(db) {
        this.db = db;
        this._userSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.userList = [];
        this.userListBackup = [];
        this.serach = '';
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getData(__WEBPACK_IMPORTED_MODULE_2__services_base_datos_variables_variables_enum__["a" /* VariablesEnum */].USER_INFO).subscribe(function (res) {
            _this.userList = res.serverResponse;
            _this.userListBackup = _this.userList.slice();
        }, function (error) {
            console.log(error);
        });
    };
    ListUserComponent.prototype.formatDate = function (creado) {
        var fecha = new Date(creado);
        return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    };
    ListUserComponent.prototype.onSelectCard = function (product) {
        this._userSelected.emit(product);
    };
    /* a(a: any) {
      typeof a === string;
    } */
    ListUserComponent.prototype.onSearch = function ($event) {
        var _this = this;
        this.serach = $event.target.value;
        this.userList = [];
        this.userListBackup.forEach(function (user) {
            if (user.nombre.toLowerCase().includes(_this.serach.toLowerCase())) {
                _this.userList.push(user);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ListUserComponent.prototype, "_userSelected", void 0);
    ListUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-user',
            template: __webpack_require__("./src/app/users/list-user/list-user.component.html"),
            styles: [__webpack_require__("./src/app/users/list-user/list-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_generic_database_generic_service__["a" /* DatabaseGenericService */]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-menu></app-menu>\r\n  \r\n    <div class=\"align-rigth\">\r\n      <h2 class=\"ui header\">Usuarios</h2>\r\n      <div class=\"ui green two item menu\">\r\n        <a class=\"item\" [ngClass]=\"{'active': this.select.agregar}\" (click)=\"onSelected('agregar')\">\r\n          Agregar\r\n        </a>\r\n        <a class=\"item\" [ngClass]=\"{'active': this.select.listar}\" (click)=\"onSelected('listar')\">\r\n          Listar\r\n        </a>\r\n      </div>\r\n  \r\n      <app-add-user *ngIf=\"this.select.agregar\" [inputProduct]=\"productEdit\" (changeOptionProduct)=\"onSelected('listar')\"></app-add-user>\r\n      <app-list-user *ngIf=\"this.select.listar\" (_userSelected)=\"_outProduct($event)\"></app-list-user>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.select = {
            agregar: true,
            listar: false,
        };
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onSelected = function (type) {
        this.selectDefault();
        switch (type) {
            case 'agregar':
                this.select.agregar = true;
                break;
            case 'listar':
                this.select.listar = true;
                break;
        }
        this.productEdit = void 0;
    };
    UserComponent.prototype.selectDefault = function () {
        this.select = {
            agregar: false,
            listar: false,
        };
    };
    UserComponent.prototype._outProduct = function (event) {
        this.selectDefault();
        this.select.agregar = true;
        this.productEdit = event;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/users/user/user.component.html"),
            styles: [__webpack_require__("./src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyATimnbxvjPsFp4WKi-h1isG3ijN7bRA6c',
        authDomain: 'tresdelicias-2257c.firebaseapp.com',
        databaseURL: 'https://tresdelicias-2257c.firebaseio.com',
        projectId: 'tresdelicias-2257c',
        storageBucket: 'tresdelicias-2257c.appspot.com',
        messagingSenderId: '474204442061',
        appId: '1:474204442061:web:46411c99101ce22f'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map