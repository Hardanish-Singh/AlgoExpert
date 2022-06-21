# This is an input class. Do not edit.
class BST:
        def __init__(self, value):
                self.value = value
                self.left = None
                self.right = None


def checkIsValidBST( root, leftParentNodeValue, rightParentNodeValue ):
        if root is None:
                return None
        if root.val >= leftParentNodeValue:
                return False
        if root.val <= rightParentNodeValue:
                return False

        left = checkIsValidBST( root.left, root.val, rightParentNodeValue )
        right = checkIsValidBST( root.right, leftParentNodeValue, root.val )
        
        if left and right:
                return True
        else:
                return False

def validateBst(root):
        return checkIsValidBST( root, -float("inf"), float("inf") )