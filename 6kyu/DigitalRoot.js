function digital_root(n) {
    let result;
      while(n>9){
      result = n.toString().split('').reduce((total,el) => (Number(total)+Number(el)),0)
      n=result
      }   
    return n
  }