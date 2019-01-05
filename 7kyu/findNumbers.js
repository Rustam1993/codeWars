function divisibleBy(numbers, divisor){
    let newArr = [];
    numbers.forEach((number)=>{
      if(number%divisor===0) newArr.push(number)
    })
    return newArr;
  }