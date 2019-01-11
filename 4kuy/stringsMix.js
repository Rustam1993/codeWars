function mix(s1, s2) {
    let obj1 = {};
    let obj2 = {};
    let obj3 = {};
    let resultArr = [];
  
   let str1 = s1.replace(/[^a-z]/g,'').split('').sort();
   let str2 = s2.replace(/[^a-z]/g,'').split('').sort();
  
  for(let i = 0; i< str1.length; i++){
    if(obj1[str1[i]]) obj1[str1[i]]++;
    else obj1[str1[i]]=1;
  }
  for(let i = 0; i< str2.length; i++){
    if(obj2[str2[i]]) obj2[str2[i]]++;
    else obj2[str2[i]]=1;
  }
  
  for(property in obj1){
    if(obj2[property] && (obj1[property]>1 || obj2[property]>1)){
      if(obj1[property] == obj2[property]) obj3[property] = '=:'+property.repeat(obj1[property]);
      else if(obj1[property] > obj2[property]) obj3[property] = `1:${property.repeat(obj1[property])}`;
      else if(obj1[property] < obj2[property]) obj3[property] = `2:${property.repeat(obj2[property])}`;
    }
  }
  
  for(property in obj3){
    resultArr.push(obj3[property]);
  }
  console.log(resultArr)
  
  for(let i=0; i<resultArr.length;i++){
    resultArr[i] = resultArr[i].split(':')
  }
  console.log(resultArr)
  }
  
  
  mix('looping is fun but dangerous', 'less dangerous than coding');
  
  
  // let b = '1234';
  
  // let a = b.repeat(2);
  
  // console.log(a,b)