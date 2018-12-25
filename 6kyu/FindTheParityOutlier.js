function findOutlier(integers){
    let evenAr = [];
    let oddAr  = [];
    
    let checkAr = [];
    let result;
    checkAr.push(integers[0],integers[1],integers[2])
    for(let i=0; i<checkAr.length;i++){
      if(checkAr[i] % 2 === 0 ) evenAr.push(checkAr[i])
      else oddAr.push(checkAr[i])
    }
    if(evenAr.length > oddAr.length ){
    for(let i = 0; i < integers.length; i++){
      if(integers[i] % 2 !== 0) result = integers[i]
      }
    }
    else{
      for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 ===0) result = integers[i]
      }
    }
    
    return result
    }