var sum_pairs = function(ints, s){
    let alreadySeen = {};
  
    for(let i =0; i < ints.length; i++){

      let numberNeeded = s - ints[i]
      
       if(alreadySeen[numberNeeded]){
         
       return [numberNeeded, ints[i]];
       } 
      alreadySeen[ints[i]] = true
    }
  }