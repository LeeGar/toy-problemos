/* Check if there is a route between 2 nodes in a graph */

var Node = function(value, edges){  
  nodes[value] = {
    value: value,
    edges: edges
  };
  return nodes[value];
}

//an object containing all the nodes in the tree
var nodes = {};

//a and b are of type Node
//find out if there is a route from a to b

var getRoute = function(a,b) {
  var foundRoute = false;
  var route = {};
  
  function recurse (node) {
    //If the current node's value matches the target node's value, return true
    if (node.value === b.value) {
      return foundRoute = true;
    }

    //If there are any edges in the current node
    if (node.edges) {
      //Loop through all of the current node's edges
      for (var i=0; i < node.edges.length; i++) {
        //If any of the edges match the target value, return true
        if (node.edges[i].value === b.value) {
          return foundRoute = true;
        }
        //Otherwise if the edges contain edges, and the route we've been on doesn't circulate
        else if (node.edges[i].edges && !route.hasOwnProperty(node.edges[i].value)) {
          route[node.edges[i].value] = node.edges[i].value
          recurse(node.edges[i])
        }
      }
    }
  }
  recurse(a);
  return foundRoute;
};