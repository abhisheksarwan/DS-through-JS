var queue = [];

var index = 0;

function enqueue(val){
    queue[index] = val;
    index++;
}

function dequeue(){
    if(queue.length === 0){ console.log("Nothing to remove!");}
    else{
    console.log("The element popped is " + queue[0]);
    for(let i=0; i<queue.length; i++){
        queue[i] = queue[i+1];
    }
    queue.length--;
    index--;
}
}

function print(){
    console.log(queue);
}

