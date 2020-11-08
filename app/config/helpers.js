function camelize(obj) {
  let newObj, origKey, newKey, value;
  if (obj instanceof Array) {
    return obj.map(function (value) {
      if (typeof value === 'object') {
        value = camelize(value);
      }
      return value;
    });
  } else {
    newObj = {};
    for (origKey in obj) {
      if (obj.hasOwnProperty(origKey)) {
        newKey = (
          origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
        ).toString();
        value = obj[origKey];
        if (
          value instanceof Array ||
          (value !== null && value.constructor === Object)
        ) {
          value = camelize(value);
        }
        newObj[newKey] = value;
      }
    }
  }
  return newObj;
}

export default {
  camelize,
};
