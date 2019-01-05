function digPow(n, p){
    let result;
    let hNum = [];
    let newArray = n.toString().split("");
    let finalNumberArray = [];
    console.log(newArray)
  
    for (let i=0; i<newArray.length; i++){
      hNum.push(p+i)
    }
    console.log(hNum)
    
      for(let i = 0; i< hNum.length; i++){
  
      finalNumberArray.push(Math.pow(newArray[i],hNum[i]))
      }
    
    console.log(finalNumberArray)
  
    result =  finalNumberArray.reduce((total,element) =>{
     return total+element
   },0)
    return (result % n) == 0 ? result/n : -1
  }