var Tree = function (value) {
	this.value = value;
	this.left = this.right = null;
};

Tree.prototype.insert = function (value) {
	var newNode = new Tree(value);
	console.log('this: ', this)
	console.log('newNode: ', newNode)

	var hashMap = {};

	if (!this.right || !this.left) {
		if (value > this.value) {
			this.right = newNode;
		}
		if (value < this.value) {
			this.left = newNode
		}
	} else {

	}

};

Tree.prototype.find = function (value) {

};

Tree.prototype.remove = function (value) {

};

function traverse (root) {

	if (root.value === undefined) {
		return false;
	}

	if (root.left) {
		traverse(root.left);
	}
	
	if (root.right) {
		traverse(root.right);
	}

};

var newTree = new Tree(1);
newTree.insert(2);
newTree.insert(3);
newTree.insert(4);
newTree.insert(5);
newTree.insert(6);

console.log('newTree finished: ', newTree);

