function bigToSmall(arr){
  let newArr = [].concat(...arr);
  return newArr.sort((a,b)=> b-a).join(">");
   
 }