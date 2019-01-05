
function findMissingLetter(array){
    let alphLowerArray;
   if(array[0].charCodeAt()>=65 && array[0].charCodeAt()<=90 ){
     
     alphLowerArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
     
   }
   else 
   {
     alphLowerArray = "abcdefghijklmnopqrstuvwxyz".split("")
     
   }
   let missingLetter;
   let arrayFromAlphabetToWorkWith;
   let firstElementFromArray = array[0];
   
   
   for (let i = 0; i < alphLowerArray.length; i++)
   {
     if(firstElementFromArray===alphLowerArray[i])
     {
       arrayFromAlphabetToWorkWith = alphLowerArray.slice(i)
     }
   }
   console.log(arrayFromAlphabetToWorkWith)
     if(arrayFromAlphabetToWorkWith.join("").includes(array.join(""))){
       return "haha"
     }
     else {
       
       for(let i = 0; i< arrayFromAlphabetToWorkWith.length; i++){ 
         
           console.log(array[i], arrayFromAlphabetToWorkWith[i])
           if (array[i]!==arrayFromAlphabetToWorkWith[i]){
               missingLetter = arrayFromAlphabetToWorkWith[i]
               break;
               
             // c d e f g h 
             // c d f
           
         }
       }
   
     }
     return missingLetter
   }