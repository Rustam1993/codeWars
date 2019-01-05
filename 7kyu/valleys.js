function countingValleys(n, s) {


    let valleys = 0;
    let path = 0;
    for (let  i=0; i < s.length; i++ ){
      if(s[i]=== "D" && path === 0) {
        valleys++
      }
      
      switch(s[i]){
        case "D":
        path--;
        break;
        case "U":
        path++
        break;
      }
    }
    return valleys;
    
    }
    
    
    countingValleys(8, "UDDDUDUU");