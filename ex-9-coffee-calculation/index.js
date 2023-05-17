const coffeePrice = 1.5;
const coffeeBill = [2, 4, 1, 6];

function getTotal(totalbill, numOfCopies) {
  return (totalbill += coffeePrice * numOfCopies);
}

let totalcoffeebill = coffeeBill.reduce(getTotal, 0);
console.log(`The total bill is $${totalcoffeebill}`);
