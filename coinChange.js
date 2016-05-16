
// Greedy Algorithm 
// function coinChange (coins, amount) {
//   var results = [];

//   coins = coins.sort(function (a,b) {
//     return b - a
//   });

//   for (var i=0; i < coins.length; i++) {
//     results[i] = 0;
//   }
//   //While the amount is still greater than 0, continue incrementing J
//   for (var j=0; amount > 0; j++) {
//     //Current coin value = Max number of coins that can fit into the current amount
//     results[j] = Math.floor(amount / coins[j]);
//     // Total amount is now equal to the total value of the coins so far (i.e. 2 nickels = 10 cent, total amount = x - 10 cent)
//     amount = amount - (results[j] * coins[j])
//   }
//   return results
// };


//Recursive solution

function coinChange (coins, amount) {

  if (amount === 0) {
    return 0;
  }
  if (coins.length === 0 && amount > 0) {
    return 'No coins found'
  }
  //If the first coin is greater than target
  if (coins[0] > amount) {
    //Recursively call again with the next coin on the list
    return coinChange(coins.slice(1), amount);
  } else {
    //loseIt = recursive call on the next coin on the list
    var loseIt = coinChange(coins.slice(1), amount);
    //keepit = recursive call subtracting the value of the first coin from target total
    var keepIt = coinChange(coins, amount - coins[0]);


  }

};

console.log(coinChange([1,2,5], 11))