import { MergedObject } from '../types'
import { Options } from '../interfaces'
import { cloneObject, cloneArray } from '../utils'
import removeCreatedProperties from './remove-created-properties'
import restoreDeletedProperties from './restore-deleted-properties'
import restoreModifiedValues from './restore-modified-values'

/**
 * @param {Array<HistoryObject>} historyObjects
 * @param {Object} currentObject
 * @param {VERSION_NUMBER} versionNumber
 * @return {MergedObject}
 * @api private
 */

const restoreHistoryObject = (historyObjects: any, currentObject: Object,  options?: Options): MergedObject => {
  if(historyObjects.length) {
    var mergedObject: MergedObject = {}
    const _historyObjects = cloneArray(historyObjects)
    
    if(options.considerVersionNumbers) {
      historyObjects.sort((a, b) => a.VERSION_NUMBER - b.VERSION_NUMBER)
      historyObjects.reverse()
    }
    else
      historyObjects.reverse() 
      
    const historyObjectKeys = Object.keys(historyObjects)
    
    historyObjectKeys.forEach((historyObjectKey, i) => {
      currentObject = cloneObject(currentObject)
      const { CREATED_PROPERTIES, DELETED_PROPERTIES, MODIFIED_VALUES } = historyObjects[historyObjectKey]
      
      if(i === 0)
        mergedObject = removeCreatedProperties(CREATED_PROPERTIES, currentObject)
      else
        mergedObject = removeCreatedProperties(CREATED_PROPERTIES, mergedObject)
      mergedObject = restoreDeletedProperties(DELETED_PROPERTIES, mergedObject)
      mergedObject = restoreModifiedValues(MODIFIED_VALUES, mergedObject)
      
    })
  }

  return mergedObject
}

export default restoreHistoryObject