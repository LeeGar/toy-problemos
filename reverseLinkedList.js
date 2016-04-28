/* Reverse a single linked list */

function linkedList (val) {
	this.val = val;
	this.next = null;
};

//Iterative solution
var reverseList = function (list) {
	var current = list;
	var previous = null;

	while (current) {
		var nextLink = current.next;
		current.next = previous;
		previous = current;
		current = nextLink;
	}
	return previous
};


//Recursive Solution
var reverseList = function (list, previous) {
	previous = previous || null;
	if (list.next === null) {
		list.next = previous;
		return list;
	}
	var reversed = reverseList(list.next, list);
	list.next = previous;
	return reversed;
};


var newList = new linkedList(1);
newList.next = new linkedList(3);
newList.next.next = new linkedList(5);

console.log(reverseList(newList))


