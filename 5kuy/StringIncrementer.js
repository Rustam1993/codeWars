function incrementString (strng) {

    if( isNaN(strng[strng.length-1])  ){
      return strng+='1'
    }
    else{
    
      let numberFromString = strng.match(/\d/g)
      let newString = strng.substr(0,strng.indexOf(numberFromString[0]))
      numberFromString[numberFromString.length-1]++
    
      
    
      for(let i =numberFromString.length; i>0; i--){
        if(numberFromString[i]>9){
          numberFromString[i]=0;
          numberFromString[i-1]++;
        }
      }
      return newString+numberFromString.join("")
    
    }
    
    }