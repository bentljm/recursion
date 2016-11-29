// this is what you would do ifyou liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // obj = null
  if(obj === null) {
    return "null";
  }
  // obj is unstringifiable - functions and undefined
  if(typeof obj === 'undefined' || typeof obj === 'function') { 
  	return; 
  }
  // obj is string
  if(typeof obj === "string") {
    return '"' + obj + '"';
  }
  // obj is array
  if(Array.isArray(obj)) {
  	//tests whether obj is not empty
    if(obj.length) {
      var stringified = [];
      for(var i = 0; i < obj.length; i++) {
      	var element = obj[i]
      	//go thru and stringify each element of array and add result to stringified
        stringified.push(stringifyJSON(element));
      }
      //join array and add brackets
      return '[' + stringified.join(",") + ']';
    } else {
      return '[]';
    }
  }
  // obj is object
  if(typeof obj === "object") {
  	//get all properties of obj
    var keys = Object.keys(obj);
    if(keys.length) {
      var stringified = '';
      //loop thru array of properties of object
      for(var i = 0; i < keys.length; i++) {
        var key = keys[i];
        //tests whether key and obj[key] are stringifiable
        if(typeof key !== 'function' && typeof obj[key] !== 'function' && typeof obj[key] !== "undefined") {
          //stringifies key and obj[key] with : in between and/or , at the end
          if(i === keys.length - 1) {
            stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); 
          } else {
            stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','; 
          }
        }
      }
      //return string with curly brackets
      return '{' + stringified + '}';
    } else {
      return '{}';
    }
  }

  // Everything else
  return obj.toString();

};

