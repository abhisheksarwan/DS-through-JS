var stack = [];

var index = 0;
var length = 0;

function push(val){
    stack[index] = val;
    length++;
    index++;
}

function pop(){
    if(index === 0 ) {console.log("No elements to pop!");}
    stack.length--;
    index--;
}

function print(){
    console.log(stack);
}