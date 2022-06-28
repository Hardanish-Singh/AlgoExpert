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