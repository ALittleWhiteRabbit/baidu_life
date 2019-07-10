var t1 = document.getElementById("str-a");
var t2 = document.getElementById("str-b");
var number1 = document.getElementById("num-a");
var number2 = document.getElementById("num-b");
let radio1 = document.getElementById("radio-a");
var radio2 = document.getElementById("radio-b");
var btnArea = document.getElementById("btn-area");
var btn = document.querySelectorAll("button");
var result = document.getElementById("result");

for(i=0;i<btn.length;i++) {
    btn[i].flag = i;
}

btnArea.onclick = function(e) {
    var e = e || window.e;
    var t = e.target || e.srcElement;
    var text1 = t1.value;
    var text2 = t2.value;
    var n1 = Number(number1.value);
    var n2 = Number(number2.value);
    var text;
    if(radio1.checked == true) {
        text = text1;
        text_another = text2;
    } else if (radio2.checked == true) {
        text = text2;
        text_another = text1;
    }
    switch(t.flag) {
        case 0:
            result.innerHTML = text.length;
        break;
        case 1:
            result.innerHTML = text.charAt(2);
        break;
        case 2:
            result.innerHTML = text1.concat(text2);
        break;
        case 3:
            result.innerHTML = text1.indexOf(text2);
        break;
        case 4:
            result.innerHTML = text1.lastIndexOf(text2);
        break;
        case 5:
            if(n2<text.length && n2>=n1) {
                result.innerHTML = text.slice(n1,n2);
            }
            else {
                console.log("出错啦");
            }
        break;
        case 6:
            result.innerHTML = Math.floor(text.length/21 + 1);
        break;
        case 7:
            if(n2<text.length && n2>=n1) {
                result.innerHTML = text.substr(n1,n2);
            }
            else {
                console.log("出错啦");
            }
        break;
        case 8:
            result.innerHTML = text.toLocaleUpperCase();
        break;
        case 9:
            result.innerHTML = text.toLocaleLowerCase();
        break;
        case 10:
            //result.innerHTML = text.replace(/ /g,'');
            result.innerHTML = text.replace(/\s/g,'');
        break;
        case 11:
            result.innerHTML = text.replace(/a/g,text_another);
        break;
    }
}

/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";

    var i = 0;
    var r = str.length-1;
    while(i<r && (str[i]==' ' ||str[i]=='　')) i++;
    while (r>0 && (str[r]==' ' ||str[r]=='　')) r--;

    result = str.slice(i,r+1);
    return result;

}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    for(i=0;i<str.length;i++) {

        if(str[i]!=str[i-1]) {
            result += str[i];
        }
    }

    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc