import { CREATED_PROPERTIES } from '../types'
import { pathExistedPrefix } from '../utils'

const removeCreatedProperties = (CREATED_PROPERTIES: CREATED_PROPERTIES, currentObject: Object): Object => {
  const createdPropertiesKeys = Object.keys(CREATED_PROPERTIES)

  createdPropertiesKeys.forEach(createdPropertiesKey => {
    if(createdPropertiesKey.indexOf(pathExistedPrefix) === 0)
    {
      const keyWithoutPrefix = createdPropertiesKey.slice(pathExistedPrefix.length)
      removeCreatedProperties(CREATED_PROPERTIES[createdPropertiesKey], currentObject[keyWithoutPrefix])
    }
    else
    {
      delete currentObject[createdPropertiesKey]
    }
  })

  return currentObject
}

export default removeCreatedProperties