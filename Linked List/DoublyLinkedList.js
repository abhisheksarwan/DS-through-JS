    class node {
        constructor(val) {
            this.value = val;
            this.next = null;
            this.prev = null;
        }
    }

    class doublyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        //push method 
        push(val) {
            var newNode = new node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }

        //pop method
        pop() {
            if (!this.tail) {
                console.log("There's nothing to remove!");
                return undefined;
            }
            var poppedNode = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = poppedNode.prev;
                this.tail.next = null;
                poppedNode.prev = null;
            }
            this.length--;
            return poppedNode;
        }

        //shift method
        shift(){
            if(!this.head){
                console.log("There's nothing to remove!");
                return undefined;
            }
            var oldHead = this.head;
            if(this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else{
                this.head = oldHead.next;
                this.head.prev = null;
                oldHead.next = null;
            }
            this.length--;
            return oldHead;
            }

            //unshift
            unshift(val){
                var newNode = new node(val);
                if(!this.head) {
                    this.head = newNode;
                    this.tail = this.head;
                }
                else {
                    var oldHead = this.head;
                    this.head = newNode;
                    this.head.next = oldHead;
                    oldHead.prev = this.head;
                }
                this.length++;
                return this;
            }

            //traverse
            traverse(){
                var arr = [];
                var i = 0;
                var current = this.head;
                while(current){
                    arr[i] = current.value;
                    current = current.next;
                    i++
                }
                console.log(arr);
            }

            //get
            get(index){
                if(index >= this.length || index < 0) {
                    console.log("Nice Try!");
                    return undefined;
                }
                var count = 0;
                var current = null;

                if(index <= Math.floor((this.length)/2)) {
                current = this.head;
                while(count!= index){
                    current = current.next;
                    count++;
                } }

                else{
                count = this.length - 1;
                current = this.tail;
                while(count!= index){
                    current = current.prev;
                    count--;
                }}
                return current;
            }

            //set
            set(index, val){
                if(index >= this.length || index < 0) {
                    console.log("Nice Try!");
                    return undefined;
                }
                var count = 0;
                var current = null;

                if(index <= Math.floor((this.length)/2)) {
                current = this.head;
                while(count!= index){
                    current = current.next;
                    count++;
                } }

                else{
                current = this.tail;
                count = this.length - 1;
                while(count!= index){
                    current = current.prev;
                    count++;
                }}
                current.value = val;
                return current;
    }

        //insert
         insert(index, val){
             if(index < 0 || index > this.length){
                 console.log("Nice Try!");
                 return undefined;
             }

            if( index === this.length) return this.push(val); 
            if( index === 0 ) return this.unshift(val);

             var newNode = new node(val);
             var prevNode = this.get(index - 1);
             var temp = prevNode.next;
             prevNode.next = newNode;
             newNode.next = temp;
             newNode.prev = prevNode;
             this.length++
             return this.traverse();

        }

        //remove
        remove(index){
            if(index < 0 || index >= this.length){
                console.log("Nice Try!");
                return undefined;
            }
            if( index === 0 ) return this.shift();
            if(index === this.length - 1) return this.pop();
            
            var prevNode = this.get(index - 1);
            var removed = prevNode.next;
            prevNode.next = removed.next;
            removed.next.prev = prevNode;
            this.length--;
            return this.traverse();

       }

       reverse(){
           if(!this.head){
               console.log("There's nothing to reverse!");
               return false;
           }
           var temp = this.head;
           this.head = this.tail;
           this.tail = temp;

           var prev = null;
           var next = null;
           for(let i=0; i<this.length; i++){
               next = temp.next;
               temp.next = prev;
               temp.prev = next;
               prev = temp;
               temp = next;
            }
            return this.traverse();
       }

}
    

    var DLL = new doublyLinkedList();
