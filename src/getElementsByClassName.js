// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


const visitAllNodes = function(node, callback) {
  node.childNodes.forEach(el=> visitAllNodes(el, callback)); 
  callback(node);
};

const flattenTreeToArray = function(node) {
  let result = [];
  visitAllNodes(node, child => result.push(child));
  return result;
};


var getElementsByClassName = function(className) {
  const html = document.body;
  const flattenArray = flattenTreeToArray(html);
  const foundNodes = [];

  flattenArray.forEach((el) => {
    if ((el.className !== undefined) && el.className.indexOf(className) !== -1) {
      foundNodes.push(el);
    }
  });
  console.log(foundNodes);
  return foundNodes;
};