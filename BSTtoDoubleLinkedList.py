class DoublyLL(object):
    def __init__(self, val, prev=None, nex=None):
        self.val = val
        self.prev = prev
        self.next = nex
 
class BSTNode(object):
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    def in_order_generator(self):
        if self.left:
            for val in self.left.in_order_generator():
                yield val
        yield self.val
        if self.right:
            for val in self.right.in_order_generator():
                yield val
 
def convert_bst_doubly_LL(root):
    cnt = 0
    prev_LL = None
    for val in root.in_order_generator():
        if cnt == 0:
            prev_LL = DoublyLL(val)
            first_node = prev_LL
        else:
            curr_LL = DoublyLL(val)
            curr_LL.prev = prev_LL
            prev_LL.next = curr_LL
            prev_LL = curr_LL
        cnt += 1
    last_node = curr_LL
    last_node.next = first_node
    first_node.prev = last_node
 
    return first_node


def f(n):
    if n <= 0:
        return 0
    return n + f(int(n/2))

x = f(4)

print x