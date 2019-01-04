Math.round = function(number) {
    if(Number.isInteger(number)) return number
    let howMany;
    let decRes = number.toString().split('.')[1]
    let intRes = number.toString().split('.')[0]
    howMany = 10 ** decRes.length
    console.log(howMany)
    return decRes < (howMany/2) ?  Number(intRes)  : Number(intRes) + 1
    
  };
  
  Math.ceil = function(number) {
    if(Number.isInteger(number)) return number;
    let decRes  = number.toString().split('.')[1]
    let intRes = number.toString().split('.')[0]
    let howMany =  10 ** decRes.length
    return decRes.length ? Number(intRes) + 1    : number
  
  };
  
  Math.floor = function(number) {
    if (Number.isInteger(number)) return number
    let intRes = number.toString().split('.')[0];
    return Number(intRes)
  };