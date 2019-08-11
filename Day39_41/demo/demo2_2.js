var btn_a = document.getElementById('a'),
    btn_b = document.getElementById('b'),
    btn_c = document.getElementById('c'),
    btn_d = document.getElementById('d'),
    btn_e = document.getElementById('e'),
    btn_f = document.getElementById('f');

var content1 = document.getElementById("contABC");
var content2 = document.getElementById("contDEF");

var url = location.href
var index = url.indexOf('#');
if(index == -1) {
    history.replaceState(null,null,url+'#A&D');
}
index = location.href.indexOf('#');
var public = url.slice(0,index)+'#';


/*
function 解析Hash，获取状态参数() {
    取到需要的值，并返回
}
*/
function getHash() {
    return window.location.hash.slice(1).split('&');
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
    hash[0] = ele.innerText;
    history.pushState('', null, public + hash.join('&'));  
}

function setCont2(ele) {
    var hash = location.hash.slice(1).split('&');
    hash[1] = ele.innerText;
    history.pushState('',null, public + hash.join('&'));
}

/*
按钮点击事件 = function() {
    设置新的hash
}
*/
btn_a.onclick= function () {
    setCont1(this);
    render();
}
btn_b.onclick= function () {
    setCont1(this);
    render();
}
btn_c.onclick= function () {
    setCont1(this);
    render();
}
btn_d.onclick= function () {
    setCont2(this);
    render();
}
btn_e.onclick= function () {
    setCont2(this);
    render();
}
btn_f.onclick= function () {
    setCont2(this);
    render();
}

//进来先执行一次渲染函数()
render();

