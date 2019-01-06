// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array

function getTotalX(a, b) {
    let arrA = [];
    let result = []
    
    for(let i=1; i<=100;i++){
      if(a.every((element) => (i % element) == 0 ? true : false )) arrA.push(i)
     }
    for(let i =0; i<=arrA.length; i++){
    
     if( b.every((element) => element % arrA[i] == 0 ? true : false)) result.push(arrA[i])
    
    } 
    return result.length
    }
    
    getTotalX([2,4],[16,32,96])