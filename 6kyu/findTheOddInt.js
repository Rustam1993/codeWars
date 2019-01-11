// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.





function findOdd(arr) {

    let obj = {};
    let num = 1;
    let result;
    for(let i=0; i< arr.length; i++){
    if(!obj[arr[i]]) obj[arr[i]] = num;   
    else obj[arr[i]]+=1;
    }
    for(properties in obj){ 
      if(obj[properties] % 2 === 1)   result = properties
    }
    return Number(result)
  }