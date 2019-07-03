/*
console.log("3的小游戏");
for(i=1;i<=100;i++) {
    var patt = /3/;
    var tes = patt.test(i);
    if(i%3==0 || tes == true){
        console.log("PA");
    }
    else {
        console.log(i);
    }
}*/

var arr=[];
function is3(n) {
    return n%3 == 0 || n.toString().indexOf(3)!=-1;
}
for(i=1;i<101;i++) {
    if(is3(i)) {
        arr.push("PA");
    } else {
        arr.push(i);
    }
}
console.log("3的小游戏");
console.log(arr.toString());