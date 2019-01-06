function rotLeft(a, d) {
    while (d>0){
      console.log('original array',a)  
      let firstEl = a[0];
      a.shift();
      a.push(firstEl);
      d--
    }
    return a
    }