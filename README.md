![alt text](https://raw.githubusercontent.com/datoMarjanidze/json-version-control/master/logo.png)

Small library for node (beta version).

[![NPM](https://nodei.co/npm/json-version-control.png?compact=true)](https://nodei.co/npm/json-version-control/)

```javascript
const { createHistoryObject } = require('json-version-control')

const firstVersion = {
  name: 'Ashley',
  age: 31,
  hobbie: 'Painting',
  address: {
    state: 'Michigan',
    zip: '0000',
  },
  some: {
    other: {
      things: []
    }
  }
}

const secondVersion = {
  name: 'Ashley',
  age: 32,
  birthday: '1 Jan',
  address: {
    city: 'Detroit',
    zip: '0001'
  },
  some: {
    other: {
      info: {
        about: 'Ashley'
      }
    }
  }
}

const historyObject = createHistoryObject(0, firstVersion, secondVersion)
/** 
 * historyObject = { 
 *   VERSION_NUMBER: 0,
 *   CREATED_PROPERTIES: { 
 *     birthday: '1 Jan',
 *     '%$/$7EXISTED#!ZZv-address': { city: 'Detroit' },
 *     '%$/$7EXISTED#!ZZv-some': { '%$/$7EXISTED#!ZZv-other': { info: { about: 'Ashley' } } } 
 *   },
 *   DELETED_PROPERTIES: { 
 *     '%$/$7DELETED#!ZZv-hobbie': 'Painting',
 *     address: { '%$/$7DELETED#!ZZv-state': 'Michigan' },
 *     some: { other: { '%$/$7DELETED#!ZZv-things': [] } } 
 *   },
 *   MODIFIED_VALUES: { 
 *     age: 31, address: { zip: '0000' } 
 *   } 
 * }
 */
```
## Installation
```
npm i json-version-control
```
## Usage
This package is for tracking the versions of the JSON objects.
You can import the package in your app with the following statement:
```javascript
const jsonVersionControl = require('json-version-control')
```
Imported object consists of two functions **createHistoryObject** & **restoreHistoryObject**.
Alternatively you can import these two functions with destructuring assignment:
```javascript
const { createHistoryObject, restoreHistoryObject } = require('json-version-control')
```
**createHistoryObject arguments:**
  * **versionNumber (Number) -** Which will be mapped to the returned historyObject.
  * **predecessorObject (Object) -** The predecessor version of the object which we are tracking.
  * **currentObject (Object) -** The new version of the object which we are tracking.
 
**Returns: historyObject (Object) - Which consists of four properties:**
  * **VERSION_NUMBER (Number) -** Version number which we pass this function as a first argument.
  * **CREATED_PROPERTIES (Object) -** The new properties which were created in the new version of the 
    object and didn't exist in the predecessor object.
  * **DELETED_PROPERTIES (Object) -** The properties which were in the predecessorObject and don't 
    exist on the current version of the object.
  * **MODIFIED_VALUES (Object) -** The propertie (which still exists on the current version of the object)
    values which were modified in the current version of the object.

**restoreHistoryObject arguments:**
  * **historyObjects (Array) -** This is an array, which consists of historyObjects which were created via 
    *createHistoryObject*. (I will write down bellow about this argument in great details, in a few minutes).
  * **currentObject (Object) -** The current version of the object that we are tracking.
  * **options (Object) -** JSON object, with option flags.
    * **considerVersionNumbers (Boolean) -** If set to true, then it processes the *historyObjects* argument by the version number.

**Returns: mergedObject (Object) -** Which is the oldest version of historyObjects, in the restored state.
## Some specs about the library
Purpose of this small library. Given the collection of JSON objects, which is stored in the database. After some period of time, the new set of objects are given, which represents the updated versions of existing ones. Tasks: 1) Store updated information 2) Catch differences (propertie creation, deletion & value modificataions). First of all if a dataset is large, intuitivley it will quickly run out of the memory, if already stored non modified data is stored again. Second task: how to catch deep differences of two JSON objects. These two functions, which this library provides, gives the solutions of the above tasks. If you have already overviewed the above example and the description of *createHistoryObject*, you probably have an idea what that function does, so based on that let's overview how we can restore previous versions of JSON objects, which are stored in the database, in the format that *createHistoryObject* function provides.
```javascript
const { createHistoryObject, restoreHistoryObject } = require('json-version-control')

const firstVersion = {
  name: 'Ashley',
  age: 31,
  hobbie: 'Painting',
  address: {
    state: 'Michigan',
    zip: '0000',
  },
  some: {
    other: {
      things: []
    }
  }
}

const secondVersion = {
  name: 'Ashley',
  age: 32,
  birthday: '1 Jan',
  address: {
    city: 'Detroit',
    zip: '0001'
  },
  some: {
    other: {
      info: {
        about: 'Ashley'
      }
    }
  }
}

const thirdVersion = {
  name: 'Ashley',
  education: 'MIT'
}

const historyObject0 = createHistoryObject(0, firstVersion, secondVersion)
const historyObject1 = createHistoryObject(1, secondVersion, thirdVersion)
const historyObjects = [historyObject0, historyObject1]

const options = { considerVersionNumbers: true }
const restoredPredecessor = restoreHistoryObject(historyObjects, thirdVersion, options)
/**
 * restoredPredecessor = {
 *   name: 'Ashley',
 *   age: 31,
 *   hobbie: 'Painting',
 *   address: {
 *     state: 'Michigan',
 *     zip: '0000',
 *   },
 *   some: {
 *     other: {
 *       things: []
 *     }
 *   }
 * }
 */
```
## restoreHistoryObject specs
When it is needed to restore predecessor version of the current object, predecessor historyObject and 
current version is merged. Let's say you have 0, 1, 2, 3, versions. Current version is 3. It is needed
to restore 0 version. Than following procedure goes on: merge(2, 3) => 2(resotred); merge(1, 2(restored))
=> 1(restored); merge(0, 1(restored)) => 0(restored).

License
------
MIT
