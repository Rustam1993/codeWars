// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.



function timeConversion(s) {
    if(s.includes('12:00:00AM')) return '00:00:00'
    if(s.includes('12:00:00PM')) return '12:00:00'
    let arr = s.split(':')
   
   console.log(arr)
   // AM handle
    if(s.includes('AM') && arr[0] == '12' ) return `00:${arr[1]}:${arr[2].substr(0,2)}`
    if(s.includes('AM') && arr[0] < 12)    return `${arr[0]}:${arr[1]}:${arr[2].substr(0,2)}`
     
   // PM handle
     if(s.includes('PM') && arr[0] == '12' ) return `12:${arr[1]}:${arr[2].substr(0,2)}`
     if(s.includes('PM') && arr[0] < 12)    return `${Number(arr[0])+12}:${arr[1]}:${arr[2].substr(0,2)}`
   }
   
   timeConversion('06:40:03AM')
   
   
   
   