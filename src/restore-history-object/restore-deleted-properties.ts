import { DELETED_PROPERTIES } from '../types'
import { propDeletedPrefix } from '../utils'

const restoreDeletedProperties = (DELETED_PROPERTIES: DELETED_PROPERTIES, currentObject: Object): Object => {
  const deletedPropertiesKeys = Object.keys(DELETED_PROPERTIES)
  
  deletedPropertiesKeys.forEach(deletedPropertiesKey => {
    if(deletedPropertiesKey.indexOf(propDeletedPrefix) === 0)
    {
      const keyWithoutPrefix = deletedPropertiesKey.slice(propDeletedPrefix.length)
      currentObject[keyWithoutPrefix] = DELETED_PROPERTIES[deletedPropertiesKey]
    }
    else
    {
      // currentObject[deletedPropertiesKey] = {}
      restoreDeletedProperties(DELETED_PROPERTIES[deletedPropertiesKey], currentObject[deletedPropertiesKey])
    }
  })

  return currentObject
}

export default restoreDeletedProperties