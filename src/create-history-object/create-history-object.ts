import { HistoryObject } from '../interfaces'
import getCreatedProperties from './get-created-properties'
import getDeletedProperties from './get-deleted-properties'
import getModifiedValues from './get-modified-values'
import { VERSION_NUMBER } from '../types'

/**
 * Creates history object.
 * 
 * @param {VERSION_NUMBER} versionNumber
 * @param {Readonly<Object>} predecessorObject
 * @param {Readonly<Object>} currentObject
 * @return {Readonly<HistoryObject>}
 * @api private
 */

const createHistoryObject = (versionNumber: Readonly<VERSION_NUMBER>, predecessorObject: Readonly<Object>, currentObject: Readonly<Object>): Readonly<HistoryObject> => {
  const historyObject: HistoryObject = {
    VERSION_NUMBER: null,
    CREATED_PROPERTIES: {},
    DELETED_PROPERTIES: {},
    MODIFIED_VALUES: {},
  }

  Object.freeze(predecessorObject)
  Object.freeze(currentObject)

  historyObject.VERSION_NUMBER = versionNumber
  historyObject.CREATED_PROPERTIES = getCreatedProperties([], predecessorObject, currentObject, {})
  historyObject.DELETED_PROPERTIES = getDeletedProperties([], predecessorObject, currentObject, {})
  historyObject.MODIFIED_VALUES = getModifiedValues([], predecessorObject, currentObject, {})

  return Object.freeze(historyObject)
}

export default createHistoryObject 