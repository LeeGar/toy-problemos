/* Implement quick sort */

/* 
PROS: Quick sort uses a divide and conquery method, that trumps merge sort
since it saves on space complexity. 
BEST CASE: O(n * Log(n)) time complexity 
WORST CASE: O(n^2) time complexity
CONS: The pivot might not actually be at the half, 
which then the function will execute without splitting to O(log(n)) time
*/


function swap (array, left, right) {
	var temp = array[left];
	//console.log('before swap left: ', temp)
	//console.log('before swap right: ', array[right])
	array[left] = array[right];
	array[right] = temp;
};

function partition (array, left, right) {
	//Create a pivot point that splits down the middle of the given array
	var pivot = array[Math.floor((left + right)/2)];

	//While the left pointer is less than or = to the right pointer
	while (left <= right) {
		//While the element at the left pointer is less than pivot, increase left
		while (array[left] < pivot) {
			left++;
		};
		//While the element at the right pointer is greater than pivot, decrease right
		while (array[right] > pivot) {
			right--;
		};
		//If left is still less than right after the criteria is met above, swap the two elements, then close in the walls
		if (left <= right) {
			swap(array, left, right);
			left++;
			right--;
		};
	};
	return left;
};

function quickSort (array, left, right) {
	//Provide defaults for left/right if none are given
	left = left || 0;
	right = right || array.length-1;

	//Get the index from partition
	var index = partition(array, left, right);

	//console.log('index: ', index, 'left: ', left, 'right: ', right);

	if (array.length > 1) {
		//If left is LESS than the current index, recursively call again with a decreased right pointer
		if (left < index - 1) {
			quickSort(array, left, right - 1);
		};
		//If the index is LESS than the right pointer, recursively call with index as the left pointer
		if (index < right) {
			quickSort(array, index, right)
		};
	};
	return array;
};


console.log(quickSort([5,4,1,8,2]))