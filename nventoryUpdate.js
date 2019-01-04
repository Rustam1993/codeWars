/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

*/


function updateInventory(arr1, arr2) {
    let addTocurInv = []; // that's what will need to add to curInv elements
    let addNew = [];
    arr1.sort((a,b) => a[1] > b[1])
    arr2.sort((a,b) => a[1] > b[1])
    
    
    for( let i = 0 ; i < arr1.length; i++){
     for(let j = 0 ; j < arr2.length; j++){
       if(arr1[i][1] == arr2[j][1]){
         arr1[i][0]+=arr2[j][0];
         arr2.splice(arr2.indexOf(arr2[j]),1)
       } 
     }
    }
    
      console.log([...arr1, ...arr2].sort((a,b) => a[1] > b[1]))
     return [...arr1, ...arr2].sort((a,b) => a[1] > b[1])
    }
    