function updateObjectWithKeyAndValue(object, key, value) {
  const newObject = Object.assign(object, {[key]: value});
  return newObject;
}
