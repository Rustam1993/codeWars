function orderWeight(strng) {
    let weights = strng.split(' ');

    weights.sort(function(a, b) {
      let aSum = 0;
      for (let i = 0; i < a.length; i++) {
        aSum += parseInt(a[i]);
      }
      let bSum = 0;
      for (let j = 0; j < b.length; j++) {
        bSum += parseInt(b[j]);
      }

      if (aSum === bSum) {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }

      } else if (aSum < bSum) {
        return -1;
        }
      return 1;
    });

    return weights.join(" ");
}