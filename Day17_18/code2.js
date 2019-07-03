var dn = document.getElementById("dec-number");
var bin = document.getElementById("bin-bit");
var trans = document.getElementById("trans-btn");
var result2 = document.getElementById("result2");
function dec2bin(decNumber) {
    // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
    var arr=[];
    if(parseInt(decNumber) == parseFloat(decNumber) && Number(decNumber)>0) {
        while(decNumber>0){
            var remainder = decNumber%2;
            decNumber = Math.floor(decNumber/2);
            arr.push(remainder);
        }
        var bit = Number(bin.value);
        var len = arr.length;
        if(bit<len){
            console.error("输入的位数小于二进制本身位数");
        } else {
            for(i = 0;i<bit-len;i++) {
                arr.push(0);
            }
        }
        var arr2 = arr.reverse();
        var string1 = arr2.join();
        var res = string1.replace(/,/g,'');
        /* var res = arr2.join(''); */
        result2.innerHTML = "运算结果为："+res;
    } else {
        console.error("输入的数字不是正整数");
    }
}
trans.onclick = function () {
    var dec = Number(dn.value);
    dec2bin(dec);
}
