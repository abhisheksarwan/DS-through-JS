class node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right  = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    //insert
    insert(val){
        var newNode = new node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(current.value === val) {return undefined;}
            if(current.value > val){

                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                else{
                    current = current.left;
                }
            }

             else{

                 if(!current.right){
                     current.right = newNode;
                     return this;
                 }
                 else{
                     current = current.right;
                 } 
            }
        }
    }

    //remove
    remove(value){

     function removeNode(node, value){
         if(node === null){
             return null;
         }
         //if node has no child
         if(value === node.value){
             if(node.left === null && node.right === null){
                 return null;
             }
         //if node has only right child    
         if(node.left === null){
             return node.right;
         }
         //if node has only left child
         if(node.right === null){
             return node.left;
         }
         //if node has both child
         var tempNode = node.right;
         while(tempNode.left !== null){
             tempNode = tempNode.left
         }
         node.value = tempNode.value;
         node.right = removeNode(node.right, tempNode.value);
         return node;
         }
         //if value still isn't found
         else if( value < node.value){
             node.left = removeNode(node.left, value);
             return node;
         }
         else{
             node.right = removeNode(node.right, value);
             return node;
         }
        }
        this.root = removeNode(this.root, value);
} 

    //find
    find(val){
        if(!this.root){
            return false;
        }
        var current = this.root;
        var found = false;
        while(current && !found){
            if(current.value > val){
                 current = current.left;
            }
            else if(current.value < val){
                current = current.right;
                }
            else{
                found = true;
                return true;
            }
        }
        return false;
    }

    //BFS
    BFS(){
        if(!this.root) return false;
        var node = this.root;
        var queue = [];
        var treeData = [];

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            treeData.push(node.value);
            if(node.left) {queue.push(node.left)}
            if(node.right) {queue.push(node.right)}
        }
        return treeData;
    }

    //DFS PreOrder
    DFSPre(){
        var treeData = [];
        var node = this.root;

        function traverse(node){
            treeData.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return treeData;
    }

    //DFS PreOrder-Iterative
    DFSPreI(){
        var treeData = [];
        var stack = [];
        var node = this.root;

        stack.push(node);

        while(stack.length) {
            node = stack.pop();
            treeData.push(node.value);
            if(node.right) {stack.push(node.right)}
            if(node.left) {stack.push(node.left);}
        }
        
        
        return treeData;
    }


    //DFS PostOrder
    DFSPost(){
        var treeData = [];
        var node = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            treeData.push(node.value);
        }
        traverse(node);
        return treeData;
    }

    DFSPostI(){
        var treeData = [];
        var stack = [];
        var node = this.root;

        stack.push(node);

        while(stack.length) {
            node = stack.pop();
            treeData.push(node.value)
            if(node.left) {stack.push(node.left);}
            if(node.right) {stack.push(node.right);}
}
        return treeData.reverse();
    }

    //DFS InOrder.
    DFSIn(){
        var treeData = [];
        var node = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            treeData.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return treeData;
    }

    DFSInI(){
        var stack = [];
        var treeData =[];
        var current = this.root;

        while(stack.length || current != null){
            while(current != null){
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            treeData.push(current.value);
            current = current.right;
}
        return treeData;

    }



}

var bst = new BST();

bst.insert(10);
bst.insert(9);
bst.insert(100);
bst.insert(8);
