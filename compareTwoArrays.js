//Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    let newArr = [...arr1,...arr2];
    let resultArr = []
    console.log(newArr)
    for(let i =0; i< newArr.length; i++){
      if( !( arr1.includes(newArr[i]) && arr2.includes(newArr[i])  )   ){
        resultArr.push(newArr[i])
      }
    }
    console.log(resultArr)
    return resultArr
    }
    
