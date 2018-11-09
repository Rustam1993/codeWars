function whatTimeIsIt(angle){
    if ( angle > 360){
      return
    }
    if (angle ===0){
      angle+=360
    }
  
  
    let hours;
    let minutes;
    
    let everyHour = 30;
   
  
      if (angle < 30){
      minutes = angle*2
      return  minutes < 10 ? `12:0${Math.floor(minutes)}` : `12:${Math.floor(minutes)}`
      }
    else {
        hours = Math.floor(angle/everyHour)
        minutes = Math.floor((angle - hours*everyHour)*2)
        if (hours<10) hours = "0"+hours
        if(minutes<10) minutes = "0" + minutes
        return `${hours}:${minutes}`
       
    }
    return hours
  }