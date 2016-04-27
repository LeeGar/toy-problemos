function Tree (val) {
	this.val = val;
	this.left = this.right = null;
};


function horizontalSum (tree) {
	var hashMap = {};
	var results = [];

	hashMap[0] = tree.val;

	function traverse (left, right, depth) {
		if (left === null && right === null) {
			return;
		}
		if (hashMap[depth] === undefined) {
			hashMap[depth] = [];
		}
		if (left || right) {
			hashMap[depth].push(left.val);
			hashMap[depth].push(right.val);
		}
		traverse(left.left, left.right, depth+1);
		traverse(right.left, right.right, depth+1);
	};

	traverse(tree.left, tree.right, 1);
	return hashMap
};


var top = new Tree(1);
top.left = new Tree(2);
top.right = new Tree(3);
top.left.left = new Tree(4);
top.left.right = new Tree(5);
top.right.left = new Tree(6);
top.right.right = new Tree(7);

console.log(horizontalSum(top));