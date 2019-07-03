var but = document.getElementsByClassName("btn");
var fn = document.getElementById("first-number");
var sn = document.getElementById("second-number");
var result = document.getElementById("result");
for(i=0;i<but.length;i++){
    but[i].onclick = function() {
        var n1 = Number(fn.value);
        var n2 = Number(sn.value);
        if (isNaN(n1)=='false' && isNaN(n2)=='false'){
            console.error("错误")
        }else {
            switch(this.id){
                case 'add-btn':
                    var rs=n1+n2;
                    break;
                case 'minus-btn':
                    var rs=n1-n2;
                    break;
                case 'times-btn':
                    var rs=n1*n2;
                    break;
                case 'divide-btn':
                    if(n2!=0){
                        var rs=n1/n2;
                    }
                    else console.error("错误");               
            }
            result.innerHTML="运算结果为:"+rs;
    }
}
}

