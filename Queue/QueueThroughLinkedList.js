class node{
    constructor(val){
        this.value = val;
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
    enqueue(val){

        var newNode = new node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
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