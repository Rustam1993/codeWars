function dirReduc(arr){
  
    let resultArray = [];
    
    for(let direction of arr){
  
      let opposite;
  
      if(direction === 'NORTH') opposite = 'SOUTH'
      if(direction === 'SOUTH') opposite = 'NORTH'
      if(direction === 'EAST') opposite = 'WEST'
      if(direction === 'WEST') opposite = 'EAST'
  
      if(resultArray[0]===opposite){
        resultArray.shift()
      }
      else{
        resultArray.unshift(direction)
      }
      
    
      
  
    }
  
    return resultArray.reverse()
  
  }