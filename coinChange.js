function coinChange (coins, amount) {
  var results = [];

  coins = coins.sort(function (a,b) {
    return b - a
  });

  for (var i=0; i < coins.length; i++) {
    results[i] = 0;
  }
  //While the amount is still greater than 0, continue incrementing J
  for (var j=0; amount > 0; j++) {
    //Current coin value = Max number of coins that can fit into the current amount
    results[j] = Math.floor(amount / coins[j]);
    // Total amount is now equal to the total value of the coins so far (i.e. 2 nickels = 10 cent, total amount = x - 10 cent)
    amount = amount - (results[j] * coins[j])
  }
  return results
};

console.log(coinChange([5,2,1], 11))