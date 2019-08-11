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
    return location.href.split('?')[1];
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
    history.pushState('',null,location.href.split("?")[0] + '?' + ele.innerHTML);
}
/*
按钮点击事件 = function() {
    设置新的hash
}
*/
btn_a.onclick= function () {
    setCont(this);
    render();
}
btn_b.onclick= function () {
    setCont(this);
    render();
}
btn_c.onclick= function () {
    setCont(this);
    render();
}

//进来先执行一次渲染函数()
render();
