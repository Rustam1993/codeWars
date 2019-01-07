function bonAppetit(bill, k, b) {
    bill.splice(k,1);
    let sum = bill.reduce((total,element) => element+total,0);
    return sum/2 == b ? 'Bon Appetit'  :  b - sum/2
    }