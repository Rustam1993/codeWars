function persistence(num) {
    let result;
    let counter = 0;
    let newArray = num.toString().split("")
    while(newArray.length>1){
    result=newArray.reduce((total,element)=>{return total*element},1)
    counter++
    newArray = result.toString().split("")
    
    }
    return counter
 }