// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  let first = json[0];
  let last = json[json.length - 1];
  if (first === '[' && last === ']') {
    let res = [];
    let value = json.slice(1, json.length - 1).replace(/"/gi, '').replace(' ', '').split(',');
    for (let index = 0; index < value.length; index++) {
      res.push(parseJSON(value[index]));
    }
    return res;
  } else if (first === '{' && last === '}') {
    let res = {};
    let value = json.slice(1, json.length - 1).split(':');
    
    return value;
  } else if (Number(json) === Number(json)) {
    return Number(json);
  }
};

console.log(parseJSON('{"a": "b", "c": "d"}'));


