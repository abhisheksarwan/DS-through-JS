class MaxHeap {
    constructor(){
        this.values = [41,39,33,18,27,12];
    }

    //insert
    insert(value){
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp(){
        let id = this.values.length - 1;
        const element = this.values[id];

        while(id > 0){
            let parentID = Math.floor((id - 1)/2);
            let parent = this.values[parentID];
            if(element <= parent) break;
                this.values[parentID] = element;
                this.values[id] = parent;
                id = parentID;
        }
    }

    //extractMAX
    extractMax(){
        let max = this.values[0]
        let element = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = element;
            this.bubbleDown();
        }
        if(!max){
            return false;
        }
        return max;
        
    }

    bubbleDown(){
        let idx = 0;
        let length = this.values.length;
        const element = this.values[0];
        
        while(true){

        let swap = null;
        let rightChildIdx = 2 * idx + 2;
        let leftChildIdx = 2 * idx + 1;
        let leftChild, rightChild;

        if(leftChildIdx < length){
            leftChild = this.values[leftChildIdx];
            if(leftChild > element){
                swap = leftChildIdx;
            }
        }

        if(rightChildIdx < length){
            rightChild = this.values[rightChildIdx];
            if((swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild))
            {
                swap = rightChildIdx;
            }
        }
        if(swap === null) break;

        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
     }
    }
}

let heap = new MaxHeap();


