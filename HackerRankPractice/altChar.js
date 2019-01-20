// You are given a string containing characters A  and B only. 
// Your task is to change it into a string such that there are no matching 
// adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.

function alternatingCharacters(s) {
    let arr = s.split('');
    let deletedArr = []
    arr.forEach((el,index) =>{
      if(arr[index]==arr[index+1]) deletedArr.push(arr[index+1])
      // console.log(el,index)
    })
    console.log(deletedArr.length)
    return deletedArr.length
    }
