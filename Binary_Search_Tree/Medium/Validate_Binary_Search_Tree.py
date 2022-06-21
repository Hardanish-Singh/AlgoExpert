# This is an input class. Do not edit.
"""
        Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.
        Each BST node has an integer value, a left child node, and a right child node. 
        A node is said to be a valid BST node if and only if it satisfies the BST property: 
                1) its value is strictly greater than the values of every node to its left; 
                2) its value is less than or equal to the values of every node to its right; 
                3) its children nodes are either valid  BST nodes themselves or None / null.
        A BST is valid if and only if all of its nodes are valid  BST nodes.
"""

class BST:
        def __init__(self, value):
                self.value = value
                self.left = None
                self.right = None


def checkIsValidBST( root, leftParentNodeValue, rightParentNodeValue ):
        if root is None:
                return True
        if root.value >= leftParentNodeValue:
                return False
        if root.value < rightParentNodeValue:
                return False

        left = checkIsValidBST( root.left, root.value, rightParentNodeValue )
        right = checkIsValidBST( root.right, leftParentNodeValue, root.value )
        
        if left and right:
                return True
        else:
                return False

def validateBst(root):
        return checkIsValidBST( root, float("inf"), -float("inf") )