function  canBuyTwoItems(budget, prices) {
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] <= budget) {
        return "possible";
      }
    }
  }
  return "not possible";
}
let budget=10;
let prices=[4,5,7];
console.log(canBuyTwoItems(budget,prices))