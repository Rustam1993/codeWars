// Mark and Jane are very happy after having their first child. 
// Their son loves toys, so Mark wants to buy some. There are a number of different toys
//  lying in front of him, tagged with their prices. Mark has only a certain amount to spend, 
// and he wants to maximize the number of toys he buys with this money.




function maximumToys(prices, k) {

    let result = [];
    prices.sort((a, b) => a - b)

    for (let i = 0; i < prices.length; i++) {

        if (k >= prices[i]) {
            result.push(prices[i]);
            k -= prices[i];
        }


    }
    console.log(result.length)
    return result.length
}