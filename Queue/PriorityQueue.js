class node{
    constructor(val, p){
        this.value = val;
        this.priority = p;
        this.next = null;
    }
}

class queue{

    constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    }

    //enqueue
    enqueue(val, p){

        var newNode = new node(val, p);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }
        else {

            if(this.first.priority > newNode.priority){
                newNode.next = this.first;
                this.first = newNode;
            }
            else{
                let current = this.first;
                while(current.next !== null && current.next.priority <= newNode.priority){
                    current = current.next;
                }
                var temp = current.next;
                current.next = newNode;
                newNode.next = temp;
                if(newNode.next === null){
                    this.last = newNode;
                }
            }
        }
        this.size++
     }

     //dequeue
     dequeue(){
        if(!this.first) {console.log("There's nothing to remove!");}
        else{
            console.log("The element removed is "  + this.first.value);
            this.first = this.first.next;
            this.size--;
            if(this.size===0){
                this.first = null;
                this.last = null;
            }

        }
     }

     //print
     print(){
         var current = this.first;
         while(current){
             console.log(current.value);
             current = current.next;
         }
     }
}

var Q = new queue();