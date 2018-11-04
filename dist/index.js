(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(1);
var createHistoryObject = __webpack_require__(1).createHistoryObject;
var firstVersion = {
    name: 'Ashley',
    age: 31,
    hobbie: 'Painting',
    address: {
        state: 'Michigan',
        zip: '0000',
    },
    some: {
        other: {
            things: [{ x: 1 }]
        }
    }
};
var secondVersion = {
    name: 'Ashley',
    age: 31,
    hobbie: 'Painting',
    address: {
        state: 'Michigan',
        zip: '0000',
    },
    some: {
        other: {
            things: [{ x: 1 }]
        }
    }
};
var historyObject1 = createHistoryObject(0, firstVersion, secondVersion);
console.log(historyObject1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_history_object_create_history_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHistoryObject", function() { return _create_history_object_create_history_object__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _restore_history_object_restore_history_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restoreHistoryObject", function() { return _restore_history_object_restore_history_object__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_created_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _get_deleted_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _get_modified_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



var createHistoryObject = function (versionNumber, predecessorObject, currentObject) {
    var historyObject = {
        VERSION_NUMBER: null,
        CREATED_PROPERTIES: {},
        DELETED_PROPERTIES: {},
        MODIFIED_VALUES: {},
    };
    Object.freeze(predecessorObject);
    Object.freeze(currentObject);
    historyObject.VERSION_NUMBER = versionNumber;
    historyObject.CREATED_PROPERTIES = Object(_get_created_properties__WEBPACK_IMPORTED_MODULE_0__["default"])([], predecessorObject, currentObject, {});
    historyObject.DELETED_PROPERTIES = Object(_get_deleted_properties__WEBPACK_IMPORTED_MODULE_1__["default"])([], predecessorObject, currentObject, {});
    historyObject.MODIFIED_VALUES = Object(_get_modified_values__WEBPACK_IMPORTED_MODULE_2__["default"])([], predecessorObject, currentObject, {});
    return Object.freeze(historyObject);
};
/* harmony default export */ __webpack_exports__["default"] = (createHistoryObject);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var getCreatedProperties = function (nestedPropertiesPath, predecessorObject, currentObject, createdProperties) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject)) {
        var currentKeys = Object.keys(currentObject);
        currentKeys.forEach(function (currentKey) {
            var _nestedPropertiesPath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(nestedPropertiesPath);
            _nestedPropertiesPath.push(currentKey);
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(predecessorObject[currentKey])) {
                _nestedPropertiesPath = _nestedPropertiesPath.map(_utils__WEBPACK_IMPORTED_MODULE_0__["addPathExistedPrefixToNestedPropPath"]);
                var lastIndex = _nestedPropertiesPath.length - 1;
                var root = _nestedPropertiesPath[0];
                var newProp = _nestedPropertiesPath[lastIndex];
                var newPropValue = currentObject[currentKey];
                if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), createdProperties)) {
                    createdProperties[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, createdProperties, newProp, newPropValue)[root];
                }
                else {
                    createdProperties[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, newProp, newPropValue)[root];
                }
            }
            else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNotUndefined"])(predecessorObject[currentKey])) {
                getCreatedProperties(_nestedPropertiesPath, predecessorObject[currentKey], currentObject[currentKey], createdProperties);
            }
        });
    }
    return createdProperties;
};
/* harmony default export */ __webpack_exports__["default"] = (getCreatedProperties);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNestedObjectPath", function() { return createNestedObjectPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectHasPropertiesPath", function() { return objectHasPropertiesPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushPropInTerminalPropertie", function() { return pushPropInTerminalPropertie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotUndefined", function() { return isNotUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneArray", function() { return cloneArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObject", function() { return cloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChildObject", function() { return hasChildObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectHasProp", function() { return objectHasProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectHasNotProp", function() { return objectHasNotProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectDoesNotHaveProp", function() { return objectDoesNotHaveProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasNotChildObject", function() { return hasNotChildObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIsEmpty", function() { return arrayIsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIsNotEmpty", function() { return arrayIsNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathExistedPrefix", function() { return pathExistedPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPathExistedPrefixToNestedPropPath", function() { return addPathExistedPrefixToNestedPropPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propDeletedPrefix", function() { return propDeletedPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotPrimitive", function() { return isNotPrimitive; });
var createNestedObjectPath = function (nestedPropertiesPath, terminalProp, terminalValue) {
    var _nestedPropertiesPath = cloneArray(nestedPropertiesPath);
    var _terminalValue = cloneObject(terminalValue);
    var nestedObject = {};
    var lastIndex = _nestedPropertiesPath.length - 1;
    _nestedPropertiesPath.reduce(function (obj, prop, i) {
        if (i !== lastIndex)
            obj[prop] = {};
        else if (i === lastIndex && isUndefined(terminalValue))
            obj[prop] = null;
        else if (i === lastIndex && isNotUndefined(terminalValue)) {
            obj[terminalProp] = _terminalValue;
            return obj[terminalProp];
        }
        return obj[prop];
    }, nestedObject);
    return nestedObject;
};
var objectHasPropertiesPath = function (nestedPropertiesPath, nestedObject) {
    var _nestedObject = cloneObject(nestedObject);
    var has = true;
    if (nestedPropertiesPath.length)
        nestedPropertiesPath.reduce(function (obj, prop) {
            obj[prop] === undefined ? has = false : null;
            if (obj[prop])
                return obj[prop];
            else
                return '';
        }, _nestedObject);
    else
        has = false;
    return has;
};
var pushPropInTerminalPropertie = function (nestedPropertiesPath, nestedObject, newProp, newValue) {
    var _nestedObject = cloneObject(nestedObject);
    var _newValue = cloneObject(newValue);
    var lastIndex = nestedPropertiesPath.length - 1;
    nestedPropertiesPath.reduce(function (obj, prop, i) {
        if (i === lastIndex)
            obj[newProp] = _newValue;
        return obj[prop];
    }, _nestedObject);
    return _nestedObject;
};
var isNotUndefined = function (identifier) {
    return identifier !== undefined;
};
var isUndefined = function (identifier) {
    return identifier === undefined;
};
var isObject = function (identifier) {
    return identifier instanceof Object && !(identifier instanceof Array);
};
var isPrimitive = function (identifier) {
    return !(identifier instanceof Object) && !(identifier instanceof Array);
};
var isNotPrimitive = function (identifier) {
    return identifier instanceof Object || identifier instanceof Array;
};
var isArray = function (identifier) {
    return identifier instanceof Array;
};
var cloneArray = function (array) {
    return JSON.parse(JSON.stringify(array));
};
var cloneObject = function (object) {
    return JSON.parse(JSON.stringify(object));
};
var handleError = function (msg) {
    console.error('\x1b[32m%s', 'JSON VS:', '\x1b[31m', msg, '\x1b[0m');
    throw new Error();
};
var objectHasProp = function (object) {
    var objectKey = Object.keys(object)[0];
    return objectKey !== undefined;
};
var objectHasNotProp = function (object) {
    var objectKey = Object.keys(object)[0];
    return objectKey === undefined;
};
var objectDoesNotHaveProp = function (object) {
    var objectKey = Object.keys(object)[0];
    return objectKey === undefined;
};
var hasChildObject = function (object) {
    var objectKey = Object.keys(object)[0];
    return object[objectKey] instanceof Object;
};
var hasNotChildObject = function (object) {
    var objectKey = Object.keys(object)[0];
    return !(object[objectKey] instanceof Object);
};
var arrayIsEmpty = function (array) {
    return array.length === 0;
};
var arrayIsNotEmpty = function (array) {
    return array.length !== 0;
};
var pathExistedPrefix = '%$/$7EXISTED#!ZZv-';
var propDeletedPrefix = '%$/$7DELETED#!ZZv-';
var addPathExistedPrefixToNestedPropPath = function (prop, i, arr) {
    if (i !== arr.length - 1)
        return "" + pathExistedPrefix + prop;
    else
        return prop;
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var getDeletedProperties = function (nestedPropertiesPath, predecessorObject, currentObject, deletedProperties) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject)) {
        var predecessorKeys = Object.keys(predecessorObject);
        predecessorKeys.forEach(function (predecessorKey) {
            var _nestedPropertiesPath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(nestedPropertiesPath);
            _nestedPropertiesPath.push(predecessorKey);
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(currentObject[predecessorKey])) {
                var lastIndexOfNestedPropertiesPathArray = _nestedPropertiesPath.length - 1;
                var deletedProp = "" + _utils__WEBPACK_IMPORTED_MODULE_0__["propDeletedPrefix"] + predecessorKey;
                var root;
                if (_nestedPropertiesPath.length === 1)
                    root = "" + _utils__WEBPACK_IMPORTED_MODULE_0__["propDeletedPrefix"] + _nestedPropertiesPath[0];
                else
                    root = _nestedPropertiesPath[0];
                var deletedValue = predecessorObject[predecessorKey];
                if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndexOfNestedPropertiesPathArray), deletedProperties)) {
                    deletedProperties[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, deletedProperties, deletedProp, deletedValue)[root];
                }
                else {
                    deletedProperties[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, deletedProp, deletedValue)[root];
                }
            }
            else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNotUndefined"])(currentObject[predecessorKey])) {
                getDeletedProperties(_nestedPropertiesPath, predecessorObject[predecessorKey], currentObject[predecessorKey], deletedProperties);
            }
        });
    }
    return deletedProperties;
};
/* harmony default export */ __webpack_exports__["default"] = (getDeletedProperties);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var getModifiedValues = function (nestedPropertiesPath, predecessorObject, currentObject, modifiedValues) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject) || (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(predecessorObject) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(currentObject))) {
        var predecessorKeys = Object.keys(predecessorObject);
        predecessorKeys.forEach(function (predecessorKey) {
            var _nestedPropertiesPath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(nestedPropertiesPath);
            _nestedPropertiesPath.push(predecessorKey);
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNotUndefined"])(currentObject[predecessorKey])) {
                if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(predecessorObject[predecessorKey])) {
                    if (predecessorObject[predecessorKey] !== currentObject[predecessorKey]) {
                        var lastIndex = _nestedPropertiesPath.length - 1;
                        var root = _nestedPropertiesPath[0];
                        var oldProp = predecessorKey;
                        var oldValue = predecessorObject[predecessorKey];
                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues)) {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root];
                        }
                        else {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, oldProp, oldValue)[root];
                        }
                    }
                }
                else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNotPrimitive"])(predecessorObject[predecessorKey])) {
                    if ((Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(currentObject[predecessorKey])) ||
                        (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject[predecessorKey]))) {
                        var lastIndex = _nestedPropertiesPath.length - 1;
                        var root = _nestedPropertiesPath[0];
                        var oldProp = _nestedPropertiesPath[lastIndex];
                        var oldValue = predecessorObject[oldProp];
                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues)) {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root];
                        }
                        else {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, oldProp, oldValue)[root];
                        }
                    }
                    else if ((Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasProp"])(predecessorObject[predecessorKey])) &&
                        (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasProp"])(currentObject[predecessorKey]))) {
                        getModifiedValues(_nestedPropertiesPath, predecessorObject[predecessorKey], currentObject[predecessorKey], modifiedValues);
                    }
                    else if ((Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasNotProp"])(predecessorObject[predecessorKey])) ||
                        (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasProp"])(currentObject[predecessorKey]))) {
                        var lastIndex = _nestedPropertiesPath.length - 1;
                        var root = _nestedPropertiesPath[0];
                        var oldProp = _nestedPropertiesPath[lastIndex];
                        var oldValue = predecessorObject[oldProp];
                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues)) {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root];
                        }
                        else {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, oldProp, oldValue)[root];
                        }
                    }
                    else if ((Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasProp"])(predecessorObject[predecessorKey])) ||
                        (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasNotProp"])(currentObject[predecessorKey]))) {
                        var lastIndex = _nestedPropertiesPath.length - 1;
                        var root = _nestedPropertiesPath[0];
                        var oldProp = _nestedPropertiesPath[lastIndex];
                        var oldValue = predecessorObject[oldProp];
                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues)) {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root];
                        }
                        else {
                            modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, oldProp, oldValue)[root];
                        }
                    }
                    else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(currentObject[predecessorKey])) {
                        if (JSON.stringify(predecessorObject[predecessorKey]) !== JSON.stringify(currentObject[predecessorKey])) {
                            var lastIndex = _nestedPropertiesPath.length - 1;
                            var root = _nestedPropertiesPath[0];
                            var oldProp = _nestedPropertiesPath[lastIndex];
                            var oldValue = predecessorObject[oldProp];
                            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues)) {
                                modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root];
                            }
                            else {
                                modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, oldProp, oldValue)[root];
                            }
                        }
                    }
                }
            }
        });
    }
    else {
        if (predecessorObject !== currentObject) {
            var _nestedPropertiesPath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(nestedPropertiesPath);
            var lastIndex = _nestedPropertiesPath.length - 1;
            var root = _nestedPropertiesPath[0];
            var oldProp = _nestedPropertiesPath[lastIndex];
            var oldValue = predecessorObject[oldProp];
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectHasPropertiesPath"])(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues)) {
                modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pushPropInTerminalPropertie"])(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root];
            }
            else {
                modifiedValues[root] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNestedObjectPath"])(_nestedPropertiesPath, oldProp, oldValue)[root];
            }
        }
    }
    return modifiedValues;
};
/* harmony default export */ __webpack_exports__["default"] = (getModifiedValues);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _remove_created_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _restore_deleted_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _restore_modified_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);




var restoreHistoryObject = function (historyObjects, currentObject, options) {
    if (historyObjects.length) {
        var mergedObject = {};
        var _historyObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(historyObjects);
        if (options.considerVersionNumbers) {
            historyObjects.sort(function (a, b) { return a.VERSION_NUMBER - b.VERSION_NUMBER; });
            historyObjects.reverse();
        }
        else
            historyObjects.reverse();
        var historyObjectKeys = Object.keys(historyObjects);
        historyObjectKeys.forEach(function (historyObjectKey, i) {
            currentObject = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["cloneObject"])(currentObject);
            var _a = historyObjects[historyObjectKey], CREATED_PROPERTIES = _a.CREATED_PROPERTIES, DELETED_PROPERTIES = _a.DELETED_PROPERTIES, MODIFIED_VALUES = _a.MODIFIED_VALUES;
            if (i === 0)
                mergedObject = Object(_remove_created_properties__WEBPACK_IMPORTED_MODULE_1__["default"])(CREATED_PROPERTIES, currentObject);
            else
                mergedObject = Object(_remove_created_properties__WEBPACK_IMPORTED_MODULE_1__["default"])(CREATED_PROPERTIES, mergedObject);
            mergedObject = Object(_restore_deleted_properties__WEBPACK_IMPORTED_MODULE_2__["default"])(DELETED_PROPERTIES, mergedObject);
            mergedObject = Object(_restore_modified_values__WEBPACK_IMPORTED_MODULE_3__["default"])(MODIFIED_VALUES, mergedObject);
        });
    }
    return mergedObject;
};
/* harmony default export */ __webpack_exports__["default"] = (restoreHistoryObject);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var removeCreatedProperties = function (CREATED_PROPERTIES, currentObject) {
    var createdPropertiesKeys = Object.keys(CREATED_PROPERTIES);
    createdPropertiesKeys.forEach(function (createdPropertiesKey) {
        if (createdPropertiesKey.indexOf(_utils__WEBPACK_IMPORTED_MODULE_0__["pathExistedPrefix"]) === 0) {
            var keyWithoutPrefix = createdPropertiesKey.slice(_utils__WEBPACK_IMPORTED_MODULE_0__["pathExistedPrefix"].length);
            removeCreatedProperties(CREATED_PROPERTIES[createdPropertiesKey], currentObject[keyWithoutPrefix]);
        }
        else {
            delete currentObject[createdPropertiesKey];
        }
    });
    return currentObject;
};
/* harmony default export */ __webpack_exports__["default"] = (removeCreatedProperties);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var restoreDeletedProperties = function (DELETED_PROPERTIES, currentObject) {
    var deletedPropertiesKeys = Object.keys(DELETED_PROPERTIES);
    deletedPropertiesKeys.forEach(function (deletedPropertiesKey) {
        if (deletedPropertiesKey.indexOf(_utils__WEBPACK_IMPORTED_MODULE_0__["propDeletedPrefix"]) === 0) {
            var keyWithoutPrefix = deletedPropertiesKey.slice(_utils__WEBPACK_IMPORTED_MODULE_0__["propDeletedPrefix"].length);
            currentObject[keyWithoutPrefix] = DELETED_PROPERTIES[deletedPropertiesKey];
        }
        else {
            restoreDeletedProperties(DELETED_PROPERTIES[deletedPropertiesKey], currentObject[deletedPropertiesKey]);
        }
    });
    return currentObject;
};
/* harmony default export */ __webpack_exports__["default"] = (restoreDeletedProperties);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var restoreModifiedValues = function (MODIFIED_VALUES, currentObject) {
    var modifiedValuesKeys = Object.keys(MODIFIED_VALUES);
    modifiedValuesKeys.forEach(function (modifiedValuesKey) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(MODIFIED_VALUES[modifiedValuesKey]) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(MODIFIED_VALUES[modifiedValuesKey])) {
            currentObject[modifiedValuesKey] = MODIFIED_VALUES[modifiedValuesKey];
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(MODIFIED_VALUES[modifiedValuesKey])) {
            restoreModifiedValues(MODIFIED_VALUES[modifiedValuesKey], currentObject[modifiedValuesKey]);
        }
    });
    return currentObject;
};
/* harmony default export */ __webpack_exports__["default"] = (restoreModifiedValues);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGUtaGlzdG9yeS1vYmplY3QvY3JlYXRlLWhpc3Rvcnktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGUtaGlzdG9yeS1vYmplY3QvZ2V0LWNyZWF0ZWQtcHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZS1oaXN0b3J5LW9iamVjdC9nZXQtZGVsZXRlZC1wcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGUtaGlzdG9yeS1vYmplY3QvZ2V0LW1vZGlmaWVkLXZhbHVlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzdG9yZS1oaXN0b3J5LW9iamVjdC9yZXN0b3JlLWhpc3Rvcnktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXN0b3JlLWhpc3Rvcnktb2JqZWN0L3JlbW92ZS1jcmVhdGVkLXByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3RvcmUtaGlzdG9yeS1vYmplY3QvcmVzdG9yZS1kZWxldGVkLXByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3RvcmUtaGlzdG9yeS1vYmplY3QvcmVzdG9yZS1tb2RpZmllZC12YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFDLGlCQUFpQixDQUFDLENBQUMsRUFDL0M7WUFDRSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUMsQ0FBQztJQUVGLE9BQU8sYUFBYTtBQUN0QixDQUFDO0FBRWMsb0ZBQXFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBAYXBpIHB1YmxpYyBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL2luZGV4JylcblxuY29uc3QgeyBjcmVhdGVIaXN0b3J5T2JqZWN0IH0gPSByZXF1aXJlKCcuL3NyYy9pbmRleCcpXG5cbmNvbnN0IGZpcnN0VmVyc2lvbiA9ICB7XG4gIG5hbWU6ICdBc2hsZXknLFxuICBhZ2U6IDMxLFxuICBob2JiaWU6ICdQYWludGluZycsXG4gIGFkZHJlc3M6IHtcbiAgICBzdGF0ZTogJ01pY2hpZ2FuJyxcbiAgICB6aXA6ICcwMDAwJyxcbiAgfSxcbiAgc29tZToge1xuICAgIG90aGVyOiB7XG4gICAgICB0aGluZ3M6IFt7eDogMX1dXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNlY29uZFZlcnNpb24gPSB7XG4gIG5hbWU6ICdBc2hsZXknLFxuICBhZ2U6IDMxLFxuICBob2JiaWU6ICdQYWludGluZycsXG4gIGFkZHJlc3M6IHtcbiAgICBzdGF0ZTogJ01pY2hpZ2FuJyxcbiAgICB6aXA6ICcwMDAwJyxcbiAgfSxcbiAgc29tZToge1xuICAgIG90aGVyOiB7XG4gICAgICB0aGluZ3M6IFt7eDogMX1dXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhpc3RvcnlPYmplY3QxID0gY3JlYXRlSGlzdG9yeU9iamVjdCgwLCBmaXJzdFZlcnNpb24sIHNlY29uZFZlcnNpb24pXG5jb25zb2xlLmxvZyhoaXN0b3J5T2JqZWN0MSkiLCJpbXBvcnQgY3JlYXRlSGlzdG9yeU9iamVjdCBmcm9tICcuL2NyZWF0ZS1oaXN0b3J5LW9iamVjdC9jcmVhdGUtaGlzdG9yeS1vYmplY3QnXG5pbXBvcnQgcmVzdG9yZUhpc3RvcnlPYmplY3QgZnJvbSAnLi9yZXN0b3JlLWhpc3Rvcnktb2JqZWN0L3Jlc3RvcmUtaGlzdG9yeS1vYmplY3QnXG5cbmV4cG9ydCB7IGNyZWF0ZUhpc3RvcnlPYmplY3QsIHJlc3RvcmVIaXN0b3J5T2JqZWN0IH0iLCJpbXBvcnQgeyBIaXN0b3J5T2JqZWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCBnZXRDcmVhdGVkUHJvcGVydGllcyBmcm9tICcuL2dldC1jcmVhdGVkLXByb3BlcnRpZXMnXG5pbXBvcnQgZ2V0RGVsZXRlZFByb3BlcnRpZXMgZnJvbSAnLi9nZXQtZGVsZXRlZC1wcm9wZXJ0aWVzJ1xuaW1wb3J0IGdldE1vZGlmaWVkVmFsdWVzIGZyb20gJy4vZ2V0LW1vZGlmaWVkLXZhbHVlcydcbmltcG9ydCB7IFZFUlNJT05fTlVNQkVSIH0gZnJvbSAnLi4vdHlwZXMnXG5cbi8qKlxuICogQ3JlYXRlcyBoaXN0b3J5IG9iamVjdC5cbiAqIFxuICogQHBhcmFtIHtWRVJTSU9OX05VTUJFUn0gdmVyc2lvbk51bWJlclxuICogQHBhcmFtIHtSZWFkb25seTxPYmplY3Q+fSBwcmVkZWNlc3Nvck9iamVjdFxuICogQHBhcmFtIHtSZWFkb25seTxPYmplY3Q+fSBjdXJyZW50T2JqZWN0XG4gKiBAcmV0dXJuIHtSZWFkb25seTxIaXN0b3J5T2JqZWN0Pn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGNyZWF0ZUhpc3RvcnlPYmplY3QgPSAodmVyc2lvbk51bWJlcjogUmVhZG9ubHk8VkVSU0lPTl9OVU1CRVI+LCBwcmVkZWNlc3Nvck9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgY3VycmVudE9iamVjdDogUmVhZG9ubHk8T2JqZWN0Pik6IFJlYWRvbmx5PEhpc3RvcnlPYmplY3Q+ID0+IHtcbiAgY29uc3QgaGlzdG9yeU9iamVjdDogSGlzdG9yeU9iamVjdCA9IHtcbiAgICBWRVJTSU9OX05VTUJFUjogbnVsbCxcbiAgICBDUkVBVEVEX1BST1BFUlRJRVM6IHt9LFxuICAgIERFTEVURURfUFJPUEVSVElFUzoge30sXG4gICAgTU9ESUZJRURfVkFMVUVTOiB7fSxcbiAgfVxuXG4gIE9iamVjdC5mcmVlemUocHJlZGVjZXNzb3JPYmplY3QpXG4gIE9iamVjdC5mcmVlemUoY3VycmVudE9iamVjdClcblxuICBoaXN0b3J5T2JqZWN0LlZFUlNJT05fTlVNQkVSID0gdmVyc2lvbk51bWJlclxuICBoaXN0b3J5T2JqZWN0LkNSRUFURURfUFJPUEVSVElFUyA9IGdldENyZWF0ZWRQcm9wZXJ0aWVzKFtdLCBwcmVkZWNlc3Nvck9iamVjdCwgY3VycmVudE9iamVjdCwge30pXG4gIGhpc3RvcnlPYmplY3QuREVMRVRFRF9QUk9QRVJUSUVTID0gZ2V0RGVsZXRlZFByb3BlcnRpZXMoW10sIHByZWRlY2Vzc29yT2JqZWN0LCBjdXJyZW50T2JqZWN0LCB7fSlcbiAgaGlzdG9yeU9iamVjdC5NT0RJRklFRF9WQUxVRVMgPSBnZXRNb2RpZmllZFZhbHVlcyhbXSwgcHJlZGVjZXNzb3JPYmplY3QsIGN1cnJlbnRPYmplY3QsIHt9KVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKGhpc3RvcnlPYmplY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhpc3RvcnlPYmplY3QgIiwiaW1wb3J0IHsgXG4gIGlzTm90VW5kZWZpbmVkLFxuICBpc1VuZGVmaW5lZCxcbiAgaXNPYmplY3QsIFxuICBjbG9uZUFycmF5LFxuICBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoLCBcbiAgb2JqZWN0SGFzUHJvcGVydGllc1BhdGgsIFxuICBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUsXG4gIGFkZFBhdGhFeGlzdGVkUHJlZml4VG9OZXN0ZWRQcm9wUGF0aCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb21wYXJlcyB0d28gb2JqZWN0czogYHByZWRlY2Vzc29yT2JqZWN0YCAmIGBjdXJyZW50T2JqZWN0YC4gXG4gKiBDcmVhdGVzIG9iamVjdCwgd2hpY2ggY29udGFpbnMgYWxsIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzJyBwYXRocywgZnJvbSByb290IHRvIGxlYWYgbm9kZSAod2l0aCBsZWFmIHZhbHVlcyksIHdoaWNoIHdlcmUgY3JlYXRlZCBpbiB0aGUgYGN1cnJlbnRPYmplY3RgLlxuICogXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG5lc3RlZFByb3BlcnRpZXNQYXRoIC0gSW5pdGlhbCB2YWx1ZSBtdXN0IGJlIGFuIGVtcHR5IGFycmF5LlxuICogQHBhcmFtIHtSZWFkb25seTxPYmplY3Q+fSBwcmVkZWNlc3Nvck9iamVjdFxuICogQHBhcmFtIHtSZWFkb25seTxPYmplY3Q+fSBjdXJyZW50T2JqZWN0XG4gKiBAcmV0dXJuIHtSZWFkb25seTxPYmplY3Q+fSBjcmVhdGVkUHJvcGVydGllc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgZ2V0Q3JlYXRlZFByb3BlcnRpZXMgPSAobmVzdGVkUHJvcGVydGllc1BhdGg6IEFycmF5PHN0cmluZz4sIHByZWRlY2Vzc29yT2JqZWN0OiBSZWFkb25seTxPYmplY3Q+LCBjdXJyZW50T2JqZWN0OiBSZWFkb25seTxPYmplY3Q+LCBjcmVhdGVkUHJvcGVydGllczogT2JqZWN0KTogUmVhZG9ubHk8T2JqZWN0PiA9PiB7XG4gIGlmKGlzT2JqZWN0KGN1cnJlbnRPYmplY3QpKVxuICB7XG4gICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KVxuICAgIGN1cnJlbnRLZXlzLmZvckVhY2goY3VycmVudEtleSA9PiB7XG4gICAgICB2YXIgX25lc3RlZFByb3BlcnRpZXNQYXRoID0gY2xvbmVBcnJheShuZXN0ZWRQcm9wZXJ0aWVzUGF0aClcbiAgICAgIF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5wdXNoKGN1cnJlbnRLZXkpXG4gICAgICBcbiAgICAgIGlmKGlzVW5kZWZpbmVkKHByZWRlY2Vzc29yT2JqZWN0W2N1cnJlbnRLZXldKSlcbiAgICAgIHtcbiAgICAgICAgX25lc3RlZFByb3BlcnRpZXNQYXRoID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLm1hcChhZGRQYXRoRXhpc3RlZFByZWZpeFRvTmVzdGVkUHJvcFBhdGgpXG5cbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgY29uc3Qgcm9vdCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFswXVxuICAgICAgICB2YXIgbmV3UHJvcCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFtsYXN0SW5kZXhdXG4gICAgICAgIGNvbnN0IG5ld1Byb3BWYWx1ZSA9IGN1cnJlbnRPYmplY3RbY3VycmVudEtleV1cbiAgICAgIFxuICAgICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4KSwgY3JlYXRlZFByb3BlcnRpZXMpKSBcbiAgICAgICAge1xuICAgICAgICAgIGNyZWF0ZWRQcm9wZXJ0aWVzW3Jvb3RdID0gcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgY3JlYXRlZFByb3BlcnRpZXMsIG5ld1Byb3AsIG5ld1Byb3BWYWx1ZSlbcm9vdF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBjcmVhdGVkUHJvcGVydGllc1tyb290XSA9IGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBuZXdQcm9wLCBuZXdQcm9wVmFsdWUpW3Jvb3RdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoaXNOb3RVbmRlZmluZWQocHJlZGVjZXNzb3JPYmplY3RbY3VycmVudEtleV0pKVxuICAgICAge1xuICAgICAgICBnZXRDcmVhdGVkUHJvcGVydGllcyhfbmVzdGVkUHJvcGVydGllc1BhdGgsIHByZWRlY2Vzc29yT2JqZWN0W2N1cnJlbnRLZXldLCBjdXJyZW50T2JqZWN0W2N1cnJlbnRLZXldLCBjcmVhdGVkUHJvcGVydGllcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWRQcm9wZXJ0aWVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENyZWF0ZWRQcm9wZXJ0aWVzIiwiLyoqXG4gKiBDcmVhdHMgbmVzdGVkIG9iamVjdCBmcm9tIGFycmF5IG9mIHN0cmluZ3MgYW5kIGlmIHRlcm1pbmFsVmFsdWUgKGB0ZXJtaW5hbCBwcm9wZXJ0aWVgOiBpbiB0aGlzIGNvbnRleHQsIGxhc3QgdmFsdWUgaW4gYXJyYXkuIFxuICogYHRlcm1pbmFsIG5vZGVgOiBsYXN0IGNoaWxkIGluIHRoZSB0cmVlKSBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgbGFzdCBwcm9wZXJ0aWUsIGlmIG5vdCBsYXN0IHByb3BlcnRpZSB2YWx1ZVxuICogd2lsbCBiZSBudWxsLlxuICogXG4gKiBFeGFtcGxlIEk6IGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgoW2EsIGIsIGNdKSByZXN1bHRzIGluIHsgYTogeyBiOiB7IGM6IG51bGwgfSB9IH1cbiAqIEV4YW1wbGUgSUk6IGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgoW2EsIGIsIGNdLCB0ZXJtaW5hbFZhbHVlKSByZXN1bHRzIGluIHsgYTogeyBiOiB7IGM6IHRlcm1pbmFsVmFsdWUgfSB9IH1cbiAqIFxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuZXN0ZWRQcm9wZXJ0aWVzUGF0aCAtIHN0cmluZ3Mgd2hpY2ggbXVzdCBiZSBuZXN0ZWQgaW4gYW4gb2JqZWN0LCBpbiBzZXF1ZW50aWFsIG9yZGVyLlxuICogQHBhcmFtIHthbnl9IHRlcm1pbmFsVmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtaW5hbFByb3BcbiAqIEByZXR1cm4ge09iamVjdH0gbmVzdGVkT2JqZWN0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoID0gKG5lc3RlZFByb3BlcnRpZXNQYXRoOiBBcnJheTxzdHJpbmc+LCB0ZXJtaW5hbFByb3A6IHN0cmluZywgdGVybWluYWxWYWx1ZT86IGFueSk6IE9iamVjdCA9PiB7XG4gIGNvbnN0IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCA9IGNsb25lQXJyYXkobmVzdGVkUHJvcGVydGllc1BhdGgpXG4gIGNvbnN0IF90ZXJtaW5hbFZhbHVlID0gY2xvbmVPYmplY3QodGVybWluYWxWYWx1ZSlcbiAgY29uc3QgbmVzdGVkT2JqZWN0ID0ge31cbiAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgXG4gIF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5yZWR1Y2UoKG9iaiwgcHJvcCwgaSkgPT4ge1xuICAgIGlmKGkgIT09IGxhc3RJbmRleCkgb2JqW3Byb3BdID0ge31cbiAgICBlbHNlIGlmKGkgPT09IGxhc3RJbmRleCAmJiBpc1VuZGVmaW5lZCh0ZXJtaW5hbFZhbHVlKSkgb2JqW3Byb3BdID0gbnVsbFxuICAgIGVsc2UgaWYoaSA9PT0gbGFzdEluZGV4ICYmIGlzTm90VW5kZWZpbmVkKHRlcm1pbmFsVmFsdWUpKSB7XG4gICAgICBvYmpbdGVybWluYWxQcm9wXSA9IF90ZXJtaW5hbFZhbHVlXG4gICAgICByZXR1cm4gb2JqW3Rlcm1pbmFsUHJvcF1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqW3Byb3BdXG4gIH0sIG5lc3RlZE9iamVjdClcbiAgcmV0dXJuIG5lc3RlZE9iamVjdFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBpbiBgbmVzdGVkT2JqZWN0YCBwYXNzZWQgYXMgc2Vjb25kIGFyZ3VtZW50IGV4aXN0cywgcHJvcGVydGllcyBmcm9tIGBuZXN0ZWRQcm9wZXJ0aWVzUGF0aGAgd2hpY2ggXG4gKiBhcmUgdGFrZW4gaW4gc2VxdWVudGlhbCBvcmRlci5cbiAqIFxuICogRXhhbXBsZSBJOiBvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChbJ2EnLCAnYicsICdjJ10sIHsgYTogeyBiOiB7IGM6IHNvbWV0aGluZyB9IH0gfSkuIE9iamVjdCAtIG5lc3RlZE9iamVjdCBoYXNcbiAqIHByb3BlcnRpZXMgcHJvdmlkZWQgZnJvbSBgbmVzdGVkUHJvcGVydGllc1BhdGhgLlxuICogRXhhbXBsZSBJSTogb2JqZWN0SGFzUHJvcGVydGllc1BhdGgoWydhJywgJ3gnLCAnYyddLCB7IGE6IHsgYjogeyBjOiBzb21ldGhpbmcgfSB9IH0pLiBPYmplY3QgLSBuZXN0ZWRPYmplY3QgZG9lc24ndFxuICogaGF2ZSBwcm9wZXJ0aWVzIHByb3ZpZGVkIGZyb20gYG5lc3RlZFByb3BlcnRpZXNQYXRoYC4gYG5lc3RlZFByb3BlcnRpZXNQYXRoYCBtdXN0IGV4YWN0bHkgbWF0Y2ggdGhlIFxuICogc2VxdWVuY2Ugb2YgYG5lc3RlZE9iamVjdGAuXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmVzdGVkUHJvcGVydGllc1BhdGggLSBzdHJpbmdzIHdoaWNoIG11c3QgYmUgbmVzdGVkIGluIGFuIG9iamVjdCwgaW4gc2VxdWVudGlhbCBvcmRlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXN0ZWRPYmplY3QgY2FuIGJlIGFueXRoaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZW5lc3RlZFByb3BlcnRpZXNQYXRoQXJyYXlcbiAqL1xuXG5jb25zdCBvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aCA9IChuZXN0ZWRQcm9wZXJ0aWVzUGF0aDogQXJyYXk8c3RyaW5nPiwgbmVzdGVkT2JqZWN0OiBPYmplY3QpOiBib29sZWFuID0+IHtcbiAgY29uc3QgX25lc3RlZE9iamVjdCA9IGNsb25lT2JqZWN0KG5lc3RlZE9iamVjdClcbiAgdmFyIGhhcyA9IHRydWVcbiAgXG4gIGlmKG5lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aClcbiAgICBuZXN0ZWRQcm9wZXJ0aWVzUGF0aC5yZWR1Y2UoKG9iaiwgcHJvcCkgPT4ge1xuICAgICAgb2JqW3Byb3BdID09PSB1bmRlZmluZWQgPyBoYXMgPSBmYWxzZSA6IG51bGxcblxuICAgICAgaWYob2JqW3Byb3BdKVxuICAgICAgICByZXR1cm4gb2JqW3Byb3BdXG4gICAgICBlbHNlIFxuICAgICAgICByZXR1cm4gJydcbiAgICB9LCBfbmVzdGVkT2JqZWN0KVxuICBlbHNlXG4gICAgaGFzID0gZmFsc2VcblxuICByZXR1cm4gaGFzXG59XG5cbi8qKlxuICogQmVmb3JlIHRoaXMgcHJvY2VkdXJlLCBpdCBtdXN0IGJlIGNoZWNrZWQgaWYgdGhlIHBhdGggZnJvbSBhIHRvIGMgZXhpc3RzIChpbmNsdWRpbmcgYykuIElmIGl0IGRvZXMsIHRoZW4geW91IGNhbiBwdXNoIHNvbWV0aGluZyBuZXh0IHRvIGMuXG4gKiBJZiBub3QsIHlvdSBtdXN0IGNyZWF0ZSBuZXcgb25lIHdpdGggYGNyZWF0ZU5lc3RlZE9iamVjdFBhdGhgLlxuICogRXhhbXBsZSBJOiBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoW2EsIGIsIGNdLCB7IGE6IHsgYjogeyBjOiBudWxsIH0gfSB9LCAnZm9vJywgJ2JhcicpIHJlc3VsdHMgaW4geyBhOiB7IGI6IHsgYzogbnVsbCwgZm9vOiAnYmFyJyB9IH0gfVxuICogXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG5lc3RlZFByb3BlcnRpZXNQYXRoIC0gc3RyaW5ncyB3aGljaCBtdXN0IGJlIG5lc3RlZCBpbiBvYmplY3QsIGluIHNlcXVlbnRpYWwgb3JkZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gbmVzdGVkT2JqZWN0IC0gYW55IG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQcm9wXG4gKiBAcGFyYW0ge2FueX0gbmV3VmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZSA9IChuZXN0ZWRQcm9wZXJ0aWVzUGF0aDogQXJyYXk8c3RyaW5nPiwgbmVzdGVkT2JqZWN0OiBPYmplY3QsIG5ld1Byb3A6IHN0cmluZywgbmV3VmFsdWU6IGFueSk6IE9iamVjdCA9PiB7XG4gIGNvbnN0IF9uZXN0ZWRPYmplY3QgPSBjbG9uZU9iamVjdChuZXN0ZWRPYmplY3QpXG4gIGNvbnN0IF9uZXdWYWx1ZSA9IGNsb25lT2JqZWN0KG5ld1ZhbHVlKVxuICBjb25zdCBsYXN0SW5kZXggPSBuZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG5cbiAgbmVzdGVkUHJvcGVydGllc1BhdGgucmVkdWNlKChvYmosIHByb3AsIGkpID0+IHtcbiAgICBpZihpID09PSBsYXN0SW5kZXgpIG9ialtuZXdQcm9wXSA9IF9uZXdWYWx1ZVxuXG4gICAgcmV0dXJuIG9ialtwcm9wXVxuICB9LCBfbmVzdGVkT2JqZWN0KVxuICBcbiAgcmV0dXJuIF9uZXN0ZWRPYmplY3Rcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBpZGVudGlmaWVyIGlzIG5vdCB1bmRlZmluZWQuXG4gKiBcbiAqIEBwYXJhbSB7YW55fSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGlzTm90VW5kZWZpbmVkID0gKGlkZW50aWZpZXI6IGFueSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaWRlbnRpZmllciAhPT0gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgaWRlbnRpZmllciBpcyB1bmRlZmluZWQuXG4gKiBcbiAqIEBwYXJhbSB7YW55fSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGlzVW5kZWZpbmVkID0gKGlkZW50aWZpZXI6IGFueSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaWRlbnRpZmllciA9PT0gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgaWRlbnRpZmllciBpcyBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7YW55fSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGlzT2JqZWN0ID0gKGlkZW50aWZpZXI6IGFueSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaWRlbnRpZmllciBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKGlkZW50aWZpZXIgaW5zdGFuY2VvZiBBcnJheSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBpZGVudGlmaWVyIGlzIHByaW1pdGl2ZS5cbiAqIFxuICogQHBhcmFtIHthbnl9IGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgaXNQcmltaXRpdmUgPSAoaWRlbnRpZmllcjogYW55KTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAhKGlkZW50aWZpZXIgaW5zdGFuY2VvZiBPYmplY3QpICYmICEoaWRlbnRpZmllciBpbnN0YW5jZW9mIEFycmF5KVxufVxuXG5jb25zdCBpc05vdFByaW1pdGl2ZSA9IChpZGVudGlmaWVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgaW5zdGFuY2VvZiBPYmplY3QgfHwgaWRlbnRpZmllciBpbnN0YW5jZW9mIEFycmF5XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgaWRlbnRpZmllciBpcyBhcnJheS5cbiAqIFxuICogQHBhcmFtIHthbnl9IGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgaXNBcnJheSA9IChpZGVudGlmaWVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgaW5zdGFuY2VvZiBBcnJheVxufVxuXG4vKipcbiAqIENsb25lIHRoZSBhcnJheS5cbiAqIFxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGNsb25lQXJyYXkgPSAoYXJyYXk6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxufVxuXG4vKipcbiAqIENsb25lIHRoZSBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGNsb25lT2JqZWN0ID0gKG9iamVjdDogT2JqZWN0KTogT2JqZWN0ID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcbn1cblxuLyoqXG4gKiBQcmludHMgZXJyb3IgbWVzc2FnZSBpbiBjb25zb2xlIGFuZCB0aHJvd3MgbmV3IGVycm9yLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgaGFuZGxlRXJyb3IgPSAobXNnOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc29sZS5lcnJvcignXFx4MWJbMzJtJXMnLCAnSlNPTiBWUzonLCAnXFx4MWJbMzFtJywgbXNnLCAnXFx4MWJbMG0nKVxuICB0aHJvdyBuZXcgRXJyb3IoKVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBvYmplY3QgaGFzIHByb3BlcnR5LlxuICogXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3Qgb2JqZWN0SGFzUHJvcCA9IChvYmplY3Q6IE9iamVjdCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBvYmplY3RLZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpWzBdXG4gIHJldHVybiBvYmplY3RLZXkgIT09IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBvYmplY3QgaGFzIG5vdCBnb3QgYSBwcm9wZXJ0eS5cbiAqIFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IG9iamVjdEhhc05vdFByb3AgPSAob2JqZWN0OiBPYmplY3QpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb2JqZWN0S2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KVswXVxuICByZXR1cm4gb2JqZWN0S2V5ID09PSB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgb2JqZWN0IGRvZXMgbm90IGhhdmUgcHJvcGVydHkuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBvYmplY3REb2VzTm90SGF2ZVByb3AgPSAob2JqZWN0OiBPYmplY3QpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb2JqZWN0S2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KVswXVxuICByZXR1cm4gb2JqZWN0S2V5ID09PSB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgb2JqZWN0IGhhcyBjaGlsZCBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBoYXNDaGlsZE9iamVjdCA9IChvYmplY3Q6IE9iamVjdCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBvYmplY3RLZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpWzBdXG4gIHJldHVybiBvYmplY3Rbb2JqZWN0S2V5XSBpbnN0YW5jZW9mIE9iamVjdFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBvYmplY3QgaGFzIG5vdCBnb3QgYSBjaGlsZCBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBoYXNOb3RDaGlsZE9iamVjdCA9IChvYmplY3Q6IE9iamVjdCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBvYmplY3RLZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpWzBdXG4gIHJldHVybiAhKG9iamVjdFtvYmplY3RLZXldIGluc3RhbmNlb2YgT2JqZWN0KVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhcnJheSBpcyBlbXB0eVxuICogXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGFycmF5SXNFbXB0eSA9IChhcnJheTogQXJyYXk8YW55Pik6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYXJyYXkubGVuZ3RoID09PSAwXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFycmF5IGlzIG5vdCBlbXB0eVxuICogXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGFycmF5SXNOb3RFbXB0eSA9IChhcnJheTogQXJyYXk8YW55Pik6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYXJyYXkubGVuZ3RoICE9PSAwXG59XG5cbi8qKlxuICogSWRlbnRpZmllcyB0aGF0IHRoZSBwYXRoIGFscmVhZHkgZXhpc3RlZCBiZWZvcmUgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJmaWVsZChzKSBvciBhZGphY2VudCBmaWVsZChzKS5cbiAqL1xuXG5jb25zdCBwYXRoRXhpc3RlZFByZWZpeCA9ICclJC8kN0VYSVNURUQjIVpadi0nXG5jb25zdCBwcm9wRGVsZXRlZFByZWZpeCA9ICclJC8kN0RFTEVURUQjIVpadi0nXG5cbmNvbnN0IGFkZFBhdGhFeGlzdGVkUHJlZml4VG9OZXN0ZWRQcm9wUGF0aCA9IChwcm9wLCBpLCBhcnIpID0+IHtcbiAgaWYoaSAhPT0gYXJyLmxlbmd0aCAtIDEpXG4gICAgcmV0dXJuIGAke3BhdGhFeGlzdGVkUHJlZml4fSR7cHJvcH1gXG4gIGVsc2VcbiAgICByZXR1cm4gcHJvcFxufVxuXG5leHBvcnQgeyBcbiAgY3JlYXRlTmVzdGVkT2JqZWN0UGF0aCxcbiAgb2JqZWN0SGFzUHJvcGVydGllc1BhdGgsXG4gIHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZSxcbiAgaXNOb3RVbmRlZmluZWQsXG4gIGlzVW5kZWZpbmVkLFxuICBpc09iamVjdCxcbiAgaXNQcmltaXRpdmUsXG4gIGNsb25lQXJyYXksXG4gIGNsb25lT2JqZWN0LFxuICBoYW5kbGVFcnJvcixcbiAgaGFzQ2hpbGRPYmplY3QsXG4gIG9iamVjdEhhc1Byb3AsXG4gIG9iamVjdEhhc05vdFByb3AsXG4gIG9iamVjdERvZXNOb3RIYXZlUHJvcCxcbiAgaGFzTm90Q2hpbGRPYmplY3QsXG4gIGFycmF5SXNFbXB0eSxcbiAgYXJyYXlJc05vdEVtcHR5LFxuICBwYXRoRXhpc3RlZFByZWZpeCxcbiAgYWRkUGF0aEV4aXN0ZWRQcmVmaXhUb05lc3RlZFByb3BQYXRoLFxuICBwcm9wRGVsZXRlZFByZWZpeCxcbiAgaXNBcnJheSxcbiAgaXNOb3RQcmltaXRpdmVcbn0iLCJpbXBvcnQgeyBcbiAgaXNOb3RVbmRlZmluZWQsXG4gIGlzVW5kZWZpbmVkLCBcbiAgaXNPYmplY3QsIFxuICBjbG9uZUFycmF5LFxuICBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoLCBcbiAgb2JqZWN0SGFzUHJvcGVydGllc1BhdGgsIFxuICBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUsXG4gIHByb3BEZWxldGVkUHJlZml4XG59IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29tcGFyZXMgdHdvIG9iamVjdHM6IGBwcmVkZWNlc3Nvck9iamVjdGAgJiBgY3VycmVudE9iamVjdGAuIFxuICogQ3JlYXRlcyBvYmplY3QsIHdoaWNoIGNvbnRhaW5zIGFsbCB0aGUgb2JqZWN0J3MgcHJvcGVydGllcycgcGF0aHMsIGZyb20gcm9vdCB0byBsZWFmIG5vZGUgKHdpdGggbGVhZiB2YWx1ZXMpLCB3aGljaCB3ZXJlIGRlbGV0ZWQgaW4gdGhlIGBwcmVkZWNlc3Nvck9iamVjdGAuXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmVzdGVkUHJvcGVydGllc1BhdGhBcnJheSAtIEluaXRpYWwgdmFsdWUgbXVzdCBiZSBhbiBlbXB0eSBhcnJheS5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8T2JqZWN0Pn0gcHJlZGVjZXNzb3JPYmplY3RcbiAqIEBwYXJhbSB7UmVhZG9ubHk8T2JqZWN0Pn0gY3VycmVudE9iamVjdFxuICogQHJldHVybiB7T2JqZWN0fSBkZWxldGVkUHJvcGVydGllc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgZ2V0RGVsZXRlZFByb3BlcnRpZXMgPSAobmVzdGVkUHJvcGVydGllc1BhdGg6IEFycmF5PHN0cmluZz4sIHByZWRlY2Vzc29yT2JqZWN0OiBSZWFkb25seTxPYmplY3Q+LCBjdXJyZW50T2JqZWN0OiBSZWFkb25seTxPYmplY3Q+LCBkZWxldGVkUHJvcGVydGllczogT2JqZWN0KTogT2JqZWN0ID0+IHtcbiAgaWYoaXNPYmplY3QocHJlZGVjZXNzb3JPYmplY3QpKVxuICB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JLZXlzID0gT2JqZWN0LmtleXMocHJlZGVjZXNzb3JPYmplY3QpXG5cbiAgICBwcmVkZWNlc3NvcktleXMuZm9yRWFjaChwcmVkZWNlc3NvcktleSA9PiB7XG4gICAgICB2YXIgX25lc3RlZFByb3BlcnRpZXNQYXRoID0gY2xvbmVBcnJheShuZXN0ZWRQcm9wZXJ0aWVzUGF0aClcbiAgICAgIF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5wdXNoKHByZWRlY2Vzc29yS2V5KVxuICAgICAgXG4gICAgICBpZihpc1VuZGVmaW5lZChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleE9mTmVzdGVkUHJvcGVydGllc1BhdGhBcnJheSA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG4gICAgICAgIGNvbnN0IGRlbGV0ZWRQcm9wID0gYCR7cHJvcERlbGV0ZWRQcmVmaXh9JHtwcmVkZWNlc3NvcktleX1gXG4gICAgICAgIHZhciByb290XG4gICAgICAgIGlmKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgcm9vdCA9IGAke3Byb3BEZWxldGVkUHJlZml4fSR7X25lc3RlZFByb3BlcnRpZXNQYXRoWzBdfWBcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgY29uc3QgZGVsZXRlZFZhbHVlID0gcHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldXG4gICAgICAgIFxuICAgICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4T2ZOZXN0ZWRQcm9wZXJ0aWVzUGF0aEFycmF5KSwgZGVsZXRlZFByb3BlcnRpZXMpKVxuICAgICAgICB7XG4gICAgICAgICAgZGVsZXRlZFByb3BlcnRpZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBkZWxldGVkUHJvcGVydGllcywgZGVsZXRlZFByb3AsIGRlbGV0ZWRWYWx1ZSlbcm9vdF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBkZWxldGVkUHJvcGVydGllc1tyb290XSA9IGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBkZWxldGVkUHJvcCwgZGVsZXRlZFZhbHVlKVtyb290XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzTm90VW5kZWZpbmVkKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgIHtcbiAgICAgICAgZ2V0RGVsZXRlZFByb3BlcnRpZXMoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0sIGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldLCBkZWxldGVkUHJvcGVydGllcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIFxuICByZXR1cm4gZGVsZXRlZFByb3BlcnRpZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGVsZXRlZFByb3BlcnRpZXMiLCJpbXBvcnQgeyBcbiAgaXNOb3RVbmRlZmluZWQsXG4gIGlzUHJpbWl0aXZlLCBcbiAgaXNOb3RQcmltaXRpdmUsXG4gIGlzT2JqZWN0LCBcbiAgb2JqZWN0SGFzUHJvcCxcbiAgb2JqZWN0SGFzTm90UHJvcCxcbiAgY3JlYXRlTmVzdGVkT2JqZWN0UGF0aCwgXG4gIG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoLCBcbiAgcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllLFxuICBjbG9uZUFycmF5LFxuICBpc0FycmF5LFxuICBhcnJheUlzRW1wdHksXG4gIGFycmF5SXNOb3RFbXB0eVxufSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbXBhcmVzIHR3byBvYmplY3RzOiBgcHJlZGVjZXNzb3JPYmplY3RgICYgYGN1cnJlbnRPYmplY3RgLiBcbiAqIENyZWF0ZXMgb2JqZWN0LCB3aGljaCBjb250YWlucyBhbGwgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMnIHBhdGhzLCBmcm9tIHJvb3QgdG8gbGVhZiBub2RlICh3aXRoIGxlYWYgdmFsdWVzKSwgd2hpY2ggd2VyZSBjcmVhdGVkIGluIHRoZSBgY3VycmVudE9iamVjdGAuXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmVzdGVkUHJvcGVydGllc1BhdGggLSBJbml0aWFsIHZhbHVlIG11c3QgYmUgZW1wdHkgYXJyYXkuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9iamVjdD59IHByZWRlY2Vzc29yT2JqZWN0XG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9iamVjdD59IGN1cnJlbnRPYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gZGVsZXRlZFByb3BlcnRpZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGdldE1vZGlmaWVkVmFsdWVzID0gKG5lc3RlZFByb3BlcnRpZXNQYXRoOiBBcnJheTxzdHJpbmc+LCBwcmVkZWNlc3Nvck9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgY3VycmVudE9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgbW9kaWZpZWRWYWx1ZXM6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIGlmKGlzT2JqZWN0KHByZWRlY2Vzc29yT2JqZWN0KSAmJiBpc09iamVjdChjdXJyZW50T2JqZWN0KSB8fCAoaXNBcnJheShwcmVkZWNlc3Nvck9iamVjdCkgJiYgaXNBcnJheShjdXJyZW50T2JqZWN0KSkpXG4gIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvcktleXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3Nvck9iamVjdClcblxuICAgIHByZWRlY2Vzc29yS2V5cy5mb3JFYWNoKHByZWRlY2Vzc29yS2V5ID0+IHtcbiAgICAgIHZhciBfbmVzdGVkUHJvcGVydGllc1BhdGggPSBjbG9uZUFycmF5KG5lc3RlZFByb3BlcnRpZXNQYXRoKVxuICAgICAgX25lc3RlZFByb3BlcnRpZXNQYXRoLnB1c2gocHJlZGVjZXNzb3JLZXkpXG5cbiAgICAgIGlmKGlzTm90VW5kZWZpbmVkKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgIHtcbiAgICAgICAgaWYoaXNQcmltaXRpdmUocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmKHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSAhPT0gY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3AgPSBwcmVkZWNlc3NvcktleVxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIG1vZGlmaWVkVmFsdWVzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBtb2RpZmllZFZhbHVlcywgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gY3JlYXRlTmVzdGVkT2JqZWN0UGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGgsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzTm90UHJpbWl0aXZlKHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpXG4gICAgICAgIHtcbiAgICAgICAgICBpZigoaXNPYmplY3QocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBpc0FycmF5KGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkgfHwgXG4gICAgICAgICAgKGlzQXJyYXkocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBpc09iamVjdChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG4gICAgICAgICAgICBjb25zdCByb290ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoWzBdXG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wID0gX25lc3RlZFByb3BlcnRpZXNQYXRoW2xhc3RJbmRleF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gcHJlZGVjZXNzb3JPYmplY3Rbb2xkUHJvcF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIG1vZGlmaWVkVmFsdWVzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBtb2RpZmllZFZhbHVlcywgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gY3JlYXRlTmVzdGVkT2JqZWN0UGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGgsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKChpc09iamVjdChwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIG9iamVjdEhhc1Byb3AocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkgJiYgXG4gICAgICAgICAgKGlzT2JqZWN0KGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBvYmplY3RIYXNQcm9wKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgZ2V0TW9kaWZpZWRWYWx1ZXMoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0sIGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldLCBtb2RpZmllZFZhbHVlcylcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZigoaXNPYmplY3QocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBvYmplY3RIYXNOb3RQcm9wKHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpIHx8IFxuICAgICAgICAgIChpc09iamVjdChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgJiYgb2JqZWN0SGFzUHJvcChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG4gICAgICAgICAgICBjb25zdCByb290ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoWzBdXG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wID0gX25lc3RlZFByb3BlcnRpZXNQYXRoW2xhc3RJbmRleF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gcHJlZGVjZXNzb3JPYmplY3Rbb2xkUHJvcF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIG1vZGlmaWVkVmFsdWVzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBtb2RpZmllZFZhbHVlcywgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gY3JlYXRlTmVzdGVkT2JqZWN0UGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGgsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKChpc09iamVjdChwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIG9iamVjdEhhc1Byb3AocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkgfHwgXG4gICAgICAgICAgKGlzT2JqZWN0KGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBvYmplY3RIYXNOb3RQcm9wKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3AgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbbGFzdEluZGV4XVxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtvbGRQcm9wXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4KSwgbW9kaWZpZWRWYWx1ZXMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlc1tyb290XSA9IHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZShfbmVzdGVkUHJvcGVydGllc1BhdGgsIG1vZGlmaWVkVmFsdWVzLCBvbGRQcm9wLCBvbGRWYWx1ZSlbcm9vdF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoaXNBcnJheShwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIGlzQXJyYXkoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgIT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFswXVxuICAgICAgICAgICAgICBjb25zdCBvbGRQcm9wID0gX25lc3RlZFByb3BlcnRpZXNQYXRoW2xhc3RJbmRleF1cbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtvbGRQcm9wXVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIG1vZGlmaWVkVmFsdWVzKSlcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgbW9kaWZpZWRWYWx1ZXMsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gY3JlYXRlTmVzdGVkT2JqZWN0UGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGgsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBpZihwcmVkZWNlc3Nvck9iamVjdCAhPT0gY3VycmVudE9iamVjdClcbiAgICB7XG4gICAgICBjb25zdCBfbmVzdGVkUHJvcGVydGllc1BhdGggPSBjbG9uZUFycmF5KG5lc3RlZFByb3BlcnRpZXNQYXRoKVxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgIGNvbnN0IG9sZFByb3AgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbbGFzdEluZGV4XVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtvbGRQcm9wXVxuICAgICAgXG4gICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4KSwgbW9kaWZpZWRWYWx1ZXMpKVxuICAgICAge1xuICAgICAgICBtb2RpZmllZFZhbHVlc1tyb290XSA9IHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZShfbmVzdGVkUHJvcGVydGllc1BhdGgsIG1vZGlmaWVkVmFsdWVzLCBvbGRQcm9wLCBvbGRWYWx1ZSlbcm9vdF1cbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1vZGlmaWVkVmFsdWVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vZGlmaWVkVmFsdWVzIiwiaW1wb3J0IHsgTWVyZ2VkT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IGNsb25lT2JqZWN0LCBjbG9uZUFycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgcmVtb3ZlQ3JlYXRlZFByb3BlcnRpZXMgZnJvbSAnLi9yZW1vdmUtY3JlYXRlZC1wcm9wZXJ0aWVzJ1xuaW1wb3J0IHJlc3RvcmVEZWxldGVkUHJvcGVydGllcyBmcm9tICcuL3Jlc3RvcmUtZGVsZXRlZC1wcm9wZXJ0aWVzJ1xuaW1wb3J0IHJlc3RvcmVNb2RpZmllZFZhbHVlcyBmcm9tICcuL3Jlc3RvcmUtbW9kaWZpZWQtdmFsdWVzJ1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8SGlzdG9yeU9iamVjdD59IGhpc3RvcnlPYmplY3RzXG4gKiBAcGFyYW0ge09iamVjdH0gY3VycmVudE9iamVjdFxuICogQHBhcmFtIHtWRVJTSU9OX05VTUJFUn0gdmVyc2lvbk51bWJlclxuICogQHJldHVybiB7TWVyZ2VkT2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgcmVzdG9yZUhpc3RvcnlPYmplY3QgPSAoaGlzdG9yeU9iamVjdHM6IGFueSwgY3VycmVudE9iamVjdDogT2JqZWN0LCAgb3B0aW9ucz86IE9wdGlvbnMpOiBNZXJnZWRPYmplY3QgPT4ge1xuICBpZihoaXN0b3J5T2JqZWN0cy5sZW5ndGgpIHtcbiAgICB2YXIgbWVyZ2VkT2JqZWN0OiBNZXJnZWRPYmplY3QgPSB7fVxuICAgIGNvbnN0IF9oaXN0b3J5T2JqZWN0cyA9IGNsb25lQXJyYXkoaGlzdG9yeU9iamVjdHMpXG4gICAgXG4gICAgaWYob3B0aW9ucy5jb25zaWRlclZlcnNpb25OdW1iZXJzKSB7XG4gICAgICBoaXN0b3J5T2JqZWN0cy5zb3J0KChhLCBiKSA9PiBhLlZFUlNJT05fTlVNQkVSIC0gYi5WRVJTSU9OX05VTUJFUilcbiAgICAgIGhpc3RvcnlPYmplY3RzLnJldmVyc2UoKVxuICAgIH1cbiAgICBlbHNlXG4gICAgICBoaXN0b3J5T2JqZWN0cy5yZXZlcnNlKCkgXG4gICAgICBcbiAgICBjb25zdCBoaXN0b3J5T2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGhpc3RvcnlPYmplY3RzKVxuICAgIFxuICAgIGhpc3RvcnlPYmplY3RLZXlzLmZvckVhY2goKGhpc3RvcnlPYmplY3RLZXksIGkpID0+IHtcbiAgICAgIGN1cnJlbnRPYmplY3QgPSBjbG9uZU9iamVjdChjdXJyZW50T2JqZWN0KVxuICAgICAgY29uc3QgeyBDUkVBVEVEX1BST1BFUlRJRVMsIERFTEVURURfUFJPUEVSVElFUywgTU9ESUZJRURfVkFMVUVTIH0gPSBoaXN0b3J5T2JqZWN0c1toaXN0b3J5T2JqZWN0S2V5XVxuICAgICAgXG4gICAgICBpZihpID09PSAwKVxuICAgICAgICBtZXJnZWRPYmplY3QgPSByZW1vdmVDcmVhdGVkUHJvcGVydGllcyhDUkVBVEVEX1BST1BFUlRJRVMsIGN1cnJlbnRPYmplY3QpXG4gICAgICBlbHNlXG4gICAgICAgIG1lcmdlZE9iamVjdCA9IHJlbW92ZUNyZWF0ZWRQcm9wZXJ0aWVzKENSRUFURURfUFJPUEVSVElFUywgbWVyZ2VkT2JqZWN0KVxuICAgICAgbWVyZ2VkT2JqZWN0ID0gcmVzdG9yZURlbGV0ZWRQcm9wZXJ0aWVzKERFTEVURURfUFJPUEVSVElFUywgbWVyZ2VkT2JqZWN0KVxuICAgICAgbWVyZ2VkT2JqZWN0ID0gcmVzdG9yZU1vZGlmaWVkVmFsdWVzKE1PRElGSUVEX1ZBTFVFUywgbWVyZ2VkT2JqZWN0KVxuICAgICAgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRPYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzdG9yZUhpc3RvcnlPYmplY3QiLCJpbXBvcnQgeyBDUkVBVEVEX1BST1BFUlRJRVMgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHBhdGhFeGlzdGVkUHJlZml4IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHJlbW92ZUNyZWF0ZWRQcm9wZXJ0aWVzID0gKENSRUFURURfUFJPUEVSVElFUzogQ1JFQVRFRF9QUk9QRVJUSUVTLCBjdXJyZW50T2JqZWN0OiBPYmplY3QpOiBPYmplY3QgPT4ge1xuICBjb25zdCBjcmVhdGVkUHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhDUkVBVEVEX1BST1BFUlRJRVMpXG5cbiAgY3JlYXRlZFByb3BlcnRpZXNLZXlzLmZvckVhY2goY3JlYXRlZFByb3BlcnRpZXNLZXkgPT4ge1xuICAgIGlmKGNyZWF0ZWRQcm9wZXJ0aWVzS2V5LmluZGV4T2YocGF0aEV4aXN0ZWRQcmVmaXgpID09PSAwKVxuICAgIHtcbiAgICAgIGNvbnN0IGtleVdpdGhvdXRQcmVmaXggPSBjcmVhdGVkUHJvcGVydGllc0tleS5zbGljZShwYXRoRXhpc3RlZFByZWZpeC5sZW5ndGgpXG4gICAgICByZW1vdmVDcmVhdGVkUHJvcGVydGllcyhDUkVBVEVEX1BST1BFUlRJRVNbY3JlYXRlZFByb3BlcnRpZXNLZXldLCBjdXJyZW50T2JqZWN0W2tleVdpdGhvdXRQcmVmaXhdKVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgZGVsZXRlIGN1cnJlbnRPYmplY3RbY3JlYXRlZFByb3BlcnRpZXNLZXldXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBjdXJyZW50T2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUNyZWF0ZWRQcm9wZXJ0aWVzIiwiaW1wb3J0IHsgREVMRVRFRF9QUk9QRVJUSUVTIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBwcm9wRGVsZXRlZFByZWZpeCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCByZXN0b3JlRGVsZXRlZFByb3BlcnRpZXMgPSAoREVMRVRFRF9QUk9QRVJUSUVTOiBERUxFVEVEX1BST1BFUlRJRVMsIGN1cnJlbnRPYmplY3Q6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIGNvbnN0IGRlbGV0ZWRQcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKERFTEVURURfUFJPUEVSVElFUylcbiAgXG4gIGRlbGV0ZWRQcm9wZXJ0aWVzS2V5cy5mb3JFYWNoKGRlbGV0ZWRQcm9wZXJ0aWVzS2V5ID0+IHtcbiAgICBpZihkZWxldGVkUHJvcGVydGllc0tleS5pbmRleE9mKHByb3BEZWxldGVkUHJlZml4KSA9PT0gMClcbiAgICB7XG4gICAgICBjb25zdCBrZXlXaXRob3V0UHJlZml4ID0gZGVsZXRlZFByb3BlcnRpZXNLZXkuc2xpY2UocHJvcERlbGV0ZWRQcmVmaXgubGVuZ3RoKVxuICAgICAgY3VycmVudE9iamVjdFtrZXlXaXRob3V0UHJlZml4XSA9IERFTEVURURfUFJPUEVSVElFU1tkZWxldGVkUHJvcGVydGllc0tleV1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vIGN1cnJlbnRPYmplY3RbZGVsZXRlZFByb3BlcnRpZXNLZXldID0ge31cbiAgICAgIHJlc3RvcmVEZWxldGVkUHJvcGVydGllcyhERUxFVEVEX1BST1BFUlRJRVNbZGVsZXRlZFByb3BlcnRpZXNLZXldLCBjdXJyZW50T2JqZWN0W2RlbGV0ZWRQcm9wZXJ0aWVzS2V5XSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGN1cnJlbnRPYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzdG9yZURlbGV0ZWRQcm9wZXJ0aWVzIiwiaW1wb3J0IHsgTU9ESUZJRURfVkFMVUVTIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc09iamVjdCwgaXNQcmltaXRpdmUsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcblxuY29uc3QgcmVzdG9yZU1vZGlmaWVkVmFsdWVzID0gKE1PRElGSUVEX1ZBTFVFUzogTU9ESUZJRURfVkFMVUVTLCBjdXJyZW50T2JqZWN0OiBPYmplY3QpOiBPYmplY3QgPT4ge1xuICBjb25zdCBtb2RpZmllZFZhbHVlc0tleXMgPSBPYmplY3Qua2V5cyhNT0RJRklFRF9WQUxVRVMpXG4gIFxuICBtb2RpZmllZFZhbHVlc0tleXMuZm9yRWFjaChtb2RpZmllZFZhbHVlc0tleSA9PiB7XG4gICAgaWYoaXNQcmltaXRpdmUoTU9ESUZJRURfVkFMVUVTW21vZGlmaWVkVmFsdWVzS2V5XSkgfHwgaXNBcnJheShNT0RJRklFRF9WQUxVRVNbbW9kaWZpZWRWYWx1ZXNLZXldKSlcbiAgICB7XG4gICAgICBjdXJyZW50T2JqZWN0W21vZGlmaWVkVmFsdWVzS2V5XSA9IE1PRElGSUVEX1ZBTFVFU1ttb2RpZmllZFZhbHVlc0tleV1cbiAgICB9XG4gICAgaWYoaXNPYmplY3QoTU9ESUZJRURfVkFMVUVTW21vZGlmaWVkVmFsdWVzS2V5XSkpXG4gICAge1xuICAgICAgcmVzdG9yZU1vZGlmaWVkVmFsdWVzKE1PRElGSUVEX1ZBTFVFU1ttb2RpZmllZFZhbHVlc0tleV0sIGN1cnJlbnRPYmplY3RbbW9kaWZpZWRWYWx1ZXNLZXldKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gY3VycmVudE9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXN0b3JlTW9kaWZpZWRWYWx1ZXMiXSwic291cmNlUm9vdCI6IiJ9