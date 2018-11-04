import { 
  isNotUndefined,
  isPrimitive, 
  isNotPrimitive,
  isObject, 
  objectHasProp,
  objectHasNotProp,
  createNestedObjectPath, 
  objectHasPropertiesPath, 
  pushPropInTerminalPropertie,
  cloneArray,
  isArray
} from '../utils'

/**
 * This function compares two objects: `predecessorObject` & `currentObject`. 
 * Creates object, which contains all the object's properties' paths, from root to leaf node (with leaf values), which were created in the `currentObject`.
 * 
 * @param {Array<string>} nestedPropertiesPath - Initial value must be empty array.
 * @param {Readonly<Object>} predecessorObject
 * @param {Readonly<Object>} currentObject
 * @return {Object} deletedProperties
 * @api private
 */

const getModifiedValues = (nestedPropertiesPath: Array<string>, predecessorObject: Readonly<Object>, currentObject: Readonly<Object>, modifiedValues: Object): Object => {
  if(isObject(predecessorObject) && isObject(currentObject) || (isArray(predecessorObject) && isArray(currentObject)))
  {
    const predecessorKeys = Object.keys(predecessorObject)

    predecessorKeys.forEach(predecessorKey => {
      var _nestedPropertiesPath = cloneArray(nestedPropertiesPath)
      _nestedPropertiesPath.push(predecessorKey)

      if(isNotUndefined(currentObject[predecessorKey]))
      {
        if(isPrimitive(predecessorObject[predecessorKey]))
        {
          if(predecessorObject[predecessorKey] !== currentObject[predecessorKey])
          {
            const lastIndex = _nestedPropertiesPath.length - 1
            const root = _nestedPropertiesPath[0]
            const oldProp = predecessorKey
            const oldValue = predecessorObject[predecessorKey]
            
            if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
            {
              modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
            }
            else
            {
              modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
            }
          }
        }
        else if(isNotPrimitive(predecessorObject[predecessorKey]))
        {
          if((isObject(predecessorObject[predecessorKey]) && isArray(currentObject[predecessorKey])) || 
          (isArray(predecessorObject[predecessorKey]) && isObject(currentObject[predecessorKey])))
          {
            const lastIndex = _nestedPropertiesPath.length - 1
            const root = _nestedPropertiesPath[0]
            const oldProp = _nestedPropertiesPath[lastIndex]
            const oldValue = predecessorObject[oldProp]
            
            if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
            {
              modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
            }
            else
            {
              modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
            }
          }
          else if(
            (isObject(predecessorObject[predecessorKey]) || isArray(predecessorObject[predecessorKey]) && isPrimitive(currentObject[predecessorKey])) ||
            (isObject(currentObject[predecessorKey]) || isArray(currentObject[predecessorKey]) && isPrimitive(predecessorObject[predecessorKey]))
          )
          {
            const lastIndex = _nestedPropertiesPath.length - 1
            const root = _nestedPropertiesPath[0]
            const oldProp = _nestedPropertiesPath[lastIndex]
            const oldValue = predecessorObject[oldProp]
            
            if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
            {
              modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
            }
            else
            {
              modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
            }
          }
          else if((isObject(predecessorObject[predecessorKey]) && objectHasProp(predecessorObject[predecessorKey])) && 
          (isObject(currentObject[predecessorKey]) && objectHasProp(currentObject[predecessorKey])))
          {
            getModifiedValues(_nestedPropertiesPath, predecessorObject[predecessorKey], currentObject[predecessorKey], modifiedValues)
          }
          else if((isObject(predecessorObject[predecessorKey]) && objectHasNotProp(predecessorObject[predecessorKey])) || 
          (isObject(currentObject[predecessorKey]) && objectHasProp(currentObject[predecessorKey])))
          {
            const lastIndex = _nestedPropertiesPath.length - 1
            const root = _nestedPropertiesPath[0]
            const oldProp = _nestedPropertiesPath[lastIndex]
            const oldValue = predecessorObject[oldProp]
            
            if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
            {
              modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
            }
            else
            {
              modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
            }
          }
          else if((isObject(predecessorObject[predecessorKey]) && objectHasProp(predecessorObject[predecessorKey])) || 
          (isObject(currentObject[predecessorKey]) && objectHasNotProp(currentObject[predecessorKey])))
          {
            const lastIndex = _nestedPropertiesPath.length - 1
            const root = _nestedPropertiesPath[0]
            const oldProp = _nestedPropertiesPath[lastIndex]
            const oldValue = predecessorObject[oldProp]
            
            if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
            {
              modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
            }
            else
            {
              modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
            }
          }
          else if(isArray(predecessorObject[predecessorKey]) && isArray(currentObject[predecessorKey]))
          {
            if(JSON.stringify(predecessorObject[predecessorKey]) !== JSON.stringify(currentObject[predecessorKey]))
            {
              const lastIndex = _nestedPropertiesPath.length - 1
              const root = _nestedPropertiesPath[0]
              const oldProp = _nestedPropertiesPath[lastIndex]
              const oldValue = predecessorObject[oldProp]
              
              if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
              {
                modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
              }
              else
              {
                modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
              }
            }
          }
        }
      }
    })
  }
  else
  {
    if(predecessorObject !== currentObject)
    {
      const _nestedPropertiesPath = cloneArray(nestedPropertiesPath)
      const lastIndex = _nestedPropertiesPath.length - 1
      const root = _nestedPropertiesPath[0]
      const oldProp = _nestedPropertiesPath[lastIndex]
      const oldValue = predecessorObject[oldProp]
      
      if(objectHasPropertiesPath(_nestedPropertiesPath.slice(0, lastIndex), modifiedValues))
      {
        modifiedValues[root] = pushPropInTerminalPropertie(_nestedPropertiesPath, modifiedValues, oldProp, oldValue)[root]
      }
      else
      {
        modifiedValues[root] = createNestedObjectPath(_nestedPropertiesPath, oldProp, oldValue)[root]
      }
    }
  }

  return modifiedValues
}

export default getModifiedValues