function digPow(n, p){
    let string = n.toString();
    let stepenArray = [];
    let resultArray = [];
    let sum = []
    stepenArray[0] = p;
    
    
    for(let i = 1; i < string.length; i++){
        stepenArray.push(stepenArray[stepenArray.length-1]+1)
    }
  for(let i =0; i < string.length; i++){
  
    resultArray.push( Math.pow( Number(string[i]),  stepenArray[i]  ))
    
  
  }
    
    sum = resultArray.reduce((total,el) => total+el,0)
    
    
    return Number.isInteger(sum / n )  ?  (sum/n) : -1
   }