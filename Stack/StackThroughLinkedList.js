class node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //push method
    push(val){
        var newElement = new node(val);
        if(!this.first){
            this.first = newElement;
            this.last = this.first;
            this.size++;
        } else {
            var temp = this.first;
            this.first = newElement;
            this.first.next = temp;
            this.size++;
        }
}

    //pop method
    pop(){
        if(!this.first){
            console.log("Nothing to pop!");
        } else {
            this.first = this.first.next;
            this.size--;
            if(this.size === 0){
                this.first = null;
                this.last = null;
            }
        }
    }

    //print
    print(){
        //console.log(stack);
        var current = this.first;
        while(current){
            console.log(current.value)
            current = current.next;
        }
    }
}

var stack = new Stack();