var input = document.getElementById("stack-input");
var result = document.getElementById("stack-cont");

var btn1 = document.getElementById("push-btn");
var btn2 = document.getElementById("pop-btn");
var btn3 = document.getElementById("font-btn2");
var btn4 = document.getElementById("empty-btn2");

var stack = ["apple", "pear"];

btn1.addEventListener("click",myChangeIn);
btn2.addEventListener("click",myChangeOut);
btn3.addEventListener("click",myFont);
btn4.addEventListener("click",myEmpty);

function myChangeIn(value) {
    value = input.value;
    //stack.push(value);
    stack.unshift(value);
    //result.innerHTML = "栈内容："+ stack.join("-&gt");
    result.innerHTML = "栈内容："+ stack.join("&lt-");
    input.value = '';
}

function myChangeOut() {
    //stack.pop();
    stack.shift();
    //result.innerHTML = "栈内容："+ stack.join("-&gt");
    result.innerHTML = "栈内容："+ stack.join("&lt-");
}

function myFont() {
    //var n = stack.length-1;
    var n=0;
    result.innerHTML = "栈顶元素内容："+ stack[n];
}

function myEmpty() {
    if(stack.length == 0) {
        result.innerHTML = "栈内容为空";
    } else {
        //result.innerHTML = "栈内容："+ stack.join("-&gt");
        result.innerHTML = "栈内容："+ queue.join("&lt-");
    }
}