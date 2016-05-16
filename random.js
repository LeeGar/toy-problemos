function findDiscounted(prices){
  //your code here
  var storage = {};
  var results = [];
  
  var all = prices.split(' ');
  for (var i=0; i < all.length; i++) {
    if (storage[all[i]]) {
      console.log('exists already')
    } else {
      storage[all[i]] = all[i] * .75
    }
  }
  for (var j=0; j < all.length; j++) {
    console.log('... ', all[j])
    if (storage.hasOwnProperty(all[j] * .75)) {
      results.push(all[j] * .75)
    }
  }
  console.log('storage: ', storage);
  console.log('results: ', results.join(' '))
}


console.log(findDiscounted("9 9 12 12 12 15 16 20"));