// PreOrder

// Process The root first



function InOrder(root) {
    // Traverse left subTree
    inOrder(root.left);
    // Process the node 
    console.log(root.data);
    // Traverse right subtree
    inOrder(root.right);
}


// Postorder Tree

function postOrder(root) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

// Level-order Traversal
function printLevelOrder(root) {
// for level = 1 to right(root);
printGivenLevel(root,level);
}

printGivenLevel(root,level) {
    if(root == null) return;
    if(root == 1){
    console.log();
    } else if(root > 1) {
    printLevelOrder(root.left,level -1);
    printLevelOrder(root.right,level -1);
    }
}

function printLevelOrder(root) {
    // create an empty queue q;
    // tempNode = root;

}

BFS  

    A
 B   C  
   D   E




--> Level Order --> A B C D E
--> preOrder --> A B D 
--> InOrder --> B 


10 7 4 6 13 11 15 
4 6 7 10 11 13 15
6 4 7 11 15 13 10

