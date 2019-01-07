function countingValleys(n, s) {
    let startedPoint=0;
    let valleys = 0;
    for(let i = 0; i< s.length; i++){
      if(startedPoint==0 && s[i]=='D') valleys++
      if(s[i] == 'U') startedPoint++
      if(s[i] == 'D') startedPoint--
      
        
    }
    return valleys
    }