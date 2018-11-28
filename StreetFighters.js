function streetFighterSelection(fighters, position, moves){
    // 0-5
    // 0-5
    let chosenCharacterPosition = position;
    
    let latestChar = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]]
    let chosenCharacter = latestChar;
  
    let resultArray =[];
  
  
    for(let i=0; i<moves.length; i++){
      switch(moves[i]){
        case 'up':
        if(chosenCharacterPosition[0]==0){
          chosenCharacterPosition[0] = 0;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
          resultArray.push()
        }
        else {
          chosenCharacterPosition[0]-=1;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        resultArray.push(chosenCharacter)
        break;
  
        case 'down':
        if(chosenCharacterPosition[0]==1){
          chosenCharacterPosition[0]=1;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        else{
          chosenCharacterPosition[0]+=1;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        resultArray.push(chosenCharacter)
        break;
        case 'left':
        if(chosenCharacterPosition[1]==0){
          chosenCharacterPosition[1]=5;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        else{
          chosenCharacterPosition[1]-=1;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        resultArray.push(chosenCharacter)
        break;
  
  
        case 'right':
        if(chosenCharacterPosition[1]==5){
          chosenCharacterPosition[1]=0;
          chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        else{
          chosenCharacterPosition[1]+=1;
           chosenCharacter = fighters[chosenCharacterPosition[0]][chosenCharacterPosition[1]];
        }
        resultArray.push(chosenCharacter)
        break;
      }
    }
  
  
    console.log(resultArray)
    return resultArray;
  
  }