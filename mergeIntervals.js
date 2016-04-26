function mergeIntervals (intervals) {
  var intervalsCopy = intervals.slice();

  for (var i=0; i < intervalsCopy.length; i++) {
    if (intervalsCopy[i+1]) {
      if (intervalsCopy[i][1] >= intervalsCopy[i+1][0]) {
        intervalsCopy.splice(i, 2, [intervalsCopy[i][0], intervalsCopy[i+1][1]])
      } else if (intervalsCopy[i] === intervalsCopy[i+1]) {
        intervalsCopy.splice(i, 1)
      }
    }
  }
  return intervalsCopy;
};

//console.log(mergeIntervals([[1,3], [2,6], [8,10], [15,18]]))