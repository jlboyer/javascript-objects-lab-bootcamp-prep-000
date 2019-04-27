var recipes = {}; /*var recipes = new Object() */

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
};

function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({}, object)
  return delete newobj[key]
};

function destructivelyDeleteFromObjectByKey(object, key) {
  /*return delete object.key does not work because key is a variable!*/
  return delete object[key]
};
