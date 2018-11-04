import { MODIFIED_VALUES } from '../types'
import { isObject, isPrimitive, isArray } from '../utils'

const restoreModifiedValues = (MODIFIED_VALUES: MODIFIED_VALUES, currentObject: Object): Object => {
  const modifiedValuesKeys = Object.keys(MODIFIED_VALUES)
  
  modifiedValuesKeys.forEach(modifiedValuesKey => {
    if(isPrimitive(MODIFIED_VALUES[modifiedValuesKey]) || isArray(MODIFIED_VALUES[modifiedValuesKey]))
    {
      currentObject[modifiedValuesKey] = MODIFIED_VALUES[modifiedValuesKey]
    }
    if(isObject(MODIFIED_VALUES[modifiedValuesKey]))
    {
      restoreModifiedValues(MODIFIED_VALUES[modifiedValuesKey], currentObject[modifiedValuesKey])
    }
  })

  return currentObject
}

export default restoreModifiedValues