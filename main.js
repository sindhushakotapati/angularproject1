(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <app-recipebook *ngIf=\"loadedFeature =='recipe'\"></app-recipebook>\r\n        <app-shoppinglist *ngIf=\"loadedFeature !='recipe'\"></app-shoppinglist>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoppinglist/shoppinglist.component */ "./src/app/shoppinglist/shoppinglist.component.ts");
/* harmony import */ var _recipebook_recipebook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipebook/recipebook.component */ "./src/app/recipebook/recipebook.component.ts");
/* harmony import */ var _recipebook_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipebook/recipe-list/recipe-list.component */ "./src/app/recipebook/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipebook_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipebook/recipe-detail/recipe-detail.component */ "./src/app/recipebook/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipebook_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipebook/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shoppinglist_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shoppinglist/shopping-edit/shopping-edit.component */ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_6__["ShoppinglistComponent"],
                _recipebook_recipebook_component__WEBPACK_IMPORTED_MODULE_7__["RecipebookComponent"],
                _recipebook_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__["RecipeListComponent"],
                _recipebook_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_9__["RecipeDetailComponent"],
                _recipebook_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__["RecipeItemComponent"],
                _shoppinglist_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a href=\"#\" class=\"navbar-brand\">Recipe Book</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#\" (click)=\"onSelect('recipe')\"> Recipes </a></li>\r\n        <li><a href=\"#\" (click)=\"onSelect('shopping-list')\"> Shopping List </a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Save Data</a></li>\r\n            <li><a href=\"#\">Fetch Data</a></li>\r\n\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.onSelect = function (feature) {
        this.featureSelected.emit(feature);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/recipebook/recipe-detail/recipe-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/recipebook/recipe-detail/recipe-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZWJvb2svcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recipebook/recipe-detail/recipe-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/recipebook/recipe-detail/recipe-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img [src]=\"recipe.imagePath\" alt=\"{{recipe.name}}\"\n         class=\"img-responsive\" style=\"max-height: 300px;\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{recipe.name}}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">Manage Recipe\n      <span class=\"caret\"></span> </button>\n      <ul class=\"dropdown-menu\">\n        <li><a href=\"#\">Shopping list</a></li>\n        <li><a href=\"#\">Edit Recipe</a></li>\n        <li><a href=\"#\">Delete Recipe</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{recipe.description}}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    Ingredients\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipebook/recipe-detail/recipe-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/recipebook/recipe-detail/recipe-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipebook/recipe.model.ts");



var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent() {
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeDetailComponent.prototype, "recipe", void 0);
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipebook/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipebook/recipe-detail/recipe-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZWJvb2svcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"list-group-item clearfix\"\n(click) = onSelected()>\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\"> {{rec.name}}</h4>\n    <p class=\"list-group-item-text\">{{rec.description}}</p>\n  </div>\n  <span class=\"pull-right\">\n        <img\n          [src]=\"rec.imagePath\"\n          alt=\"{{rec.name}}\"\n          class=\"img-responsive\"\n          style=\"max-height: 50px;\">\n      </span>\n</a>\n"

/***/ }),

/***/ "./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipebook/recipe.model.ts");



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
        this.recipeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent.prototype.onSelected = function () {
        this.recipeSelected.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeItemComponent.prototype, "rec", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeItemComponent.prototype, "recipeSelected", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipebook/recipe-list/recipe-item/recipe-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipebook/recipe-list/recipe-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/recipebook/recipe-list/recipe-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZWJvb2svcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipebook/recipe-list/recipe-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/recipebook/recipe-list/recipe-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\">New Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item *ngFor=\"let r of recipes\"\n    [rec]=\"r\"\n    (recipeSelected)=\"onRecipeSelected(r)\"></app-recipe-item>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/recipebook/recipe-list/recipe-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/recipebook/recipe-list/recipe-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipebook/recipe.model.ts");



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
        this.recipewasselected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('A test recipe', ' This is a simply a test', 'data:image/jpeg;base64,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'),
            new _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Another test recipe', ' This is a simply a test', 'data:image/jpeg;base64,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')
        ];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent.prototype.onRecipeSelected = function (rec) {
        this.recipewasselected.emit(rec);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeListComponent.prototype, "recipewasselected", void 0);
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipebook/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipebook/recipe-list/recipe-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipebook/recipe.model.ts":
/*!********************************************!*\
  !*** ./src/app/recipebook/recipe.model.ts ***!
  \********************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipebook/recipebook.component.css":
/*!*****************************************************!*\
  !*** ./src/app/recipebook/recipebook.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZWJvb2svcmVjaXBlYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipebook/recipebook.component.html":
/*!******************************************************!*\
  !*** ./src/app/recipebook/recipebook.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-recipe-list\n    (recipewasselected)=\"selectedRecipe = $event\"></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <app-recipe-detail\n    *ngIf=\"selectedRecipe; else infoText\"\n    [recipe]=\"selectedRecipe\"></app-recipe-detail>\n    <ng-template #infoText>\n      <p>Please select a Recipe!</p>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipebook/recipebook.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recipebook/recipebook.component.ts ***!
  \****************************************************/
/*! exports provided: RecipebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipebookComponent", function() { return RecipebookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipebookComponent = /** @class */ (function () {
    function RecipebookComponent() {
    }
    RecipebookComponent.prototype.ngOnInit = function () {
    };
    RecipebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipebook',
            template: __webpack_require__(/*! ./recipebook.component.html */ "./src/app/recipebook/recipebook.component.html"),
            styles: [__webpack_require__(/*! ./recipebook.component.css */ "./src/app/recipebook/recipebook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipebookComponent);
    return RecipebookComponent;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shoppinglist/shopping-edit/shopping-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shoppinglist/shopping-edit/shopping-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\" id=\"name\"\n            class=\"form-control\"\n          #nameInput>\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\"> Amount</label>\n          <input\n            type=\"number\" id=\"amount\"\n            class=\"form-control\"\n          #amountInput>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" >\n          <button class=\"btn btn-success\" style=\"margin: 2px;\" type=\"submit\"\n          (click)=\"onAddItem()\">Add</button>\n          <button class=\"btn btn-danger\" style=\"margin: 2px;\" type=\"button\">Delete</button>\n          <button class=\"btn btn-primary\" style=\"margin: 2px;\" type=\"button\">Clear</button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shoppinglist/shopping-edit/shopping-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");



var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent() {
        this.ingredientAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent.prototype.onAddItem = function () {
        var ingName = this.nameInputRef.nativeElement.value;
        var ingAmount = this.amountInputRef.nativeElement.value;
        var newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](ingName, ingAmount);
        this.ingredientAdded.emit(newIngredient);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShoppingEditComponent.prototype, "nameInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShoppingEditComponent.prototype, "amountInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShoppingEditComponent.prototype, "ingredientAdded", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nbGlzdC9zaG9wcGluZ2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class =\"col-xs-10\">\n    <app-shopping-edit\n    (ingredientAdded) = \"onIngredientAdded($event)\"></app-shopping-edit>\n    <hr>\n   <ul class=\"list-group\">\n     <a class=\"list-group-item\"\n        style=\"cursor: pointer\"\n     *ngFor=\"let i of ingredients\">\n       {{i.name}} ({{i.amount}})</a>\n   </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppinglistComponent", function() { return ShoppinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");



var ShoppinglistComponent = /** @class */ (function () {
    function ShoppinglistComponent() {
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Tomatoes', 10)
        ];
    }
    ShoppinglistComponent.prototype.ngOnInit = function () {
    };
    ShoppinglistComponent.prototype.onIngredientAdded = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    ShoppinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppinglist',
            template: __webpack_require__(/*! ./shoppinglist.component.html */ "./src/app/shoppinglist/shoppinglist.component.html"),
            styles: [__webpack_require__(/*! ./shoppinglist.component.css */ "./src/app/shoppinglist/shoppinglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppinglistComponent);
    return ShoppinglistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sindhusha Kotapati\Documents\angular projects\recepies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map