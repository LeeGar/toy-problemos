/** FLATTEN binary tree to a SINGLE linked list
 * Definition for a binary tree node. */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var flatten = function (root) {
	var stack = [];

	//while the root exists or the stack isn't empty
	while (root !== null || stack.length !== 0) {
		//If there's stuff in the right branch, push it to the stack
		if (root.right !== null) {
			stack.push(root.right);
		}
		//If there's stuff in the left branch, fuck the left, move to right
		if (root.left !== null) {
			root.right = root.left;
			root.left = null;
			//If there's actually stuff in the stack, pop the top, and set that as the right branch
		} else if (stack.length !== 0) {
			var node = stack.pop();
			root.right = node;
		}
		//Crucial step: point the root towards its' right branch
		root = root.right;
	}
};

var top = new TreeNode(1);
top.left = new TreeNode(2);
top.right = new TreeNode(5);
top.left.left = new TreeNode(3);
top.left.right = new TreeNode(4);
top.right.right = new TreeNode(6);

console.log(flatten(top));

console.log('top : ', top)