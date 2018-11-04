import { 
  isNotUndefined,
  isUndefined,
  isObject, 
  cloneArray,
  createNestedObjectPath, 
  objectHasPropertiesPath, 
  pushPropInTerminalPropertie,
  addPathExistedPrefixToNestedPropPath,
} from '../utils'

/**
 * This function compares two objects: `predecessorObject` & `currentObject`. 
 * Creates object, which contains all the object's properties' paths, from root to leaf node (with leaf values), which were created in the `currentObject`.
 * 
 * @param {Array<string>} nestedPropertiesPath - Initial value must be an empty array.
 * @param {Readonly<Object>} predecessorObject
 * @param {Readonly<Object>} currentObject
 * @return {Readonly<Object>} createdProperties
 * @api private
 */

const getCreatedProperties = (nestedPropertiesPath: Array<string>, predecessorObject: Readonly<Object>, currentObject: Readonly<Object>, createdProperties: Object): Readonly<Object> => {
  if(isObject(currentObject))
  {
    const currentKeys = Object.keys(currentObject)
    currentKeys.forEach(currentKey => {
      var _nestedPropertiesPath = cloneArray(nestedPropertiesPath)
      _nestedPropertiesPath.push(currentKey)
      
      if(isUndefined(predecessorObject[currentKey]))
      {
        _nestedPropertiesPath = _nestedPropertiesPath.map(addPathExistedPrefixToNestedPropPath)

        const lastIndex = _nestedPropertiesPath.length - 1
        const root = _nestedPropertiesPath[0]
        var newProp = _nestedPropertiesPath[lastIndex]
        const newPropValue = currentObject[currentKey]
      
        if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), createdProperties)) 
        {
          createdProperties[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, createdProperties, newProp, newPropValue)[root]
        }
        else
        {
          createdProperties[root] = createNestedObjectPath(_nestedPropertiesPath, newProp, newPropValue)[root]
        }
      }
      else if(isNotUndefined(predecessorObject[currentKey]))
      {
        getCreatedProperties(_nestedPropertiesPath, predecessorObject[currentKey], currentObject[currentKey], createdProperties)
      }
    })
  }

  return createdProperties
}

export default getCreatedProperties