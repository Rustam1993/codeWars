function translatePigLatin(str) {
    let vowels = ["a","e","i","o","u"];
    let str1 = '';
    if(vowels.includes(str[0])) return str+='way'
    else{
      for(let i =0; i< str.length;i++){
        if(!vowels.includes(str[i])){
            str1+=str[i];
            if(!vowels.includes(str[i+1])){
              continue
            }
            else{
              break
            }
        }
      }
    }
    
    let lastLet = str1[str1.length-1];
    
    str = str.substr(str.indexOf(lastLet)+1)
    console.log(str)
    return str+str1+'ay';
  }
  
  translatePigLatin("eightway");