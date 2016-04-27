function Tree (val) {
	this.val = val;
	this.left = this.right = null;
};

function verticalSum (tree) {
	var hashMap = {};
	var results = [];


	function traverse (node, distance) {
		if (!node) {
			return;
		}
		if (hashMap[distance] === undefined) {
			hashMap[distance] = 0;
		}
		hashMap[distance] = hashMap[distance] + node.val;
		traverse(node.left, distance - 1);
		traverse(node.right, distance + 1);
	}
	traverse(tree, 0);

	for (var key in hashMap) {
		results.push(hashMap[key]);
	};
	results.sort(function (a, b) {
		return b - a
	});

	return results[0];
};


var top = new Tree(1);
top.left = new Tree(2);
top.right = new Tree(3);
top.left.left = new Tree(4);
top.left.right = new Tree(5);
top.right.left = new Tree(6);
top.right.right = new Tree(7);

console.log(verticalSum(top));