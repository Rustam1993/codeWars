// Seek and Destroy alg
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.



function destroyer(arr) {
    let args= [];
    for(let i=1; i< arguments.length; i++){
        args.push(arguments[i])
    }
    let res = [];
    for(let i = 0; i < arr.length; i++){
       if(!args.includes(arr[i])) res.push(arr[i])
    }
    return res;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);