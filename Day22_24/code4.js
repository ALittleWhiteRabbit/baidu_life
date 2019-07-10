var input = document.getElementById("queue-input");
var result = document.getElementById("queue-cont");

var btn1 = document.getElementById("in-btn");
var btn2 = document.getElementById("out-btn");
var btn3 = document.getElementById("font-btn");
var btn4 = document.getElementById("empty-btn");

var queue = ["apple", "pear"];

btn1.addEventListener("click",myChangeIn);
btn2.addEventListener("click",myChangeOut);
btn3.addEventListener("click",myFont);
btn4.addEventListener("click",myEmpty);

function myChangeIn(value) {
    value = input.value;
    //queue.unshift(value);
    queue.push(value);
    //result.innerHTML = "队列内容："+ queue.join("-&gt");
    result.innerHTML = "队列内容："+ queue.join("&lt-");
    input.value = '';
}

function myChangeOut() {
    //queue.pop();
    queue.shift();
    //result.innerHTML = "队列内容："+ queue.join("-&gt");
    result.innerHTML = "队列内容："+ queue.join("&lt-");
}

function myFont() {
    //var n = queue.length-1;
    var n=0;
    result.innerHTML = "队头元素内容："+ queue[n];
}

function myEmpty() {
    if(queue.length == 0) {
        result.innerHTML = "队列内容为空";
    } else {
        //result.innerHTML = "队列内容："+ queue.join("-&gt");
        result.innerHTML = "队列内容："+ queue.join("&lt-");
    }
}