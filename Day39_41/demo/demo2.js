var btn_a = document.getElementById('a'),
    btn_b = document.getElementById('b'),
    btn_c = document.getElementById('c'),
    btn_d = document.getElementById('d'),
    btn_e = document.getElementById('e'),
    btn_f = document.getElementById('f');

var content1 = document.getElementById("contABC");
var content2 = document.getElementById("contDEF");

/*
function 解析Hash，获取状态参数() {
    取到需要的值，并返回
}
*/
function getHash() {
    return location.hash.slice(1).split('&');
}

/*function 渲染函数() {
    内容 = 解析Hash，获取状态参数()
    cont的innerHTML = 内容
}
*/
function render() {
    value = getHash();
    content1.innerHTML = value[0];
    if(value.length >1) {
        content2.innerHTML = value[1];
    }
    
}

//设置新的hash
function setCont1(ele) {
    let hash = window.location.hash.slice(1).split('&');
    hash[0] = ele.innerText
    window.location.hash = hash.join('&');
}

function setCont2(ele) {
    let hash = window.location.hash.slice(1).split('&');
    hash[1] = ele.innerText
    window.location.hash = hash.join('&');
}

/*
按钮点击事件 = function() {
    设置新的hash
}
*/
btn_a.onclick= function () {
    setCont1(this);
}
btn_b.onclick= function () {
    setCont1(this);
}
btn_c.onclick= function () {
    setCont1(this);
}
btn_d.onclick= function () {
    setCont2(this);
}
btn_e.onclick= function () {
    setCont2(this);
}
btn_f.onclick= function () {
    setCont2(this);
}

//window.onhashchange = 渲染函数
window.onhashchange = render;

//进来先执行一次渲染函数()
render();
