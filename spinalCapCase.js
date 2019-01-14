// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
    let firstLet  = str[0];
    let arr = str.split('');
    let resString=''
  
    
    for( let i =1; i< arr.length;i++){
    
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)  resString+='-'+arr[i]; 
      else if(str.charCodeAt(i) >=97 && str.charCodeAt(i) <=122) resString+=arr[i];
      else if(str.charCodeAt(i)==32 || str.charCodeAt(i)==95)  resString+='-';
  
      else resString = resString + '-'+arr[i];
  
      
    }
    firstLet+=resString
    let arr2 = firstLet.split('');
    for(let i = 0; i<arr2.length-1;i++){
      if(arr2[i]=='-' && arr2[i+1]=='-'){
        arr2.splice(i,1)
      }
    }
    console.log(arr2.join('').toLowerCase())
    
  
    return arr2.join('').toLowerCase()
    
  }