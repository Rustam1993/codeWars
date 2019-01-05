function lastDayIsFriday(initialYear,endYear){
    if (initialYear === undefined) {
             initialYear = endYear;
       }
     if(endYear === undefined ){
       endYear = initialYear;
     }
    
    
    let counter = 0;
    
    
    let weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let monthsOfYear = new Array(12);
    monthsOfYear[0] = "January"
    monthsOfYear[1] = "February"
    monthsOfYear[2] = "March"
    monthsOfYear[3] = "April"
    monthsOfYear[4] = "May"
    monthsOfYear[5] = "June"
    monthsOfYear[6] = "July"
    monthsOfYear[7] = "August"
    monthsOfYear[8] = "September"
    monthsOfYear[9] = "October"
    monthsOfYear[10] = "November"
    monthsOfYear[11] = "December"
    for (let i = initialYear; i <= endYear; i++){
    for (let j = 0; j < monthsOfYear.length; j++){
    let year1  =  new Date(i);
    
    year1.setFullYear(i);
    
    fullYear1 = year1.getFullYear();
    
    let lastDay1 = new Date(fullYear1,j + 1, 0)
    
    
    if (weekday[lastDay1.getDay()]==="Friday"){
     counter++
    
    }
    
    }
    }
    return counter
    }
    lastDayIsFriday(2017)