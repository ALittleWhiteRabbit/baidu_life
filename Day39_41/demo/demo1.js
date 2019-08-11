var btn_a = document.getElementById("a");
var btn_b = document.getElementById("b");
var btn_c = document.getElementById("c");
var content = document.getElementById("cont");

/*
function 解析Hash，获取状态参数() {
    取到需要的值，并返回
}
*/
function getHash() {
    return location.hash.slice(1);
}

/*function 渲染函数() {
    内容 = 解析Hash，获取状态参数()
    cont的innerHTML = 内容
}
*/
function render() {
    value = getHash();
    content.innerHTML = value;
}

//设置新的hash
function setCont(ele) {
    location.hash = ele.innerHTML;
}
/*
按钮点击事件 = function() {
    设置新的hash
}
*/
btn_a.onclick= function () {
    setCont(this);
}
btn_b.onclick= function () {
    setCont(this);
}
btn_c.onclick= function () {
    setCont(this);
}

//window.onhashchange = 渲染函数
window.onhashchange = render;

//进来先执行一次渲染函数()
render();