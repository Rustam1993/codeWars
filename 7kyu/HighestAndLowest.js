function highAndLow(numbers){

    let min = Math.min(...numbers.split(' '))
    let max = Math.max(...numbers.split(' '))
    return `${max} ${min}`
  }