var number1 = document.getElementById("num-a");
var number2 = document.getElementById("num-b");
let radio1 = document.getElementById("radio-a");
var radio2 = document.getElementById("radio-b");
var btnArea = document.getElementById("btn-area");
var btn = document.querySelectorAll("button");
var result = document.getElementById("result");

for(i=0;i<btn.length;i++){
    btn[i].flag=i;
}
function isNum(number){
    if(isNaN(number)==true){
        console.log("输入的内容不是数字")
    } else {
        return true;
    }
}

btnArea.onclick = function(e) {
    var e = e || window.e;
    var t = e.target || e.srcElement;  
    var n1 = number1.value;
    var n2 = number2.value;
    var input;
    if(radio1.checked == true) {
        input = n1;
    }else if(radio2.checked == true) {
        input = n2;
    }
    if(t.tagName == "BUTTON"){
        switch(t.flag)
        {
            case 0:
                if(isNum(n1) && isNum(n2)){
                    result.innerHTML = "输入内容为数字";
                }
                break;
            case 1:
                if(isNum(n1) && isNum(n2)){
                    var res = Number(n1).toFixed(Number(n2));
                    result.innerHTML = res;
                }
                break;
            case 2:
                if(isNum(input)) {
                    result.innerHTML = Math.abs(Number(input));
                }
                break;
            case 3:
                if(isNum(input)) {
                    result.innerHTML = Math.ceil(Number(input));
                }
                break;
            case 4:
                if(isNum(input)){
                    result.innerHTML = Math.floor(Number(input));
                }
                break;
            case 5:
                if(isNum(input)){
                    result.innerHTML = Math.round(Number(input));
                }
                break;
            case 6:
                if(isNum(n1) && isNum(n2)){
                    var res = Math.max(Number(n1),Number(n2));
                    result.innerHTML = res;
                }
                break;
            case 7:
                if(isNum(n1) && isNum(n2)){
                    var res = Math.min(Number(n1),Number(n2));
                    result.innerHTML = res;
                }
                break;
        }
    }
}
    






