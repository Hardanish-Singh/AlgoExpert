"""
        Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
        You can assume that there will only be one closest value.
        Each BST node has an integer value, a left child node, and a right child node. 
        A node is said to be a valid BST node if and only if it satisfies the BST property: 
                1) its value is strictly greater than the values of every node to its left; 
                2) its value is less than or equal to the values of every node to its right; 
                3) its children nodes are either valid  BST nodes themselves or None / null.

        Input:
                tree =     10
                        /     \
                       5      15
                     /   \   /   \
                    2     5 13   22
                  /           \
                 1            14
                
                target = 12
        
        Output:
                13
"""


def findClosestValueInBst(tree, target):
        currentNode = tree
        closest = tree
        while currentNode:
                if abs( target - closest.value ) > abs( target - currentNode.value ):
                        closest = currentNode
                if target < currentNode.value:
                        currentNode = currentNode.left
                elif target > currentNode.value:
                        currentNode = currentNode.right
                else:
                        currentNode = None
        return closest.value


# This is the class of the input tree. Do not edit.
class BST:
        def __init__(self, value):
                self.value = value
                self.left = None
                self.right = None
