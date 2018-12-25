function solution(number){
    let resultArray =[]
    for(let i = 0; i< number; i++){
      if(i % 3 === 0 || i % 5 ===0) resultArray.push(i)
    }
    return resultArray.reduce((total,el) => total+el,0)
  }