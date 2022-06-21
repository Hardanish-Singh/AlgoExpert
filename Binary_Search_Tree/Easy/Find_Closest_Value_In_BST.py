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
