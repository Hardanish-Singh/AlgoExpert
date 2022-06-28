"""
        The distance between a node in a Binary Tree and the tree's root is called the node's depth.
        Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
        Each BinaryTree node has an integer value, a left child node, and a right child node. 
        Children nodes can either be BinaryTree nodes themselves or None / null.

        Sample Input:
                      tree =    1
                             /     \
                            2       3
                          /   \   /   \
                         4     5 6     7
                       /   \
                      8     9

        Sample Output:
                        16
        Explanation:
                        1) The depth of the node with value 2 is 1.
                        2) The depth of the node with value 3 is 1.
                        3) The depth of the node with value 4 is 2.
                        4) The depth of the node with value 5 is 2.
                        5) The depth of the node with value 6 is 2.
                        6) The depth of the node with value 7 is 2.
                        7) The depth of the node with value 8 is 3.
                        8) The depth of the node with value 9 is 3.
                        Summing all of these depths yields 16 ( 1 + 1 + 2 + 2 + 2 + 2 + 3 + 3 )
"""



"""
        SOLUTION 1: RECURSIVE
"""

class BinaryTree:
        def __init__( self, value ):
                self.value = value
                self.left = None
                self.right = None


def nodeDepths( root, sum = 0 ):
        if root is None:
                return 0

        left = nodeDepths( root.left, sum + 1 )
        right = nodeDepths( root.right, sum + 1 )

        return sum + left + right

"""
        SOLUTION 2: ITERATIVE
"""

# This is the class of the input binary tree.
class BinaryTree:
        def __init__( self, value ):
                self.value = value
                self.left = None
                self.right = None

def nodeDepths( root ):
        sum = 0
        stack = [ [ root, 0 ] ]

        while len( stack ) > 0:
                node, depth = stack.pop()
                if node is None:
                        continue
                sum = sum + depth
                if node.left:
                        stack.append( [ node.left, depth + 1 ] )
                if node.right:
                        stack.append( [ node.right, depth + 1 ] )

        return sum