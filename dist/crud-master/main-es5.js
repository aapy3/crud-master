(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: black;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n  }\n\n\n\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img width=\"40\" alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n  <span class=\"error-message\">ABC Bank</span>\n  <div class=\"spacer\"></div>\n  <!-- <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n\n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\"\n        d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\" />\n    </svg>\n\n  </a> -->\n</div>\n\n<div class=\"content\" role=\"main\">\n\n\n\n\n  <div class=\"body-content\">\n    <div class=\"padding-7\">\n      <h3 class=\"float-left\">\n        Employees\n      </h3>\n      <button class=\"float-right create-btn\" (click)=\"createEmployee('create-edit')\">Create Employee</button>\n    </div>\n\n    <div class=\"padding-7\">\n      <select class=\"inputSearch\" [formControl]=\"searchProperty\" (change)=\"onChangeProperty()\">\n        <option value=\"preferredFullName\">Name</option>\n        <option value=\"employeeCode\">Employee Code</option>\n        <option value=\"jobTitleName\">Job Title Name</option>\n        <option value=\"phoneNumber\">Phone Number</option>\n        <option value=\"emailAddress\">Email Address</option>\n        <option value=\"region\">Region</option>\n        <option value=\"dob\">DOB</option>\n      </select>\n\n      <input autocomplete=\"off\" (keyup)=\"searchEmployee()\"\n      (keypress)=\"searchEmployee()\" [formControl]=\"searchPropertyValue\" class=\"inputSearchText\" type=\" text\" placeholder=\"Search\"/>\n    </div>\n\n    <table>\n      <thead>\n          <tr>\n              <th>ID</th>\n              <th (click)=\"sortByColoumn('preferredFullName')\">Full Name \n                <span class=\"sortIcon\" \n                              [ngClass]=\"{'sort': column != 'preferredFullName', \n                                                  'sort-asc': (column == 'preferredFullName' && !isDesc), \n                                                  'sort-desc': (column == 'preferredFullName' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th (click)=\"sortByColoumn('employeeCode')\">Employee Code \n                <span class=\"fa sortIcon\" \n                              [ngClass]=\"{'sort': column != 'employeeCode', \n                                                  'sort-asc': (column == 'employeeCode' && !isDesc), \n                                                  'sort-desc': (column == 'employeeCode' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th (click)=\"sortByColoumn('jobTitleName')\">Job Title \n                <span class=\"fa sortIcon\" \n                              [ngClass]=\"{'sort': column != 'jobTitleName', \n                                                  'sort-asc': (column == 'jobTitleName' && !isDesc), \n                                                  'sort-desc': (column == 'jobTitleName' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th (click)=\"sortByColoumn('phoneNumber')\">Phone Number \n                <span class=\"fa sortIcon\" \n                              [ngClass]=\"{'sort': column != 'phoneNumber', \n                                                  'sort-asc': (column == 'phoneNumber' && !isDesc), \n                                                  'sort-desc': (column == 'phoneNumber' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th (click)=\"sortByColoumn('emailAddress')\">Email ID \n                <span class=\"fa sortIcon\" \n                              [ngClass]=\"{'sort': column != 'emailAddress', \n                                                  'sort-asc': (column == 'emailAddress' && !isDesc), \n                                                  'sort-desc': (column == 'emailAddress' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th (click)=\"sortByColoumn('region')\">Region \n                <span class=\"fa sortIcon\" \n                              [ngClass]=\"{'sort': column != 'region', \n                                                  'sort-asc': (column == 'region' && !isDesc), \n                                                  'sort-desc': (column == 'region' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th (click)=\"sortByColoumn('dob')\">DOB \n                <span class=\"fa sortIcon\" \n                              [ngClass]=\"{'sort': column != 'dob', \n                                                  'sort-asc': (column == 'dob' && !isDesc), \n                                                  'sort-desc': (column == 'dob' && isDesc) }\"\n                              aria-hidden=\"true\"> ^ </span>\n      \n              </th>\n              <th>Action</th>\n            </tr>\n      </thead>\n     \n      <tr *ngFor=\"let emp of employeePaginationList; let i = index\">\n        <td>{{i + 1}}</td>\n        <td>{{emp.preferredFullName}}</td>\n        <td>{{emp.employeeCode}}</td>\n        <td>{{emp.jobTitleName}}</td>\n        <td>{{emp.phoneNumber}}</td>\n        <td>{{emp.emailAddress}}</td>\n        <td>{{emp.region}}</td>\n        <td>{{emp.dob}}</td>\n        <!-- <td>\n          <button (click)=\"editEmployee(emp,i)\">\n            Edit\n          </button>\n          <button (click)=\"viewEmployee(emp,i)\">\n            View\n          </button>\n          <button (click)=\"deleteEmployee(emp,i)\">\n            Delete\n          </button>\n        </td> -->\n        <td>\n            <div class=\"dropdown\">\n                <button class=\"dropbtn\">&#9776;</button>\n                <div class=\"dropdown-content\">\n                  <a (click)=\"editEmployee(emp,i)\">Edit</a>\n                  <a (click)=\"viewEmployee(emp,i)\">View</a>\n                  <a (click)=\"deleteEmployee(emp,i)\">Delete</a>\n                </div>\n              </div>\n        </td>\n      </tr>\n\n\n      <tr class=\"text-center\" *ngIf=\"employeeList.length == 0\">\n        No Employees in record\n      </tr>\n\n\n\n\n\n    </table>\n\n    <div class=\"pagination\">\n        <span>\n           <a (click)=\"setSkip(0)\">\n               <\n             </a>\n        </span>\n       <span>\n         Swipe\n       </span>\n       <span>\n           <a (click)=\"setSkip(1)\">\n               >\n             </a>\n       </span>\n     </div>\n\n\n\n  </div>\n\n\n\n  <!-- Create and Edit Employee -->\n  <jw-modal id=\"create-edit\">\n    <h2>{{currentEmployeeData ? 'Edit' : 'Create'}} Employee</h2>\n    <hr>\n    <div class=\"auth-main\">\n\n      <div class=\"auth-block \">\n        <form [formGroup]=\"registerForm\">\n\n          <div class=\"row100\">\n            <label>ID</label>\n            <input autocomplete=\"off\" formControlName=\"id\" type=\" text\" placeholder=\"Employee Id\"\n              (keyup)=\"_keyPressAlphaNumber($event)\" (keypress)=\"_keyPressAlphaNumber($event)\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['id'].errors?.required && registerForm.controls['id'].touched\">\n              Employee Id is required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['id'].errors?.pattern && registerForm.controls['id'].touched\">\n              Employee Id is Invalid\n            </span>\n          </div>\n\n          <div class=\"row50\">\n            <label>FIRST NAME</label>\n            <input  autocomplete=\"off\" formControlName=\"first_name\" type=\" text\" placeholder=\"First Name\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['first_name'].errors?.minlength && registerForm.controls['first_name'].touched\">\n              Minimum three letter required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['first_name'].errors?.required && registerForm.controls['first_name'].touched\">\n              First name is required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['first_name'].errors?.pattern && registerForm.controls['first_name'].touched\">\n              First Name is Invalid\n            </span>\n          </div>\n          <div class=\"row50\">\n            <label>LAST NAME</label>\n            <input  autocomplete=\"off\" formControlName=\"last_name\" type=\" text\" name=\"last_name\"\n              placeholder=\"Last Name\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['last_name'].errors?.minlength && registerForm.controls['last_name'].touched\">\n              Minimum three letters required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['last_name'].errors?.required && registerForm.controls['last_name'].touched\">\n              Last name is required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['last_name'].errors?.pattern && registerForm.controls['last_name'].touched\">\n              Last Name is Invalid\n            </span>\n          </div>\n          <div class=\"row100\">\n            <label>Job Title</label>\n            <input autocomplete=\"off\" formControlName=\"job_title\" type=\" text\" name=\"job_title\"\n              placeholder=\"Job Title\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['job_title'].errors?.minlength && registerForm.controls['job_title'].touched\">\n              Minimum three letters required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['job_title'].errors?.required && registerForm.controls['job_title'].touched\">\n              Job Title is required\n            </span>\n          </div>\n          <div class=\"row100\">\n            <label>EMAIL</label>\n            <input autocomplete=\"off\" matInput formControlName=\"email\" type=\"email\" name=\"email\" readonly\n              onfocus=\"this.removeAttribute('readonly');\" placeholder=\"Email Id\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['email'].errors?.invalid && registerForm.controls['email'].touched\">\n              Email is not valid\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['email'].errors?.required && registerForm.controls['email'].touched\">\n              Email is required\n            </span>\n          </div>\n          <div class=\"row100\">\n            <label>PHONE NUMBER</label>\n            <input autocomplete=\"off\" formControlName=\"phone_no\" type=\" text\" name=\"Enter Phone\"\n              placeholder=\"Phone Number\" (keyup)=\"_keyPressAlphaNumber($event)\"\n              (keypress)=\"_keyPressAlphaNumber($event)\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['phone_no'].errors?.required && registerForm.controls['phone_no'].touched\">\n              Phone Number is required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['phone_no'].errors?.minlength && registerForm.controls['phone_no'].touched\">\n              Phone Number must have atleast 6 digits\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['phone_no'].errors?.maxlength && registerForm.controls['phone_no'].touched\">\n              Phone Number cannot exceed 20 digits\n            </span>\n          </div>\n\n          <div class=\"row50\">\n            <label>REGION NAME</label>\n            <input  autocomplete=\"off\" formControlName=\"region_name\" type=\" text\" placeholder=\"Region Name\" />\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['region_name'].errors?.minlength && registerForm.controls['region_name'].touched\">\n              Minimum two letter required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['region_name'].errors?.required && registerForm.controls['region_name'].touched\">\n              Region name is required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['region_name'].errors?.pattern && registerForm.controls['region_name'].touched\">\n              Region Name is Invalid\n            </span>\n          </div>\n\n          <div class=\"row50\">\n            <label>DOB NAME</label>\n            <!-- <input autocomplete=\"off\" formControlName=\"dob\" type=\" text\" placeholder=\"DOB\" /> -->\n            <input  id=\"datefield\" type='date' formControlName=\"dob\" max=\"{{maxDate}}\">\n\n\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['dob'].errors?.required && registerForm.controls['dob'].touched\">\n              DOB is required\n            </span>\n            <span class=\"error-message\"\n              *ngIf=\"registerForm.controls['dob'].errors?.pattern && registerForm.controls['dob'].touched\">\n              DOB is Invalid\n            </span>\n          </div>\n\n\n\n\n          <div style=\"margin-top:15px\" class=\"row100\">\n            <button type=\"submit\" class=\"formFullWidth\" (click)=\"onSubmit(registerForm.value)\"\n              [disabled]=\"!registerForm.valid\">Save</button>\n            <button class=\"cancel-btn\" (click)=\"closeModal('create-edit');\">Close</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </jw-modal>\n\n  <!-- View Employee -->\n  <jw-modal id=\"view\">\n    <div class=\"auth-main\" *ngIf=\"currentEmployeeData\">\n      <div class=\"auth-block \">\n        <h4>\n          <label>{{currentEmployeeData.employeeCode}}</label>\n        </h4>\n        <br>\n        <h2>{{currentEmployeeData.preferredFullName}}</h2>\n        <hr>\n        <div class=\"view-table text-center\">\n            <div class=\"row50\">\n                <div>Name</div>\n              </div>\n              <div class=\"row50\">\n                <div>{{currentEmployeeData.preferredFullName}}</div>\n              </div>\n      \n              <div class=\"row50\">\n                <div>Employee Code</div>\n              </div>\n              <div class=\"row50\">\n                <div>{{currentEmployeeData.employeeCode}}</div>\n              </div>\n              <div class=\"row50\">\n                <div>Job Title</div>\n              </div>\n              <div class=\"row50\">\n                <div>{{currentEmployeeData.jobTitleName}}</div>\n              </div>\n              <div class=\"row50\">\n                <div>Phone Number</div>\n              </div>\n      \n              <div class=\"row50\">\n                <div>{{currentEmployeeData.phoneNumber}}</div>\n              </div>\n      \n              <div class=\"row50\">\n                <div>Email ID</div>\n              </div>\n      \n              <div class=\"row50\">\n                <div>{{currentEmployeeData.emailAddress}}</div>\n              </div>\n              <div class=\"row50\">\n                <div>Region</div>\n              </div>\n      \n              <div class=\"row50\">\n                <div>{{currentEmployeeData.region}}</div>\n              </div>\n              <div class=\"row50\">\n                <div>DOB</div>\n              </div>\n      \n              <div class=\"row50\">\n                <div>{{currentEmployeeData.dob}}</div>\n              </div>\n        </div>\n\n        <div style=\"margin-top:15px\" class=\"row100\">\n            <button class=\"cancel-btn\" (click)=\"closeModal('view');\">Close</button>\n          </div>\n      </div>\n    </div>\n\n  </jw-modal>\n\n  <!-- Delete Employee -->\n  <jw-modal id=\"delete\">\n    <h2>Delete Employee</h2>\n    <hr>\n    <div class=\"auth-main\" *ngIf=\"currentEmployeeData\">\n      <div class=\"auth-block \">\n        <div class=\"row100\">\n          Do you want to delete this employee {{currentEmployeeData.preferredFullName}}?\n        </div>\n\n        <div style=\"margin-top:15px\" class=\"row100\">\n          <button type=\"submit\" class=\"formFullWidth\" (click)=\"delete()\">Delete</button>\n          <button class=\"cancel-btn\" (click)=\"closeModal('delete');\">Close</button>\n        </div>\n\n      </div>\n    </div>\n\n  </jw-modal>\n\n\n\n\n  <router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\nthead {\n  z-index: 10;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  padding: 8px;\n}\n\n.auth-main {\n  height: 100%;\n  width: 100%;\n}\n\n.auth-main .auth-block {\n  color: #1e1e28;\n  padding: 15px 32px;\n}\n\n.auth-main .auth-block label {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #9ea0a5;\n  margin: 10px;\n}\n\n.auth-main .auth-block input {\n  height: 38px;\n  width: -webkit-fill-available;\n  padding: 0px 11px;\n  font-size: 14px;\n  border-radius: 4px;\n  position: relative;\n  box-shadow: inset 0 1px 2px 0 rgba(102, 113, 123, 0.21);\n  border: solid 1px #e2e5ed;\n  background-color: #ffffff;\n}\n\n.auth-main .auth-block span {\n  font-size: 15px;\n}\n\n.auth-main .auth-block h3 {\n  margin: 10% 0 5%;\n  text-align: left;\n  opacity: 0.8;\n  font-size: 28px;\n}\n\n.auth-main .auth-block button {\n  background: royalblue;\n  font-size: 12.6px;\n  width: 20%;\n  height: 40px;\n  color: white;\n  cursor: pointer;\n}\n\n.auth-main .auth-block button:disabled {\n  background: gray;\n}\n\n.auth-main .auth-block .cancel-btn {\n  background: red;\n}\n\n.auth-main .img-block {\n  width: 30%;\n  height: 100%;\n}\n\n.auth-main .img-block img {\n  height: 100%;\n}\n\n.row50 {\n  width: 50%;\n  float: left;\n  margin-bottom: 5%;\n}\n\n.row100 {\n  width: 100%;\n  margin-bottom: 5%;\n}\n\n.error-message {\n  color: red;\n  font-weight: bold;\n}\n\n.float-right {\n  float: right;\n}\n\n.float-left {\n  float: left;\n}\n\n.create-btn {\n  height: 30px;\n  background: royalblue;\n  color: white;\n}\n\n.padding-7 {\n  padding-bottom: 7%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.sortIcon {\n  cursor: pointer;\n  display: block;\n}\n\n.sort-asc {\n  /* IE 9 */\n  /* Safari 3-8 */\n  transform: rotate(180deg);\n}\n\n.sort-desc {\n  /* IE 9 */\n  /* Safari 3-8 */\n  transform: rotate(0deg);\n}\n\n.view-table {\n  display: flow-root;\n}\n\n.pagination {\n  margin-top: 5%;\n  float: right;\n}\n\na {\n  cursor: pointer;\n}\n\n.inputSearch {\n  height: 30px;\n}\n\n.inputSearchText {\n  height: 25px;\n  margin-left: 2%;\n}\n\n.dropbtn {\n  color: black;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbC1tYmEtMTg1L0Rlc2t0b3AvY3J1ZC1tYXN0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURRRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDTEo7O0FETUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURPUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTFo7O0FET1E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDTFo7O0FET1E7RUFDSSxlQUFBO0FDTFo7O0FEZVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNiWjs7QURlUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDYlo7O0FEZVE7RUFDRSxnQkFBQTtBQ2JWOztBRGVNO0VBQ0UsZUFBQTtBQ2JSOztBRGdCSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDZFI7O0FEZVE7RUFDSSxZQUFBO0FDYlo7O0FEa0JBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2ZGOztBRGlCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ2RGOztBRGlCQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ2RGOztBRGlCQTtFQUNFLFlBQUE7QUNkRjs7QURnQkE7RUFDRSxXQUFBO0FDYkY7O0FEZUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7QUNaRjs7QURjQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDWEY7O0FEYUE7RUFDaUMsU0FBQTtFQUNJLGVBQUE7RUFDbkMseUJBQUE7QUNSRjs7QURXQTtFQUMrQixTQUFBO0VBQ0ksZUFBQTtFQUNqQyx1QkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURTQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDTkY7O0FEUUE7RUFDRSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0FDTEY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUEyQixzQkFBQTtBQ0ozQjs7QURNQTtFQUFtQyxjQUFBO0FDRm5DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgdGhlYWR7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC8vIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgLy8gfVxuXG5cblxuICAuYXV0aC1tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmF1dGgtYmxvY2sge1xuICAgICAgICBjb2xvcjogIzFlMWUyODtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIFxuICAgICAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBjb2xvcjogIzllYTBhNTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IDAgcmdiYSgxMDIsMTEzLDEyMywwLjIxKTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlMmU1ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC8vIC5jb2wtc20tMTIge1xuICAgICAgICAvLyAgICAgc3BhbiB7XG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyAgICAgICAgIHJpZ2h0OiA3JTtcbiAgICAgICAgLy8gICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgIC8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvLyAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTAlIDAgNSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEyLjZweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgICAgfVxuICAgICAgLmNhbmNlbC1idG57XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmltZy1ibG9jayB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJvdzUwe1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4ucm93MTAwe1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5lcnJvci1tZXNzYWdle1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZsb2F0LXJpZ2h0e1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZmxvYXQtbGVmdHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY3JlYXRlLWJ0bntcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZGRpbmctN3tcbiAgcGFkZGluZy1ib3R0b206IDclO1xufVxuXG4udGV4dC1jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb3J0SWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc29ydC1hc2N7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uc29ydC1kZXNje1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLnZpZXctdGFibGV7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cblxuLnBhZ2luYXRpb257XG4gIG1hcmdpbi10b3A6IDUlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5he1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmlucHV0U2VhcmNoVGV4dHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5kcm9wYnRuIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4vLyAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fSIsInRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGhlYWQge1xuICB6LWluZGV4OiAxMDtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uYXV0aC1tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdXRoLW1haW4gLmF1dGgtYmxvY2sge1xuICBjb2xvcjogIzFlMWUyODtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xufVxuLmF1dGgtbWFpbiAuYXV0aC1ibG9jayBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjOWVhMGE1O1xuICBtYXJnaW46IDEwcHg7XG59XG4uYXV0aC1tYWluIC5hdXRoLWJsb2NrIGlucHV0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcGFkZGluZzogMHB4IDExcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCAwIHJnYmEoMTAyLCAxMTMsIDEyMywgMC4yMSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMmU1ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYXV0aC1tYWluIC5hdXRoLWJsb2NrIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYXV0aC1tYWluIC5hdXRoLWJsb2NrIGgzIHtcbiAgbWFyZ2luOiAxMCUgMCA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uYXV0aC1tYWluIC5hdXRoLWJsb2NrIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgZm9udC1zaXplOiAxMi42cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXV0aC1tYWluIC5hdXRoLWJsb2NrIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG59XG4uYXV0aC1tYWluIC5hdXRoLWJsb2NrIC5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuLmF1dGgtbWFpbiAuaW1nLWJsb2NrIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmF1dGgtbWFpbiAuaW1nLWJsb2NrIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdzUwIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ucm93MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mbG9hdC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jcmVhdGUtYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZGRpbmctNyB7XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc29ydEljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc29ydC1hc2Mge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC8qIFNhZmFyaSAzLTggKi9cbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNvcnQtZGVzYyB7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAvKiBTYWZhcmkgMy04ICovXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4udmlldy10YWJsZSB7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXRTZWFyY2gge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5pbnB1dFNlYXJjaFRleHQge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmRyb3BidG4ge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _common_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-validator */ "./src/app/common-validator.ts");
            /* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-service.service */ "./src/app/common-service.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(modalService, fb, commonService) {
                    this.modalService = modalService;
                    this.fb = fb;
                    this.commonService = commonService;
                    this.title = 'crud-master';
                    this.searchProperty = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.searchPropertyValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.isDesc = false;
                    this.employeeList = [];
                    this.selectedIndex = -1;
                    this.skip = 0;
                    this.limit = 5;
                    this.maxDate = new Date().getFullYear() + '-' + Number(new Date().getMonth()) + 1 + '-' + new Date().getDate();
                    this.employeePaginationList = [];
                    this.registerForm = fb.group({
                        'id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)])],
                        'first_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z0-9_-]*$/)])],
                        'last_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z0-9_-]*$/)])],
                        'job_title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
                        'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _common_validator__WEBPACK_IMPORTED_MODULE_4__["CommonValidator"].email])],
                        'phone_no': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)])],
                        'region_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z0-9_-]*$/)])],
                        // 'dob': ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_-]*$/)])],
                        'dob': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
                    });
                    // this.employeeList = this.searchPropertyValue.valueChanges
                    //   .pipe(
                    //     map(emp => emp ? this._filterEmployee(emp) : this.employeeList.slice())
                    //   );
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getEmployee();
                    this.searchProperty.setValue('preferredFullName');
                };
                AppComponent.prototype.getEmployee = function () {
                    var _this = this;
                    if (localStorage.getItem('employeeList')) {
                        this.employeeList = JSON.parse(localStorage.getItem('employeeList'));
                    }
                    else {
                        this.commonService.getEmployee().subscribe(function (response) {
                            if (response) {
                                _this.employeeList = response;
                                localStorage.setItem('employeeList', JSON.stringify(_this.employeeList));
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    // this.employeePaginationList = this.employeeList;
                    this.pagination();
                };
                AppComponent.prototype.openModal = function (id) {
                    this.modalService.open(id);
                };
                AppComponent.prototype.closeModal = function (id) {
                    this.modalService.close(id);
                    this.currentEmployeeData = undefined;
                    this.selectedIndex = -1;
                    this.getEmployee();
                    if (id = "create-edit") {
                        this.resetForm(this.registerForm);
                    }
                };
                AppComponent.prototype.viewEmployee = function (data, index) {
                    this.currentEmployeeData = data;
                    this.selectedIndex = index;
                    this.openModal('view');
                };
                AppComponent.prototype.deleteEmployee = function (data, index) {
                    this.currentEmployeeData = data;
                    this.selectedIndex = index;
                    this.openModal('delete');
                };
                AppComponent.prototype.editEmployee = function (data, index) {
                    this.currentEmployeeData = data;
                    this.selectedIndex = index;
                    this.openModal('create-edit');
                    this.setFormValue();
                };
                AppComponent.prototype.createEmployee = function (id) {
                    this.currentEmployeeData = undefined;
                    this.resetForm(this.registerForm);
                    this.openModal(id);
                };
                AppComponent.prototype.setFormValue = function () {
                    this.registerForm.controls.first_name.setValue(this.currentEmployeeData.firstName);
                    this.registerForm.controls.last_name.setValue(this.currentEmployeeData.lastName);
                    this.registerForm.controls.email.setValue(this.currentEmployeeData.emailAddress);
                    this.registerForm.controls.id.setValue(this.currentEmployeeData.employeeCode);
                    this.registerForm.controls.phone_no.setValue(this.currentEmployeeData.phoneNumber);
                    this.registerForm.controls.job_title.setValue(this.currentEmployeeData.jobTitleName);
                    this.registerForm.controls.region_name.setValue(this.currentEmployeeData.region);
                    var dob = new Date(this.currentEmployeeData.dob).getFullYear() + '-' + Number(new Date(this.currentEmployeeData.dob).getMonth()) + 1 + '-' + new Date(this.currentEmployeeData.dob).getDate();
                    this.registerForm.controls.dob.setValue(dob);
                };
                AppComponent.prototype.resetForm = function (form) {
                    form.reset();
                    // Object.keys(form.controls).forEach(key => {
                    //   form.get(key).setErrors(null) ;
                    // });
                };
                AppComponent.prototype._keyPressAlphaNumber = function (event) {
                    var pattern = /^[0-9 ]*$/;
                    var inputChar = String.fromCharCode(event.charCode);
                    if (!pattern.test(inputChar)) {
                        // invalid character, prevent input
                        event.preventDefault();
                    }
                    // let x = event.which || event.keycode;
                    // if ((x >= 48 && x <= 57) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
                    //     return true;
                    // }
                    // else {
                    //     event.preventDefault();
                    //     return false;
                    // }
                };
                AppComponent.prototype.onSubmit = function (formValue) {
                    var payload = {
                        "jobTitleName": formValue.job_title,
                        "firstName": formValue.first_name,
                        "lastName": formValue.last_name,
                        "preferredFullName": formValue.first_name + ' ' + formValue.last_name,
                        "employeeCode": formValue.id,
                        "region": formValue.region_name,
                        // "dob": '30/11/1995',
                        "dob": new Date(formValue.dob).getFullYear() + '-' + Number(new Date(formValue.dob).getMonth()) + 1 + '-' + new Date(formValue.dob).getDate(),
                        "phoneNumber": formValue.phone_no,
                        "emailAddress": formValue.email
                    };
                    // if(this.currentEmployeeData){
                    //   payload['id'] = this.currentEmployeeData.id
                    // }
                    // this.commonService.registerUser(payload).subscribe(
                    //   (response: any) => {
                    //     console.log(response);
                    //      if(response) { 
                    //      }
                    //     }, error => {
                    //       console.log(error)
                    //     });
                    if (this.currentEmployeeData && this.selectedIndex != -1) {
                        this.employeeList[this.selectedIndex] = payload;
                    }
                    else {
                        this.employeeList.push(payload);
                    }
                    localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
                    this.closeModal('create-edit');
                };
                AppComponent.prototype.delete = function () {
                    // const payload = {
                    //   'id': this.currentEmployeeData.id
                    // }
                    // this.commonService.deleteUser(payload).subscribe(
                    //   (response: any) => {
                    //     console.log(response);
                    //      if(response) { 
                    //      }
                    //     }, error => {
                    //       console.log(error)
                    //     });
                    if (this.currentEmployeeData && this.selectedIndex != -1) {
                        this.employeeList.splice(this.selectedIndex, 1);
                        localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
                        this.closeModal('delete');
                    }
                };
                AppComponent.prototype.sortByColoumn = function (property) {
                    this.isDesc = !this.isDesc; //change the direction
                    this.column = property;
                    var direction = this.isDesc ? 1 : -1;
                    this.employeePaginationList.sort(function (a, b) {
                        if (property == 'preferredFullName' || property == 'emailAddress') {
                            if (a[property].toLowerCase() < b[property].toLowerCase()) {
                                return -1 * direction;
                            }
                            else if (a[property].toLowerCase() > b[property].toLowerCase()) {
                                return 1 * direction;
                            }
                            else {
                                return 0;
                            }
                        }
                        else {
                            if (a[property] < b[property]) {
                                return -1 * direction;
                            }
                            else if (a[property] > b[property]) {
                                return 1 * direction;
                            }
                            else {
                                return 0;
                            }
                        }
                    });
                };
                ;
                AppComponent.prototype.onChangeProperty = function () {
                    this.skip = 0;
                    this.searchPropertyValue.reset();
                    this.pagination();
                };
                AppComponent.prototype._filterEmployee = function (value) {
                    var _this = this;
                    var filterValue = value.toLowerCase();
                    return this.employeeList.filter(function (employee) { return employee[_this.searchProperty.value].toLowerCase().indexOf(filterValue) === 0; });
                };
                AppComponent.prototype.pagination = function () {
                    // this.skip += this.limit;
                    if (this.skip >= 0 && this.skip <= this.employeeList.length - 1) {
                        var paginatedArray = this.employeeList.slice(this.skip, this.limit + this.skip);
                        this.employeePaginationList = paginatedArray;
                    }
                };
                AppComponent.prototype.setSkip = function (flag) {
                    this.onChangeProperty();
                    if (this.limit < this.employeeList.length) {
                        if (flag) {
                            this.skip += this.limit;
                            if (this.skip > this.employeeList.length - 1) {
                                this.skip = this.employeeList.length - 1;
                            }
                        }
                        else {
                            this.skip -= this.limit;
                            if (this.skip < 0) {
                                this.skip = 0;
                            }
                        }
                        this.pagination();
                    }
                };
                AppComponent.prototype.searchEmployee = function () {
                    var _this = this;
                    var tmp = [];
                    if (this.searchPropertyValue.value && this.searchPropertyValue.value.length > 2) {
                        this.employeeList.forEach(function (element) {
                            if (element[_this.searchProperty.value].toLowerCase().indexOf(_this.searchPropertyValue.value.toLowerCase()) != -1) {
                                tmp.push(element);
                            }
                        });
                        this.employeePaginationList = tmp;
                    }
                    else {
                        this.pagination();
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jw-modal/jw-modal.component.scss */ "./src/app/jw-modal/jw-modal.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _jw_modal_jw_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jw-modal/jw-modal.component */ "./src/app/jw-modal/jw-modal.component.ts");
            /* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _jw_modal_jw_modal_component__WEBPACK_IMPORTED_MODULE_5__["JwModalComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                    ],
                    exports: [_jw_modal_jw_modal_component__WEBPACK_IMPORTED_MODULE_5__["JwModalComponent"]],
                    providers: [_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/common-service.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/common-service.service.ts ***!
          \*******************************************/
        /*! exports provided: CommonServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function () { return CommonServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var CommonServiceService = /** @class */ (function () {
                function CommonServiceService(http) {
                    this.http = http;
                    this.apiUrl = "https://my-json-server.typicode.com/darshanp40/employeedb/employees";
                }
                CommonServiceService.prototype.registerUser = function (payload) {
                    if (payload['id']) {
                        return this.http.put(this.apiUrl + "/" + payload['id'], payload, { headers: { 'content-language': 'en' } })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            if (res.statusCode === 200) {
                                return res;
                            }
                            else {
                                console.error(res);
                                return;
                            }
                        }));
                    }
                    else {
                        return this.http.post("" + this.apiUrl, payload, { headers: { 'content-language': 'en' } })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            if (res.statusCode === 200) {
                                return res;
                            }
                            else {
                                console.error(res);
                                return;
                            }
                        }));
                    }
                };
                CommonServiceService.prototype.getEmployee = function () {
                    return this.http.get("" + this.apiUrl, { headers: { 'content-language': 'en' } })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                        if (res) {
                            return res[0];
                        }
                        else {
                            console.error(res);
                            return;
                        }
                    }));
                };
                CommonServiceService.prototype.deleteUser = function (payload) {
                    return this.http.post(this.apiUrl + "/" + payload.id, {}, { headers: { 'content-language': 'en' } })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                        if (res.statusCode === 200) {
                            return res;
                        }
                        else {
                            console.error(res);
                            return;
                        }
                    }));
                };
                return CommonServiceService;
            }());
            CommonServiceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CommonServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CommonServiceService);
            /***/ 
        }),
        /***/ "./src/app/common-validator.ts": 
        /*!*************************************!*\
          !*** ./src/app/common-validator.ts ***!
          \*************************************/
        /*! exports provided: CommonValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonValidator", function () { return CommonValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CommonValidator = /** @class */ (function () {
                function CommonValidator() {
                }
                CommonValidator.email = function (control) {
                    var EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (control.value && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
                        return { invalid: true };
                    }
                };
                CommonValidator.matchOtherValidator = function (otherControlName) {
                    return function (control) {
                        var otherControl = control.root.get(otherControlName);
                        if (otherControl) {
                            var subscription_1 = otherControl
                                .valueChanges
                                .subscribe(function () {
                                control.updateValueAndValidity();
                                subscription_1.unsubscribe();
                            });
                        }
                        return (otherControl && control.value !== otherControl.value) ? { match: true } : null;
                    };
                };
                return CommonValidator;
            }());
            /***/ 
        }),
        /***/ "./src/app/jw-modal/jw-modal.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/jw-modal/jw-modal.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\n.jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 25%;\n  width: 50%;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\n.jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbC1tYmEtMTg1L0Rlc2t0b3AvY3J1ZC1tYXN0ZXIvc3JjL2FwcC9qdy1tb2RhbC9qdy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvanctbW9kYWwvanctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUk7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLHFEQUFBO0VBQ0EsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnREFBQTtFQUNBLFlBQUE7QUNGWjtBRE1JO0VBQ0ksK0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsK0RBQUE7RUFDQSxZQUFBO0FDTFI7QURTQTtFQUNJLDZFQUFBO0VBQ0EsZ0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2p3LW1vZGFsL2p3LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuICAgIC5qdy1tb2RhbCB7XG4gICAgICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgICAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIFxuICAgICAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgLmp3LW1vZGFsLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgICAgICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIFxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgICAgIHotaW5kZXg6IDkwMDtcbiAgICB9XG5cblxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmp3LW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDUwJTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5qdy1tb2RhbCAuanctbW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4uanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/jw-modal/jw-modal.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/jw-modal/jw-modal.component.ts ***!
          \************************************************/
        /*! exports provided: JwModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwModalComponent", function () { return JwModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");
            var JwModalComponent = /** @class */ (function () {
                function JwModalComponent(modalService, el) {
                    this.modalService = modalService;
                    this.el = el;
                    this.element = el.nativeElement;
                }
                JwModalComponent.prototype.ngOnInit = function () {
                    var modal = this;
                    // ensure id attribute exists
                    if (!this.id) {
                        console.error('modal must have an id');
                        return;
                    }
                    // move element to bottom of page (just before </body>) so it can be displayed above everything else
                    document.body.appendChild(this.element);
                    // close modal on background click
                    this.element.addEventListener('click', function (e) {
                        if (e.target.className === 'jw-modal') {
                            modal.close();
                        }
                    });
                    // add self (this modal instance) to the modal service so it's accessible from controllers
                    this.modalService.add(this);
                };
                // remove self from modal service when component is destroyed
                JwModalComponent.prototype.ngOnDestroy = function () {
                    this.modalService.remove(this.id);
                    this.element.remove();
                };
                // open modal
                JwModalComponent.prototype.open = function () {
                    this.element.style.display = 'block';
                    document.body.classList.add('jw-modal-open');
                };
                // close modal
                JwModalComponent.prototype.close = function () {
                    this.element.style.display = 'none';
                    document.body.classList.remove('jw-modal-open');
                };
                return JwModalComponent;
            }());
            JwModalComponent.ctorParameters = function () { return [
                { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], JwModalComponent.prototype, "id", void 0);
            JwModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'jw-modal',
                    template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>",
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jw-modal.component.scss */ "./src/app/jw-modal/jw-modal.component.scss")).default]
                })
            ], JwModalComponent);
            /***/ 
        }),
        /***/ "./src/app/modal.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/modal.service.ts ***!
          \**********************************/
        /*! exports provided: ModalService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function () { return ModalService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModalService = /** @class */ (function () {
                function ModalService() {
                    this.modals = [];
                }
                ModalService.prototype.add = function (modal) {
                    // add modal to array of active modals
                    this.modals.push(modal);
                };
                ModalService.prototype.remove = function (id) {
                    // remove modal from array of active modals
                    this.modals = this.modals.filter(function (x) { return x.id !== id; });
                };
                ModalService.prototype.open = function (id) {
                    // open modal specified by id
                    console.warn(this.modals, id);
                    var modal = this.modals.filter(function (x) { return x.id === id; })[0];
                    modal.open();
                };
                ModalService.prototype.close = function (id) {
                    // close modal specified by id
                    var modal = this.modals.filter(function (x) { return x.id === id; })[0];
                    modal.close();
                };
                return ModalService;
            }());
            ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], ModalService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/cl-mba-185/Desktop/crud-master/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map