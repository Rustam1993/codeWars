function migratoryBirds(arr) {
    let counter = {};
    let maxValue = 0;
    let arr1 = [];
    
    arr.forEach(i => counter[i] = (counter[i] || 0) + 1 )
    
    
    
    for(let property in counter ){
    
    if(counter[property] > maxValue){
      maxValue = counter[property] 
     }
    }
    
    for(let property in counter){
    
    if(counter[property] == maxValue ) arr1.push(property)
    
    }
    
    let minResult = Math.min(...arr1);
    
    return minResult
    }