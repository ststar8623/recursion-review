// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const isObject = function(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

const stringifyArray = function(obj) {
  return '[' + obj.map(function(item) {
    return stringifyJSON(item);
  }).join(',') + ']';
};

const stringifyObject = function(obj) {
  const strings = [];
  for (let key in obj) {
    if (obj[key] === undefined || typeof obj[key] === 'function') {
      return '{}';
    }
    strings.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  }
  return '{' + strings.join(',') + '}';
};

const stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (isObject(obj)) {
    return stringifyObject(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  } else {
    return obj + '';
  }
};

module.exports = {
  stringifyJSON: stringifyJSON
};