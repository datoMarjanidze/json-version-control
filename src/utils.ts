/**
 * Creats nested object from array of strings and if terminalValue (`terminal propertie`: in this context, last value in array. 
 * `terminal node`: last child in the tree) is provided, it will be assigned to the last propertie, if not last propertie value
 * will be null.
 * 
 * Example I: createNestedObjectPath([a, b, c]) results in { a: { b: { c: null } } }
 * Example II: createNestedObjectPath([a, b, c], terminalValue) results in { a: { b: { c: terminalValue } } }
 * 
 * @param {Array<string>} nestedPropertiesPath - strings which must be nested in an object, in sequential order.
 * @param {any} terminalValue
 * @param {string} terminalProp
 * @return {Object} nestedObject
 * @api private
 */

const createNestedObjectPath = (nestedPropertiesPath: Array<string>, terminalProp: string, terminalValue?: any): Object => {
  const _nestedPropertiesPath = cloneArray(nestedPropertiesPath)
  const _terminalValue = cloneObject(terminalValue)
  const nestedObject = {}
  const lastIndex = _nestedPropertiesPath.length - 1
  
  _nestedPropertiesPath.reduce((obj, prop, i) => {
    if(i !== lastIndex) obj[prop] = {}
    else if(i === lastIndex && isUndefined(terminalValue)) obj[prop] = null
    else if(i === lastIndex && isNotUndefined(terminalValue)) {
      obj[terminalProp] = _terminalValue
      return obj[terminalProp]
    }

    return obj[prop]
  }, nestedObject)
  return nestedObject
}

/**
 * Checks if in `nestedObject` passed as second argument exists, properties from `nestedPropertiesPath` which 
 * are taken in sequential order.
 * 
 * Example I: objectHasPropertiesPath(['a', 'b', 'c'], { a: { b: { c: something } } }). Object - nestedObject has
 * properties provided from `nestedPropertiesPath`.
 * Example II: objectHasPropertiesPath(['a', 'x', 'c'], { a: { b: { c: something } } }). Object - nestedObject doesn't
 * have properties provided from `nestedPropertiesPath`. `nestedPropertiesPath` must exactly match the 
 * sequence of `nestedObject`.
 * 
 * @param {Array<string>} nestedPropertiesPath - strings which must be nested in an object, in sequential order.
 * @param {Object} nestedObject can be anything.
 * @return {boolean}
 * @api privatenestedPropertiesPathArray
 */

const objectHasPropertiesPath = (nestedPropertiesPath: Array<string>, nestedObject: Object): boolean => {
  const _nestedObject = cloneObject(nestedObject)
  var has = true
  
  if(nestedPropertiesPath.length)
    nestedPropertiesPath.reduce((obj, prop) => {
      obj[prop] === undefined ? has = false : null

      if(obj[prop])
        return obj[prop]
      else 
        return ''
    }, _nestedObject)
  else
    has = false

  return has
}

/**
 * Before this procedure, it must be checked if the path from a to c exists (including c). If it does, then you can push something next to c.
 * If not, you must create new one with `createNestedObjectPath`.
 * Example I: pushPropInTerminalPropertie([a, b, c], { a: { b: { c: null } } }, 'foo', 'bar') results in { a: { b: { c: null, foo: 'bar' } } }
 * 
 * @param {Array<string>} nestedPropertiesPath - strings which must be nested in object, in sequential order.
 * @param {Object} nestedObject - any object.
 * @param {string} newProp
 * @param {any} newValue
 * @return {Object}
 * @api private
 */

const pushPropInTerminalPropertie = (nestedPropertiesPath: Array<string>, nestedObject: Object, newProp: string, newValue: any): Object => {
  const _nestedObject = cloneObject(nestedObject)
  const _newValue = cloneObject(newValue)
  const lastIndex = nestedPropertiesPath.length - 1

  nestedPropertiesPath.reduce((obj, prop, i) => {
    if(i === lastIndex) obj[newProp] = _newValue

    return obj[prop]
  }, _nestedObject)
  
  return _nestedObject
}

/**
 * Check if identifier is not undefined.
 * 
 * @param {any} identifier
 * @return {boolean} 
 * @api private
 */

const isNotUndefined = (identifier: any): boolean => {
  return identifier !== undefined
}

/**
 * Check if identifier is undefined.
 * 
 * @param {any} identifier
 * @return {boolean} 
 * @api private
 */

const isUndefined = (identifier: any): boolean => {
  return identifier === undefined
}

/**
 * Check if identifier is object.
 * 
 * @param {any} identifier
 * @return {boolean} 
 * @api private
 */

const isObject = (identifier: any): boolean => {
  return identifier instanceof Object && !(identifier instanceof Array)
}

/**
 * Check if identifier is primitive.
 * 
 * @param {any} identifier
 * @return {boolean} 
 * @api private
 */

const isPrimitive = (identifier: any): boolean => {
  return !(identifier instanceof Object) && !(identifier instanceof Array)
}

const isNotPrimitive = (identifier: any): boolean => {
  return identifier instanceof Object || identifier instanceof Array
}

/**
 * Check if identifier is array.
 * 
 * @param {any} identifier
 * @return {boolean} 
 * @api private
 */

const isArray = (identifier: any): boolean => {
  return identifier instanceof Array
}

/**
 * Clone the array.
 * 
 * @param {Array<string>} array
 * @return {Array<string>}
 * @api private
 */

const cloneArray = (array: Array<string>): Array<string> => {
  return JSON.parse(JSON.stringify(array))
}

/**
 * Clone the object.
 * 
 * @param {Object} object
 * @return {Object}
 * @api private
 */

const cloneObject = (object: Object): Object => {
  return JSON.parse(JSON.stringify(object))
}

/**
 * Prints error message in console and throws new error.
 * 
 * @param {string} msg
 * @return {void}
 * @api private
 */

const handleError = (msg: string): void => {
  console.error('\x1b[32m%s', 'JSON VS:', '\x1b[31m', msg, '\x1b[0m')
  throw new Error()
}

/**
 * Checks if object has property.
 * 
 * @param {Object} object
 * @return {boolean}
 * @api private
 */

const objectHasProp = (object: Object): boolean => {
  const objectKey = Object.keys(object)[0]
  return objectKey !== undefined
}

/**
 * Checks if object has not got a property.
 * 
 * @param {Object} object
 * @return {boolean}
 * @api private
 */

const objectHasNotProp = (object: Object): boolean => {
  const objectKey = Object.keys(object)[0]
  return objectKey === undefined
}

/**
 * Checks if object does not have property.
 * 
 * @param {Object} object
 * @return {boolean}
 * @api private
 */

const objectDoesNotHaveProp = (object: Object): boolean => {
  const objectKey = Object.keys(object)[0]
  return objectKey === undefined
}

/**
 * Checks if object has child object.
 * 
 * @param {Object} object
 * @return {boolean}
 * @api private
 */

const hasChildObject = (object: Object): boolean => {
  const objectKey = Object.keys(object)[0]
  return object[objectKey] instanceof Object
}

/**
 * Checks if object has not got a child object.
 * 
 * @param {Object} object
 * @return {boolean}
 * @api private
 */

const hasNotChildObject = (object: Object): boolean => {
  const objectKey = Object.keys(object)[0]
  return !(object[objectKey] instanceof Object)
}

/**
 * Checks if array is empty
 * 
 * @param {array} array
 * @return {boolean}
 * @api private
 */

const arrayIsEmpty = (array: Array<any>): boolean => {
  return array.length === 0
}

/**
 * Checks if array is not empty
 * 
 * @param {array} array
 * @return {boolean}
 * @api private
 */

const arrayIsNotEmpty = (array: Array<any>): boolean => {
  return array.length !== 0
}

/**
 * Identifies that the path already existed before the creation of the subfield(s) or adjacent field(s).
 */

const pathExistedPrefix = '%$/$7EXISTED#!ZZv-'
const propDeletedPrefix = '%$/$7DELETED#!ZZv-'

const addPathExistedPrefixToNestedPropPath = (prop, i, arr) => {
  if(i !== arr.length - 1)
    return `${pathExistedPrefix}${prop}`
  else
    return prop
}

export { 
  createNestedObjectPath,
  objectHasPropertiesPath,
  pushPropInTerminalPropertie,
  isNotUndefined,
  isUndefined,
  isObject,
  isPrimitive,
  cloneArray,
  cloneObject,
  handleError,
  hasChildObject,
  objectHasProp,
  objectHasNotProp,
  objectDoesNotHaveProp,
  hasNotChildObject,
  arrayIsEmpty,
  arrayIsNotEmpty,
  pathExistedPrefix,
  addPathExistedPrefixToNestedPropPath,
  propDeletedPrefix,
  isArray,
  isNotPrimitive
}