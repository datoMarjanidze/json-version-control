import { 
  isNotUndefined,
  isUndefined, 
  isObject, 
  cloneArray,
  createNestedObjectPath, 
  objectHasPropertiesPath, 
  pushPropInTerminalPropertie,
  propDeletedPrefix
} from '../utils'

/**
 * This function compares two objects: `predecessorObject` & `currentObject`. 
 * Creates object, which contains all the object's properties' paths, from root to leaf node (with leaf values), which were deleted in the `predecessorObject`.
 * 
 * @param {Array<string>} nestedPropertiesPathArray - Initial value must be an empty array.
 * @param {Readonly<Object>} predecessorObject
 * @param {Readonly<Object>} currentObject
 * @return {Object} deletedProperties
 * @api private
 */

const getDeletedProperties = (nestedPropertiesPath: Array<string>, predecessorObject: Readonly<Object>, currentObject: Readonly<Object>, deletedProperties: Object): Object => {
  if(isObject(predecessorObject))
  {
    const predecessorKeys = Object.keys(predecessorObject)

    predecessorKeys.forEach(predecessorKey => {
      var _nestedPropertiesPath = cloneArray(nestedPropertiesPath)
      _nestedPropertiesPath.push(predecessorKey)
      
      if(isUndefined(currentObject[predecessorKey]))
      {
        const lastIndexOfNestedPropertiesPathArray = _nestedPropertiesPath.length - 1
        const deletedProp = `${propDeletedPrefix}${predecessorKey}`
        var root
        if(_nestedPropertiesPath.length === 1)
          root = `${propDeletedPrefix}${_nestedPropertiesPath[0]}`
        else
          root = _nestedPropertiesPath[0]
        const deletedValue = predecessorObject[predecessorKey]
        
        if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndexOfNestedPropertiesPathArray), deletedProperties))
        {
          deletedProperties[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, deletedProperties, deletedProp, deletedValue)[root]
        }
        else
        {
          deletedProperties[root] = createNestedObjectPath(_nestedPropertiesPath, deletedProp, deletedValue)[root]
        }
      }
      else if(isNotUndefined(currentObject[predecessorKey]))
      {
        getDeletedProperties(_nestedPropertiesPath, predecessorObject[predecessorKey], currentObject[predecessorKey], deletedProperties)
      }
    })
  }
  
  return deletedProperties
}

export default getDeletedProperties