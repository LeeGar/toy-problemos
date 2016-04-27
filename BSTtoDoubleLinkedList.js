function Tree(val) {
  this.val = val;
  this.left = this.right = null;
};

function doubleLinkedList (val) {
	this.val = val;
	this.prev = this.next = null;
};

//Use Breadth-first search to traverse the tree for manipulation

function treeToList (root) {
	if (root === null) {
		return null;
	};

	treeToList(root.left)

};


var top = new Tree(1);
top.left = new Tree(2);
top.right = new Tree(5);
top.left.left = new Tree(3);
top.left.right = new Tree(4);
top.right.right = new Tree(6);

console.log(treeToList(top))