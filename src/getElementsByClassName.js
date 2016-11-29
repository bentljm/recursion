// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //create new empty array to hold elements
  var elements = [];
  //search function that inspects nodes
  function search(parentNode, elements, className){
  	//find childNodes of given element
    var nodes = parentNode.childNodes;
    for (var i = 0; i < nodes.length; i++){
    	var node = nodes[i];
    	//find class list of node
        var classes = node.classList;
        //tests whether target className is in class list
        if (classes && classes.contains(className)) {
            elements.push(node);
        }
        if (node.childNodes[0]){
            search(node, elements, className);
        }
    }
  }
  //call search function
  search(document, elements, className);

  return elements;

};


