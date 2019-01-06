
function sockMerchant(n, ar) {
    let counter=0;
    ar.sort((a,b) =>a-b)
    console.log(ar)
    for(let i =0; i<ar.length; i+=2){
      if(ar[i] == ar[i+1]) {
        counter++
      }
      else i--
      // else{
      //   ar = ar.slice(i)
      // }
    }
    return counter
    }