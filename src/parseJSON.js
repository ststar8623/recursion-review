// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (Number(json) === Number(json)) {
    return Number(json);
  } else if (json === 'null') {
    return null;    
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (json === undefined) {
    return;
  } else {  
    let first = json[0];
    let last = json[json.length - 1];
    if (first === '"' && last === '"') {
      return json.slice(1, json.length - 1);
    } else if (first === '[' && last === ']') {
      let arrayResult = [];
      let value = json.slice(1, json.length - 1).split(', ');
      for (let index = 0; index < value.length; index++) {
        arrayResult.push(parseJSON(value[index]));
      }
      return arrayResult;
    } else if (first === '{' && last === '}') {
      let objResult = {};
      let value = json.slice(1, json.length - 1).split(',');
      console.log(value);
      for (let i = 0; i < value.length; i++) {
        let value2 = value[i].split(':');
        console.log(value2);
        let key = value2[0];
        if (objResult[key] === undefined) {
          objResult[parseJSON(key)] = parseJSON(value2[1]);
        }
      } 
      return objResult;
    }
  }
};

console.log(parseJSON('{"a":[],"c": {}, "b": true}'));

const answer = {'a': [], 'b': {}, 'c': true};

