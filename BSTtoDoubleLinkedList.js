function Tree(val) {
  this.val = val;
  this.left = this.right = null;
};

Tree.prototype.insert = function (value) {

	if (value > this.val) {
		if (!this.right) {
			this.right = new Tree(value);
		} else {
			
			//continue going down the tree until u can find a way to insert 
		}
	}
	if (value < this.val) {
		if (!this.left) {
			this.left = new Tree(value);
		} else {

			//continue going down until u can find left node to insert on
		}
	}

};

Tree.prototype.remove = function (value) {

};


function rotate (node) {

};



var newTree = new Tree(1);
newTree.insert(2);
newTree.insert(3);
newTree.insert(4);
newTree.insert(5);

console.log('newTree finished: ', newTree);