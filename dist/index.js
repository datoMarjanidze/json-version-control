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
                    else if ((Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(predecessorObject[predecessorKey]) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(predecessorObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(currentObject[predecessorKey])) ||
                        (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(currentObject[predecessorKey]) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(currentObject[predecessorKey]) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(predecessorObject[predecessorKey]))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGUtaGlzdG9yeS1vYmplY3QvY3JlYXRlLWhpc3Rvcnktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGUtaGlzdG9yeS1vYmplY3QvZ2V0LWNyZWF0ZWQtcHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZS1oaXN0b3J5LW9iamVjdC9nZXQtZGVsZXRlZC1wcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGUtaGlzdG9yeS1vYmplY3QvZ2V0LW1vZGlmaWVkLXZhbHVlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzdG9yZS1oaXN0b3J5LW9iamVjdC9yZXN0b3JlLWhpc3Rvcnktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXN0b3JlLWhpc3Rvcnktb2JqZWN0L3JlbW92ZS1jcmVhdGVkLXByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3RvcmUtaGlzdG9yeS1vYmplY3QvcmVzdG9yZS1kZWxldGVkLXByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3RvcmUtaGlzdG9yeS1vYmplY3QvcmVzdG9yZS1tb2RpZmllZC12YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFXLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxzREFBTyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQ2pHO1lBQ0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDO1NBQ3RFO1FBQ0QsSUFBRyx1REFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQy9DO1lBQ0UscUJBQXFCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDNUY7SUFDSCxDQUFDLENBQUM7SUFFRixPQUFPLGFBQWE7QUFDdEIsQ0FBQztBQUVjLG9GQUFxQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQGFwaSBwdWJsaWMgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9pbmRleCcpIiwiaW1wb3J0IGNyZWF0ZUhpc3RvcnlPYmplY3QgZnJvbSAnLi9jcmVhdGUtaGlzdG9yeS1vYmplY3QvY3JlYXRlLWhpc3Rvcnktb2JqZWN0J1xuaW1wb3J0IHJlc3RvcmVIaXN0b3J5T2JqZWN0IGZyb20gJy4vcmVzdG9yZS1oaXN0b3J5LW9iamVjdC9yZXN0b3JlLWhpc3Rvcnktb2JqZWN0J1xuXG5leHBvcnQgeyBjcmVhdGVIaXN0b3J5T2JqZWN0LCByZXN0b3JlSGlzdG9yeU9iamVjdCB9IiwiaW1wb3J0IHsgSGlzdG9yeU9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgZ2V0Q3JlYXRlZFByb3BlcnRpZXMgZnJvbSAnLi9nZXQtY3JlYXRlZC1wcm9wZXJ0aWVzJ1xuaW1wb3J0IGdldERlbGV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vZ2V0LWRlbGV0ZWQtcHJvcGVydGllcydcbmltcG9ydCBnZXRNb2RpZmllZFZhbHVlcyBmcm9tICcuL2dldC1tb2RpZmllZC12YWx1ZXMnXG5pbXBvcnQgeyBWRVJTSU9OX05VTUJFUiB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKipcbiAqIENyZWF0ZXMgaGlzdG9yeSBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7VkVSU0lPTl9OVU1CRVJ9IHZlcnNpb25OdW1iZXJcbiAqIEBwYXJhbSB7UmVhZG9ubHk8T2JqZWN0Pn0gcHJlZGVjZXNzb3JPYmplY3RcbiAqIEBwYXJhbSB7UmVhZG9ubHk8T2JqZWN0Pn0gY3VycmVudE9iamVjdFxuICogQHJldHVybiB7UmVhZG9ubHk8SGlzdG9yeU9iamVjdD59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBjcmVhdGVIaXN0b3J5T2JqZWN0ID0gKHZlcnNpb25OdW1iZXI6IFJlYWRvbmx5PFZFUlNJT05fTlVNQkVSPiwgcHJlZGVjZXNzb3JPYmplY3Q6IFJlYWRvbmx5PE9iamVjdD4sIGN1cnJlbnRPYmplY3Q6IFJlYWRvbmx5PE9iamVjdD4pOiBSZWFkb25seTxIaXN0b3J5T2JqZWN0PiA9PiB7XG4gIGNvbnN0IGhpc3RvcnlPYmplY3Q6IEhpc3RvcnlPYmplY3QgPSB7XG4gICAgVkVSU0lPTl9OVU1CRVI6IG51bGwsXG4gICAgQ1JFQVRFRF9QUk9QRVJUSUVTOiB7fSxcbiAgICBERUxFVEVEX1BST1BFUlRJRVM6IHt9LFxuICAgIE1PRElGSUVEX1ZBTFVFUzoge30sXG4gIH1cblxuICBPYmplY3QuZnJlZXplKHByZWRlY2Vzc29yT2JqZWN0KVxuICBPYmplY3QuZnJlZXplKGN1cnJlbnRPYmplY3QpXG5cbiAgaGlzdG9yeU9iamVjdC5WRVJTSU9OX05VTUJFUiA9IHZlcnNpb25OdW1iZXJcbiAgaGlzdG9yeU9iamVjdC5DUkVBVEVEX1BST1BFUlRJRVMgPSBnZXRDcmVhdGVkUHJvcGVydGllcyhbXSwgcHJlZGVjZXNzb3JPYmplY3QsIGN1cnJlbnRPYmplY3QsIHt9KVxuICBoaXN0b3J5T2JqZWN0LkRFTEVURURfUFJPUEVSVElFUyA9IGdldERlbGV0ZWRQcm9wZXJ0aWVzKFtdLCBwcmVkZWNlc3Nvck9iamVjdCwgY3VycmVudE9iamVjdCwge30pXG4gIGhpc3RvcnlPYmplY3QuTU9ESUZJRURfVkFMVUVTID0gZ2V0TW9kaWZpZWRWYWx1ZXMoW10sIHByZWRlY2Vzc29yT2JqZWN0LCBjdXJyZW50T2JqZWN0LCB7fSlcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShoaXN0b3J5T2JqZWN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIaXN0b3J5T2JqZWN0ICIsImltcG9ydCB7IFxuICBpc05vdFVuZGVmaW5lZCxcbiAgaXNVbmRlZmluZWQsXG4gIGlzT2JqZWN0LCBcbiAgY2xvbmVBcnJheSxcbiAgY3JlYXRlTmVzdGVkT2JqZWN0UGF0aCwgXG4gIG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoLCBcbiAgcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllLFxuICBhZGRQYXRoRXhpc3RlZFByZWZpeFRvTmVzdGVkUHJvcFBhdGgsXG59IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29tcGFyZXMgdHdvIG9iamVjdHM6IGBwcmVkZWNlc3Nvck9iamVjdGAgJiBgY3VycmVudE9iamVjdGAuIFxuICogQ3JlYXRlcyBvYmplY3QsIHdoaWNoIGNvbnRhaW5zIGFsbCB0aGUgb2JqZWN0J3MgcHJvcGVydGllcycgcGF0aHMsIGZyb20gcm9vdCB0byBsZWFmIG5vZGUgKHdpdGggbGVhZiB2YWx1ZXMpLCB3aGljaCB3ZXJlIGNyZWF0ZWQgaW4gdGhlIGBjdXJyZW50T2JqZWN0YC5cbiAqIFxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuZXN0ZWRQcm9wZXJ0aWVzUGF0aCAtIEluaXRpYWwgdmFsdWUgbXVzdCBiZSBhbiBlbXB0eSBhcnJheS5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8T2JqZWN0Pn0gcHJlZGVjZXNzb3JPYmplY3RcbiAqIEBwYXJhbSB7UmVhZG9ubHk8T2JqZWN0Pn0gY3VycmVudE9iamVjdFxuICogQHJldHVybiB7UmVhZG9ubHk8T2JqZWN0Pn0gY3JlYXRlZFByb3BlcnRpZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGdldENyZWF0ZWRQcm9wZXJ0aWVzID0gKG5lc3RlZFByb3BlcnRpZXNQYXRoOiBBcnJheTxzdHJpbmc+LCBwcmVkZWNlc3Nvck9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgY3VycmVudE9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgY3JlYXRlZFByb3BlcnRpZXM6IE9iamVjdCk6IFJlYWRvbmx5PE9iamVjdD4gPT4ge1xuICBpZihpc09iamVjdChjdXJyZW50T2JqZWN0KSlcbiAge1xuICAgIGNvbnN0IGN1cnJlbnRLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdClcbiAgICBjdXJyZW50S2V5cy5mb3JFYWNoKGN1cnJlbnRLZXkgPT4ge1xuICAgICAgdmFyIF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCA9IGNsb25lQXJyYXkobmVzdGVkUHJvcGVydGllc1BhdGgpXG4gICAgICBfbmVzdGVkUHJvcGVydGllc1BhdGgucHVzaChjdXJyZW50S2V5KVxuICAgICAgXG4gICAgICBpZihpc1VuZGVmaW5lZChwcmVkZWNlc3Nvck9iamVjdFtjdXJyZW50S2V5XSkpXG4gICAgICB7XG4gICAgICAgIF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5tYXAoYWRkUGF0aEV4aXN0ZWRQcmVmaXhUb05lc3RlZFByb3BQYXRoKVxuXG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG4gICAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgdmFyIG5ld1Byb3AgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbbGFzdEluZGV4XVxuICAgICAgICBjb25zdCBuZXdQcm9wVmFsdWUgPSBjdXJyZW50T2JqZWN0W2N1cnJlbnRLZXldXG4gICAgICBcbiAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIGNyZWF0ZWRQcm9wZXJ0aWVzKSkgXG4gICAgICAgIHtcbiAgICAgICAgICBjcmVhdGVkUHJvcGVydGllc1tyb290XSA9IHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZShfbmVzdGVkUHJvcGVydGllc1BhdGgsIGNyZWF0ZWRQcm9wZXJ0aWVzLCBuZXdQcm9wLCBuZXdQcm9wVmFsdWUpW3Jvb3RdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgY3JlYXRlZFByb3BlcnRpZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgbmV3UHJvcCwgbmV3UHJvcFZhbHVlKVtyb290XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzTm90VW5kZWZpbmVkKHByZWRlY2Vzc29yT2JqZWN0W2N1cnJlbnRLZXldKSlcbiAgICAgIHtcbiAgICAgICAgZ2V0Q3JlYXRlZFByb3BlcnRpZXMoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBwcmVkZWNlc3Nvck9iamVjdFtjdXJyZW50S2V5XSwgY3VycmVudE9iamVjdFtjdXJyZW50S2V5XSwgY3JlYXRlZFByb3BlcnRpZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkUHJvcGVydGllc1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDcmVhdGVkUHJvcGVydGllcyIsIi8qKlxuICogQ3JlYXRzIG5lc3RlZCBvYmplY3QgZnJvbSBhcnJheSBvZiBzdHJpbmdzIGFuZCBpZiB0ZXJtaW5hbFZhbHVlIChgdGVybWluYWwgcHJvcGVydGllYDogaW4gdGhpcyBjb250ZXh0LCBsYXN0IHZhbHVlIGluIGFycmF5LiBcbiAqIGB0ZXJtaW5hbCBub2RlYDogbGFzdCBjaGlsZCBpbiB0aGUgdHJlZSkgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGxhc3QgcHJvcGVydGllLCBpZiBub3QgbGFzdCBwcm9wZXJ0aWUgdmFsdWVcbiAqIHdpbGwgYmUgbnVsbC5cbiAqIFxuICogRXhhbXBsZSBJOiBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKFthLCBiLCBjXSkgcmVzdWx0cyBpbiB7IGE6IHsgYjogeyBjOiBudWxsIH0gfSB9XG4gKiBFeGFtcGxlIElJOiBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKFthLCBiLCBjXSwgdGVybWluYWxWYWx1ZSkgcmVzdWx0cyBpbiB7IGE6IHsgYjogeyBjOiB0ZXJtaW5hbFZhbHVlIH0gfSB9XG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmVzdGVkUHJvcGVydGllc1BhdGggLSBzdHJpbmdzIHdoaWNoIG11c3QgYmUgbmVzdGVkIGluIGFuIG9iamVjdCwgaW4gc2VxdWVudGlhbCBvcmRlci5cbiAqIEBwYXJhbSB7YW55fSB0ZXJtaW5hbFZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybWluYWxQcm9wXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5lc3RlZE9iamVjdFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgY3JlYXRlTmVzdGVkT2JqZWN0UGF0aCA9IChuZXN0ZWRQcm9wZXJ0aWVzUGF0aDogQXJyYXk8c3RyaW5nPiwgdGVybWluYWxQcm9wOiBzdHJpbmcsIHRlcm1pbmFsVmFsdWU/OiBhbnkpOiBPYmplY3QgPT4ge1xuICBjb25zdCBfbmVzdGVkUHJvcGVydGllc1BhdGggPSBjbG9uZUFycmF5KG5lc3RlZFByb3BlcnRpZXNQYXRoKVxuICBjb25zdCBfdGVybWluYWxWYWx1ZSA9IGNsb25lT2JqZWN0KHRlcm1pbmFsVmFsdWUpXG4gIGNvbnN0IG5lc3RlZE9iamVjdCA9IHt9XG4gIGNvbnN0IGxhc3RJbmRleCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG4gIFxuICBfbmVzdGVkUHJvcGVydGllc1BhdGgucmVkdWNlKChvYmosIHByb3AsIGkpID0+IHtcbiAgICBpZihpICE9PSBsYXN0SW5kZXgpIG9ialtwcm9wXSA9IHt9XG4gICAgZWxzZSBpZihpID09PSBsYXN0SW5kZXggJiYgaXNVbmRlZmluZWQodGVybWluYWxWYWx1ZSkpIG9ialtwcm9wXSA9IG51bGxcbiAgICBlbHNlIGlmKGkgPT09IGxhc3RJbmRleCAmJiBpc05vdFVuZGVmaW5lZCh0ZXJtaW5hbFZhbHVlKSkge1xuICAgICAgb2JqW3Rlcm1pbmFsUHJvcF0gPSBfdGVybWluYWxWYWx1ZVxuICAgICAgcmV0dXJuIG9ialt0ZXJtaW5hbFByb3BdXG4gICAgfVxuXG4gICAgcmV0dXJuIG9ialtwcm9wXVxuICB9LCBuZXN0ZWRPYmplY3QpXG4gIHJldHVybiBuZXN0ZWRPYmplY3Rcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgaW4gYG5lc3RlZE9iamVjdGAgcGFzc2VkIGFzIHNlY29uZCBhcmd1bWVudCBleGlzdHMsIHByb3BlcnRpZXMgZnJvbSBgbmVzdGVkUHJvcGVydGllc1BhdGhgIHdoaWNoIFxuICogYXJlIHRha2VuIGluIHNlcXVlbnRpYWwgb3JkZXIuXG4gKiBcbiAqIEV4YW1wbGUgSTogb2JqZWN0SGFzUHJvcGVydGllc1BhdGgoWydhJywgJ2InLCAnYyddLCB7IGE6IHsgYjogeyBjOiBzb21ldGhpbmcgfSB9IH0pLiBPYmplY3QgLSBuZXN0ZWRPYmplY3QgaGFzXG4gKiBwcm9wZXJ0aWVzIHByb3ZpZGVkIGZyb20gYG5lc3RlZFByb3BlcnRpZXNQYXRoYC5cbiAqIEV4YW1wbGUgSUk6IG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoKFsnYScsICd4JywgJ2MnXSwgeyBhOiB7IGI6IHsgYzogc29tZXRoaW5nIH0gfSB9KS4gT2JqZWN0IC0gbmVzdGVkT2JqZWN0IGRvZXNuJ3RcbiAqIGhhdmUgcHJvcGVydGllcyBwcm92aWRlZCBmcm9tIGBuZXN0ZWRQcm9wZXJ0aWVzUGF0aGAuIGBuZXN0ZWRQcm9wZXJ0aWVzUGF0aGAgbXVzdCBleGFjdGx5IG1hdGNoIHRoZSBcbiAqIHNlcXVlbmNlIG9mIGBuZXN0ZWRPYmplY3RgLlxuICogXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG5lc3RlZFByb3BlcnRpZXNQYXRoIC0gc3RyaW5ncyB3aGljaCBtdXN0IGJlIG5lc3RlZCBpbiBhbiBvYmplY3QsIGluIHNlcXVlbnRpYWwgb3JkZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gbmVzdGVkT2JqZWN0IGNhbiBiZSBhbnl0aGluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVuZXN0ZWRQcm9wZXJ0aWVzUGF0aEFycmF5XG4gKi9cblxuY29uc3Qgb2JqZWN0SGFzUHJvcGVydGllc1BhdGggPSAobmVzdGVkUHJvcGVydGllc1BhdGg6IEFycmF5PHN0cmluZz4sIG5lc3RlZE9iamVjdDogT2JqZWN0KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IF9uZXN0ZWRPYmplY3QgPSBjbG9uZU9iamVjdChuZXN0ZWRPYmplY3QpXG4gIHZhciBoYXMgPSB0cnVlXG4gIFxuICBpZihuZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGgpXG4gICAgbmVzdGVkUHJvcGVydGllc1BhdGgucmVkdWNlKChvYmosIHByb3ApID0+IHtcbiAgICAgIG9ialtwcm9wXSA9PT0gdW5kZWZpbmVkID8gaGFzID0gZmFsc2UgOiBudWxsXG5cbiAgICAgIGlmKG9ialtwcm9wXSlcbiAgICAgICAgcmV0dXJuIG9ialtwcm9wXVxuICAgICAgZWxzZSBcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfSwgX25lc3RlZE9iamVjdClcbiAgZWxzZVxuICAgIGhhcyA9IGZhbHNlXG5cbiAgcmV0dXJuIGhhc1xufVxuXG4vKipcbiAqIEJlZm9yZSB0aGlzIHByb2NlZHVyZSwgaXQgbXVzdCBiZSBjaGVja2VkIGlmIHRoZSBwYXRoIGZyb20gYSB0byBjIGV4aXN0cyAoaW5jbHVkaW5nIGMpLiBJZiBpdCBkb2VzLCB0aGVuIHlvdSBjYW4gcHVzaCBzb21ldGhpbmcgbmV4dCB0byBjLlxuICogSWYgbm90LCB5b3UgbXVzdCBjcmVhdGUgbmV3IG9uZSB3aXRoIGBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoYC5cbiAqIEV4YW1wbGUgSTogcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllKFthLCBiLCBjXSwgeyBhOiB7IGI6IHsgYzogbnVsbCB9IH0gfSwgJ2ZvbycsICdiYXInKSByZXN1bHRzIGluIHsgYTogeyBiOiB7IGM6IG51bGwsIGZvbzogJ2JhcicgfSB9IH1cbiAqIFxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuZXN0ZWRQcm9wZXJ0aWVzUGF0aCAtIHN0cmluZ3Mgd2hpY2ggbXVzdCBiZSBuZXN0ZWQgaW4gb2JqZWN0LCBpbiBzZXF1ZW50aWFsIG9yZGVyLlxuICogQHBhcmFtIHtPYmplY3R9IG5lc3RlZE9iamVjdCAtIGFueSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3UHJvcFxuICogQHBhcmFtIHthbnl9IG5ld1ZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUgPSAobmVzdGVkUHJvcGVydGllc1BhdGg6IEFycmF5PHN0cmluZz4sIG5lc3RlZE9iamVjdDogT2JqZWN0LCBuZXdQcm9wOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpOiBPYmplY3QgPT4ge1xuICBjb25zdCBfbmVzdGVkT2JqZWN0ID0gY2xvbmVPYmplY3QobmVzdGVkT2JqZWN0KVxuICBjb25zdCBfbmV3VmFsdWUgPSBjbG9uZU9iamVjdChuZXdWYWx1ZSlcbiAgY29uc3QgbGFzdEluZGV4ID0gbmVzdGVkUHJvcGVydGllc1BhdGgubGVuZ3RoIC0gMVxuXG4gIG5lc3RlZFByb3BlcnRpZXNQYXRoLnJlZHVjZSgob2JqLCBwcm9wLCBpKSA9PiB7XG4gICAgaWYoaSA9PT0gbGFzdEluZGV4KSBvYmpbbmV3UHJvcF0gPSBfbmV3VmFsdWVcblxuICAgIHJldHVybiBvYmpbcHJvcF1cbiAgfSwgX25lc3RlZE9iamVjdClcbiAgXG4gIHJldHVybiBfbmVzdGVkT2JqZWN0XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgaWRlbnRpZmllciBpcyBub3QgdW5kZWZpbmVkLlxuICogXG4gKiBAcGFyYW0ge2FueX0gaWRlbnRpZmllclxuICogQHJldHVybiB7Ym9vbGVhbn0gXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBpc05vdFVuZGVmaW5lZCA9IChpZGVudGlmaWVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgIT09IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlkZW50aWZpZXIgaXMgdW5kZWZpbmVkLlxuICogXG4gKiBAcGFyYW0ge2FueX0gaWRlbnRpZmllclxuICogQHJldHVybiB7Ym9vbGVhbn0gXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBpc1VuZGVmaW5lZCA9IChpZGVudGlmaWVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgPT09IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlkZW50aWZpZXIgaXMgb2JqZWN0LlxuICogXG4gKiBAcGFyYW0ge2FueX0gaWRlbnRpZmllclxuICogQHJldHVybiB7Ym9vbGVhbn0gXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBpc09iamVjdCA9IChpZGVudGlmaWVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgaW5zdGFuY2VvZiBPYmplY3QgJiYgIShpZGVudGlmaWVyIGluc3RhbmNlb2YgQXJyYXkpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgaWRlbnRpZmllciBpcyBwcmltaXRpdmUuXG4gKiBcbiAqIEBwYXJhbSB7YW55fSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGlzUHJpbWl0aXZlID0gKGlkZW50aWZpZXI6IGFueSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gIShpZGVudGlmaWVyIGluc3RhbmNlb2YgT2JqZWN0KSAmJiAhKGlkZW50aWZpZXIgaW5zdGFuY2VvZiBBcnJheSlcbn1cblxuY29uc3QgaXNOb3RQcmltaXRpdmUgPSAoaWRlbnRpZmllcjogYW55KTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBpZGVudGlmaWVyIGluc3RhbmNlb2YgT2JqZWN0IHx8IGlkZW50aWZpZXIgaW5zdGFuY2VvZiBBcnJheVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlkZW50aWZpZXIgaXMgYXJyYXkuXG4gKiBcbiAqIEBwYXJhbSB7YW55fSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGlzQXJyYXkgPSAoaWRlbnRpZmllcjogYW55KTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBpZGVudGlmaWVyIGluc3RhbmNlb2YgQXJyYXlcbn1cblxuLyoqXG4gKiBDbG9uZSB0aGUgYXJyYXkuXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBjbG9uZUFycmF5ID0gKGFycmF5OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSlcbn1cblxuLyoqXG4gKiBDbG9uZSB0aGUgb2JqZWN0LlxuICogXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBjbG9uZU9iamVjdCA9IChvYmplY3Q6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpXG59XG5cbi8qKlxuICogUHJpbnRzIGVycm9yIG1lc3NhZ2UgaW4gY29uc29sZSBhbmQgdGhyb3dzIG5ldyBlcnJvci5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG1zZ1xuICogQHJldHVybiB7dm9pZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGhhbmRsZUVycm9yID0gKG1zZzogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoJ1xceDFiWzMybSVzJywgJ0pTT04gVlM6JywgJ1xceDFiWzMxbScsIG1zZywgJ1xceDFiWzBtJylcbiAgdGhyb3cgbmV3IEVycm9yKClcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eS5cbiAqIFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IG9iamVjdEhhc1Byb3AgPSAob2JqZWN0OiBPYmplY3QpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb2JqZWN0S2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KVswXVxuICByZXR1cm4gb2JqZWN0S2V5ICE9PSB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgb2JqZWN0IGhhcyBub3QgZ290IGEgcHJvcGVydHkuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBvYmplY3RIYXNOb3RQcm9wID0gKG9iamVjdDogT2JqZWN0KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG9iamVjdEtleSA9IE9iamVjdC5rZXlzKG9iamVjdClbMF1cbiAgcmV0dXJuIG9iamVjdEtleSA9PT0gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIG9iamVjdCBkb2VzIG5vdCBoYXZlIHByb3BlcnR5LlxuICogXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3Qgb2JqZWN0RG9lc05vdEhhdmVQcm9wID0gKG9iamVjdDogT2JqZWN0KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG9iamVjdEtleSA9IE9iamVjdC5rZXlzKG9iamVjdClbMF1cbiAgcmV0dXJuIG9iamVjdEtleSA9PT0gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIG9iamVjdCBoYXMgY2hpbGQgb2JqZWN0LlxuICogXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgaGFzQ2hpbGRPYmplY3QgPSAob2JqZWN0OiBPYmplY3QpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb2JqZWN0S2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KVswXVxuICByZXR1cm4gb2JqZWN0W29iamVjdEtleV0gaW5zdGFuY2VvZiBPYmplY3Rcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgb2JqZWN0IGhhcyBub3QgZ290IGEgY2hpbGQgb2JqZWN0LlxuICogXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuY29uc3QgaGFzTm90Q2hpbGRPYmplY3QgPSAob2JqZWN0OiBPYmplY3QpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb2JqZWN0S2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KVswXVxuICByZXR1cm4gIShvYmplY3Rbb2JqZWN0S2V5XSBpbnN0YW5jZW9mIE9iamVjdClcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYXJyYXkgaXMgZW1wdHlcbiAqIFxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBhcnJheUlzRW1wdHkgPSAoYXJyYXk6IEFycmF5PGFueT4pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGFycmF5Lmxlbmd0aCA9PT0gMFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhcnJheSBpcyBub3QgZW1wdHlcbiAqIFxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCBhcnJheUlzTm90RW1wdHkgPSAoYXJyYXk6IEFycmF5PGFueT4pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGFycmF5Lmxlbmd0aCAhPT0gMFxufVxuXG4vKipcbiAqIElkZW50aWZpZXMgdGhhdCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0ZWQgYmVmb3JlIHRoZSBjcmVhdGlvbiBvZiB0aGUgc3ViZmllbGQocykgb3IgYWRqYWNlbnQgZmllbGQocykuXG4gKi9cblxuY29uc3QgcGF0aEV4aXN0ZWRQcmVmaXggPSAnJSQvJDdFWElTVEVEIyFaWnYtJ1xuY29uc3QgcHJvcERlbGV0ZWRQcmVmaXggPSAnJSQvJDdERUxFVEVEIyFaWnYtJ1xuXG5jb25zdCBhZGRQYXRoRXhpc3RlZFByZWZpeFRvTmVzdGVkUHJvcFBhdGggPSAocHJvcCwgaSwgYXJyKSA9PiB7XG4gIGlmKGkgIT09IGFyci5sZW5ndGggLSAxKVxuICAgIHJldHVybiBgJHtwYXRoRXhpc3RlZFByZWZpeH0ke3Byb3B9YFxuICBlbHNlXG4gICAgcmV0dXJuIHByb3Bcbn1cblxuZXhwb3J0IHsgXG4gIGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgsXG4gIG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoLFxuICBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUsXG4gIGlzTm90VW5kZWZpbmVkLFxuICBpc1VuZGVmaW5lZCxcbiAgaXNPYmplY3QsXG4gIGlzUHJpbWl0aXZlLFxuICBjbG9uZUFycmF5LFxuICBjbG9uZU9iamVjdCxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhc0NoaWxkT2JqZWN0LFxuICBvYmplY3RIYXNQcm9wLFxuICBvYmplY3RIYXNOb3RQcm9wLFxuICBvYmplY3REb2VzTm90SGF2ZVByb3AsXG4gIGhhc05vdENoaWxkT2JqZWN0LFxuICBhcnJheUlzRW1wdHksXG4gIGFycmF5SXNOb3RFbXB0eSxcbiAgcGF0aEV4aXN0ZWRQcmVmaXgsXG4gIGFkZFBhdGhFeGlzdGVkUHJlZml4VG9OZXN0ZWRQcm9wUGF0aCxcbiAgcHJvcERlbGV0ZWRQcmVmaXgsXG4gIGlzQXJyYXksXG4gIGlzTm90UHJpbWl0aXZlXG59IiwiaW1wb3J0IHsgXG4gIGlzTm90VW5kZWZpbmVkLFxuICBpc1VuZGVmaW5lZCwgXG4gIGlzT2JqZWN0LCBcbiAgY2xvbmVBcnJheSxcbiAgY3JlYXRlTmVzdGVkT2JqZWN0UGF0aCwgXG4gIG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoLCBcbiAgcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllLFxuICBwcm9wRGVsZXRlZFByZWZpeFxufSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbXBhcmVzIHR3byBvYmplY3RzOiBgcHJlZGVjZXNzb3JPYmplY3RgICYgYGN1cnJlbnRPYmplY3RgLiBcbiAqIENyZWF0ZXMgb2JqZWN0LCB3aGljaCBjb250YWlucyBhbGwgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMnIHBhdGhzLCBmcm9tIHJvb3QgdG8gbGVhZiBub2RlICh3aXRoIGxlYWYgdmFsdWVzKSwgd2hpY2ggd2VyZSBkZWxldGVkIGluIHRoZSBgcHJlZGVjZXNzb3JPYmplY3RgLlxuICogXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG5lc3RlZFByb3BlcnRpZXNQYXRoQXJyYXkgLSBJbml0aWFsIHZhbHVlIG11c3QgYmUgYW4gZW1wdHkgYXJyYXkuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9iamVjdD59IHByZWRlY2Vzc29yT2JqZWN0XG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9iamVjdD59IGN1cnJlbnRPYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gZGVsZXRlZFByb3BlcnRpZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGdldERlbGV0ZWRQcm9wZXJ0aWVzID0gKG5lc3RlZFByb3BlcnRpZXNQYXRoOiBBcnJheTxzdHJpbmc+LCBwcmVkZWNlc3Nvck9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgY3VycmVudE9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgZGVsZXRlZFByb3BlcnRpZXM6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIGlmKGlzT2JqZWN0KHByZWRlY2Vzc29yT2JqZWN0KSlcbiAge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yS2V5cyA9IE9iamVjdC5rZXlzKHByZWRlY2Vzc29yT2JqZWN0KVxuXG4gICAgcHJlZGVjZXNzb3JLZXlzLmZvckVhY2gocHJlZGVjZXNzb3JLZXkgPT4ge1xuICAgICAgdmFyIF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCA9IGNsb25lQXJyYXkobmVzdGVkUHJvcGVydGllc1BhdGgpXG4gICAgICBfbmVzdGVkUHJvcGVydGllc1BhdGgucHVzaChwcmVkZWNlc3NvcktleSlcbiAgICAgIFxuICAgICAgaWYoaXNVbmRlZmluZWQoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pKVxuICAgICAge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXhPZk5lc3RlZFByb3BlcnRpZXNQYXRoQXJyYXkgPSBfbmVzdGVkUHJvcGVydGllc1BhdGgubGVuZ3RoIC0gMVxuICAgICAgICBjb25zdCBkZWxldGVkUHJvcCA9IGAke3Byb3BEZWxldGVkUHJlZml4fSR7cHJlZGVjZXNzb3JLZXl9YFxuICAgICAgICB2YXIgcm9vdFxuICAgICAgICBpZihfbmVzdGVkUHJvcGVydGllc1BhdGgubGVuZ3RoID09PSAxKVxuICAgICAgICAgIHJvb3QgPSBgJHtwcm9wRGVsZXRlZFByZWZpeH0ke19uZXN0ZWRQcm9wZXJ0aWVzUGF0aFswXX1gXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByb290ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoWzBdXG4gICAgICAgIGNvbnN0IGRlbGV0ZWRWYWx1ZSA9IHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XVxuICAgICAgICBcbiAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleE9mTmVzdGVkUHJvcGVydGllc1BhdGhBcnJheSksIGRlbGV0ZWRQcm9wZXJ0aWVzKSlcbiAgICAgICAge1xuICAgICAgICAgIGRlbGV0ZWRQcm9wZXJ0aWVzW3Jvb3RdID0gcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgZGVsZXRlZFByb3BlcnRpZXMsIGRlbGV0ZWRQcm9wLCBkZWxldGVkVmFsdWUpW3Jvb3RdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgZGVsZXRlZFByb3BlcnRpZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgZGVsZXRlZFByb3AsIGRlbGV0ZWRWYWx1ZSlbcm9vdF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihpc05vdFVuZGVmaW5lZChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpXG4gICAgICB7XG4gICAgICAgIGdldERlbGV0ZWRQcm9wZXJ0aWVzKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgcHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldLCBjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSwgZGVsZXRlZFByb3BlcnRpZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBcbiAgcmV0dXJuIGRlbGV0ZWRQcm9wZXJ0aWVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERlbGV0ZWRQcm9wZXJ0aWVzIiwiaW1wb3J0IHsgXG4gIGlzTm90VW5kZWZpbmVkLFxuICBpc1ByaW1pdGl2ZSwgXG4gIGlzTm90UHJpbWl0aXZlLFxuICBpc09iamVjdCwgXG4gIG9iamVjdEhhc1Byb3AsXG4gIG9iamVjdEhhc05vdFByb3AsXG4gIGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgsIFxuICBvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aCwgXG4gIHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZSxcbiAgY2xvbmVBcnJheSxcbiAgaXNBcnJheVxufSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbXBhcmVzIHR3byBvYmplY3RzOiBgcHJlZGVjZXNzb3JPYmplY3RgICYgYGN1cnJlbnRPYmplY3RgLiBcbiAqIENyZWF0ZXMgb2JqZWN0LCB3aGljaCBjb250YWlucyBhbGwgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMnIHBhdGhzLCBmcm9tIHJvb3QgdG8gbGVhZiBub2RlICh3aXRoIGxlYWYgdmFsdWVzKSwgd2hpY2ggd2VyZSBjcmVhdGVkIGluIHRoZSBgY3VycmVudE9iamVjdGAuXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmVzdGVkUHJvcGVydGllc1BhdGggLSBJbml0aWFsIHZhbHVlIG11c3QgYmUgZW1wdHkgYXJyYXkuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9iamVjdD59IHByZWRlY2Vzc29yT2JqZWN0XG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9iamVjdD59IGN1cnJlbnRPYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gZGVsZXRlZFByb3BlcnRpZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGdldE1vZGlmaWVkVmFsdWVzID0gKG5lc3RlZFByb3BlcnRpZXNQYXRoOiBBcnJheTxzdHJpbmc+LCBwcmVkZWNlc3Nvck9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgY3VycmVudE9iamVjdDogUmVhZG9ubHk8T2JqZWN0PiwgbW9kaWZpZWRWYWx1ZXM6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIGlmKGlzT2JqZWN0KHByZWRlY2Vzc29yT2JqZWN0KSAmJiBpc09iamVjdChjdXJyZW50T2JqZWN0KSB8fCAoaXNBcnJheShwcmVkZWNlc3Nvck9iamVjdCkgJiYgaXNBcnJheShjdXJyZW50T2JqZWN0KSkpXG4gIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvcktleXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3Nvck9iamVjdClcblxuICAgIHByZWRlY2Vzc29yS2V5cy5mb3JFYWNoKHByZWRlY2Vzc29yS2V5ID0+IHtcbiAgICAgIHZhciBfbmVzdGVkUHJvcGVydGllc1BhdGggPSBjbG9uZUFycmF5KG5lc3RlZFByb3BlcnRpZXNQYXRoKVxuICAgICAgX25lc3RlZFByb3BlcnRpZXNQYXRoLnB1c2gocHJlZGVjZXNzb3JLZXkpXG5cbiAgICAgIGlmKGlzTm90VW5kZWZpbmVkKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgIHtcbiAgICAgICAgaWYoaXNQcmltaXRpdmUocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmKHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSAhPT0gY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3AgPSBwcmVkZWNlc3NvcktleVxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIG1vZGlmaWVkVmFsdWVzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBtb2RpZmllZFZhbHVlcywgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gY3JlYXRlTmVzdGVkT2JqZWN0UGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGgsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzTm90UHJpbWl0aXZlKHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpXG4gICAgICAgIHtcbiAgICAgICAgICBpZigoaXNPYmplY3QocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBpc0FycmF5KGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkgfHwgXG4gICAgICAgICAgKGlzQXJyYXkocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBpc09iamVjdChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5sZW5ndGggLSAxXG4gICAgICAgICAgICBjb25zdCByb290ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoWzBdXG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wID0gX25lc3RlZFByb3BlcnRpZXNQYXRoW2xhc3RJbmRleF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gcHJlZGVjZXNzb3JPYmplY3Rbb2xkUHJvcF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYob2JqZWN0SGFzUHJvcGVydGllc1BhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLnNsaWNlKDAsIGxhc3RJbmRleCksIG1vZGlmaWVkVmFsdWVzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBtb2RpZmllZFZhbHVlcywgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gY3JlYXRlTmVzdGVkT2JqZWN0UGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGgsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKFxuICAgICAgICAgICAgKGlzT2JqZWN0KHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgfHwgaXNBcnJheShwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIGlzUHJpbWl0aXZlKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkgfHxcbiAgICAgICAgICAgIChpc09iamVjdChjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgfHwgaXNBcnJheShjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgJiYgaXNQcmltaXRpdmUocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSlcbiAgICAgICAgICApXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3AgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbbGFzdEluZGV4XVxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtvbGRQcm9wXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4KSwgbW9kaWZpZWRWYWx1ZXMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlc1tyb290XSA9IHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZShfbmVzdGVkUHJvcGVydGllc1BhdGgsIG1vZGlmaWVkVmFsdWVzLCBvbGRQcm9wLCBvbGRWYWx1ZSlbcm9vdF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoKGlzT2JqZWN0KHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgJiYgb2JqZWN0SGFzUHJvcChwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pKSAmJiBcbiAgICAgICAgICAoaXNPYmplY3QoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIG9iamVjdEhhc1Byb3AoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBnZXRNb2RpZmllZFZhbHVlcyhfbmVzdGVkUHJvcGVydGllc1BhdGgsIHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSwgY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0sIG1vZGlmaWVkVmFsdWVzKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKChpc09iamVjdChwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIG9iamVjdEhhc05vdFByb3AocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkgfHwgXG4gICAgICAgICAgKGlzT2JqZWN0KGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAmJiBvYmplY3RIYXNQcm9wKGN1cnJlbnRPYmplY3RbcHJlZGVjZXNzb3JLZXldKSkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbMF1cbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3AgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbbGFzdEluZGV4XVxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBwcmVkZWNlc3Nvck9iamVjdFtvbGRQcm9wXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4KSwgbW9kaWZpZWRWYWx1ZXMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlc1tyb290XSA9IHB1c2hQcm9wSW5UZXJtaW5hbFByb3BlcnRpZShfbmVzdGVkUHJvcGVydGllc1BhdGgsIG1vZGlmaWVkVmFsdWVzLCBvbGRQcm9wLCBvbGRWYWx1ZSlbcm9vdF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoKGlzT2JqZWN0KHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgJiYgb2JqZWN0SGFzUHJvcChwcmVkZWNlc3Nvck9iamVjdFtwcmVkZWNlc3NvcktleV0pKSB8fCBcbiAgICAgICAgICAoaXNPYmplY3QoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pICYmIG9iamVjdEhhc05vdFByb3AoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBfbmVzdGVkUHJvcGVydGllc1BhdGgubGVuZ3RoIC0gMVxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFswXVxuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFtsYXN0SW5kZXhdXG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHByZWRlY2Vzc29yT2JqZWN0W29sZFByb3BdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5zbGljZSgwLCBsYXN0SW5kZXgpLCBtb2RpZmllZFZhbHVlcykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgbW9kaWZpZWRWYWx1ZXMsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlc1tyb290XSA9IGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBvbGRQcm9wLCBvbGRWYWx1ZSlbcm9vdF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihpc0FycmF5KHByZWRlY2Vzc29yT2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkgJiYgaXNBcnJheShjdXJyZW50T2JqZWN0W3ByZWRlY2Vzc29yS2V5XSkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkocHJlZGVjZXNzb3JPYmplY3RbcHJlZGVjZXNzb3JLZXldKSAhPT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudE9iamVjdFtwcmVkZWNlc3NvcktleV0pKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBfbmVzdGVkUHJvcGVydGllc1BhdGgubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICBjb25zdCByb290ID0gX25lc3RlZFByb3BlcnRpZXNQYXRoWzBdXG4gICAgICAgICAgICAgIGNvbnN0IG9sZFByb3AgPSBfbmVzdGVkUHJvcGVydGllc1BhdGhbbGFzdEluZGV4XVxuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHByZWRlY2Vzc29yT2JqZWN0W29sZFByb3BdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZihvYmplY3RIYXNQcm9wZXJ0aWVzUGF0aChfbmVzdGVkUHJvcGVydGllc1BhdGguc2xpY2UoMCwgbGFzdEluZGV4KSwgbW9kaWZpZWRWYWx1ZXMpKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBwdXNoUHJvcEluVGVybWluYWxQcm9wZXJ0aWUoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBtb2RpZmllZFZhbHVlcywgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXNbcm9vdF0gPSBjcmVhdGVOZXN0ZWRPYmplY3RQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgb2xkUHJvcCwgb2xkVmFsdWUpW3Jvb3RdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVsc2VcbiAge1xuICAgIGlmKHByZWRlY2Vzc29yT2JqZWN0ICE9PSBjdXJyZW50T2JqZWN0KVxuICAgIHtcbiAgICAgIGNvbnN0IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCA9IGNsb25lQXJyYXkobmVzdGVkUHJvcGVydGllc1BhdGgpXG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBfbmVzdGVkUHJvcGVydGllc1BhdGgubGVuZ3RoIC0gMVxuICAgICAgY29uc3Qgcm9vdCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFswXVxuICAgICAgY29uc3Qgb2xkUHJvcCA9IF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aFtsYXN0SW5kZXhdXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHByZWRlY2Vzc29yT2JqZWN0W29sZFByb3BdXG4gICAgICBcbiAgICAgIGlmKG9iamVjdEhhc1Byb3BlcnRpZXNQYXRoKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aC5zbGljZSgwLCBsYXN0SW5kZXgpLCBtb2RpZmllZFZhbHVlcykpXG4gICAgICB7XG4gICAgICAgIG1vZGlmaWVkVmFsdWVzW3Jvb3RdID0gcHVzaFByb3BJblRlcm1pbmFsUHJvcGVydGllKF9uZXN0ZWRQcm9wZXJ0aWVzUGF0aCwgbW9kaWZpZWRWYWx1ZXMsIG9sZFByb3AsIG9sZFZhbHVlKVtyb290XVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBtb2RpZmllZFZhbHVlc1tyb290XSA9IGNyZWF0ZU5lc3RlZE9iamVjdFBhdGgoX25lc3RlZFByb3BlcnRpZXNQYXRoLCBvbGRQcm9wLCBvbGRWYWx1ZSlbcm9vdF1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW9kaWZpZWRWYWx1ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TW9kaWZpZWRWYWx1ZXMiLCJpbXBvcnQgeyBNZXJnZWRPYmplY3QgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgY2xvbmVPYmplY3QsIGNsb25lQXJyYXkgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCByZW1vdmVDcmVhdGVkUHJvcGVydGllcyBmcm9tICcuL3JlbW92ZS1jcmVhdGVkLXByb3BlcnRpZXMnXG5pbXBvcnQgcmVzdG9yZURlbGV0ZWRQcm9wZXJ0aWVzIGZyb20gJy4vcmVzdG9yZS1kZWxldGVkLXByb3BlcnRpZXMnXG5pbXBvcnQgcmVzdG9yZU1vZGlmaWVkVmFsdWVzIGZyb20gJy4vcmVzdG9yZS1tb2RpZmllZC12YWx1ZXMnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxIaXN0b3J5T2JqZWN0Pn0gaGlzdG9yeU9iamVjdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50T2JqZWN0XG4gKiBAcGFyYW0ge1ZFUlNJT05fTlVNQkVSfSB2ZXJzaW9uTnVtYmVyXG4gKiBAcmV0dXJuIHtNZXJnZWRPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5jb25zdCByZXN0b3JlSGlzdG9yeU9iamVjdCA9IChoaXN0b3J5T2JqZWN0czogYW55LCBjdXJyZW50T2JqZWN0OiBPYmplY3QsICBvcHRpb25zPzogT3B0aW9ucyk6IE1lcmdlZE9iamVjdCA9PiB7XG4gIGlmKGhpc3RvcnlPYmplY3RzLmxlbmd0aCkge1xuICAgIHZhciBtZXJnZWRPYmplY3Q6IE1lcmdlZE9iamVjdCA9IHt9XG4gICAgY29uc3QgX2hpc3RvcnlPYmplY3RzID0gY2xvbmVBcnJheShoaXN0b3J5T2JqZWN0cylcbiAgICBcbiAgICBpZihvcHRpb25zLmNvbnNpZGVyVmVyc2lvbk51bWJlcnMpIHtcbiAgICAgIGhpc3RvcnlPYmplY3RzLnNvcnQoKGEsIGIpID0+IGEuVkVSU0lPTl9OVU1CRVIgLSBiLlZFUlNJT05fTlVNQkVSKVxuICAgICAgaGlzdG9yeU9iamVjdHMucmV2ZXJzZSgpXG4gICAgfVxuICAgIGVsc2VcbiAgICAgIGhpc3RvcnlPYmplY3RzLnJldmVyc2UoKSBcbiAgICAgIFxuICAgIGNvbnN0IGhpc3RvcnlPYmplY3RLZXlzID0gT2JqZWN0LmtleXMoaGlzdG9yeU9iamVjdHMpXG4gICAgXG4gICAgaGlzdG9yeU9iamVjdEtleXMuZm9yRWFjaCgoaGlzdG9yeU9iamVjdEtleSwgaSkgPT4ge1xuICAgICAgY3VycmVudE9iamVjdCA9IGNsb25lT2JqZWN0KGN1cnJlbnRPYmplY3QpXG4gICAgICBjb25zdCB7IENSRUFURURfUFJPUEVSVElFUywgREVMRVRFRF9QUk9QRVJUSUVTLCBNT0RJRklFRF9WQUxVRVMgfSA9IGhpc3RvcnlPYmplY3RzW2hpc3RvcnlPYmplY3RLZXldXG4gICAgICBcbiAgICAgIGlmKGkgPT09IDApXG4gICAgICAgIG1lcmdlZE9iamVjdCA9IHJlbW92ZUNyZWF0ZWRQcm9wZXJ0aWVzKENSRUFURURfUFJPUEVSVElFUywgY3VycmVudE9iamVjdClcbiAgICAgIGVsc2VcbiAgICAgICAgbWVyZ2VkT2JqZWN0ID0gcmVtb3ZlQ3JlYXRlZFByb3BlcnRpZXMoQ1JFQVRFRF9QUk9QRVJUSUVTLCBtZXJnZWRPYmplY3QpXG4gICAgICBtZXJnZWRPYmplY3QgPSByZXN0b3JlRGVsZXRlZFByb3BlcnRpZXMoREVMRVRFRF9QUk9QRVJUSUVTLCBtZXJnZWRPYmplY3QpXG4gICAgICBtZXJnZWRPYmplY3QgPSByZXN0b3JlTW9kaWZpZWRWYWx1ZXMoTU9ESUZJRURfVkFMVUVTLCBtZXJnZWRPYmplY3QpXG4gICAgICBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZE9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXN0b3JlSGlzdG9yeU9iamVjdCIsImltcG9ydCB7IENSRUFURURfUFJPUEVSVElFUyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgcGF0aEV4aXN0ZWRQcmVmaXggfSBmcm9tICcuLi91dGlscydcblxuY29uc3QgcmVtb3ZlQ3JlYXRlZFByb3BlcnRpZXMgPSAoQ1JFQVRFRF9QUk9QRVJUSUVTOiBDUkVBVEVEX1BST1BFUlRJRVMsIGN1cnJlbnRPYmplY3Q6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIGNvbnN0IGNyZWF0ZWRQcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKENSRUFURURfUFJPUEVSVElFUylcblxuICBjcmVhdGVkUHJvcGVydGllc0tleXMuZm9yRWFjaChjcmVhdGVkUHJvcGVydGllc0tleSA9PiB7XG4gICAgaWYoY3JlYXRlZFByb3BlcnRpZXNLZXkuaW5kZXhPZihwYXRoRXhpc3RlZFByZWZpeCkgPT09IDApXG4gICAge1xuICAgICAgY29uc3Qga2V5V2l0aG91dFByZWZpeCA9IGNyZWF0ZWRQcm9wZXJ0aWVzS2V5LnNsaWNlKHBhdGhFeGlzdGVkUHJlZml4Lmxlbmd0aClcbiAgICAgIHJlbW92ZUNyZWF0ZWRQcm9wZXJ0aWVzKENSRUFURURfUFJPUEVSVElFU1tjcmVhdGVkUHJvcGVydGllc0tleV0sIGN1cnJlbnRPYmplY3Rba2V5V2l0aG91dFByZWZpeF0pXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBkZWxldGUgY3VycmVudE9iamVjdFtjcmVhdGVkUHJvcGVydGllc0tleV1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGN1cnJlbnRPYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlQ3JlYXRlZFByb3BlcnRpZXMiLCJpbXBvcnQgeyBERUxFVEVEX1BST1BFUlRJRVMgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHByb3BEZWxldGVkUHJlZml4IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHJlc3RvcmVEZWxldGVkUHJvcGVydGllcyA9IChERUxFVEVEX1BST1BFUlRJRVM6IERFTEVURURfUFJPUEVSVElFUywgY3VycmVudE9iamVjdDogT2JqZWN0KTogT2JqZWN0ID0+IHtcbiAgY29uc3QgZGVsZXRlZFByb3BlcnRpZXNLZXlzID0gT2JqZWN0LmtleXMoREVMRVRFRF9QUk9QRVJUSUVTKVxuICBcbiAgZGVsZXRlZFByb3BlcnRpZXNLZXlzLmZvckVhY2goZGVsZXRlZFByb3BlcnRpZXNLZXkgPT4ge1xuICAgIGlmKGRlbGV0ZWRQcm9wZXJ0aWVzS2V5LmluZGV4T2YocHJvcERlbGV0ZWRQcmVmaXgpID09PSAwKVxuICAgIHtcbiAgICAgIGNvbnN0IGtleVdpdGhvdXRQcmVmaXggPSBkZWxldGVkUHJvcGVydGllc0tleS5zbGljZShwcm9wRGVsZXRlZFByZWZpeC5sZW5ndGgpXG4gICAgICBjdXJyZW50T2JqZWN0W2tleVdpdGhvdXRQcmVmaXhdID0gREVMRVRFRF9QUk9QRVJUSUVTW2RlbGV0ZWRQcm9wZXJ0aWVzS2V5XVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy8gY3VycmVudE9iamVjdFtkZWxldGVkUHJvcGVydGllc0tleV0gPSB7fVxuICAgICAgcmVzdG9yZURlbGV0ZWRQcm9wZXJ0aWVzKERFTEVURURfUFJPUEVSVElFU1tkZWxldGVkUHJvcGVydGllc0tleV0sIGN1cnJlbnRPYmplY3RbZGVsZXRlZFByb3BlcnRpZXNLZXldKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gY3VycmVudE9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXN0b3JlRGVsZXRlZFByb3BlcnRpZXMiLCJpbXBvcnQgeyBNT0RJRklFRF9WQUxVRVMgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1ByaW1pdGl2ZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCByZXN0b3JlTW9kaWZpZWRWYWx1ZXMgPSAoTU9ESUZJRURfVkFMVUVTOiBNT0RJRklFRF9WQUxVRVMsIGN1cnJlbnRPYmplY3Q6IE9iamVjdCk6IE9iamVjdCA9PiB7XG4gIGNvbnN0IG1vZGlmaWVkVmFsdWVzS2V5cyA9IE9iamVjdC5rZXlzKE1PRElGSUVEX1ZBTFVFUylcbiAgXG4gIG1vZGlmaWVkVmFsdWVzS2V5cy5mb3JFYWNoKG1vZGlmaWVkVmFsdWVzS2V5ID0+IHtcbiAgICBpZihpc1ByaW1pdGl2ZShNT0RJRklFRF9WQUxVRVNbbW9kaWZpZWRWYWx1ZXNLZXldKSB8fCBpc0FycmF5KE1PRElGSUVEX1ZBTFVFU1ttb2RpZmllZFZhbHVlc0tleV0pKVxuICAgIHtcbiAgICAgIGN1cnJlbnRPYmplY3RbbW9kaWZpZWRWYWx1ZXNLZXldID0gTU9ESUZJRURfVkFMVUVTW21vZGlmaWVkVmFsdWVzS2V5XVxuICAgIH1cbiAgICBpZihpc09iamVjdChNT0RJRklFRF9WQUxVRVNbbW9kaWZpZWRWYWx1ZXNLZXldKSlcbiAgICB7XG4gICAgICByZXN0b3JlTW9kaWZpZWRWYWx1ZXMoTU9ESUZJRURfVkFMVUVTW21vZGlmaWVkVmFsdWVzS2V5XSwgY3VycmVudE9iamVjdFttb2RpZmllZFZhbHVlc0tleV0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBjdXJyZW50T2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3RvcmVNb2RpZmllZFZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=