// A singly linked list's node has two things : 1) value 2) next pointer


//code for creating a new node
class node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

//code for creatinng a singlyLinkedList

class singlyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //code For Push starts

    push(val){
        var newNode = new node(val);

        //if there is no head
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } 

        //if there's already a head
        
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    } //push function ends

    //traverse function starts

    traverse ()
    {
        let current = this.head;
        while(current)
        {
            console.log(current.value);
            current = current.next;
        }
        
    } //traverse ends here

    //pop function starts

    pop(){
        if(!this.head) { return "NO";}
        var current = this.head;
        var newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) { this.head = null; this.tail = null; } //if only last node was there
        return current;
    } //pop function ends

    //shift function starts //delete from start
    shift(){
        if(!this.head) {return "NO";}
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) { this.head = null; this.tail = null; } //if only last node was there
        return this;
    } //shift function ends

    //unshift function starts
    unshift(val){
        var newNode = new node(val);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            var oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            this.length++;
            return this;
        }
    } //unshift function ends

    //get function starts
    get(index) {
        if(index < 0 || index >= this.length) {return "Nice Try";}
        var current = this.head;
        var count = 0;
        while(count != index)
        {
            current = current.next;
            count++;
        }
        console.log(current.value);
        return current;
    } //get function ends

     //set function starts
    set(index, value) {
        if(index < 0 || index >= this.length) {return "Nice Try";}
        var current = this.head;
        var count = 0;
        while(count != index)
        {
            current = current.next;
            count++;
        }
        //current.value = value;
        console.log(current);
    } //set function ends

    //insert method starts
    insert(index, val){
        if(index < 0 || index > this.length) { return false; }
        if( index === this.length) return this.push(val); 
        if( index === 0 ) return this.unshift(val);
        var newNode = new node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    } //insert ends

    //remove starts
    remove(index){
        if(index < 0 || index > this.length) { return false; }
        if( index === this.length) return this.pop();
        if( index === 0 ) return this.shift(val);
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
     } //remove ends
     
     //reverse starts
     reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var prev = null;
        var next = null;

        for(var i=0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        this.traverse();
     }
}

var list = new singlyLinkedList();

/* ==================
        BIG OH
   ==================
   Insertion - O(1)
   Removal - It depends O(1) or O(N)
   Searching - O(N)
   Access - O(N)
*/    