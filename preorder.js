const tree = {
    data: 10,
    left: {
        data: 5
    },
    right: {
        data: 6
    }
}

const preOrder = (root) => {
    if(!root) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}


preOrder(tree);

