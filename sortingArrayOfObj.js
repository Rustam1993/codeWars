
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection 
// if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    // What's in a name?
    let sourceKeys = Object.keys(source);
    let arr = [];
    return collection.filter((element) =>{
      for(let i= 0; i < sourceKeys.length; i++){
        if(!element.hasOwnProperty(sourceKeys[i]) || element[sourceKeys[i]] !== source[sourceKeys[i]] ) return false;
      }
      return true
    })
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2});