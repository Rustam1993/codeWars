function cakes(recipe, available) {
    let howMany=[];
    let min;
    if((Object.keys(recipe).length > Object.keys(available).length )) return 0;
      for( properties in recipe){
  
      if(available[properties] >= recipe[properties]){
      howMany.push(Math.floor(available[properties]/recipe[properties]))
      }
    }
    min = Math.min(...howMany)
    return howMany.length == Object.keys(recipe).length ? min : 0
  }